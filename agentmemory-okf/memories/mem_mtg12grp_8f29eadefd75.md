---
type: Fact
title: # Identify 2 unread sessions in hermes desktop

source: hermes
session_id: 20260
description: # Identify 2 unread sessions in hermes desktop

source: hermes
session_id: 20260823_031146_0af93d
resource: hermes://session/20260823_031146_0af93d

# Conversation

- **Session ID:** `20260823_031146_
resource: agentmemory://memory/mem_mtg12grp_8f29eadefd75
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:31.254Z
source: agentmemory
strength: 7
---
# Content

# Identify 2 unread sessions in hermes desktop

source: hermes
session_id: 20260823_031146_0af93d
resource: hermes://session/20260823_031146_0af93d

# Conversation

- **Session ID:** `20260823_031146_0af93d`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-23T08:11:46Z
- **Ended:** 2026-08-26T20:08:41Z
- **Messages:** 30
- **CWD:** `/Users/davec`
- **Tokens:** 87463 in / 5617 out

---

### 👤 User — 2026-08-23T08:11:46Z

The menu bar in hermes desktop shows 2 unread sessions. How am i supposed to know what those sessions are?

### 🤖 Assistant — 2026-08-23T08:11:56Z

<details><summary>Reasoning</summary>

The user is asking about the Hermes desktop app's menu bar showing 2 unread sessions, and how they're supposed to know what those sessions are. This is a question about Hermes Agent functionality. Let me check the hermes-agent skill and possibly the docs.

Let me think about what they're asking. The menu bar shows "2 unread sessions" — they want to know how to see what those sessions are. This is a UI/discovery question.

Let me load the hermes-agent skill to understand the feature, and maybe search. Actually, the question is more about the desktop app UI. Let me check the skill.

Let me load the hermes-agent skill.

Actually, this is a product/UX question. The user wants to know where to find/access these unread sessions. Let me look at the documentation. The menu bar (macOS status bar) shows unread sessions. To clear/see them, you'd open the Hermes desktop app and go to the sessions list.

Let me load the hermes-agent skill for accurate info.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: web_search**

```json
{
  "query": "Hermes Agent desktop menu bar unread sessions"
}
```

### 🤖 Assistant — 2026-08-23T08:12:06Z

<details><summary>Reasoning</summary>

The user is asking about the menu bar in Hermes Desktop showing "2 unread sessions" and how they're supposed to know what those sessions are. Let me look at the desktop docs to understand the menu bar / unread sessions feature.

Let me read the desktop docs.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/desktop",
    "https://hermes-agent.nousresearch.com/docs/user-guide/sessions"
  ]
}
```

### 🤖 Assistant — 2026-08-23T08:12:19Z

<details><summary>Reasoning</summary>

The web_extract failed because of backend config. Let me try browser_exec to fetch the docs, or just answer from what I know. Actually let me look at the desktop app itself — I have computer_use. The user is asking about the menu bar badge. Let me actually inspect the desktop app to give a grounded answer.

Actually, let me reconsider. The user asks "The menu bar in hermes desktop shows 2 unread sessions. How am i supposed to know what those sessions are?" This is a UX question. Let me look at the actual desktop UI to find where unread sessions are shown.

Let me use computer_use to capture the desktop app and find the session list. But the badge is in the macOS menu bar (top of screen). Let me capture the screen / menu bar area.

Actually, I should think about what "unread sessions" means in Hermes Desktop. Unread sessions likely come from the gateway (messaging platforms) — e.g., Telegram/Discord messages arriving as new sessions, or bot-chat. The menu bar badge counts sessions with unread messages. To see them, you'd open the Desktop app's session sidebar / Command Center.

Let me actually look at the running desktop app to give a precise, verified answer. Let me capture the screen.

Let me think about whether I can access the desktop. The user is on the Hermes desktop app. I can use computer_use to capture. But the "menu bar" with unread sessions — that's the macOS top menu bar showing the Hermes app icon with a badge "2". To know what those sessions are, the user clicks the icon or opens the session list.

Let me verify by inspecting the app. I'll capture the screen. Actually a more reliable approach: the unread count is likely shown in the Desktop's session sidebar too. Let me capture the desktop app win
