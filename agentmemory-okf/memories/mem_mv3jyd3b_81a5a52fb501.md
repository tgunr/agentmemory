---
type: Fact
title: # Generalize /project-workspace-setup or create /project-cnc

source: hermes
ses
description: # Generalize /project-workspace-setup or create /project-cnc

source: hermes
session_id: 20261010_112800_bc1c5e
resource: hermes://session/20261010_112800_bc1c5e

# Conversation

- **Session ID:** `20
resource: agentmemory://memory/mem_mv3jyd3b_81a5a52fb501
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261010_112800_bc1c5e"]
timestamp: 2026-10-11T08:19:36.894Z
source: agentmemory
strength: 7
---
# Content

# Generalize /project-workspace-setup or create /project-cnc

source: hermes
session_id: 20261010_112800_bc1c5e
resource: hermes://session/20261010_112800_bc1c5e

# Conversation

- **Session ID:** `20261010_112800_bc1c5e`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-10T16:29:27Z
- **Messages:** 18
- **Tokens:** 19753 in / 8614 out

---

### 👤 User — 2026-10-10T16:29:27Z

Need to change the /project-workspace-setup  to be more generic, it is too CNC specific. Or rename it to /project-cnc and create a new more generic one

### 🤖 Assistant — 2026-10-10T16:29:33Z

<details><summary>Reasoning</summary>

Let me look at the skill first.

</details>

**Tool call: skill_view**

```json
{
  "name": "project-workspace-setup"
}
```

### 🤖 Assistant — 2026-10-10T16:31:03Z

<details><summary>Reasoning</summary>

The skill is already mostly generic — CNC-specific parts: tags include cnc, category list examples, brief "Open Questions" CNC examples, section 5 Feeds & Speeds, related skills list. The user asks: either make it more generic, or rename to /project-cnc and create a new generic one.

Given the user prefers class-level/umbrella names, best: make `project-workspace-setup` fully generic (strip CNC specifics), and optionally create `project-cnc` skill with the CNC-specific blocks. Actually the cleaner option: rename this to `project-cnc`... but the skill is 80% generic. The generic core (registry, workspace dirs, brief) is the valuable part; CNC adds feeds&speeds and open-questions examples. Per user's class-level naming preference: keep generic `project-workspace-setup` as the umbrella, and extract CNC bits into `project-cnc` (or add CNC as optional block already exists).

Simplest: split — patch project-workspace-setup to remove CNC specifics (keep a pointer to project-cnc), and create a new `project-cnc` skill that layers CNC specifics on top (feeds & speeds section, CNC open questions, related CNC skills).

But should I ask the user which approach? They said "either... or..." — I can decide. The skill content is genuinely generic scaffolding with CNC add-ons; splitting is cleaner than duplicating. I'll do the split: generic stays project-workspace-setup (widened naming), CNC extras go to project-cnc. Actually wait — CNC skills already exist: vectric-cam, feeds-speeds-calculator mentioned... Let me check if those exist. Related skills listed: feeds-speeds-calculator, cnc-tooling-guide etc. — may not exist in this profile's skill list (I see vectric-cam in cnc-cam category). The skill lives in autonomous-ai-agents category dir.

Decision: patch the generic skill to remove CNC-specific bits and reference a new `project-cnc` extension skill; create `project-cnc` with the CNC blocks. Let me do it with skill_manage.

Generic skill new content: keep steps 1-4, generic brief, pitfalls minus CNC mentions, related skills section referencing project-cnc.

Let me write the patch. I'll do patch ops:

1. Frontmatter: remove cnc from tags, update description.
2. "When to Use" — drop CNC examples or keep minimal? Make generic.
3. Category example: `<plaque|sign|...>` → generic.
4. Section 4 open questions CNC examples → generic examples.
5. Section 5 Feeds & Speeds → move to project-cnc, replace with pointer.
6. Related skills → point to project-cnc.

And create project-cnc skill with: when to use (CNC project workspace), add feeds&speeds section, CNC open questions block, related CNC skills (vectric-cam etc.).

Easier to do one content rewrite? The skill_manage patch with several ops works. But content replace (full rewrite) is simpler and safer. I'll use patch for targeted changes though — multiple patches in one atomic call.

Let me draft the new generic SKILL.md fully and use... Actually "patch (targeted old_string/new_string fix — preferred; content alone REPLACES the whole file)". Multiple patch ops in one call are fine. But there are many spots; a full rewrite via patch with content? The content-only shape replaces whole file — that's allowed for patch action too ("Full SKILL.md rewrite (REPLACES the whole file; last resort)"). I'll do targeted patches — count the spot
