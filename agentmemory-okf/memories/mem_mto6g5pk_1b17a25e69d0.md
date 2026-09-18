---
type: Fact
title: # Uncensored LLM models overview

source: hermes
session_id: 20260902_070053_0e0
description: # Uncensored LLM models overview

source: hermes
session_id: 20260902_070053_0e0696
resource: hermes://session/20260902_070053_0e0696

# Conversation

- **Session ID:** `20260902_070053_0e0696`
- **So
resource: agentmemory://memory/mem_mto6g5pk_1b17a25e69d0
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:17.497Z
source: agentmemory
strength: 7
---
# Content

# Uncensored LLM models overview

source: hermes
session_id: 20260902_070053_0e0696
resource: hermes://session/20260902_070053_0e0696

# Conversation

- **Session ID:** `20260902_070053_0e0696`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-09-02T12:01:10Z
- **Ended:** 2026-09-04T12:09:22Z
- **Messages:** 2
- **CWD:** `/Users/davec`
- **Tokens:** 2796 in / 579 out

---

### 👤 User — 2026-09-02T12:01:10Z

[IMPORTANT: The user has invoked the "uncensored-llm-models" skill, indicating they want you to follow its instructions. The full skill content is loaded below.]

---
name: uncensored-llm-models
description: "Uncensored and NSFW-capable LLM models for local deployment, model naming conventions, and hardware sizing guidance"
version: 1.1.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [models, uncensored, nsfw, ollama, roleplay]
---

# Uncensored LLM Models for Local Use

## Overview
When users need locally-deployed models that handle NSFW content, roleplay, or uncensored use cases, this skill provides vetted model recommendations with correct naming conventions and hardware requirements.

## Key Findings (2026)

### 12-13B Tier (Best for 32GB M4 Mac Mini)
| Model | Pull Command | Size | Notes |
|-------|--------------|------|-------|
| **Mag Mell 12B** | `ollama pull HammerAI/mn-mag-mell-r1:12b-q4_K_M` | ~7.5GB | Based on Mistral Nemo, excellent for roleplay/storytelling, uncensored |
| MythoMax-L2-13B | `ollama pull mythomax` or HF variants | ~8GB | Classic uncensored RP model, still solid |

### 8B Tier (Fast on M4)
| Model | Pull Command | Size | Notes |
|-------|--------------|------|-------|
| Stheno 3.2/3.4 8B | `ollama pull fluffy/llama-3.1-8b-stheno-v3.4:q5_K_M` | ~6GB | Purpose-built for roleplay, very compliant |
| Lunaris 8B | `ollama pull gurubot/llama3-lunaris` | ~6GB | Generalist RP model |
| goonsai NSFW 3B | `ollama pull goonsai/qwen2.5-3B-goonsai-nsfw-100k` | ~2GB | Completely uncensored, trained on 100K examples |

### 24B+ Tier (Higher VRAM)
- **Mag Mell Alternative**: Use `inflatebot/MN-12B-Mag-Mell-R1` or `nchapman/mn-12b-mag-mell-r1` variants
- **Cydonia 24B**, **Snowdrop 32B**, **Nevoria 70B** - Available for high-end hardware

## Ollama Model Naming Conventions

| Provider | Format | Examples |
|----------|--------|----------|
| Ollama | `namespace/model-name:tag` or `model:tag` | `HammerAI/mn-mag-mell-r1:12b-q4_K_M`, `fluffy/llama-3.1-8b-stheno-v3.4:q5_K_M` |
| HuggingFace (custom) | Need modelfile | See `references/ollama-modelfile.md` |

**Pitfall: Simple model names often don't work.** Many community models live under organizational namespaces:
- `mag-mell` → `HammerAI/mn-mag-mell-r1:12b-q4_K_M` (NOT just `mag-mell`)
- Use the full namespace/tag format when pulling

## Hardware Sizing (Unified Memory Mac)

| Memory | Recommended Max | Good Performance |
|--------|-----------------|-----------------|
| 16-18GB | 8B-12B models | Q4_K_M quantization |
| 32GB | 12B-24B models | Q4_K_M or Q6_K |
| 40GB+ | 32B-70B models | Q4_K_M or higher |

## SillyTavern Integration

### Quick Install:
```bash
cd ~
git clone https://github.com/SillyTavern/SillyTavern.git
cd SillyTavern
npm install
npm start
```

### Connect to Ollama:
1. Click the **plug icon (API Connections)** in the top bar
2. Set **API** dropdown to **"Text Completion"** (NOT Chat Completion)
3. Set **API Type** dropdown to **"Ollama"** 
4. Enter URL: `http://127.0.0.1:11434` (no trailing slash)
5. Select your model from the **Ollama Model** dropdown
6. Click **Connect** - you should see the model name in the status bar

### Pitfall: whitelistMode Blocks Localhost
By default, SillyTavern's `config.yaml` has `whitelistMode: true`, which blocks localhost connections and causes "settings cannot be saved" errors. Fix in `config.yaml`:
```yaml
whitelistMode: false
```

### Converting Personas to Characters
See `references/persona-conversion.md` for critical information about converting persona files (like SOUL.md) into SillyTavern characters and user personas. **Important**: Both must be PNG files with embedded JSON (chara_card_v2 format), NOT 
