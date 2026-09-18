---
type: Fact
title: # Claude API Integration via Curl

source: claude
session_id: 562eeaa4-4ea6-4481
description: # Claude API Integration via Curl

source: claude
session_id: 562eeaa4-4ea6-4481-891c-c233d90c7e2a
resource: claude://conversation/562eeaa4-4ea6-4481-891c-c233d90c7e2a

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mtj6ca6p_43c6cbfe0f81
tags: ["okf", "okf-claude", "claude", "claude://conversation/562eeaa4-4ea6-4481-891c-c233d90c7e2a"]
timestamp: 2026-09-01T21:23:25.864Z
source: agentmemory
strength: 7
---
# Content

# Claude API Integration via Curl

source: claude
session_id: 562eeaa4-4ea6-4481-891c-c233d90c7e2a
resource: claude://conversation/562eeaa4-4ea6-4481-891c-c233d90c7e2a

# Conversation

- **Session ID:** `562eeaa4-4ea6-4481-891c-c233d90c7e2a`
- **Source:** claude
- **Started:** 2025-06-25T11:16:22Z
- **Messages:** 2

---

### 👤 User — 2025-06-25T11:16:23Z

How can I create a url or something to send to Claude as a prompt bypassing the need to first paste into the desktop app. Possibly using curl?

---

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

---
