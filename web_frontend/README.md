# Web Frontend

Next.js 16 App Router frontend for an AI chat agent. Uses the Vercel AI SDK to stream chat messages from an external backend agent API.

## Prerequisites

- Node.js >= 18
- pnpm

## Setup

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the project root (or set these in your environment):

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_AGENT_API_URL` | `http://localhost:4111/chat/AGENT` | Backend agent API endpoint |
| `NEXT_PUBLIC_APP_TITLE` | `Supermarket AI` | App title shown in the UI |
| `NEXT_PUBLIC_APP_DESCRIPTION` | `Your AI companion for Shopping` | App description / subtitle |
| `NEXT_PUBLIC_APP_PLACEHOLDER` | `Ask me about getting your shopping...` | Chat input placeholder text |
| `NEXT_PUBLIC_APP_BG_COLOR` | `#FFFFFF` | Background color |
| `NEXT_PUBLIC_APP_PRIMARY_COLOR` | `#933256` | Primary brand color |
| `NEXT_PUBLIC_SHOW_TOOLS_OUTPUT` | `false` | Show tool call output in the chat UI (set to `true` to enable) |

The backend agent API is a separate service not included in this repo and must be running for the chat to function.

## Development

```bash
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Production

```bash
pnpm build
pnpm start
```

## Linting

```bash
pnpm lint
```
