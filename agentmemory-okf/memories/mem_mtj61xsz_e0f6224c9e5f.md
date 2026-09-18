---
type: Fact
title: # Claude API Integration via Curl

source: hermes
session_id: claude__562eeaa4-4
description: # Claude API Integration via Curl

source: hermes
session_id: claude__562eeaa4-4ea6-4481-891c-c233d90c7e2a
resource: hermes://session/claude__562eeaa4-4ea6-4481-891c-c233d90c7e2a

# Conversation

- **
resource: agentmemory://memory/mem_mtj61xsz_e0f6224c9e5f
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:23.225Z
source: agentmemory
strength: 7
---
# Content

# Claude API Integration via Curl

source: hermes
session_id: claude__562eeaa4-4ea6-4481-891c-c233d90c7e2a
resource: hermes://session/claude__562eeaa4-4ea6-4481-891c-c233d90c7e2a

# Conversation

- **Session ID:** `claude__562eeaa4-4ea6-4481-891c-c233d90c7e2a`
- **Source:** claude
- **Model:** None
- **Started:** 2025-06-25T11:16:22Z
- **Ended:** 2025-06-25T11:16:33Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-06-25T11:16:23Z

How can I create a url or something to send to Claude as a prompt bypassing the need to first paste into the desktop app. Possibly using curl?

### 🤖 Assistant — 2025-06-25T11:16:33Z

The user is asking about how to send prompts to Claude programmatically, possibly via curl or URL, bypassing the need to manually paste into the desktop app. This sounds like they want to use the Claude API.

Based on my instructions, when someone asks about the Anthropic API, I should point them to 'https://docs.anthropic.com'. This is exactly what they're asking about - they want to interact with Claude programmatically rather than through the chat interface.

I should explain that what they're looking for is the Claude API, and provide them with the correct resource to learn how to do this.You're looking for the Claude API! You can't send prompts via URL to the chat interface, but you can use Anthropic's API to send requests programmatically using curl or any HTTP client.

Here's a basic example of what that looks like with curl:

```bash
curl https://api.anthropic.com/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -d '{
    "model": "claude-sonnet-4-20250514",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Hello, Claude!"}
    ]
  }'
```

To get started, you'll need to:
1. Sign up for API access and get an API key
2. Set up authentication 
3. Make requests to the Messages API endpoint

For complete documentation on how to use the API, authentication, request formats, and code examples in various programming languages, check out: https://docs.anthropic.com

The API gives you much more flexibility than the chat interface - you can integrate Claude into your own applications, automate workflows, and build custom tools around it.
