---
type: Fact
title: # Show gateway switching on mini.local

source: hermes
session_id: 20260828_1036
description: # Show gateway switching on mini.local

source: hermes
session_id: 20260828_103628_84228a
resource: hermes://session/20260828_103628_84228a

# Conversation

- **Session ID:** `20260828_103628_84228a`

resource: agentmemory://memory/mem_mtg12xa8_19fb3431eaf3
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:52.623Z
source: agentmemory
strength: 7
---
# Content

# Show gateway switching on mini.local

source: hermes
session_id: 20260828_103628_84228a
resource: hermes://session/20260828_103628_84228a

# Conversation

- **Session ID:** `20260828_103628_84228a`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-28T15:36:28Z
- **Ended:** 2026-08-29T14:21:32Z
- **Messages:** 309
- **CWD:** `/Users/davec`
- **Tokens:** 322580 in / 132608 out

---

### 👤 User — 2026-08-28T15:36:29Z

In hermes desktop on my pro.local the bottom of the sidebar permits switching gateways. I don;t see the same selection here on mini.local

### 👤 User — 2026-08-28T15:36:29Z

In hermes desktop on my pro.local the bottom of the sidebar permits switching gateways. I don;t see the same selection here on mini.local

### 🤖 Assistant — 2026-08-28T15:36:51Z

<details><summary>Reasoning</summary>

The user is referring to a feature in the Hermes desktop app. They mention that on their pro.local machine (the viewer they sit at), the bottom of the sidebar permits switching gateways. They don't see the same selection on mini.local.

Let me think about what's being described. The user is comparing two installations of Hermes Desktop:
- pro.local: the machine they sit at (viewer)
- mini.local: the 32GB Mac mini with the agent runtime/gateway

The user is noting a UI difference: on pro.local, the sidebar's bottom has gateway switching, but on mini.local they don't see it.

Wait, but I'm running on the agent runtime. The user is asking about a UI difference between two Hermes desktop instances. I need to understand what they're talking about.

Let me think about this. The sidebar in Hermes desktop app has a bottom section. The user says it "permits switching gateways." This sounds like a profile/gateway switcher.

But here's the thing — I'm the agent runtime on mini.local. The user is looking at the Hermes desktop app. The question is about why they don't see gateway switching on mini.local.

Actually, I should consider — is this a real Hermes feature? The sidebar bottom gateway switcher. Let me think about whether I can verify this. The user is asking a question about the UI. I can't directly see their screen unless I use computer_use or read_window_below. But the question is more about understanding the feature and why it differs.

Wait — there might be a key insight here. The memory says:
- Hermes 2-Mac: viewer=pro.local (GUI you sit at); AGENT RUNTIME on mini.local
- Gateway = `...tui_gateway.entry` on mini
- Plists: `ai.hermes.gateway` (default) + `ai.hermes.gateway-ollama` (ACTIVE profile for /tq14,/tq27)

So on mini.local, there are TWO gateway plists: `ai.hermes.gateway` (default) and `ai.hermes.gateway-ollama` (active). This means mini.local has multiple gateway profiles configured via launchd.

The "switching gateways" in the sidebar bottom of pro.local's Hermes desktop — this is likely a gateway/profile switcher that lets you pick which gateway/provider profile the desktop connects to.

Hmm, but actually on pro.local, the desktop connects to the gateway on mini.local. The gateway switcher at the bottom of the sidebar might be a feature that shows when there are multiple gateways available.

Let me reconsider. The user says "the bottom of the sidebar permits switching gateways." This is a Hermes desktop feature. They see it on pro.local but not on mini.local.

The key question: WHY would mini.local not show the gateway switcher? 

Possibility 1: mini.local's Hermes desktop instance is configured differently. Maybe it's because mini.local runs the gateway itself (it IS the gateway), so it doesn't need a gateway switcher — or the gateway switcher only appears in "client" mode.

Possibility 2: The gateway switcher requires multiple gateways to be detected/registered, and mini.local only has the local gateway registered in a way that doesn't expose the switcher.

Actually, I think the most useful thing is to investigate. Let me look at the Hermes desktop app's behavior. But I can't see the screen directly.

Actually wait — I should think about what the user actually wants. They're reporting an observation: "In hermes desktop on my pro.lo
