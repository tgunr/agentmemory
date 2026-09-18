---
type: Fact
title: # Ollama Model Upgrade Guide

source: hermes
session_id: claude__d54718ed-ccae-4
description: # Ollama Model Upgrade Guide

source: hermes
session_id: claude__d54718ed-ccae-4d38-845a-4ffc6cfb2585
resource: hermes://session/claude__d54718ed-ccae-4d38-845a-4ffc6cfb2585

# Conversation

- **Sessi
resource: agentmemory://memory/mem_mtj634f7_37d6d5aa24bb
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:18.434Z
source: agentmemory
strength: 7
---
# Content

# Ollama Model Upgrade Guide

source: hermes
session_id: claude__d54718ed-ccae-4d38-845a-4ffc6cfb2585
resource: hermes://session/claude__d54718ed-ccae-4d38-845a-4ffc6cfb2585

# Conversation

- **Session ID:** `claude__d54718ed-ccae-4d38-845a-4ffc6cfb2585`
- **Source:** claude
- **Model:** None
- **Started:** 2025-08-04T18:27:27Z
- **Ended:** 2025-08-04T18:27:41Z
- **Messages:** 2
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-08-04T18:27:29Z

How to upgrade ollama models

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
