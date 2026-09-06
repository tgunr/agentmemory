---
type: Fact
title: # Show gateway switching on mini.local #2

source: hermes
session_id: 20260828_1
description: # Show gateway switching on mini.local #2

source: hermes
session_id: 20260828_120911_c41db6
resource: hermes://session/20260828_120911_c41db6

# Conversation

- **Session ID:** `20260828_120911_c41db
resource: agentmemory://memory/mem_mtg12xkd_18ee0d271a4b
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:52.976Z
source: agentmemory
strength: 7
---
# Content

# Show gateway switching on mini.local #2

source: hermes
session_id: 20260828_120911_c41db6
resource: hermes://session/20260828_120911_c41db6

# Conversation

- **Session ID:** `20260828_120911_c41db6`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-08-28T17:09:11Z
- **Ended:** 2026-08-30T00:13:57Z
- **Messages:** 1461
- **CWD:** `/Users/davec`
- **Tokens:** 615602 in / 180612 out

---

### 🤖 Assistant — 2026-08-28T15:54:35Z

<details><summary>Reasoning</summary>

Let me understand the sidebar layout more precisely. The user sees on pro.local a "single selection on the far left to switch gateways." That's a vertical left rail (the classic sidebar icon rail) with a gateway selector. In the current code, the SIDEBAR_NAV is the top section (new-session, skills, messaging, etc.) rendered as `SidebarMenu`. Then there are sections, then at the bottom the ProfileRail.

I need to understand where the "far left" gateway selector was. Let me look at the broader shell layout — there's likely a left icon rail and the main sidebar. The user describes:
- pro: "a single selection on the far left to switch gateways"
- mini: "gateways are to the far right and after the profiles"

So the far-left is a vertical nav. The gateway selector on pro is a vertical icon/control on the far left. Let me look at the shell layout to understand the "far left" region. Let me search the shell.

Actually, I should be careful and efficient. Let me look at how the sidebar is composed in the shell, and find where a left-rail gateway control could go. But honestly, the cleanest approach that matches "far left single selection" might be to add the ConnectionSwitcher (or a gateway selector) into the left nav rail near the SIDEBAR_NAV, or create a dedicated left rail section.

But wait — I should consider whether the simplest, least-risky fix that matches the user's desire is: put a compact gateway selector at the TOP of the sidebar (far left vertical rail) rather than at the foot. The user said pro has "a single selection on the far left." That's a vertical placement.

Let me look at the shell layout to see the structure. Let me read the relevant part of sidebar/index.tsx around the render (lines ~1450-1922) and also check the shell layout component.

Actually, given the complexity and risk of a full desktop rebuild + asar repack (destructive), I should present a plan to the user and get explicit go-ahead per the skill. The skill says the asar repack requires user approval because it overwrites the installed app's bundle. So my move now: explore enough to give a concrete plan, then ask for approval.

Let me read the shell layout to understand "far left." Let me look at how the sidebar is placed in the app shell (likely app.tsx or shell). Let me search.

Actually, I realize I should be efficient. The user wants the far-left gateway selector back. The most faithful restoration is to add a gateway selector into the left vertical nav rail (where SIDEBAR_NAV lives at the top of the sidebar). But "far left" might literally be a separate thin rail to the left of the sidebar. Let me check the shell to see if there's a distinct left rail.

Let me read the shell layout.

</details>

This is a real desktop-build change with a destructive `app.asar` swap, so per the `hermes-desktop` skill I need to (1) design the change precisely and (2) get your explicit go-ahead before touching the installed app. Let me read the shell layout to find the "far left" region where pro.local put its gateway selector.

### 🤖 Assistant — 2026-08-28T15:55:17Z

<details><summary>Reasoning</summary>

I have enough to design the change. Let me understand the "far left" layout. There's a `Sidebar` with `SIDEBAR_NAV` at top, then sessions list, then the `ProfileRail` at the foot (`sidebar/index.tsx:1906`). The "far left" gateway selector on pro's old build — I need to figure out where exactly pro placed it. It's likely a separate narrow icon rail (the "icon rail") on the far left, distinct from the sessions sidebar. 

Actually, in the old stable `0.0.1` build, pro.local had "a single selection on the far left to switch gateway
