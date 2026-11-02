---
type: Fact
title: # Nextcloud task manager with Redmine integration

source: hermes
session_id: lo
description: # Nextcloud task manager with Redmine integration

source: hermes
session_id: local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671
resource: hermes://session/local-6015392bac2447fba9
resource: agentmemory://memory/mem_mvxm9neu_20b28458fd5b
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-11-01T09:17:27.983Z
source: agentmemory
strength: 7
---
# Content

# Nextcloud task manager with Redmine integration

source: hermes
session_id: local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671
resource: hermes://session/local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671

# Conversation

- **Session ID:** `local-6015392bac2447fba91c08dcc2b00d0cecfd07ce6940bf233580153a9dd37671`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T22:28:50Z
- **Ended:** 2026-11-01T04:57:49Z
- **Messages:** 11
- **CWD:** `/Volumes/davec`
- **Tokens:** 32374 in / 2102 out
- **Est. cost:** $-23731.0000

---

### 👤 User — 2026-10-31T22:29:30Z

Can nextcloud do any collaboration apps? I would like some kind of task manager app, if possible that might integrate with redmine?

### 🤖 Assistant — 2026-10-31T22:29:35Z

<details><summary>Reasoning</summary>

The user asks about Nextcloud collaboration apps, task manager, Redmine integration. Let me check relevant skills and maybe web search. Skills: redmine tools available (MCP). Nextcloud — probably docs. Let me do a quick web search for Nextcloud Tasks/Deck/Redmine integration.

Let me search the web for current info.

</details>

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "Nextcloud Deck vs Tasks app task management 2026 features"
}
```

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "Nextcloud Redmine integration app sync issues tasks"
}
```

### 🤖 Assistant — 2026-10-31T22:29:41Z

<details><summary>Reasoning</summary>

Now let me check whether there's a direct Redmine integration for Nextcloud. I recall there isn't an official one; there's "Nextcloud Redmine" community apps? Let me search quickly. Also check if their Nextcloud instance exists — maybe I could check. But the question is advisory. Let me do one more search for redmine nextcloud app store.

Also collaboration apps list: Talk, Deck, Tasks, Tables, Collectives, Notes, Calendar, Whiteboard, Files, Office (Collabora/OnlyOffice), Polls, Forms.

Let me search "apps.nextcloud.com redmine".

</details>

**Tool call: web_search**

```json
{
  "limit": 6,
  "query": "apps.nextcloud.com redmine integration app \"Redmine\" nextcloud app store"
}
```

### 🤖 Assistant — 2026-10-31T22:29:50Z

<details><summary>Reasoning</summary>

Confirmed: no first-party Nextcloud↔Redmine bridge. Options: n8n/Make automation, Deck has API + Redmine REST API → your own sync, or use Redmine as the task manager and embed it in Nextcloud via "External sites" app.

Now write a concise answer. Include: collaboration app set, task manager choices (Tasks vs Deck), Redmine integration reality and 3 paths. Keep brief but useful. Ask if they want me to check their instance / set something up? Keep it tight.

Also mention Nextcloud Tables, Collectives, Talk, Whiteboard, Forms, Polls. And "External sites" app for embedding Redmine iframe with SSO-ish.

Redmine integration paths:
1. No official bridge. Nothing in the app store.
2. External Sites app: embed Redmine in Nextcloud nav (iframe), feels integrated.
3. Automation (n8n self-hosted / Make): Redmine issue → Deck card / Tasks via CalDAV, and status writeback to Redmine. Bidirectional is fiddly; Redmine REST API + Deck REST API make it doable.
4. Super Productivity desktop app supports both Redmine and Nextcloud Deck/CalDAV as issue providers — so you can pull both into one place. That's a neat practical answer.
5. Redmine plugin side: redmine_nextcloud? Not sure exists. Don't invent. I'll avoid.

Also worth noting: Deck cards can link to a Redmine issue URL as attachment/link field — cheap manual link.

Keep it reasonably short with a table maybe.

</details>

Short answer: **Nextcloud has plenty of collaboration apps, but there is no official Redmine bridge** — nothing in the app store connects them. You'd glue them together yourself or pick one side as the source of truth.

**What Nextcloud gives you**
- **Deck** — Kanban boards, stacks/cards, assignees, due dates, labels, sub-cards, Gantt in recent Hub releases. Closest thing to a project/task manager. Has a solid REST API.
- **Tasks** — plain CalDAV todos (VTODO). Syncs natively with Apple Reminders, Thunderbird, tasks.org, DAVx5. Best if you want tasks in your phone's native app.

