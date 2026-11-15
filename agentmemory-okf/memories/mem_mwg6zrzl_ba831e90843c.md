---
type: Fact
title: # Compare HERMES thinking level costs and capabilities

source: hermes
session_i
description: # Compare HERMES thinking level costs and capabilities

source: hermes
session_id: local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5
resource: hermes://session/local-0ec0d3ac224d8
resource: agentmemory://memory/mem_mwg6zrzl_ba831e90843c
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/Ideas"]
timestamp: 2026-11-14T09:17:29.989Z
source: agentmemory
strength: 7
---
# Content

# Compare HERMES thinking level costs and capabilities

source: hermes
session_id: local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5
resource: hermes://session/local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5

# Conversation

- **Session ID:** `local-0ec0d3ac224d8adcd6a82eb78de45b58cb58c5fb62230303736c5f898b49d4c5`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-13T20:09:46Z
- **Ended:** 2026-11-14T06:16:48Z
- **Messages:** 40
- **CWD:** `/Volumes/projects/Ideas`
- **Tokens:** 27276 in / 4771 out

---

### 👤 User — 2026-11-13T20:09:46Z

give me a summary of the cost differences and capabilities of using the thinking levels in HERMES which has levels: minimal through ultra

### 🤖 Assistant — 2026-11-13T20:09:50Z

<details><summary>Reasoning</summary>

The user asks about thinking levels in Hermes: minimal through ultra — cost differences and capabilities. This is a Hermes-self question. I should check docs or local config/code. Let me look at the hermes-agent repo for reasoning effort levels.

Let me check skills: hermes-config-audit, model-selection-routing, model-switch, hermes-agent. Probably best to grep the source for "ultra" and reasoning effort.

Let me do both: grep local source and fetch docs.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"ultra\" --include=*.py --include=*.ts --include=*.md -l | head -30"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"reasoning_effort\\|thinking_level\\|thinkingLevel\" --include=*.py --include=*.ts -l | head -30"
}
```

### 🤖 Assistant — 2026-11-13T20:10:30Z

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"ultra\" hermes_constants.py | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"minimal\\|low\\|medium\\|high\\|ultra\" hermes_constants.py | grep -i \"think\\|reason\\|effort\" | head -40"
}
```

### 🤖 Assistant — 2026-11-13T20:10:33Z

<details><summary>Reasoning</summary>

Read around line 1050-1250 of hermes_constants.py.

Also check docs. Let me read the file section and look for how efforts map to tokens/budget.

</details>

**Tool call: read_file**

```json
{
  "limit": 220,
  "offset": 1050,
  "path": "/Users/davec/.hermes/hermes-agent/hermes_constants.py"
}
```

### 🤖 Assistant — 2026-11-13T20:10:36Z

<details><summary>Reasoning</summary>

Now find how these levels map to actual token budgets on the wire — `agent.reasoning_effort.clamp_effort` and provider-specific mapping. Let's grep for clamp_effort and token budgets.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"clamp_effort\" --include=*.py -l | head; echo ---; grep -rn \"xhigh\" --include=*.py -l | head -20"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"ultra\" hermes_cli/config_defaults.py hermes_cli/models.py hermes_cli/model_switch.py ui-tui/src/domain/slash.ts 2>/dev/null | head -30"
}
```

### 🤖 Assistant — 2026-11-13T20:10:53Z

<details><summary>Reasoning</summary>

Now find the wire-level mapping. Let's look at hermes_constants for effort → budget token mapping? Actually the mapping happens in the agent's LLM client. Search for "reasoning_effort" in the main agent loop / llm client file.

Let's grep for a dict {minimal: ..., low: ...} with numbers.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"\\\"minimal\\\"\" --include=*.py | grep -v tests | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes/hermes-agent && grep -rn \"EFFORT_BUDGET\\|_BUDGETS\\|budget_tokens\\|thinking_budget\" --include=*.py | grep -v tests | head -40"
}
```

### 🤖 Assistant — 2026-11-13T20:11:12Z

<details><summary>Reasoning</summary>

The best source for understanding is docs. Let me check the docs site for reasoning effort. Also check the /reasoning slash command help text and any docs in repo (docs/ dir or website). Let's grep for a docs markdown explaining the levels.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~
