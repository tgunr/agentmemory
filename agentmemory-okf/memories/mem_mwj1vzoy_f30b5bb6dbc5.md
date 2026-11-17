---
type: Fact
title: # Restore projects popup in status bar

source: hermes
session_id: local-e1e6499
description: # Restore projects popup in status bar

source: hermes
session_id: local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57
resource: hermes://session/local-e1e6499998c2ef29d74e9457a59fa
resource: agentmemory://memory/mem_mwj1vzoy_f30b5bb6dbc5
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-16T09:17:54.237Z
source: agentmemory
strength: 7
---
# Content

# Restore projects popup in status bar

source: hermes
session_id: local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57
resource: hermes://session/local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57

# Conversation

- **Session ID:** `local-e1e6499998c2ef29d74e9457a59fa7878a3c72c854a9497ca9e7d3769fa21a57`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-15T16:21:41Z
- **Ended:** 2026-11-15T17:17:47Z
- **Messages:** 62
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 136559 in / 40721 out

---

### 👤 User — 2026-11-15T16:21:42Z

What happened to the projects popup in the status bar to switch projects? Its gone

### 🤖 Assistant — 2026-11-15T16:21:54Z

<details><summary>Reasoning</summary>

The user is asking about a "projects popup in the status bar to switch projects" that's gone. This sounds like it's related to Hermes Agent desktop app — there's a memory entry: "User prefers pop-up menus for gateway/profile switching" and "UI taste: dislikes horizontal/cluttered status bars — prefers pop-up menus for gateway/profile switching."

There's a skill called "hermes-desktop" in software-development category, and "hermes-ui" skill. The question is about the projects popup in the status bar to switch projects. The user says "Its gone" — they're asking what happened to it.

I should check the skills first per my instructions: "Before replying, scan the skills below. If a skill matches or is even partially relevant to your task, you MUST load it with skill_view(name)". Relevant skills: hermes-desktop, hermes-ui. Also possibly desktop_project tool (deferred tool). The question is about a UI feature disappearing.

Let me load hermes-desktop and hermes-ui skills, and also search for the desktop_project tool to check projects. Actually the question is "what happened to the projects popup in the status bar to switch projects? It's gone" — this is a question about the Hermes desktop app state. Maybe the desktop_project tool can list projects, or maybe there's something in the config.

Plan:
1. Load hermes-desktop skill and hermes-ui skill (parallel).
2. Check the desktop app state — maybe check config, or git history in ~/.hermes/hermes-agent? Wait, memory says git repo is at ~/.hermes/hermes-agent. The desktop app code is in apps/desktop. The projects popup in status bar might have been removed or moved in a recent change.

Actually, the question "What happened to the projects popup in the status bar to switch projects? Its gone" — could be:
- A feature that existed in the Hermes desktop app (status bar item with projects popup to switch projects).
- The user noticed it's gone and wants to know what happened.

I should investigate: load skills, look at the desktop app code for status bar / projects menu, check git log for removals.

Let me start by loading the relevant skills in parallel.

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

### 🤖 Assistant — 2026-11-15T16:22:21Z

<details><summary>Reasoning</summary>

The user asks about "the projects popup in the status bar to switch projects" — they say it's gone. The skill loaded says:

**A missing projects element is a GROUPING, not data.** The status bar has no projects item at all — the declared ids are `command-center, gateway-switcher, profile-switcher, gateway-health, free-tier, workspace-cwd, agents, cron, webhooks, running-timer, context-usage, cache-hit-rate, tokens-per-second, session-timer, plan-usage, terminal` (`use-statusbar-items.tsx`), and user visibility comes from `~/.hermes/ui-preferences.json` → `values["hermes.desktop.statusbarHidden.v2"]`. Only `workspace-cwd` is project-aware...

Hmm, but wait — the user says there WAS a projects popup in the status bar to switch projects, and now it's gone. This could be:
1. A plugin that was dropped in `~/.hermes/desktop-plugins/` that added a project switcher popup — maybe the plugin dir got cleaned, or the plugin crashed (error boundary), or contributions.json changed.
2. The desktop app was updated and a feature was removed.
3. ui-preferences.json hid it.

The hermes-ui skill mentions desktop plugins
