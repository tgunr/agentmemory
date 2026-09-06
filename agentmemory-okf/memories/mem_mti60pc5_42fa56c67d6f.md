---
type: Fact
title: # Ollama Models with Tool Support

source: claude
session_id: 96a531bb-c392-4a81
description: # Ollama Models with Tool Support

source: claude
session_id: 96a531bb-c392-4a81-a57d-f69a5c8c93c8
resource: claude://conversation/96a531bb-c392-4a81-a57d-f69a5c8c93c8

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mti60pc5_42fa56c67d6f
tags: ["okf", "okf-claude", "claude", "claude://conversation/96a531bb-c392-4a81-a57d-f69a5c8c93c8"]
timestamp: 2026-09-01T04:26:39.482Z
source: agentmemory
strength: 7
---
# Content

# Ollama Models with Tool Support

source: claude
session_id: 96a531bb-c392-4a81-a57d-f69a5c8c93c8
resource: claude://conversation/96a531bb-c392-4a81-a57d-f69a5c8c93c8

# Conversation

- **Session ID:** `96a531bb-c392-4a81-a57d-f69a5c8c93c8`
- **Source:** claude
- **Started:** 2025-08-08T18:29:52Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user requested help identifying which models in their Ollama installation support tool/function calling capabilities. They wanted this information presented in a table format based on the output of `ollama list`. Claude executed the command and discovered the user has an extensive collection of 30+ models including various versions of Qwen3, Qwen2.5, DeepSeek, Llama, Mistral, Phi, Gemma, and specialized coding models like CodeLlama and StarCoder2, plus vision models and embedding models.

Claude provided a comprehensive table categorizing each model's tool support into three levels: full support (✅), limited support (⚠️), or no support (❌). The analysis revealed that Qwen3 series models, FireFunction-v2, Llama 3.1+, Mistral-Nemo, and Phi-4 offer the strongest tool support, while vision models, embedding models, and pure code generation models typically lack tool capabilities. Claude highlighted that qwen3:14b, firefunction-v2:latest, and llama3.3:latest would be the best choices from the user's collection for tool-based tasks, noting the trade-offs between model size and performance.

**Tool Knowledge**

Using the desktop-commander-mcp integration, the `ollama list` command successfully enumerated all installed models with their sizes and modification dates. The command executed within the 10-second timeout and provided clean tabular output showing model names, IDs, sizes, and timestamps. This approach proved effective for auditing large Ollama installations where users may have accumulated many models over time and need to understand their functional capabilities rather than just storage requirements.

---

### 👤 User — 2025-08-08T18:29:53Z

Using `ollama list` show me a table of which models can use tools.

---

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
| **codegemma:latest** | ⚠️ Limited | Some tool support f
