---
type: Fact
title: # Fix version mismatch

source: chatgpt
session_id: 689a69b7-7864-8328-836a-d17c
description: # Fix version mismatch

source: chatgpt
session_id: 689a69b7-7864-8328-836a-d17c5d6d20b6
resource: chatgpt://conversation/689a69b7-7864-8328-836a-d17c5d6d20b6

# Conversation

- **Session ID:** `689a6
resource: agentmemory://memory/mem_mtj5qijf_5971ea47d832
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689a69b7-7864-8328-836a-d17c5d6d20b6"]
timestamp: 2026-09-01T21:06:30.259Z
source: agentmemory
strength: 7
---
# Content

# Fix version mismatch

source: chatgpt
session_id: 689a69b7-7864-8328-836a-d17c5d6d20b6
resource: chatgpt://conversation/689a69b7-7864-8328-836a-d17c5d6d20b6

# Conversation

- **Session ID:** `689a69b7-7864-8328-836a-d17c5d6d20b6`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-11T22:07:52.178921+00:00
- **Messages:** 2

---

### 👤 User

davec@Mini ~ % ollama --version
ollama version is 0.9.5
Warning: client version is 0.11.4

---

### 🤖 Assistant

You’ve got a version split: your **server** is still 0.9.5 (from the old `/Applications/Ollama.app`), while your **CLI** you just upgraded via Homebrew is 0.11.4. Models like `gpt-oss:latest` require a newer **server**, hence the 412.

Here are two clean ways to fix it—pick one.

# Option A — Use the Homebrew build for both CLI and server
This is simplest.

1) Stop any running Ollama:
```bash
brew services stop ollama 2>/dev/null || true
pkill -f "ollama serve" 2>/dev/null || true
```

2) Install (or re‑install) the brew formula and start the server:
```bash
brew install ollama
brew services start ollama
```

3) Point your shell to the brew binary (your current `which` shows a symlink to the app bundle):
```bash
sudo rm -f /usr/local/bin/ollama
sudo ln -s /opt/homebrew/bin/ollama /usr/local/bin/ollama
```

4) Verify:
```bash
which ollama
ollama --version
```
You should now see both **client** and **server** at 0.11.x. Then:
```bash
ollama pull gpt-oss:latest
```

# Option B — Keep using the App bundle, but update it
1) Quit the Ollama app (and remove any login item / background service it set).
2) Replace `/Applications/Ollama.app` with the latest (either download from the site or run):
```bash
brew install --cask ollama
```
3) Verify the symlink points to the new app:
```bash
ls -l /usr/local/bin/ollama
ollama --version
```

# Extra sanity checks
- See what’s actually running:
```bash
ps aux | grep "[o]llama serve"
lsof -i :11434
```
- If you run Ollama manually with env vars (as your prompt shows), launch the **new** server binary:
```bash
export OLLAMA_HOST=http://0.0.0.0:11434
export OLLAMA_KEEP_ALIVE=15m
export OLLAMA_MAX_LOADED_MODELS=1
export OLLAMA_MODELS=/Volumes/AI/ollama/.ollama/models
/opt/homebrew/opt/ollama/bin/ollama serve
```

Once the server reports 0.11.x, the 412 on `ollama pull` will go away.

---
