---
type: Fact
title: # Restore sessions filter in hermes sidebar

source: hermes
session_id: local-8f
description: # Restore sessions filter in hermes sidebar

source: hermes
session_id: local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58
resource: hermes://session/local-8fbd041d09f9edb5c7a7c0bc
resource: agentmemory://memory/mem_mwerkbnj_88a1fac0b531
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Library/Mobile Documents/com~apple~CloudDocs/3CL/design"]
timestamp: 2026-11-13T09:17:49.039Z
source: agentmemory
strength: 7
---
# Content

# Restore sessions filter in hermes sidebar

source: hermes
session_id: local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58
resource: hermes://session/local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58

# Conversation

- **Session ID:** `local-8fbd041d09f9edb5c7a7c0bc00c2037c7a64b755e7393500bbed05918111ea58`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-10T06:13:31Z
- **Ended:** 2026-11-12T09:38:15Z
- **Messages:** 20
- **CWD:** `/Users/davec/Library/Mobile Documents/com~apple~CloudDocs/3CL/design`
- **Tokens:** 132994 in / 2931 out
- **Est. cost:** $-84111.0000

---

### 👤 User — 2026-11-10T06:13:32Z

How do i change the sessions filter in hermes? I no longer see it on a right click in the sidebar.

### 🤖 Assistant — 2026-11-10T06:13:38Z

<details><summary>Reasoning</summary>

The user asks about Hermes desktop app sessions filter in the sidebar. Likely there's a skill: hermes-desktop, hermes-ui, hermes-config-layering. Let me check the skill.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-desktop"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-ui"
}
```

### 🤖 Assistant — 2026-11-10T06:13:46Z

<details><summary>Reasoning</summary>

The user asks: "How do I change the sessions filter in hermes? I no longer see it on a right click in the sidebar."

Sessions filter = grouping? Or the filter (all profiles / archived / hidden). Let me check boolean: In Hermes Desktop sidebar there's a right-click context menu on the sidebar area... The skill mentions sidebar grouping via SIDEBAR_GROUPING_ORDER and persisted `hermes.desktop.sidebarGrouping` in `~/.hermes/ui-preferences.json`. But "sessions filter" — there may be a filter for sessions (e.g., "All sessions / Active / Archived") accessible via right-click on the sidebar header. Hmm.

Let me look at the actual repo source for a sidebar filter/context menu. Let's grep.

Which host am I on? The desktop app... let's check the repo location. ~/.hermes/hermes-agent. Grep for "filter" in sidebar.

Also ui-preferences.json likely lives on the host running desktop. Let me just grep source.

</details>

**Tool call: search_files**

```json
{
  "limit": 40,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar",
  "pattern": "sidebarGrouping|sessionsFilter|filterSessions"
}
```

**Tool call: terminal**

```json
{
  "command": "ls ~/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar 2>&1 | head -40; echo ---; cat ~/.hermes/ui-preferences.json 2>&1 | head -60; echo ---; hostname"
}
```

### 🤖 Assistant — 2026-11-10T06:13:54Z

<details><summary>Reasoning</summary>

There's filter-menu.tsx in the sidebar. Let me read it to see how the filter is opened — maybe right-click was replaced by a button, or a keyboard shortcut.

Note ui-preferences has `hermes.desktop.sidebarShowAllSessions` and `hermes.desktop.showAllProfiles`. Let's read filter-menu.tsx and where it's triggered in index.tsx.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar && sed -n 1,90p filter-menu.tsx; echo ===; grep -n \"FilterMenu\\|filter-menu\\|onContextMenu\\|contextmenu\\|contextMenu\" index.tsx chrome.tsx | head -60"
}
```

### 🤖 Assistant — 2026-11-10T06:14:00Z

<details><summary>Reasoning</summary>

So the filter menu is now a header nav button (funnel icon) in the sidebar header, not a right-click context menu. Let's check the render around line 1948 to confirm, and check whether the button is hidden under some condition (e.g. showsAdvancedChrome).

Also check git log to see if the right-click was removed recently (user says "I no longer see it on a right click").

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent/apps/desktop/src/app/chat/sidebar && sed -n 1920,1975p index.tsx; echo ===; grep -n \"SidebarFilterMenu\\|export function SidebarFilterMenu\\|id:\\s*'filter'\\|\\$showsAdvancedChrome\" filter-menu.tsx | head; echo ===; sed -n 90,200p filter-menu.tsx"
}
```

### 🤖 Assistant — 2026-11-10T06:14:11Z

The filter moved from the right-click menu to the **sliders/filter button** in the Sess
