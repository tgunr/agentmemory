---
type: Fact
title: # Launch ollama with launchctl

source: hermes
session_id: 20260831_232740_5f9d4
description: # Launch ollama with launchctl

source: hermes
session_id: 20260831_232740_5f9d43
resource: hermes://session/20260831_232740_5f9d43

# Conversation

- **Session ID:** `20260831_232740_5f9d43`
- **Sour
resource: agentmemory://memory/mem_mto6g4ht_8c5684f3c011
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-05T09:25:15.944Z
source: agentmemory
strength: 7
---
# Content

# Launch ollama with launchctl

source: hermes
session_id: 20260831_232740_5f9d43
resource: hermes://session/20260831_232740_5f9d43

# Conversation

- **Session ID:** `20260831_232740_5f9d43`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-09-01T04:28:41Z
- **Ended:** 2026-09-02T12:11:01Z
- **Messages:** 39
- **CWD:** `/Users/davec`
- **Tokens:** 308961 in / 5814 out

---

### 👤 User — 2026-09-01T04:28:41Z

launch ollama with launchctl

### 🤖 Assistant — 2026-09-01T04:28:49Z

<details><summary>Reasoning</summary>

The user wants me to launch Ollama with launchctl. Based on my memory, Ollama is kept up by launchd on this machine. Let me check the Ollama configuration and launch it.

</details>

**Tool call: terminal**

```json
{
  "command": "brew services list 2>/dev/null | grep -i ollama; echo \"---\"; launchctl list 2>/dev/null | grep -i -E 'ollama|com.ollama'; echo \"---\"; ls ~/Library/LaunchAgents/ 2>/dev/null | grep -i ollama; echo \"---\"; cat $(brew --prefix ollama 2>/dev/null)/*.plist 2>/dev/null | head -50",
  "description": "Check for existing Ollama launchd service"
}
```

**Tool call: terminal**

```json
{
  "command": "pgrep -fla ollama 2>/dev/null; echo \"---\"; ps aux | grep -i \"[o]llama\" | head -5; echo \"---OLLAMA_ENV---\"; /usr/libexec/osrc /dev/null; ollama ps 2>&1 | head -10; echo \"---PORT---\"; (lsof -iTCP:11434 -sTCP:LISTEN 2>/dev/null || echo \"port 11434 not listening\")",
  "description": "Check Ollama process and port status"
}
```

### 🤖 Assistant — 2026-09-01T04:29:12Z

<details><summary>Reasoning</summary>

So I can see:
- There's a `net.polymicro.ollama.plist` in LaunchAgents
- There's a `com.davec.ollama-lan.plist.disabled`
- There's a start script at `/Users/davec/.ollama/start-ollama.sh`
- There's a stale bash process running `start-ollama.sh` (PID 18592 from Sat morning)
- Ollama server is not running (port 11434 not listening)

Let me check the launchd service status and the plist files. The `net.polymicro.ollama.plist` is likely the launchd service for Ollama. Let me check its status and try to start it.

</details>

**Tool call: terminal**

```json
{
  "command": "launchctl list | grep -i ollama; echo \"===\"; launchctl print gui/$(id -u)/net.polymicro.ollama 2>&1 | head -30; echo \"===\"; cat ~/Library/LaunchAgents/net.polymicro.ollama.plist 2>/dev/null; echo \"===\"; cat ~/Library/LaunchAgents/com.davec.ollama-lan.plist.disabled 2>/dev/null",
  "description": "Check launchd Ollama service state and plist contents"
}
```

**Tool call: terminal**

```json
{
  "command": "cat /Users/davec/.ollama/start-ollama.sh 2>/dev/null; echo \"===OLLAMA_BIN===\"; which ollama 2>/dev/null; ollama --version 2>/dev/null; echo \"===OLLAMA_DIR===\"; ls -la /Users/davec/.ollama/ 2>/dev/null; echo \"===MODELS_DIR===\"; ls -la /Users/davec/.ollama/models/ 2>/dev/null | head -5; echo \"===LOGS===\"; ls -la /Users/davec/.ollama/logs/ 2>/dev/null; echo \"===OLAP===\"; ls -la /Users/davec/.ollama/bin/ 2>/dev/null; echo \"===OLAP_DIR===\"; ls -la /Users/davec/.ollama/daemon/ 2>/dev/null; ls -la /Users/davec/.ollama/ollama/ 2>/dev/null",
  "description": "Inspect Ollama startup script and binary location"
}
```

### 🤖 Assistant — 2026-09-01T04:29:42Z

<details><summary>Reasoning</summary>

I now have a clear picture:

- There is a custom launchd plist: `com.davec.ollama-lan`
- It is currently **disabled**
- The actual Ollama startup is done via `/Users/davec/.ollama/start-ollama.sh`
- That script waits for `/Volumes/AI/ollama/.ollama/models/blobs`
- Models directory is on the external volume `/Volumes/AI`
- The previous attempt failed with "Error: timed out waiting for server to start"
- Port 11434 is NOT currently listening

So to launch Ollama via launchctl, I should:
1. Make sure the launchd plist is enabled
2. Load it with `launchctl load` or bootout/boot it
3. Ensure the script is executable
4. Verify the /Volumes/AI mount is available first

Since `/usr/libexec/osrc` doesn't exist and the script uses bash, let me just enable and load the plist directly. The plist points to `/usr/local/bin/ollama serve`, but that will mi
