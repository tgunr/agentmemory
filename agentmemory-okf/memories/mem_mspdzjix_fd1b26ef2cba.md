---
type: Fact
title: # Locating The SOUL.md System Prompt

source: hermes
session_id: 20260708_034758
description: # Locating The SOUL.md System Prompt

source: hermes
session_id: 20260708_034758_7d60ca
resource: hermes://session/20260708_034758_7d60ca

# Conversation

- **Session ID:** `20260708_034758_7d60ca`
- 
resource: agentmemory://memory/mem_mspdzjix_fd1b26ef2cba
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:23.145Z
source: agentmemory
strength: 7
---
# Content

# Locating The SOUL.md System Prompt

source: hermes
session_id: 20260708_034758_7d60ca
resource: hermes://session/20260708_034758_7d60ca

# Conversation

- **Session ID:** `20260708_034758_7d60ca`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-08T08:48:02Z
- **Messages:** 50
- **CWD:** `/Users/davec`
- **Tokens:** 166052 in / 7169 out
- **Est. cost:** $0.1392

---

### 👤 User — 2026-07-08T08:48:02Z

In the jo profile a session thinking reads:
But I should be careful. The actual governing instructions come from the system prompt (which is what I was given at the top). The SOUL.md is the profile persona. They're largely consistent, but the system prompt's "Tone & Boundaries" section said "No anatomical grotesqueries; beauty and tension, never cruelty" while SOUL.md says "Anatomical descriptions and sensations are permitted; beauty and tension, never cruelty."
Where is this system prompt and how do i change it?

### 🤖 Assistant — 2026-07-08T08:50:22Z

<details><summary>Reasoning</summary>

The user is asking about a "system prompt" that was referenced in a jo profile session. They want to know where this system prompt lives and how to change it — specifically a "Tone & Boundaries" section that says "No anatomical grotesqueries; beauty and tension, never cruelty."

This is about Hermes Agent configuration. Let me load the hermes-agent skill first since this is about configuring Hermes itself.

The "system prompt" in question is likely constructed from multiple sources:
1. The persona file (PERSONA.md or similar) in the profile
2. The SOUL.md file 
3. System-level instructions that Hermes generates

The phrase "system prompt's Tone & Boundaries section" suggests this might be coming from the profile's persona configuration, or it could be a system-level instruction that Hermes injects. Let me check what files exist in the jo profile and how Hermes constructs its system prompt.


I need to examine the hermes-agent skill to see how system prompts are built and where these tone constraints might be defined.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-07-08T08:50:22Z

<details><summary>Reasoning</summary>

The user wants to know where the "system prompt" is that contains the "Tone & Boundaries" section. The jo profile session's internal monologue (the "thinking" part) referenced a system prompt that says "No anatomical grotesqueries; beauty and tension, never cruelty" while the SOUL.md says "Anatomical descriptions and sensations are permitted; beauty and tension, never cruelty."

This is about the system prompt that Hermes constructs from various sources. Let me look at what the jo profile has and how Hermes builds its system prompt. The key areas to investigate:

1. The jo profile's persona file (PERSONA.md or similar)
2. The SOUL.md in the jo profile
3. The `agent/prompt_builder.py` which builds the system prompt
4. Any config.yaml settings about personality/system prompt

Let me first look at the jo profile structure and what files exist there.

</details>

**Tool call: search_files**

```json
{
  "pattern": "*",
  "target": "files",
  "path": "/Users/davec/.hermes/profiles/jo"
}
```

**Tool call: search_files**

```json
{
  "pattern": "SOUL.md",
  "target": "files",
  "path": "/Users/davec/.hermes/profiles/jo"
}
```

### 🤖 Assistant — 2026-07-08T08:50:22Z

<details><summary>Reasoning</summary>

Good, there's a SOUL.md at `/Users/davec/.hermes/profiles/jo/SOUL.md`. But the user's session "thinking" mentioned a "system prompt" that has a "Tone & Boundaries" section. Let me also check:

1. The config.yaml for the jo profile to see if there's a personality setting
2. The SOUL.md content
3. The MEMORY.md and USER.md to see if there's system prompt or persona content there
4. The default profile's PERSONA.md or similar

The "system prompt" the thinking refers to is likely either:
- A PERSONA.md file in the profile root
- The SOUL.md file
- Something in the MEMORY.md or USER.md
- The system prompt that Hermes constructs from the profile's persona configuration

Let me read the SOUL.md,
