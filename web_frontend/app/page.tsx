import { config } from "@/lib/config";
import ChatBotDemo from "./components/ai-chat";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "flex items-center justify-center h-screen font-sans dark:bg-black"
      )}
      style={{ backgroundColor: config.appPrimaryColor }}
    >
      <div className="bg-zinc-50 flex flex-row w-170 my-10 rounded-lg">
        <ChatBotDemo />
      </div>
    </main>
  );
}
