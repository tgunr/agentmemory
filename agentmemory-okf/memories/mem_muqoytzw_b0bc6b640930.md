---
type: Fact
title: # Switch profiles with truncated profile rail

source: hermes
session_id: 202610
description: # Switch profiles with truncated profile rail

source: hermes
session_id: 20261002_005726_5d9b48
resource: hermes://session/20261002_005726_5d9b48

# Conversation

- **Session ID:** `20261002_005726_5
resource: agentmemory://memory/mem_muqoytzw_b0bc6b640930
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_005726_5d9b48"]
timestamp: 2026-10-02T08:18:56.577Z
source: agentmemory
strength: 7
---
# Content

# Switch profiles with truncated profile rail

source: hermes
session_id: 20261002_005726_5d9b48
resource: hermes://session/20261002_005726_5d9b48

# Conversation

- **Session ID:** `20261002_005726_5d9b48`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T05:57:27Z
- **Messages:** 33
- **Tokens:** 63219 in / 3445 out

---

### 👤 User — 2026-10-02T05:57:27Z

How do i switch profiles when the profile rail is truncated?

### 🤖 Assistant — 2026-10-02T05:57:31Z

<details><summary>Reasoning</summary>

The user asks about Hermes desktop profile switching when profile rail is truncated. Load hermes-ui or hermes-desktop skill.

Memory says user dislikes horizontal/cluttered status bars; prefers pop-up menus for gateway/profile switching.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

### 🤖 Assistant — 2026-10-02T05:57:37Z

<details><summary>Reasoning</summary>

The user asks: "How do I switch profiles when the profile rail is truncated?" — meaning the sidebar profile rail is cut off (too many profiles, narrow sidebar), so some profile squares are not visible. What are the ways to switch profiles?

Let me check the actual desktop code for the profile rail truncation handling and any overflow menu / alternative switch paths (e.g., `/profile` slash command, project switcher, keyboard shortcut).

Let me grep.

</details>

**Tool call: search_files**

```json
{
  "pattern": "ProfileRail",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src",
  "output_mode": "files_only"
}
```

**Tool call: search_files**

```json
{
  "pattern": "profile",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/desktop-slash-commands.ts",
  "limit": 40,
  "context": 3
}
```

### 🤖 Assistant — 2026-10-02T05:57:41Z

<details><summary>Reasoning</summary>

Let's look at profile-switcher.tsx to see truncation behavior ("profile rail is truncated" — overflow with more indicator?).

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar/profile-switcher.tsx"
}
```

### 🤖 Assistant — 2026-10-02T05:57:49Z

<details><summary>Reasoning</summary>

The rail is truncated = the strip overflows (fewer than 13 profiles but narrow sidebar). Ways to switch:

1. `/profile` slash command.
2. Wheel-scroll the rail horizontally (mouse wheel mapped to deltaY → scrollLeft), trackpad x-scroll.
3. Right-click any square → "Switch to ..." (only for at-rest gateways; active gateway squares don't have a switch item... actually ProfileLaunchMenuSection). Hmm for active gateway squares there's no "switch" item since it's already that profile.
4. Manage Profiles page (ellipsis pill) — but that doesn't switch, it navigates to PROFILES_ROUTE. Might allow selecting there? Let's check profiles page briefly.
5. Keybinds: there's `lib/keybinds/actions.ts` with profile-rail references — check for a "next profile" cycle shortcut.

Let me check keybinds actions and whether the Manage/Profiles page has a switch action.

</details>

**Tool call: search_files**

```json
{
  "context": 4,
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/lib/keybinds/actions.ts",
  "pattern": "profile"
}
```

**Tool call: search_files**

```json
{
  "context": 3,
  "limit": 30,
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/profiles",
  "pattern": "selectProfile|switchTo"
}
```

### 🤖 Assistant — 2026-10-02T05:57:54Z

<details><summary>Reasoning</summary>

So there are multiple ways: ⌘1…⌘9 positional profile switches, ⌘D for default, /profile slash command, the condensed dropdown (when >13 profiles), and the Manage Profiles page.

Let me confirm the /profile handler and ⌘D keybind.

The user asks "How do I switch profiles when the profile rail is truncated?" Truncated = rail scrolls off / condensed. Answer concisely.

Let me check /profile handler quickly.

</details>

**Tool call: search_files**

```json
{
  "context": 6,
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/session/hooks/use-prompt-actions/slash.ts",
  "pattern": "'profile'"
}
```

**Tool call: searc
