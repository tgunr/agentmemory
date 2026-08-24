---
type: Fact
title: # How to send messages to the Hermes gateway

source: hermes
session_id: 2026061
description: # How to send messages to the Hermes gateway

source: hermes
session_id: 20260613_013304_95b182
resource: hermes://session/20260613_013304_95b182

# Conversation

- **Session ID:** `20260613_013304_95
resource: agentmemory://memory/mem_msp0caf6_b9a05767bdc6
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260613_013304_95b182"]
timestamp: 2026-08-11T18:42:23.294Z
source: agentmemory
strength: 7
---
# Content

# How to send messages to the Hermes gateway

source: hermes
session_id: 20260613_013304_95b182
resource: hermes://session/20260613_013304_95b182

# Conversation

- **Session ID:** `20260613_013304_95b182`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-13T06:33:04Z
- **Ended:** 2026-06-13T07:19:48Z
- **Messages:** 35
- **Tokens:** 1193557 in / 4129 out

---

### 👤 User — 2026-06-13T06:33:32Z

I'm running the gateway and I'm running Hermes in the terminal.I guess I don't understand. How do I send a message to Hermes? Do I use my own phone number?

[Your active task list was preserved across context compression]
- [>] debug-echo. debug-echo. Debug why iMessage shows repeated messages instead of responses (in_progress)

### 🤖 Assistant — 2026-06-13T06:33:32Z

<details><summary>Reasoning</summary>


The user is running both the gateway and Hermes in the terminal. The key issue is they're seeing their own message repeated, not a response. This could be because:

1. The agent isn't actually responding (maybe no LLM connection?)
2. There's double-posting happening
3. The response is being sent but BlueBubbles shows it oddly

Let me focus on explaining how the messaging flow works and how to debug this properly.


</details>

You've hit the core issue! Let me clarify how messaging works with Hermes + BlueBubbles:

## How to Send Messages to Hermes (BlueBubbles)

### **Correct Flow:**
1. **Start Hermes in the terminal** (this gives you a live agent session)
2. **Send a message from Messages** to any conversation (including yourself)
3. **Hermes receives it via webhook** and responds in the **same chat**

### **The Echo Problem:**
When you see your own text repeated, it means:
- Hermes is **NOT** sending the response
- BlueBubbles is just **echoing** what it received (normal behavior)

## Debug Steps:

```bash
# 1. Check what's happening in real-time
hermes gateway logs --follow

# 2. Send your test message from Messages
# "Hermes, what is the weather today?"

# 3. Watch the logs - do you see:
# - "Received webhook from BlueBubbles"?
# - "Processing message"?
# - "Sending response"?
```

## Common Issues:

1. **Model provider not configured** - Check your `.env` for `OPENAI_API_KEY` or other provider keys
2. **Hermes started without a model** - Make sure you started it with a valid model/provider
3. **BlueBubbles webhook pointing elsewhere** - Check BlueBubbles app webhook settings

## Quick Test:

Send a message to a **different person** (not yourself) - this will tell you if it's an echo issue or a real response issue!

### 👤 User — 2026-06-13T07:01:09Z

According to the logs, I never received a webhook from BlueBubbles. Nothing happens in the log when I send a message. I don't see anything in the blue bubbles app about webhooks.

### 🤖 Assistant — 2026-06-13T07:01:38Z

<details><summary>Reasoning</summary>


No webhook received! This is the core problem. The gateway might be registered but BlueBubbles isn't actually sending webhooks. Let me help debug this.


</details>

**Found the issue!** No webhook = no message delivery. Here's how to fix:

## Debugging Missing Webhooks

### 1. **Check BlueBubbles Webhook Settings**

In the BlueBubbles macOS app, look for:
- **Settings → Server → Webhooks** (or similar)
- Make sure webhook is enabled
- Check if it requires manual registration

### 2. **Verify Webhook Registration**

The gateway should auto-register, but let's check:
```bash
# See what webhooks BlueBubbles has registered
curl -s "http://10.1.2.7:1234/api/v1/webhook?password=YOUR_PASSWORD" | python -m json.tool
```

### 3. **Check Your Network Setup**

Your `.env` shows:
```
BLUEBUBBLES_SERVER_URL=http://10.1.2.7:1234
BLUEBUBBLES_PASSWORD=***
```

The gateway registers webhooks at:
```
http://10.1.2.7:1234/api/v1/webhook
```

But if your Mac is on a different network, `10.1.2.7` might be wrong. Try:
- **On your Mac**: Find BlueBubbles -> Preferences -> Server -> Address
- **Or use localhost**: `BLUEBUBBLES_SERVER_URL=http://localhost:1234` (if running locally)

### 4. **Test Webhook Manually**

```bash
# Test if the webhook endpoint is working
curl -X PO
