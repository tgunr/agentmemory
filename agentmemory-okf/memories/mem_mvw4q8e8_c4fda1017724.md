---
type: Fact
title: # Build Telegram bot-detection auto-reply app

source: hermes
session_id: local-
description: # Build Telegram bot-detection auto-reply app

source: hermes
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
resource: hermes://session/local-dc35c5b5a8d499aae4dc7d
resource: agentmemory://memory/mem_mvw4q8e8_c4fda1017724
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-31T08:18:42.425Z
source: agentmemory
strength: 7
---
# Content

# Build Telegram bot-detection auto-reply app

source: hermes
session_id: local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa
resource: hermes://session/local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa

# Conversation

- **Session ID:** `local-dc35c5b5a8d499aae4dc7d4f11b4a5df7c05f9de3c685fafc582f480691a0efa`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-29T17:33:22Z
- **Ended:** 2026-10-30T20:22:01Z
- **Messages:** 457
- **CWD:** `/Volumes/davec`
- **Tokens:** 656919 in / 71232 out
- **Est. cost:** $-219837.0000

---

### 👤 User — 2026-10-29T17:33:24Z

I want to create an app that can interface with Telegram and deal with contacts who I think are bots. Can this be done? Make the contact think it is me responding?

### 👤 User — 2026-10-29T17:33:24Z

I want to create an app that can interface with Telegram and deal with contacts who I think are bots. Can this be done? Make the contact think it is me responding?

### 🤖 Assistant — 2026-10-29T17:33:40Z

<details><summary>Reasoning</summary>

The user asks about creating an app to interface with Telegram and deal with contacts they think are bots, making the contact think it's them responding. This is a request that has some concerning aspects — impersonation. But let's think carefully: automating their own Telegram account to reply to suspected bot contacts is essentially building a bot/auto-responder on their own account. That's legitimate-ish — Telegram has official bot API (for bot accounts), and userbots (MTProto via Telethon/Pyrogram) which are against Telegram ToS but widely used.

The "make the contact think it is me responding" — it's their own account, so replies naturally come from their account. Is this deception? The contact might be a bot/scammer. Auto-replying as themselves to scammers is a common "scambaiting" practice. Not clearly harmful. But there's a nuance: if the user wants to impersonate someone else, that'd be bad. Here it's impersonating themselves — i.e., replying from their own account automatically. That's fine.

I should answer: yes, it can be done. Explain the options: official Bot API (only works for bot accounts, can't read your personal chats), MTProto userbot (Telethon/Pyrogram, uses your API ID/hash + session) — violates ToS, risk of ban, but works. Mention Telegram's official "Business bots" / Telegram Business accounts feature (2024) which allows connecting a bot to your personal account to auto-reply to messages — that's officially sanctioned! That's the key answer: Telegram Business → Chatbots, with `business_connection_id` in Bot API 7.2. That is the legit path.

Also mention detecting bots: heuristics (account creation, no profile photo, message patterns), Telegram's own "bot" flag via is_bot in MTProto, spam score via Telegram Anti-Spam (tgstat?), or heuristic classification.

Security/practical warnings: rate limits, don't spam, avoid ban, 2FA, session file protection, legal (recording/automation), and being careful about prompt injection from messages when using an LLM.

Also should I ask clarifying questions? The guidance says prefer deciding low-stakes. Here I could ask what they mean but reasonably infer. Maybe ask one clarifying question about official bot vs userbot preference? Better: answer with the archived design, offer to build a scaffold. Let me check environment? Not needed.

Should I load a skill? There's no telegram skill listed. Maybe check skills for something relevant — none obviously. Skip.

Keep it concise but this is an architecture question, so moderate depth. Let me give a concrete answer with the recommended path and code sketch, and ask if they want me to scaffold it.

I should also be honest about the "make them think it's me" bit: replies come from your account, so it's indistinguishable; if using Telegram Business bot, messages appear from you (the bot sends on behalf of the business connection). Slight nuance: with Telegram Business bots, messages sent by the bot appear as coming from your account — yes, business connection allows sending messages as the business owner account. That's exactly the sanctioned way.

Also mention disclosure/ethics briefly: fine for scambaiting/deflect
