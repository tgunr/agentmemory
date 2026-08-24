---
type: Fact
title: # Finding sessions with unfinished work

source: hermes
session_id: 20260719_031
description: # Finding sessions with unfinished work

source: hermes
session_id: 20260719_031412_a3a58a
resource: hermes://session/20260719_031412_a3a58a

# Conversation

- **Session ID:** `20260719_031412_a3a58a`
resource: agentmemory://memory/mem_mspcmazl_e45ead6e5a00
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T00:26:05.971Z
source: agentmemory
strength: 7
---
# Content

# Finding sessions with unfinished work

source: hermes
session_id: 20260719_031412_a3a58a
resource: hermes://session/20260719_031412_a3a58a

# Conversation

- **Session ID:** `20260719_031412_a3a58a`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-19T08:14:13Z
- **Messages:** 108
- **CWD:** `/Users/davec`
- **Tokens:** 746162 in / 167294 out
- **Est. cost:** $0.3135

---

### 🤖 Assistant — 2026-07-20T22:11:41Z

<details><summary>Reasoning</summary>

The out-of-band message says "Kego is Kilo". So "Kego title" = the Kilo Code session title. So the convention is: use the **current Hermes session title** or the **Kilo Code title**, and only fall back to a generic name if neither is available.

Wait — but this naming convention relates to what? The conversation context: I'd said "AM stores raw IDs; titles live in Hermes state.db". The user wants the **AgentMemory session naming** to use the Hermes session title or Kilo title, rather than a generic name.

Actually, let me re-read the user's message: "it would help if the session naming was what I had suggested many times: use the current Hermes session title or the Kego title and only use a generic name if that is not possible"

So this is about the **AgentMemory session title** (the reminder? or the AM session name?). The context: we were talking about AM sessions showing "None"/raw IDs instead of descriptive titles. The skill §3 (Title Sync) is about pushing the Hermes session title to AgentMemory so the UI shows descriptive names instead of "None".

So the user is saying: the AM session naming should use the current Hermes session title (or the Kilo title) and only fall back to generic if not available. This is about the **title-sync** — which is supposed to read the session title from state.db and push it to AM. But we saw AM sessions show "None" for title — meaning title sync isn't happening for these sessions.

But wait — the immediate practical issue: the user's "unfinished session audit" creates **Reminders** named "Unfinished Hermes sessions - 2026-07-19". Is the user talking about the reminder naming? No — the reminder is intentionally generic (it's a daily summary). The user said "session naming" — that maps to the AM session titles, which we observed as "None".

So the deliverable: fix the AgentMemory title-sync so sessions get named from the Hermes session title (or Kilo title), with generic fallback only when unavailable.

Hmm, but actually — re-reading: "it would help if the session naming was what I had suggested many times". The user is referencing a *past suggestion* I should have implemented. They want the AM sessions to be named properly. This is the title-sync (skill §3).

But there's nuance: the observer plugin's job is to sync the title. We saw it's not syncing (titles are "None"). The skill §3 says the plugin should read the title from state.db and push via POST /agentmemory/session/update.

So the actual work: ensure AM sessions get proper titles. But the user might also be talking more specifically about the **audit script** — no, the audit creates reminders, not AM sessions.

Let me think about what's actionable. The user wants the naming convention. Where is naming happening that's currently generic/wrong?

Options:
1. The AM observer / title-sync — currently AM sessions show "None" because title-sync isn't firing.
2. Some other naming.

Given context (we just discussed that AM sessions have no titles in payload, and I said "AM stores raw IDs; titles live in state.db"), the user is reacting to that — they want AM sessions named by Hermes/Kilo title.

But implementing title-sync properly is a big task (modifying the observer plugin). However, the user says "use the current Hermes session title or the Kego [Kilo] title and only use a generic name if that is not possible." 

Actually — wait. Let me reconsider. Maybe the user is referring to the *audit script* and how it labels things. No. The reminders are fine as daily summaries.

Hmm, but actually the cleaner interpretation: The user has repeatedly asked that sessions (in some context — likely the AM UI, or Hermes its
