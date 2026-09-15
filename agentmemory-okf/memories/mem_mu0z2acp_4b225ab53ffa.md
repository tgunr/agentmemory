---
type: Fact
title: # Find Hermes Kilo model token usage

source: hermes
session_id: 20260913_003358
description: # Find Hermes Kilo model token usage

source: hermes
session_id: 20260913_003358_913bc6
resource: hermes://session/20260913_003358_913bc6

# Conversation

- **Session ID:** `20260913_003358_913bc6`
- 
resource: agentmemory://memory/mem_mu0z2acp_4b225ab53ffa
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-14T08:19:33.342Z
source: agentmemory
strength: 7
---
# Content

# Find Hermes Kilo model token usage

source: hermes
session_id: 20260913_003358_913bc6
resource: hermes://session/20260913_003358_913bc6

# Conversation

- **Session ID:** `20260913_003358_913bc6`
- **Source:** desktop
- **Model:** stepfun/step-3.7-flash:free
- **Started:** 2026-09-13T05:33:58Z
- **Ended:** 2026-09-13T16:23:43Z
- **Messages:** 59
- **CWD:** `/Volumes/davec`
- **Tokens:** 290046 in / 5642 out

---

### 👤 User — 2026-09-13T05:33:59Z

something in Hermes, I believe, is using my Kilo efficient model and eating up code tokens. I need to find out what that is and stop it because it's costing me money

### 👤 User — 2026-09-13T05:33:59Z

something in Hermes, I believe, is using my Kilo efficient model and eating up code tokens. I need to find out what that is and stop it because it's costing me money

### 🤖 Assistant — 2026-09-13T05:34:22Z

<details><summary>Reasoning</summary>

The user is concerned that something in Hermes is using their "Kilo efficient model" and consuming code tokens, which is costing them money. They want to identify what's doing this and stop it.

Let me break this down:
1. Hermes is an AI agent framework
2. They mention "Kilo efficient model" - this likely refers to a specific model configuration or provider
3. They're concerned about code token consumption
4. They want to find the source and stop it

First, I need to understand what tools I have available. Looking at my available tools, I have:
- terminal: Execute shell commands
- skill_view: Load skills
- search_files: Search files
- read_file: Read files
- memory: Access memory

I should start by checking Hermes configuration and logs to understand what's happening. The user mentions "Kilo" which could be:
- Kilo Code integration
- Kilo model provider
- Something related to Kilo agent

Let me check relevant skills first - there are skills like "kilo-agentmemory-integration", "kilo-code-integration", and "hermes-agent". Let me also check for any configuration related to models and token usage.

I should look at:
1. Hermes config files (config.yaml, profiles)
2. Active processes
3. Recent logs
4. Model usage tracking

Let me start by exploring the Hermes configuration and looking for any Kilo-related settings.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && ls -la && echo \"---\" && cat config.yaml 2>/dev/null | head -100"
}
```

**Tool call: terminal**

```json
{
  "command": "ps aux | grep -iE '(kilo|hermes|ollama)' | grep -v grep"
}
```

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && ls -la profiles/ 2>/dev/null && echo \"---\" && find profiles -name 'config.yaml' -exec echo {} \\; -exec cat {} \\; 2>/dev/null | head -200"
}
```

### 🤖 Assistant — 2026-09-13T05:34:22Z

<details><summary>Reasoning</summary>

The user is concerned that something in Hermes is using their "Kilo efficient model" and consuming code tokens, which is costing them money. They want to identify what's doing this and stop it.

Let me break this down:
1. Hermes is an AI agent framework
2. They mention "Kilo efficient model" - this likely refers to a specific model configuration or provider
3. They're concerned about code token consumption
4. They want to find the source and stop it

First, I need to understand what tools I have available. Looking at my available tools, I have:
- terminal: Execute shell commands
- skill_view: Load skills
- search_files: Search files
- read_file: Read files
- memory: Access memory

I should start by checking Hermes configuration and logs to understand what's happening. The user mentions "Kilo" which could be:
- Kilo Code integration
- Kilo model provider
- Something related to Kilo agent

Let me check relevant skills first - there are skills like "kilo-agentmemory-integration", "kilo-code-integration", and "hermes-agent". Let me also check for any configuration related to models and token usage.

I should look at:
1. Hermes config files (config.yaml, profiles)
2. Active processes
3. Recent logs
4. Model usage tracking

Let me start by exploring the Hermes configuration and looking for any Kilo-related settings.

</details>

**
