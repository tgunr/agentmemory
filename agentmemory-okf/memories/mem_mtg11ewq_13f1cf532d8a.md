---
type: Fact
title: # Hermes Desktop Organization Best Practices

source: hermes
session_id: 2026070
description: # Hermes Desktop Organization Best Practices

source: hermes
session_id: 20260704_060740_10e996
resource: hermes://session/20260704_060740_10e996

# Conversation

- **Session ID:** `20260704_060740_10
resource: agentmemory://memory/mem_mtg11ewq_13f1cf532d8a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:42.141Z
source: agentmemory
strength: 7
---
# Content

# Hermes Desktop Organization Best Practices

source: hermes
session_id: 20260704_060740_10e996
resource: hermes://session/20260704_060740_10e996

# Conversation

- **Session ID:** `20260704_060740_10e996`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-04T11:07:41Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 97
- **CWD:** `/Users/davec`
- **Tokens:** 336987 in / 23542 out
- **Est. cost:** $0.3529

---

### 👤 User — 2026-07-04T11:07:41Z

What are some best practices for keeping sessions and projects organized. Hermes desktop is string to get cluttered.

### 🤖 Assistant — 2026-07-04T11:07:50Z

<details><summary>Reasoning</summary>

The user is asking about best practices for keeping sessions and projects organized in Hermes Desktop. Let me think about what skills and knowledge I have that are relevant here.

Looking at available skills:
- `projects`: Project registry for the Hermes Desktop sidebar (SQLite-based)
- `hermes-workspace-context`: Manage Hermes project roots, working directories
- `file-organizer`: Intelligently organizes files and folders
- `hermes-memory-optimization`: Techniques for keeping Hermes native memory optimized

Let me load a couple of these to give informed advice.


</details>

**Tool call: skill_view**

```json
{
  "name": "projects"
}
```

**Tool call: skill_view**

```json
{
  "name": "hermes-workspace-context"
}
```

### 🤖 Assistant — 2026-07-04T11:08:16Z

<details><summary>Reasoning</summary>

The user is asking about best practices for keeping sessions and projects organized, specifically mentioning that the Hermes desktop is starting to get cluttered. Let me synthesize the key advice from the two skills I just loaded, plus general knowledge about Hermes organization.

Let me also check their current project state to give concrete, personalized advice.

Let me think about what I know from their memory and profile:
- They have multiple profiles: default, cnc, agentmemory, local, pveroot, ranch
- They have a projects registry
- They use the desktop app
- They have a lot of different projects going on (CNC, ComfyUI, AI, etc.)

Let me give them a clear, actionable set of best practices.

</details>

Here's a practical guide to keeping Hermes Desktop from turning into a junk drawer. I'll organize this from the most impactful changes downward.

---

## 1. Profiles are your first line of defense

You already have profiles — **default, cnc, agentmemory, local, pveroot, ranch** — and that's the right instinct. The key is to **actually use them** instead of doing everything in `default`.

A profile gives each domain its own:
- **Memory** (separate MEMORY.md — no cross-contamination of CNC facts into AI dev sessions)
- **Skills** (CNC doesn't need ComfyUI skills, and vice versa)
- **Session history** (browsing old sessions is sane when they're domain-scoped)
- **Cron jobs** (CNC maintenance cron won't show up in your default session list)

**The rule of thumb:** if you find yourself saying "let me switch to CNC mode," that's a profile. Launch it with `cnc` (or however your wrapper is set up) and the session stays cleanly in that bucket.

---

## 2. Use the projects registry + workspace scaffolding

The `projects` skill you have is purpose-built for this. Instead of sessions floating in a flat list, each one gets linked to a named project:

```
proj create river-table -d "8ft walnut epoxy river table" --path ~/Projects/CNC/river-table
proj link-session river-table <session_id> "roughing pass and epoxy channel planning"
```

Then later:
- `proj show river-table` — all linked sessions, notes, and status in one view
- `proj notes river-table` — chronological decisions log
- `proj detect` — auto-identifies which project you're in from cwd

**The big win:** when you ask "what did we do on the river table?" six months later, you don't have to session_search through 200 sessions. The answer is in the project.

---

## 3. Session discipline (the free stuff)

Most clutter comes from low-signal sessions. A few habits that help:

| Do | Don't |
|---|---|
| `/new` when starting a new topic | Keep one giant session alive for weeks |

