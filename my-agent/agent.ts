import { FunctionTool, LlmAgent } from "@google/adk";
import { ApifyClient } from "apify-client";
import { z } from "zod";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const searchTesco = new FunctionTool({
  name: "search_tesco",
  description: "Searches real Tesco inventory for product prices.",
  parameters: z.object({
    item: z
      .string()
      .describe("The grocery item to find (e.g., 'chicken breast')."),
  }),
  execute: async ({ item }) => {
    // This calls your specific Lidl Actor
    const run = await client.actor("pVHUOwMvyGUgT9Qff").call({
      searchQueries: [item],
      maxItems: 1, // Keep it to 1 for hackathon speed
    });

    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    if (items.length === 0)
      return { status: "error", report: `No ${item} found.` };

    return {
      status: "success",
      product: items[0].title,
      price: items[0].price,
    };
  },
});

export const rootAgent = new LlmAgent({
  name: "Frank",
  model: "gemini-2.5-flash",
  instruction: `You are a Tesco Ireland shopping assistant.
    1. When a user asks for a dish, identify the ingredients.
    2. Use the 'search_tesco' tool with the term.
    3. Report the findings to the user.`,
  tools: [searchTesco],
});
