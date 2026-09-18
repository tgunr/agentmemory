---
type: Fact
title: # Adding north-mini-code-1.0:mlx-nvfp4 to Ollama in all profiles

source: hermes
description: # Adding north-mini-code-1.0:mlx-nvfp4 to Ollama in all profiles

source: hermes
session_id: 20260717_041427_f7b7a8
resource: hermes://session/20260717_041427_f7b7a8

# Conversation

- **Session ID:**
resource: agentmemory://memory/mem_mtg11nr2_a045cf31dfcd
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:31:53.674Z
source: agentmemory
strength: 7
---
# Content

# Adding north-mini-code-1.0:mlx-nvfp4 to Ollama in all profiles

source: hermes
session_id: 20260717_041427_f7b7a8
resource: hermes://session/20260717_041427_f7b7a8

# Conversation

- **Session ID:** `20260717_041427_f7b7a8`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-17T09:14:27Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 100
- **CWD:** `/Users/davec`
- **Tokens:** 163251 in / 18569 out

---

### 👤 User — 2026-07-17T09:14:27Z

Add north-mini-code-1.0:mlx-nvfp4 to the list of ollama models in all profiles

### 🤖 Assistant — 2026-07-17T09:14:35Z

**Tool call: search_files**

```json
{
  "pattern": "north-mini-code-1.0:mlx-nvfp4",
  "target": "files",
  "path": "/Users/davec/.hermes"
}
```

**Tool call: search_files**

```json
{
  "pattern": "ollama",
  "target": "files",
  "path": "/Users/davec/.hermes"
}
```

### 🤖 Assistant — 2026-07-17T09:14:42Z

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "*.yaml",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "*.json",
  "target": "files"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "*.toml",
  "target": "files"
}
```

### 🤖 Assistant — 2026-07-17T09:14:47Z

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": "models:",
  "file_glob": "*.yaml",
  "output_mode": "content"
}
```

**Tool call: search_files**

```json
{
  "path": "/Users/davec/.hermes",
  "pattern": ":nvfp4|:mlx|north-mini",
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-07-17T09:14:54Z

**Tool call: read_file**

```json
{
  "path": "/Users/davec/.hermes/config.yaml",
  "offset": 540,
  "limit": 100
}
```

**Tool call: search_files**

```json
{
  "file_glob": "*.yaml",
  "target": "files",
  "path": "/Users/davec/.hermes/profiles"
}
```

### 🤖 Assistant — 2026-07-17T09:14:59Z

**Tool call: search_files**

```json
{
  "pattern": "config.yaml",
  "target": "files",
  "path": "/Users/davec/.hermes"
}
```

**Tool call: search_files**

```json
{
  "pattern": "ollama-launch",
  "path": "/Users/davec/.hermes",
  "file_glob": "config.yaml",
  "output_mode": "content"
}
```

### 🤖 Assistant — 2026-07-17T09:15:06Z

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/.hermes/profiles/ 2>/dev/null; echo \"---PROFILE CONFIGS---\"; find /Users/davec/.hermes/profiles -maxdepth 2 -name \"config.yaml\" -o -maxdepth 2 -name \"config.yml\" 2>/dev/null; echo \"---any providers block in profiles---\"; grep -rl \"ollama-launch\" /Users/davec/.hermes/profiles 2>/dev/null | head"
}
```

### 🤖 Assistant — 2026-07-17T09:15:19Z

**Tool call: search_files**

```json
{
  "file_glob": "config.yaml",
  "output_mode": "content",
  "path": "/Users/davec/.hermes/profiles",
  "pattern": "ollama-launch"
}
```

### 🤖 Assistant — 2026-07-17T09:15:25Z

**Tool call: read_file**

```json
{
  "limit": 60,
  "offset": 560,
  "path": "/Users/davec/.hermes/profiles/ollama/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 60,
  "offset": 560,
  "path": "/Users/davec/.hermes/profiles/personal/config.yaml"
}
```

### 🤖 Assistant — 2026-07-17T09:15:31Z

**Tool call: read_file**

```json
{
  "limit": 20,
  "offset": 566,
  "path": "/Users/davec/.hermes/profiles/cc/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 20,
  "offset": 566,
  "path": "/Users/davec/.hermes/profiles/pveroot/config.yaml"
}
```

### 🤖 Assistant — 2026-07-17T09:15:36Z

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 1,
  "path": "/Users/davec/.hermes/profiles/cc/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 30,
  "offset": 1,
  "path": "/Users/davec/.hermes/profiles/pveroot/config.yaml"
}
```

### 🤖 Assistant — 2026-07-17T09:15:44Z

**Tool call: read_file**

```json
{
  "limit": 12,
  "offset": 1,
  "path": "/Users/davec/.hermes/profiles/shop/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 12,
  "offset": 1,
  "path": "/Users/davec/.hermes/profiles/ranch/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 12,
  "offse
