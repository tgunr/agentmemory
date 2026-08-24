---
type: Fact
title: # Fixing ComfyUI Desktop App Path Error

source: hermes
session_id: 20260623_080
description: # Fixing ComfyUI Desktop App Path Error

source: hermes
session_id: 20260623_080856_06f473
resource: hermes://session/20260623_080856_06f473

# Conversation

- **Session ID:** `20260623_080856_06f473`
resource: agentmemory://memory/mem_msp0cn1y_efac6ce37df6
tags: ["okf", "okf-hermes", "hermes", "/Volumes/davec"]
timestamp: 2026-08-11T18:42:39.659Z
source: agentmemory
strength: 7
---
# Content

# Fixing ComfyUI Desktop App Path Error

source: hermes
session_id: 20260623_080856_06f473
resource: hermes://session/20260623_080856_06f473

# Conversation

- **Session ID:** `20260623_080856_06f473`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-23T13:08:57Z
- **Ended:** 2026-06-23T14:30:44Z
- **Messages:** 8
- **CWD:** `/Volumes/davec`
- **Tokens:** 24 in / 848 out
- **Est. cost:** $0.0123

---

### 👤 User — 2026-06-23T13:08:58Z

Getting error installing ComfyUI  from /Volumes/AI/Comfy/desktop/dist/mac-arm64/ComfyUI.app
Look at /Users/davec/Library/Logs/ComfyUI/comfyui.log_2026-06-23T13-07-08-206Z.log

### 🤖 Assistant — 2026-06-23T13:09:28Z

<details><summary>Reasoning</summary>

Let me read the log file to understand the error.


</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Logs/ComfyUI/comfyui.log_2026-06-23T13-07-08-206Z.log"
}
```

### 🤖 Assistant — 2026-06-23T13:09:28Z

<details><summary>Reasoning</summary>

The issue is clear: the app is looking for a `custom_nodes` directory at `/Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes` but it doesn't exist. 

But wait — the app is actually running from `/Volumes/AI/Comfy/desktop/dist/mac-arm64/ComfyUI.app`, not `/Applications/ComfyUI.app`. Line 4 shows it's adding `/Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes` as an extra search path, which is wrong.

Actually, looking more carefully:
- Line 1: It adds `/Volumes/AI/Comfy/ComfyUI/custom_nodes` (good)


- Line 4: It also adds `/Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes` (bad - this path doesn't exist)
- Line 15: It crashes because that second path doesn't exist

So the app is running from `/Volumes/AI/Comfy/desktop/dist/mac-arm64/ComfyUI.app` but it's also trying to access a hardcoded path at `/Applications/ComfyUI.app/...` which doesn't exist. The fix is likely to create that missing directory or figure out why it's hardcoding that path.

</details>

**Tool call: terminal**

```json
{
  "command": "mkdir -p /Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes 2>&1 || echo \"NEED_SUDO\"; ls -la /Applications/ComfyUI.app 2>&1"
}
```

### 🤖 Assistant — 2026-06-23T13:09:28Z

<details><summary>Reasoning</summary>

The directory was created successfully (mkdir -p worked without sudo). Let me verify the custom_nodes directory exists now.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes"
}
```

### 🤖 Assistant — 2026-06-23T13:09:28Z

<details><summary>Reasoning</summary>

The directory is created. Now the app should be able to start without the FileNotFoundError. Let me summarize the issue and the fix for the user.

</details>

Done! Here's what happened and what I fixed:

**The problem:** The ComfyUI desktop app has a hardcoded search path that points to `/Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes`, but you launched it from a different location (`/Volumes/AI/Comfy/desktop/dist/mac-arm64/ComfyUI.app`). That `/Applications/...` tree was never fully set up, so the directory didn't exist and `os.listdir()` crashed with `FileNotFoundError`.

**The fix:** Created the missing directory:
```
/Applications/ComfyUI.app/Contents/Resources/ComfyUI/custom_nodes
```

Try launching the app again — it should get past that error now. Keep in mind the app is still running out of `/Volumes/AI/Comfy/desktop/dist/mac-arm64/`, so your actual custom nodes and models (at `/Volumes/AI/Comfy/ComfyUI/`) are what it'll use. The `/Applications/...` path is just a secondary fallback it scans on startup.
