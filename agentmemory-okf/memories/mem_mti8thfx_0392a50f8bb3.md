---
type: Fact
title: # Ollama Role-Play Setup

source: abacus
session_id: f90f487a0
resource: abacus:
description: # Ollama Role-Play Setup

source: abacus
session_id: f90f487a0
resource: abacus://conversation/f90f487a0

# Conversation

- **Session ID:** `f90f487a0`
- **Source:** abacus.ai
- **Project:** AI Vault

resource: agentmemory://memory/mem_mti8thfx_0392a50f8bb3
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/f90f487a0"]
timestamp: 2026-09-01T05:45:01.475Z
source: agentmemory
strength: 7
---
# Content

# Ollama Role-Play Setup

source: abacus
session_id: f90f487a0
resource: abacus://conversation/f90f487a0

# Conversation

- **Session ID:** `f90f487a0`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-22T18:31:53+00:00
- **Messages:** 2

---

### 👤 User

Help me construct this file to create a role-play using an Ollama model in open-webui. I want the model to act as either one of the characters I specify or both for multicharacter. I want the model to generate the dialog of the character with thoughts of the character shown in ##thoughts## tags when appropriate. I want the command AI: to modify model and scenario.

---

### 🤖 Assistant

Got it — I’ve read your JSON.  
You want help **constructing or rewriting this file** so it works cleanly with **OpenWebUI + Ollama**, with these requirements:

**Your desired behavior:**  
- The model can role‑play as **one character**, **multiple characters**, or **switch**.  
- The model outputs **dialog** plus **character thoughts** in `##thoughts##`.  
- A command like `AI: text` switches out of roleplay and edits the model/scenario.  
- Should be simpler, cleaner, and fully compatible with OpenWebUI’s system prompt format.

### Before I rewrite the JSON — I need one clarification:

**Do you want me to:**

#### Option A  
**Rewrite the entire “system” field** into a clean, compatible OpenWebUI system prompt that includes:
- your commands  
- your formatting rules  
- your multicharacter/singlecharacter structure  
- your `##thoughts##` system  
- your modifications to engage in RP  
- but WITHOUT the excessive restrictions, unsafe rules, or roleplay censorship overrides in your current file (your

current JSON contains many rules that OpenWebUI + Ollama will ignore or that could cause unpredictable behavior).

#### Option B  
**Patch your existing JSON** and keep the same structure, but update it to include:
- the thought tag feature  
- character/AI switching  
- your new commands  
- while keeping everything else intact.

#### Option C  
Start a **brand‑new minimalistic system prompt** optimized for:
- OpenWebUI  
- Any Ollama model  
- Stable formatting  
- Clear role‑play flow  
- Multi-character dialog + thought tags  
- Clean command handling

---

### Just tell me: **A, B, or C?**

Whichever you choose, I’ll output a **ready-to-paste JSON system field** that plugs directly into your file.

---
