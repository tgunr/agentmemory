---
type: Fact
title: # Determine best time for adoption

source: hermes
session_id: 20261002_133503_3
description: # Determine best time for adoption

source: hermes
session_id: 20261002_133503_36febf
resource: hermes://session/20261002_133503_36febf

# Conversation

- **Session ID:** `20261002_133503_36febf`
- **
resource: agentmemory://memory/mem_muscpx0c_163e7c359dc6
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-10-03T12:11:37.590Z
source: agentmemory
strength: 7
---
# Content

# Determine best time for adoption

source: hermes
session_id: 20261002_133503_36febf
resource: hermes://session/20261002_133503_36febf

# Conversation

- **Session ID:** `20261002_133503_36febf`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-02T18:35:03Z
- **Messages:** 12
- **CWD:** `/Volumes/davec`
- **Tokens:** 166000 in / 3728 out

---

### 👤 User — 2026-10-02T18:35:03Z

explain the HERMES curator adopt versus pin

### 🤖 Assistant — 2026-10-02T18:35:18Z

<details><summary>Reasoning</summary>

The user asks: "explain the HERMES curator adopt versus pin". This is about the Hermes agent's skill system — specifically the "curator" concept mentioned in skill_manage's description: "Curator consolidation only: umbrella skill that absorbed this one (must exist)". There's a mention of "curator consolidates" in the user profile memory: "If you notice two existing skills that overlap, flag it — curator consolidates."

The user wants an explanation of "adopt versus pin" in the HERMES curator. I should check the hermes-agent skill documentation or the skill_manage documentation. Let me think — is there a "curator" concept in Hermes with "adopt" and "pin" operations? The skill_manage tool has a "delete" action with "absorbed_into" field described as "Curator consolidation only: umbrella skill that absorbed this one (must exist)". That's about consolidation.

But "adopt versus pin" — I don't have direct knowledge of this. It may be in the hermes-agent skill documentation. Let me load the hermes-agent skill to check, or search the docs. The system prompt says: "When the user needs help with Hermes itself — configuring, setting up, using, extending, or troubleshooting it — ... the documentation at https://hermes-agent.nousresearch.com/docs is your authoritative reference". And "the `hermes-agent` skill has the actual commands and proven workflows — load it with skill_view(name='hermes-agent')".

So I should load the hermes-agent skill first, and possibly search the docs for "curator adopt pin". Let me do both: skill_view('hermes-agent') and web search / docs search.

Actually, let me be careful: "adopt versus pin" might be specific terminology from Hermes' skill curator feature. I don't know it from memory. I need to verify. Let me:

1. skill_view(name='hermes-agent')
2. Search docs for curator adopt pin.

Let me do these in parallel.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "Hermes agent skill curator \"adopt\" \"pin\" skills"
}
```

### 🤖 Assistant — 2026-10-02T18:35:41Z

<details><summary>Reasoning</summary>

The user asked: "explain the HERMES curator adopt versus pin". I have all the info I need from the hermes-agent skill and the web search results. Let me give a concise explanation.

Key points:

**adopt** = opt-in to curation. Writes `created_by: agent` marker in `.usage.json` so the skill becomes "curator-managed" — i.e., eligible for automatic lifecycle transitions (active → stale → archived) and the background LLM review/consolidation passes. Applies to unmanaged skills (foreground-created via `skill_manage create`, or legacy records predating the marker). Never resets the inactivity clock — adopted long-idle skills may go stale/archived on next pass. Refuses bundled, hub-installed, external, protected built-ins. Never automatic (provenance is a declaration, not inference — high patch count proves maintenance, not authorship).

**pin** = protection from deletion/transition. `"pinned": true` in `.usage.json`. Pinned skills are exempt from every auto-transition (active→stale→archived), the LLM review pass, and `skill_manage(action="delete")` refuses. Patches/edits still go through. Only agent-created (curator-managed) skills can be pinned — pin refuses on bundled/hub. Cron-referenced skills get equivalent auto-transition protection while referenced.

Opposite directions:
- adopt: "curator, you MAY manage this" (adds to managed set)
- pin: "curator, you may NOT touch this" (removes from auto-transition set)

Also note the historical bug:
