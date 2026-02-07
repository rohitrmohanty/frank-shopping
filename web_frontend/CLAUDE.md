# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint (flat config with Next.js core-web-vitals + typescript)
```

No test framework is configured yet.

## Architecture

This is a **Next.js 16 App Router** frontend for an AI chat agent. It uses the **Vercel AI SDK** (`@ai-sdk/react`, `ai`) to stream chat messages from an external backend agent API — it does **not** run its own AI inference.

### Backend Connection

The frontend connects to an external agent API (default: `http://localhost:4111/chat/ferryAgent`) configured via `NEXT_PUBLIC_AGENT_API_URL` in `lib/config.ts`. The `DefaultChatTransport` from the AI SDK handles streaming. The backend is a separate service (not in this repo).

### White-Label Configuration

`lib/config.ts` exports a `config` object with env-var-driven settings for branding (title, description, colors, placeholder text), API URL, and debug options (`NEXT_PUBLIC_SHOW_TOOLS_OUTPUT`). All UI text and colors reference this config rather than being hardcoded.

### Component Layers

- **`app/components/`** — Page-level chat components:
  - `ai-chat.tsx` — Main chat UI used by the home page (`ChatBotDemo`). Uses `useChat` with `DefaultChatTransport`, renders message parts (text, reasoning, sources, tool output), and handles tool-specific UI like ferry booking buttons.
  - `tool-display.tsx` — Collapsible tool output display and `FerryBookingButtons` for linking to ferry booking with parsed departures.

- **`components/ai-elements/`** — Reusable AI chat primitives (conversation, message, prompt-input, reasoning, sources, loader, attachments). These come from the AI SDK Elements registry (`@ai-elements` in `components.json`).

- **`components/ui/`** — shadcn/ui components (new-york style, Tailwind CSS v4 with CSS variables). Add new ones via `npx shadcn@latest add <component>`.

### Key Patterns

- Path alias: `@/*` maps to the project root.
- Styling: Tailwind CSS v4 via PostCSS. Global styles in `app/globals.css`.
- State: Chat state uses the `useChat` hook from AI SDK.
- Tool output rendering: Message parts with `type.startsWith("tool-")` are conditionally shown based on `config.showToolsOutput`. Ferry-related tool outputs get booking action buttons.
