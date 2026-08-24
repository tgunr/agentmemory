---
type: Fact
title: # Context Length Adjustment and Model Switch

source: hermes
session_id: 2026061
description: # Context Length Adjustment and Model Switch

source: hermes
session_id: 20260614_115758_e5f67d
resource: hermes://session/20260614_115758_e5f67d

# Conversation

- **Session ID:** `20260614_115758_e5
resource: agentmemory://memory/mem_msp0cevf_10c79fcb95e5
tags: ["okf", "okf-hermes", "hermes", "/Volumes/AI/Servers/MCP"]
timestamp: 2026-08-11T18:42:29.061Z
source: agentmemory
strength: 7
---
# Content

# Context Length Adjustment and Model Switch

source: hermes
session_id: 20260614_115758_e5f67d
resource: hermes://session/20260614_115758_e5f67d

# Conversation

- **Session ID:** `20260614_115758_e5f67d`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-14T16:58:37Z
- **Ended:** 2026-06-14T17:02:31Z
- **Messages:** 40
- **CWD:** `/Volumes/AI/Servers/MCP`
- **Tokens:** 682080 in / 2036 out

---

### 👤 User — 2026-06-14T16:58:37Z

[Note: model was just switched from qwen2.5-coder:7b-instruct-q4_K_S to kilo-auto/free via Kilo Gateway. Adjust your self-identification accordingly.]

set context length to 32K

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The user wants to set the context length to 32K. This is a configuration change for Hermes Agent. Let me load the hermes-agent skill first since this involves configuring Hermes itself.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The skill shows the configuration options. I can see in the Config Sections table that `model` has a `context_length` key. Let me check the current config to see what's set, and then set it to 32K (32768 tokens).

According to the skill, I should use:
- `hermes config set section.key value` to change config values

The syntax would be: `hermes config set model.context_length 32768`

Let me run this command.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config set model.context_length 32768"
}
```

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The config was set successfully. Let me verify the change was applied by checking the current config.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config | grep -A2 context_length"
}
```

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The context length is now set to 32768 (32K). Let me also check if this needs to be added to the git repo since the memory notes mention that .hermes is a git repo and config-related changes should be tracked.


</details>

**Tool call: terminal**

```json
{
  "command": "git -C ~/.hermes ls-files config.yaml 2>/dev/null || echo \"Not tracked\""
}
```

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The config.yaml is tracked. Let me add and commit this change.


</details>

**Tool call: terminal**

```json
{
  "command": "git -C ~/.hermes add config.yaml && git -C ~/.hermes commit -m \"Set context_length to 32K (32768 tokens)\""
}
```

### 🤖 Assistant — 2026-06-14T16:59:37Z

<details><summary>Reasoning</summary>


The change is committed. Let me also check if the model was actually switched or if I need to update that too.


</details>

Done. Context length is now set to 32K and committed to the `.hermes` git repo.

I noticed you mentioned the model switch to `kilo-auto/free` via Kilo Gateway, but the config still shows `qwen2.5-coder:7b-instruct-q4_K_S` with Ollama. Would you like me to also set the model to your preferred `qwen3:1.7b`?

### 👤 User — 2026-06-14T16:59:54Z

yes

### 🤖 Assistant — 2026-06-14T17:01:47Z

<details><summary>Reasoning</summary>


The user wants me to set the model to qwen3:1.7b. Let me do that.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config set model.default qwen3:1.7b"
}
```

### 🤖 Assistant — 2026-06-14T17:01:47Z

<details><summary>Reasoning</summary>


Good, the model is set. Let me verify and commit this change as well.


</details>

**Tool call: terminal**

```json
{
  "command": "hermes config | grep -A2 \"default\\|context_length\""
}
```

### 🤖 Assistant — 2026-06-14T17:01:47Z

<details><summary>Reasoning</summary>


Good, model is now set to qwen3:1.7b. Let me commit this change as well.


</details>

**Tool call: terminal**

```json
{
  "command": "git -C ~/.hermes add config.yaml && git -C ~/.hermes commit -m \"Set default model to qwen3:1.7b\""
}
```

### 🤖 Assistant — 2026-06-14T17:01:47Z

<details><summary>Reasoning</summary>


Both changes are 
