---
type: Fact
title: # Hide iMessage and Telegram from side panel

source: hermes
session_id: 2026082
description: # Hide iMessage and Telegram from side panel

source: hermes
session_id: 20260824_131405_6c61c0
resource: hermes://session/20260824_131405_6c61c0

# Conversation

- **Session ID:** `20260824_131405_6c
resource: agentmemory://memory/mem_mtg12kvz_ae10e7a574d9
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260824_131405_6c61c0"]
timestamp: 2026-08-30T16:32:36.568Z
source: agentmemory
strength: 7
---
# Content

# Hide iMessage and Telegram from side panel

source: hermes
session_id: 20260824_131405_6c61c0
resource: hermes://session/20260824_131405_6c61c0

# Conversation

- **Session ID:** `20260824_131405_6c61c0`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-24T18:14:05Z
- **Ended:** 2026-08-25T00:28:47Z
- **Messages:** 94
- **Tokens:** 107718 in / 49839 out

---

### 👤 User — 2026-08-24T18:14:05Z

Why am Iseeing iMessage qand Telegram in the side panel, I disabled them

### 🤖 Assistant — 2026-08-24T18:14:16Z

<details><summary>Reasoning</summary>

The user is asking about why they're seeing iMessage and Telegram in the side panel even though they disabled them. This is about Hermes Agent configuration. Let me think about this.

This is a Hermes Agent configuration question. I should load the hermes-agent skill first to understand how to inspect the configuration. Actually, the user is asking about the desktop app side panel showing iMessage and Telegram delivery channels that they disabled.

Let me check the Hermes config. The delivery channels for Hermes are configured somewhere. Let me look at the actual config to understand. Let me load the hermes-agent skill since this is about configuring Hermes itself.

Actually, let me first inspect the actual state. The user says they disabled iMessage (Telegram too) but they still show in the side panel. This could be a few things:
1. The config still has them enabled
2. The sidebar shows ALL possible channels, not just enabled ones
3. There's a cached state

Let me investigate. I should look at the Hermes config. But this is about the desktop app's side panel. Let me first check what's in the config.

Let me load the hermes-agent skill and also check the config files. The config is at ~/.hermes/profiles/<name>/config.yaml.

Actually, let me be careful. The user is on the desktop app. The "side panel" likely refers to the chat home channels / delivery targets. Let me investigate the config.

Let me start by loading the hermes-agent skill and looking at the config. I'll do these in parallel since they're independent.

Actually I need to find the config file first. Let me check the home directory. The terminal backend is a Modal sandbox (Linux), not the user's Mac. So the config won't be there. Hmm. The terminal operates in a Modal sandbox, not on the user's actual machine where Hermes runs.

Wait, but computer_use drives the macOS desktop. So to inspect the config on the Mac, I'd need to either use computer_use to look at the UI, or the config is on the Mac. The terminal tool is Modal Linux sandbox - not the Mac.

The user's Hermes config lives at /Users/davec/.hermes/ on the Mac. The terminal tool can't reach that. But computer_use can drive the Mac desktop.

Hmm, but the question is about why iMessage and Telegram show in the side panel. Let me think about what the side panel actually is. In Hermes desktop, there's a sidebar with channels/sessions. The "side panel" might be the home/connected channels.

Actually, let me reconsider. The memory says: "Auth workflow preference: use computer_use for visible login (user watches/types password)". And the topology: AGENT RUNTIME = mini.local. The config is on the Mac probably.

Let me load the hermes-agent skill to understand the delivery/channel config, and also use computer_use to look at the side panel to confirm what the user is seeing.

Actually, I think the best first step is to load the hermes-agent skill and check the actual config. But config is on the Mac. Let me use computer_use to capture the screen and see the side panel, and also potentially look at the config file via the computer_use (opening terminal on Mac).

Hmm, but computer_use capture would show me the desktop. The side panel in the Hermes desktop app — I could capture the Hermes app window.

Let me think about the most efficient approach. The user wants to know WHY these show up. Possible answer: the sidebar in Hermes shows all configured delivery channels regardless of enabled state, OR there's a config issue.

Let me load the hermes-agent skill first to get accurate info, then investigat
