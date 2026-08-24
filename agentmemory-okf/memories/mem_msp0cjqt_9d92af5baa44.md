---
type: Fact
title: # Merging sessions

source: hermes
session_id: 20260616_231956_f91c35
resource: 
description: # Merging sessions

source: hermes
session_id: 20260616_231956_f91c35
resource: hermes://session/20260616_231956_f91c35

# Conversation

- **Session ID:** `20260616_231956_f91c35`
- **Source:** tui
- 
resource: agentmemory://memory/mem_msp0cjqt_9d92af5baa44
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20260616_231956_f91c35"]
timestamp: 2026-08-11T18:42:35.375Z
source: agentmemory
strength: 7
---
# Content

# Merging sessions

source: hermes
session_id: 20260616_231956_f91c35
resource: hermes://session/20260616_231956_f91c35

# Conversation

- **Session ID:** `20260616_231956_f91c35`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-17T04:20:50Z
- **Ended:** 2026-06-17T04:41:05Z
- **Messages:** 131
- **Tokens:** 390 in / 22642 out
- **Est. cost:** $0.2371

---

### 👤 User — 2026-06-17T04:20:50Z

can sessions be merged in Hermes, all of these agentmemory session should be in the agentmemory profile at lease.

### 🤖 Assistant — 2026-06-17T04:23:44Z

<details><summary>Reasoning</summary>

The user is asking if sessions can be merged in Hermes, and specifically mentions that "all of these agentmemory session should be in the agentmemory profile at least".

First, I need to understand what the user means by "merge sessions in Hermes" and "agentmemory profile".
Let's search for how session merging works in Hermes, or if it's a feature. I can use `session_search` or `web_search` or look at the `hermes-agent` skill.
Actually, let's look at the `hermes-agent` skill and maybe search the docs or skills for "merge sessions" or "merge profile".
I can also look at the `session_search` tool documentation or search the Hermes codebase if it's local. Wait, I am the agent, I can use `web_search` or `tool_search` to find information about "merge sessions" in Hermes.
Let's query `hermes-agent` skill first.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-17T04:23:44Z

<details><summary>Reasoning</summary>

I see "hermes sessions list", "hermes sessions export", "hermes sessions rename", "hermes sessions delete", "hermes sessions prune".
But is there a "merge" command?
Let's search the web or docs for "merge sessions" in Hermes, or check if there's a specific way to move sessions between profiles.
The user says: "can sessions be merged in Hermes, all of these agentmemory session should be in the agentmemory profile at lease."

Wait, the user might be talking about moving sessions from the default profile to the "agentmemory" profile.
Let's check the `hermes profile` CLI commands.
`hermes profile create NAME`
`hermes profile list`
`hermes profile use NAME`
Is there a way to move or merge sessions?
Maybe I can search the Hermes docs or codebase for "merge sessions" or "move session".
Let's query the web or search the skill references.
I see `references/sessions-vs-agentmemory.md` in the linked files! That sounds highly relevant.
Let's read that file.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent",
  "file_path": "references/sessions-vs-agentmemory.md"
}
```

### 🤖 Assistant — 2026-06-17T04:23:44Z

<details><summary>Reasoning</summary>

I need to understand if sessions can be *moved* or *merged* between profiles.
Let's check `hermes profile` commands or `hermes sessions`.
The `hermes-agent` skill says:
```bash
hermes profile create NAME  Create (--clone, --clone-all, --clone-from)
hermes profile use NAME     Set sticky default
hermes profile delete NAME  Delete a profile
hermes profile show NAME    Show details
hermes profile alias NAME   Manage wrapper scripts
hermes profile rename A B   Rename a profile
hermes profile export NAME  Export to tar.gz
hermes profile import FILE  Import from archive
```

So you can export a profile and import it, but what about individual sessions?
Wait, if the user says "all of these agentmemory session should be in the agentmemory profile at least", they might be referring to sessions that were created in the `default` profile but are related to "agentmemory" work, and they want them in the `agentmemory` profile.

Is there a command to move a session to another profile?
Let's search for "move session profile" or "merge sessions" in the Hermes docs. I can use `web_search` for "hermes merge sessions profile" or just check if `hermes sessions` has a move command.
Let's do a `web_search`.

</details>

**Tool call: web_search**

```json
{
  "query": "\"hermes\" move session to profile OR merge sessions",
  "limit": 5
}
```

### 🤖 Assis
