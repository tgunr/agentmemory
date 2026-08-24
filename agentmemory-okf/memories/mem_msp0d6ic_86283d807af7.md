---
type: Fact
title: # SOUL.md terseness and token cost

source: hermes
session_id: 20260724_033407_5
description: # SOUL.md terseness and token cost

source: hermes
session_id: 20260724_033407_524a11
resource: hermes://session/20260724_033407_524a11

# Conversation

- **Session ID:** `20260724_033407_524a11`
- **
resource: agentmemory://memory/mem_msp0d6ic_86283d807af7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-11T18:43:04.858Z
source: agentmemory
strength: 7
---
# Content

# SOUL.md terseness and token cost

source: hermes
session_id: 20260724_033407_524a11
resource: hermes://session/20260724_033407_524a11

# Conversation

- **Session ID:** `20260724_033407_524a11`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-24T08:34:15Z
- **Messages:** 35
- **CWD:** `/Users/davec`
- **Tokens:** 30857 in / 7144 out

---

### 👤 User — 2026-07-24T09:40:41Z

since the SOUL.md file is sent on every message shouldn't it be as terse as possible?

### 🤖 Assistant — 2026-07-24T09:41:04Z

<details><summary>Reasoning</summary>

The user is asking a question about SOUL.md - they're noting it's "sent on every message" and questioning whether it should be as terse as possible. Interesting — the system prompt says SOUL.md is blocked due to prompt injection. But the user is asking a conceptual question, not asking me to load it.

Let me think about this. The user is making a valid observation based on their understanding. But there's a nuance: in this actual system, SOUL.md was NOT loaded because it was blocked due to potential prompt injection (html_comment_injection). So it's not actually being sent on every message in this case.

But more fundamentally, the question is about the design philosophy. Let me address it accurately:

1. The premise "SOUL.md is sent on every message" — in the Hermes architecture, SOUL.md is part of the system prompt context. Actually, let me reconsider. The system prompt I receive includes a lot of stuff but SOUL.md was blocked here. In general, the persistent context (system prompt, memory, etc.) is injected every turn.

2. The user's point: if something is injected every turn, it consumes context tokens, so it should be terse.

This is a legitimate design consideration. However, there's a tradeoff:
- Terse = less token cost per turn, but might lose nuance/important directives
- Verbose = more cost but more guidance

Actually, the real answer here: the system prompt overhead (instructions, skills list, memory) IS sent every turn. This is inherent. The question of whether SOUL.md specifically should be terse depends on what it contains.

But wait — I should be honest about what I actually know. The SOUL.md file was blocked from loading in THIS session due to a detected prompt injection attempt (html_comment_injection). So I can't actually see its contents. I should be transparent about that.

Let me give a genuinely useful answer:
- Acknowledge the valid point about per-turn context cost
- Note the actual architecture: system prompt / persistent context IS resent each turn, so yes, verbosity there has a recurring cost
- But there's a tradeoff — SOUL.md typically holds identity/values/operating principles that need to be present every turn to be effective
- The real optimization: put stable, high-value directives in SOUL.md; keep it lean; move volatile/large stuff to skills or memory that's loaded conditionally

I should also surface the actual situation: that SOUL.md was blocked this session. Let me be honest about that. Actually, the user might be confused thinking it's loaded. Let me clarify.

Let me also check — do I have a skill about SOUL.md? There's a reference in memory: "SOUL.md beats harness." But no skill specifically. 

I think the best response is a concise, honest answer that:
1. Confirms the premise is broadly right (per-turn injection = recurring token cost)
2. Notes the nuance (SOUL.md was actually blocked this session, so it's not currently in context)
3. Gives the practical design guidance: terse on breadth, but keep high-signal directives; offload bulk to skills/memory

I don't need tools for this — it's a conceptual/conversational question. But should I load a skill? No skill matches "should SOUL.md be terse" — that's a design philosophy question, not a task. None of the available skills are relevant to answering this. So I'll answer directly.

Let me also reconsider: is there tension with the fact that the system prompt itself (the giant instruction set I got) is also resent every turn and is NOT terse? That's a fair point the user implies. The user is essentially right that there's a
