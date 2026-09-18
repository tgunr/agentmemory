---
type: Fact
title: # Ollama Models with Tool Support

source: hermes
session_id: claude__96a531bb-c
description: # Ollama Models with Tool Support

source: hermes
session_id: claude__96a531bb-c392-4a81-a57d-f69a5c8c93c8
resource: hermes://session/claude__96a531bb-c392-4a81-a57d-f69a5c8c93c8

# Conversation

- **
resource: agentmemory://memory/mem_mtj62fni_3377f3db8677
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:15:46.347Z
source: agentmemory
strength: 7
---
# Content

# Ollama Models with Tool Support

source: hermes
session_id: claude__96a531bb-c392-4a81-a57d-f69a5c8c93c8
resource: hermes://session/claude__96a531bb-c392-4a81-a57d-f69a5c8c93c8

# Conversation

- **Session ID:** `claude__96a531bb-c392-4a81-a57d-f69a5c8c93c8`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-08T18:29:52Z
- **Ended:** 2025-08-08T18:30:22Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-08T18:29:53Z

Using `ollama list` show me a table of which models can use tools.

### 🤖 Assistant — 2025-08-08T18:30:22Z

I'll help you check which Ollama models support tools by running `ollama list` and then providing information about tool support.
```
This block is not supported on your current device yet.
```

Based on the output, I can see you have many models installed. Now let me create a table showing which of these models support tools/function calling. Here's what I know about tool support for these models:

| Model Name | Tool Support | Notes |
|------------|--------------|-------|
| **qwen3:14b** | ✅ Yes | Qwen3 series has strong tool support |
| **qwen3:4B** | ✅ Yes | Qwen3 series has strong tool support |
| **qwen3:1.7b** | ✅ Yes | Qwen3 series has strong tool support |
| **qwen3:0.6b** | ✅ Yes | Qwen3 series has strong tool support |
| **qwen3:latest** | ✅ Yes | Qwen3 series has strong tool support |
| **qwen3-coder:latest** | ✅ Yes | Coding variant with tool support |
| **qwen2.5:7b** | ✅ Yes | Qwen2.5 series supports tools |
| **qwen2.5-coder:latest** | ✅ Yes | Coding variant with tool support |
| **firefunction-v2:latest** | ✅ Yes | Specifically designed for function calling |
| **mistral-nemo:latest** | ✅ Yes | Mistral models support tools |
| **deepseek-coder-v2:16b** | ⚠️ Limited | Some tool support, mainly for coding |
| **deepseek-r1:14b** | ❌ No | R1 series focuses on reasoning, not tools |
| **deepseek-r1:32b** | ❌ No | R1 series focuses on reasoning, not tools |
| **llama3.3:latest** | ✅ Yes | Llama 3.3 supports function calling |
| **llama3.1:8b** | ✅ Yes | Llama 3.1 supports function calling |
| **llama3.2:latest** | ✅ Yes | Llama 3.2 supports function calling |
| **phi4:latest** | ✅ Yes | Phi-4 has tool support |
| **gemma3:latest** | ✅ Yes | Gemma3 supports tools |
| **gemma2:latest** | ⚠️ Limited | Basic tool support |
| **yi-coder:latest** | ⚠️ Limited | Some tool support for coding tasks |
| **wizardlm2:7b** | ⚠️ Limited | Basic tool support |
| **codellama:latest** | ❌ No | Primarily for code generation, not tools |
| **codegemma:latest** | ⚠️ Limited | Some tool support for coding |
| **llava:latest** | ❌ No | Vision model, no tool support |
| **minicpm-v:latest** | ❌ No | Vision model, no tool support |
| **starcoder2:latest** | ❌ No | Code generation model, no tools |
| **embedding models** | ❌ No | Embedding models don't support tools |

**Legend:**
- ✅ **Yes**: Full tool/function calling support
- ⚠️ **Limited**: Basic or specialized tool support
- ❌ **No**: No tool support

**Best models for tool use from your collection:**
1. **qwen3:14b** - Excellent tool support, good balance of size/performance
2. **firefunction-v2:latest** - Specifically designed for function calling
3. **qwen3:latest** - Good tool support, smaller than 14b variant
4. **llama3.3:latest** - Strong tool support but very large (42GB)
5. **mistral-nemo:latest** - Good tool support, reasonable size

Would you like me to test any specific model's tool capabilities or help you set up function calling with one of these models?

`[tool_use: desktop-commander-mcp:start_process]` ollama list
`[tool_result]` Process started with PID 6076 (shell: bash) Initial output: NAME                                                                     ID              SIZE      MODIFIED      qwen3:14b                                                                bdbd181c33f2    9.3 GB    4 days ago       qwen3:4B                                                                 2bfd38a7daaf    2.6 GB    4 days ago
