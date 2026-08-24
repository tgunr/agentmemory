---
type: Fact
title: # Explain how I can use this project EXO as an OpenAI compatible model inside of
description: # Explain how I can use this project EXO as an OpenAI compatible model inside of K

source: kilo
session_id: 019d2583-625f-7539-ac85-aa9136a297ec
resource: kilo://task/019d2583-625f-7539-ac85-aa9136a2
resource: agentmemory://memory/mem_mspcok49_8beb9fbdd575
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:51.055Z
source: agentmemory
strength: 7
---
# Content

# Explain how I can use this project EXO as an OpenAI compatible model inside of K

source: kilo
session_id: 019d2583-625f-7539-ac85-aa9136a297ec
resource: kilo://task/019d2583-625f-7539-ac85-aa9136a297ec

# Conversation

- **Task ID:** `019d2583-625f-7539-ac85-aa9136a297ec`
- **Source:** kilo
- **Started:** 2026-03-25T15:01:00Z
- **Ended:** 2026-03-25T15:03:02Z
- **Message blocks:** 16
- **Tokens:** 396037 in / 2300 out

---

### 👤 User — 2026-03-25T15:01:00Z

Explain how I can use this project EXO as an OpenAI compatible model inside of Kilo Code.

### 🤖 Assistant — 2026-03-25T15:01:22Z

<details><summary>Reasoning</summary>

The user wants to know how to use the EXO project as an OpenAI-compatible model inside of Kilo Code. Let me explore the project to understand its API structure and how it exposes OpenAI-compatible endpoints.

From the environment details, I can see that EXO is a distributed AI inference system with:
- A FastAPI server for OpenAI-compatible chat completions (mentioned in AGENTS.md)
- The API runs at http://localhost:52415
- It's built with Python and uses MLX as the inference backend

Let me look at the API documentation and code to understand how to configure it as an OpenAI-compatible provider in Kilo Code.

</details>

### 👤 User — 2026-03-25T15:01:25Z

I'll explore the EXO project's API structure to understand how to use it as an OpenAI-compatible model provider in Kilo Code.

### 🤖 Assistant — 2026-03-25T15:01:26Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "docs/api.md",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "docs/api.md",
      "content": "/Users/davec/AI/exo/docs/api.md"
    },
    {
      "path": "src/exo/api/api.py",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "src/exo/api/api.py",
      "content": "/Users/davec/AI/exo/src/exo/api/api.py"
    }
  ]
}
```

### 🤖 Assistant — 2026-03-25T15:01:37Z

<details><summary>Reasoning</summary>

Let me look at the correct API file path based on the documentation which says `src/exo/master/api.py`. I also want to check how the API server starts and what configuration options are available.

</details>

### 👤 User — 2026-03-25T15:01:38Z

Let me look at the actual API implementation to understand the OpenAI-compatible endpoints better.

### 🤖 Assistant — 2026-03-25T15:01:39Z

**Tool call: codebaseSearch**

```json
{
  "query": "OpenAI chat completions API endpoint FastAPI router",
  "path": null,
  "isOutsideWorkspace": false
}
```

### 🤖 Assistant — 2026-03-25T15:01:48Z

<details><summary>Reasoning</summary>

Let me look for the API file in the correct location. According to the docs, it should be at `src/exo/master/api.py`.

</details>

### 🤖 Assistant — 2026-03-25T15:01:50Z

**Tool call: readFile**

```json
{
  "path": "src/exo/master/api.py",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/AI/exo/src/exo/master/api.py",
  "reason": ""
}
```

### 🤖 Assistant — 2026-03-25T15:01:56Z

<details><summary>Reasoning</summary>

Let me look for the API file in the exo directory structure. Let me list the files to find it.

</details>

### 🤖 Assistant — 2026-03-25T15:01:57Z

**Tool call: listFilesRecursive**

```json
{
  "path": "src/exo",
  "isOutsideWorkspace": false,
  "content": "__init__.py  # 0 chars\n__main__.py  # 947 chars\nmain.py  # 14762 chars\napi/\napi/__init__.py  # 0 chars\napi/main.py  # 72012 chars\napi/adapters/\napi/adapters/__init__.py  # 79 chars\napi/adapters/chat_completions.py  # 10607 chars\napi/adapters/claude.py  # 15828 chars\napi/adapters/ollama.py  # 16689 chars\napi/adapters/responses.py  # 20839 chars\napi/tests/\napi/tests/test_api_error_handling.py  # 1517 chars\napi/tests/test_cancel_command.py  # 2747 chars\napi/tests/test_claude_api.py  # 6316 chars\napi/tests/test_claude_tool_use.py  # 10136 chars\napi/tests/test_openai_responses_api.py  # 1383 chars\napi/types/\napi/types/__init__.py  # 3296 chars\napi/types/api.py  # 12463 chars\napi/types/claude_api.py  # 6359 chars\napi/types/ollama_api.py  # 4196 chars\napi/types/openai_responses.py  # 11388 chars\ndownload/\ndownload/coordinator.py  # 16075 chars\ndownload/download_utils.p
