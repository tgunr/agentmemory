---
type: Fact
title: # Debug /projects route hanging

source: hermes
session_id: local-f2e524bd5d3cfd
description: # Debug /projects route hanging

source: hermes
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
resource: hermes://session/local-f2e524bd5d3cfd4334c418b91ffebb661855
resource: agentmemory://memory/mem_mvxm9r9p_bd0bab00e980
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-11-01T09:17:32.959Z
source: agentmemory
strength: 7
---
# Content

# Debug /projects route hanging

source: hermes
session_id: local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792
resource: hermes://session/local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792

# Conversation

- **Session ID:** `local-f2e524bd5d3cfd4334c418b91ffebb661855b4cf3e42d35c11951a4633bce792`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T15:11:30Z
- **Ended:** 2026-10-31T17:36:42Z
- **Messages:** 287
- **CWD:** `/Users/davec`
- **Tokens:** 327991 in / 70863 out
- **Est. cost:** $-164207.0000

---

### 👤 User — 2026-10-31T15:12:11Z

when I try /projects it is hanging

### 🤖 Assistant — 2026-10-31T15:12:22Z

<details><summary>Reasoning</summary>

The user says `/projects` is hanging. This is a Hermes slash command issue. Let me investigate. There's a skill `hermes-workspace-context` and `hermes-slash-command-dispatch`, `project-workspace-setup`. Let me load relevant skill(s) and check logs.

Let me batch: load skills and check gateway logs.

Actually let's think: `/projects` slash command in Hermes TUI — hangs. Need to find what implements it. Likely `desktop_project` tool listed deferred. The slash command probably invokes the desktop_project tool / projects.db sqlite locked.

Memory says: Hermes desktop Projects live in ~/.hermes/projects.db (sqlite).

Let me investigate: check for the slash command handler code, and check logs for hang.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-slash-command-dispatch"
}
```

**Tool call: terminal**

```json
{
  "command": "ls -la ~/.hermes/projects.db* 2>/dev/null; echo \"---\"; grep -rn \"projects\" ~/.hermes/hermes-agent/hermes/*.py 2>/dev/null | grep -i \"slash\\|command\" | head -20; echo \"---\"; ls ~/.hermes/hermes-agent | head -40"
}
```

### 🤖 Assistant — 2026-10-31T15:12:31Z

<details><summary>Reasoning</summary>

The `/projects` command is a slash command in the TUI. It hangs. Let me check the implementation. There's a skill `hermes-workspace-context` and `project-workspace-setup`. Also check what `/projects` handler does — likely desktop_project tool deferred, or the TUI client command.

Memory says: "Hermes desktop Projects live in ~/.hermes/projects.db (sqlite); desktop_project tool has no rename — edit name+slug in DB".

But we're in TUI. `/projects` in TUI — let me find. Let me search the codebase for projects command handling.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"\\\"projects\\\"\\|'projects'\" hermes_cli/commands.py gateway/slash_commands_session.py gateway/run_busy.py gateway/session_commands.py tui_gateway/*.py 2>/dev/null | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rln \"projects\" ui-tui/src/app/slash/ ui-tui/src/domain/ 2>/dev/null | head -20; echo \"=== git status ===\"; git status --short | head -20; git log --oneline -3"
}
```

### 🤖 Assistant — 2026-10-31T15:12:36Z

<details><summary>Reasoning</summary>

So someone (an earlier session) implemented `/projects`. Now it hangs. We're in TUI. Let's look at ui-tui/src/app/slash/commands/projects.ts and domain/projects.ts. Also check whether dist bundle is stale/rebuild needed.

Hang = the RPC never returns, or the picker overlay awaits something. Let's read the files.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/ui-tui/src/app/slash/commands/projects.ts"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/hermes-agent/ui-tui/src/domain/projects.ts"
}
```

### 🤖 Assistant — 2026-10-31T15:12:41Z

<details><summary>Reasoning</summary>

Bare `/projects` → `patchOverlayState({ projectsPicker: true })` → opens picker overlay. "Hanging" likely means the override renders but blocks input, or nothing renders and the composer is blocked (BLOCKING_KEYS includes projectsPicker but the overlay widget never pushes → input swallowed = exhausted hang).

Per skill: an overlay flag is four edits: interfaces.ts OverlayState, overlayStore.ts buildOverlayState default, BLOCKING_KEYS, and appOverlays.tsx widget push. Let me check all four.

Also key: we're in TUI running `ui-tu
