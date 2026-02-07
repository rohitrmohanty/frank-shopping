export const config = {
  // White-label configuration
  appTitle: process.env.NEXT_PUBLIC_APP_TITLE || 'Supermarket AI',
  appDescription: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Your AI companion for Shopping',
  appPlaceholder: process.env.NEXT_PUBLIC_APP_PLACEHOLDER || 'Ask me about getting your shopping...',
  appBgColor: process.env.NEXT_PUBLIC_APP_BG_COLOR || '#FFFFFF',
  appPrimaryColor: process.env.NEXT_PUBLIC_APP_PRIMARY_COLOR || '#933256',

  // API configuration
  agentApiUrl: process.env.NEXT_PUBLIC_AGENT_API_URL || 'http://localhost:4111/chat/AGENT',

  // Debug / developer options
  showToolsOutput: process.env.NEXT_PUBLIC_SHOW_TOOLS_OUTPUT === 'true',
} as const;