---
type: Fact
title: # Fixing Jo Profile Model Connection Issues

source: hermes
session_id: 20260708
description: # Fixing Jo Profile Model Connection Issues

source: hermes
session_id: 20260708_040616_788f5b
resource: hermes://session/20260708_040616_788f5b

# Conversation

- **Session ID:** `20260708_040616_788
resource: agentmemory://memory/mem_mspdvhor_2242287276aa
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:14.167Z
source: agentmemory
strength: 7
---
# Content

# Fixing Jo Profile Model Connection Issues

source: hermes
session_id: 20260708_040616_788f5b
resource: hermes://session/20260708_040616_788f5b

# Conversation

- **Session ID:** `20260708_040616_788f5b`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-08T09:06:18Z
- **Ended:** 2026-07-08T10:10:16Z
- **Messages:** 95
- **CWD:** `/Users/davec`
- **Tokens:** 196383 in / 18300 out
- **Est. cost:** $0.3913

---

### 👤 User — 2026-07-08T09:06:18Z

The jo profile is having trouble connecting to the model, investigate

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>

The user is asking me to investigate why the jo profile is having trouble connecting to the model. Let me first load the hermes-agent skill and then investigate the jo profile's configuration.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: search_files**

```json
{
  "pattern": "config.yaml",
  "target": "files",
  "path": "/Users/davec/.hermes/profiles/jo"
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>

Let me check the jo profile's config.yaml and .env to see what model/provider it's using, and then check if there are any relevant logs.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo/config.yaml"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo",
  "pattern": ".env",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo",
  "pattern": "logs/*.log",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>


Let me read the .env and the logs to see what's happening.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo/.env"
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>


Let me check the logs to see what errors are occurring.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/profiles/jo/logs/errors.log"
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>


I can see the problem clearly now. The jo profile has several issues:

1. The config.yaml specifies `model.default: HammerAI/mn-mag-mell-r1:latest` but:
   - The logs show it's trying to use `HammerAI/mn-mag-mell-r1:12b-q4_K_M` which doesn't exist
   - The model `HammerAI/mn-mag-mell-r1:latest` doesn't support tools (got HTTP 400 error)

2. The config shows `model.provider: ollama` but there's also a top-level `providers.ollama` section - the logs show it's being treated as either "custom" or "ollama" provider inconsistently.

Let me check what models are actually available in Ollama and also look at the ollama-management skill for proper setup.


</details>

**Tool call: skill_view**

```json
{
  "name": "ollama-management"
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>


Now let me check what Ollama models are actually available on the system. The jo profile is configured to use Ollama at `http://127.0.0.1:11434/v1`.


</details>

**Tool call: terminal**

```json
{
  "command": "ollama list 2>/dev/null || echo \"ollama not installed or not running\""
}
```

### 🤖 Assistant — 2026-07-08T09:19:15Z

<details><summary>Reasoning</summary>


Now I see the full picture. Let me analyze what's happening:

1. The jo profile is configured to use `HammerAI/mn-mag-mell-r1:latest` with the Ollama provider
2. The model `HammerAI/mn-mag-mell-r1:latest` DOES exist in Ollama (line 52 in the output)
3. However, there's an inconsistency in the config - the config says `HammerAI/mn-mag-mell-r1:latest` but the error logs show:
   - First it tried `HammerAI/mn-mag-mell-r1:12b-q4_K_M` (which doesn't exist)
   - Then it tried `HammerAI/mn-mag-mell-r1:latest` which "does not support tools"

So there are two issues:
1. The model name seems to be getting modified somewhere (adding `:12b-q4_K_M` suffix)
2. The `HammerAI/mn-mag-mell-r1:latest` model itself doesn't support tool calling
