---
type: Fact
title: # Ollama Model Upgrade Guide

source: claude
session_id: d54718ed-ccae-4d38-845a
description: # Ollama Model Upgrade Guide

source: claude
session_id: d54718ed-ccae-4d38-845a-4ffc6cfb2585
resource: claude://conversation/d54718ed-ccae-4d38-845a-4ffc6cfb2585

# Conversation

- **Session ID:** `d
resource: agentmemory://memory/mem_mtj6df2y_faa7f6938564
tags: ["okf", "okf-claude", "claude", "claude://conversation/d54718ed-ccae-4d38-845a-4ffc6cfb2585"]
timestamp: 2026-09-01T21:24:18.793Z
source: agentmemory
strength: 7
---
# Content

# Ollama Model Upgrade Guide

source: claude
session_id: d54718ed-ccae-4d38-845a-4ffc6cfb2585
resource: claude://conversation/d54718ed-ccae-4d38-845a-4ffc6cfb2585

# Conversation

- **Session ID:** `d54718ed-ccae-4d38-845a-4ffc6cfb2585`
- **Source:** claude
- **Started:** 2025-08-04T18:27:27Z
- **Messages:** 2
- **Summary:** **Conversation Overview**

The user asked for guidance on how to upgrade Ollama models, seeking technical instructions for keeping their local AI models up to date. Claude provided comprehensive instructions covering multiple aspects of Ollama model management. The response included commands for updating Ollama itself across different operating systems (macOS, Linux, and Windows), with specific installation commands using curl for Unix-like systems and directing to the official website for Windows users.

Claude explained the process of upgrading individual models using the `ollama pull` command with specific examples for popular models like llama2, mistral, and codellama. The guidance covered checking current installations with `ollama list`, managing storage by removing old models with `ollama rm`, and the fact that Ollama typically maintains only the latest version of each model automatically. Since Ollama lacks built-in automatic updates, Claude provided a bash script example that iterates through all installed models and updates them systematically, demonstrating how to automate the manual update process for users managing multiple models.

---

### 👤 User — 2025-08-04T18:27:29Z

How to upgrade ollama models

---

### 🤖 Assistant — 2025-08-04T18:27:41Z

To upgrade Ollama models, you have a few options depending on what you want to accomplish:

## Updating Ollama itself
First, make sure you have the latest version of Ollama:
```bash
# On macOS/Linux
curl -fsSL https://ollama.com/install.sh | sh

# On Windows, download the latest installer from ollama.com
```

## Upgrading individual models
To get the latest version of a specific model:
```bash
# Pull the latest version of a model
ollama pull llama2
ollama pull mistral
ollama pull codellama

# This will download the newest version if available
```

## Checking for model updates
```bash
# List your currently installed models
ollama list

# Pull updates for all your models
ollama pull model-name
```

## Removing old versions
Ollama typically keeps only the latest version of each model, but you can explicitly manage storage:
```bash
# Remove a specific model
ollama rm model-name

# This frees up disk space from old versions
```

## Automatic updates
Ollama doesn't have automatic updates built-in, so you'll need to manually pull new versions when they're released. You can create a script to update all your models:

```bash
#!/bin/bash
models=$(ollama list | grep -v NAME | awk '{print $1}')
for model in $models; do
    echo "Updating $model..."
    ollama pull $model
done
```

The key thing to remember is that `ollama pull` will always fetch the latest available version of a model, so running it periodically keeps your models up to date.

---
