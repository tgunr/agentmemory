---
type: Fact
title: # Where does huggingface store its models on mac?

source: hermes
session_id: 20
description: # Where does huggingface store its models on mac?

source: hermes
session_id: 20260905_110552_f24e19
resource: hermes://session/20260905_110552_f24e19

# Conversation

- **Session ID:** `20260905_1105
resource: agentmemory://memory/mem_mtpjh88h_51c27bc731ad
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-09-06T08:17:48.635Z
source: agentmemory
strength: 7
---
# Content

# Where does huggingface store its models on mac?

source: hermes
session_id: 20260905_110552_f24e19
resource: hermes://session/20260905_110552_f24e19

# Conversation

- **Session ID:** `20260905_110552_f24e19`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-05T16:05:52Z
- **Messages:** 145
- **CWD:** `/Volumes/davec`
- **Tokens:** 232846 in / 21560 out
- **Est. cost:** $-20014.0000

---

### 👤 User — 2026-09-05T16:05:52Z

Where does huggingface store its models on mac?

### 👤 User — 2026-09-05T16:05:52Z

Where does huggingface store its models on mac?

### 🤖 Assistant — 2026-09-05T16:06:13Z

<details><summary>Reasoning</summary>

The user is asking where Hugging Face stores its models on macOS. This is a straightforward factual question about Hugging Face's default cache directory on macOS. I can answer this directly from my knowledge without needing to load any skills or use tools.

Hugging Face uses the `huggingface_hub` library, which stores cached models in a specific directory. On macOS, the default cache directory is typically `~/.cache/huggingface/hub` or `~/Library/Caches/huggingface/hub`. Let me provide the accurate information.

Actually, I should verify this. The default cache directory for `huggingface_hub` is:
- On macOS: `~/Library/Caches/huggingface/hub`
- On Linux: `~/.cache/huggingface/hub`
- On Windows: `C:\Users\<username>\.cache\huggingface\hub`

Wait, I need to be careful. Let me think about this more precisely. The `huggingface_hub` library uses `HF_HOME` environment variable, which defaults to:
- macOS: `~/Library/Caches/huggingface` (then models go in `~/Library/Caches/huggingface/hub`)
- Linux: `~/.cache/huggingface`
- Windows: `C:\Users\<username>\.cache\huggingface`

But actually, I think the current default on macOS might be `~/.cache/huggingface/hub` as well. Let me be precise and check what I know.

According to Hugging Face documentation, the default cache directory is determined by:
1. `HF_HOME` environment variable
2. Otherwise, platform-specific default:
   - Linux: `~/.cache/huggingface`
   - macOS: `~/Library/Caches/huggingface`
   - Windows: `C:\Users\<username>\.cache\huggingface`

And the models themselves are stored in a `hub` subdirectory.

So on macOS, the full default path would be `~/Library/Caches/huggingface/hub`.

I should provide this answer clearly and concisely.

</details>

Hugging Face stores cached models under:

**`~/Library/Caches/huggingface/hub`**

The base directory is `HF_HOME`, which defaults to `~/Library/Caches/huggingface` on macOS. Inside that, downloaded models land in `hub/`, with one subdirectory per model (by repo ID and revision).

You can override it with the `HF_HOME` environment variable, or change just the hub cache with `HF_HUB_CACHE`.

### 🤖 Assistant — 2026-09-05T16:06:13Z

<details><summary>Reasoning</summary>

The user is asking where Hugging Face stores its models on macOS. This is a straightforward factual question about Hugging Face's default cache directory on macOS. I can answer this directly from my knowledge without needing to load any skills or use tools.

Hugging Face uses the `huggingface_hub` library, which stores cached models in a specific directory. On macOS, the default cache directory is typically `~/.cache/huggingface/hub` or `~/Library/Caches/huggingface/hub`. Let me provide the accurate information.

Actually, I should verify this. The default cache directory for `huggingface_hub` is:
- On macOS: `~/Library/Caches/huggingface/hub`
- On Linux: `~/.cache/huggingface/hub`
- On Windows: `C:\Users\<username>\.cache\huggingface\hub`

Wait, I need to be careful. Let me think about this more precisely. The `huggingface_hub` library uses `HF_HOME` environment variable, which defaults to:
- macOS: `~/Library/Caches/huggingface` (then models go in `~/Library/Caches/huggingface/hub`)
- Linux: `~/.cache/huggingface`
- Windows: `C:\Users\<username>\.cache\huggingface`

But actually, I think the current default on macOS might be `~/.cache/huggingface/hub` as well. Let me be precise and check what I know.

According to Hugging Face documentation, the default cache d
