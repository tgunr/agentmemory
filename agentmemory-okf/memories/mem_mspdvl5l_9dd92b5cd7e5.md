---
type: Fact
title: # Debugging ComfyUI startup failure from logs

source: hermes
session_id: 202607
description: # Debugging ComfyUI startup failure from logs

source: hermes
session_id: 20260715_065534_8c421d
resource: hermes://session/20260715_065534_8c421d

# Conversation

- **Session ID:** `20260715_065534_8
resource: agentmemory://memory/mem_mspdvl5l_9dd92b5cd7e5
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:18.650Z
source: agentmemory
strength: 7
---
# Content

# Debugging ComfyUI startup failure from logs

source: hermes
session_id: 20260715_065534_8c421d
resource: hermes://session/20260715_065534_8c421d

# Conversation

- **Session ID:** `20260715_065534_8c421d`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-07-15T11:55:34Z
- **Messages:** 23
- **CWD:** `/Users/davec`
- **Tokens:** 73056 in / 3121 out
- **Est. cost:** $0.0575

---

### 👤 User — 2026-07-15T11:55:34Z

Check /Users/davec/Library/Logs/ComfyUI for problems, comfyui is not starting up

### 🤖 Assistant — 2026-07-15T11:55:42Z

<details><summary>Reasoning</summary>

Let me check the ComfyUI logs directory for problems.

</details>

**Tool call: search_files**

```json
{
  "pattern": "*",
  "target": "files",
  "path": "/Users/davec/Library/Logs/ComfyUI"
}
```

### 🤖 Assistant — 2026-07-15T11:55:48Z

<details><summary>Reasoning</summary>

The user wants me to check ComfyUI logs for startup problems. Let me look at the current main.log and comfyui.log files first, and then a recent archived log to see what changed.

</details>

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Logs/ComfyUI/main.log"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Logs/ComfyUI/comfyui.log"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Logs/ComfyUI/main.log_2026-07-15T11-44-15-539Z.log"
}
```

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Library/Logs/ComfyUI/comfyui.log_2026-07-15T11-44-19-533Z.log"
}
```

### 🤖 Assistant — 2026-07-15T11:56:04Z

<details><summary>Reasoning</summary>

I found the issue. Let me analyze:

**The crash** (from `comfyui.log` at 2026-07-15 06:44:25):
```
ImportError: dlopen(/Volumes/AI/Comfy/ComfyUI/venv/lib/python3.13/site-packages/scipy/sparse/linalg/_propack/_spropack.cpython-313-darwin.so, 0x0002): 
tried: '...' (section '__DATA/__thread_bss' has a zero-fill section type, but offset field is not zero)
```

This is a known macOS issue with scipy's `_propack` extension module compiled with newer Xcode toolchains when running on macOS 27 (Tahoe). The Mach-O section is malformed — `__thread_bss` has a zero-fill section type but its offset field isn't zero, which the macOS dynamic loader rejects.

There's also a secondary issue:
- The venv at `/Volumes/AI/Comfy/ComfyUI/venv/` is the desktop app's venv (Python 3.13.11)
- But the canonical install per my memory uses `.venv` (Python 3.13.11) and the canonical install is the one I should be using
- Wait — looking at line 16 of the comfyui log: `** Python executable: /Volumes/AI/Comfy/ComfyUI/venv/bin/python` — that's the desktop app's venv

So the user is launching ComfyUI via the **desktop app** (`/Applications/ComfyUI.app`), not the canonical CLI install. The desktop app manages its own venv at `/Volumes/AI/Comfy/ComfyUI/venv/` and stores logs to `~/Library/Logs/ComfyUI/`.

Also: there was an upgradePackages warning ("`comfyui-workflow-templates==0.1.95` → `0.1.3`") which is suspicious — it's downgrading a known package. Not the root cause of the crash though.

The root cause is the scipy `_propack` Mach-O issue on macOS 27. This is a scipy wheel compiled with incompatible toolchain flags.

**Fix options:**
1. `uv pip install --upgrade --force-reinstall scipy` in the venv
2. Pin scipy to an older version
3. Remove the broken `_propack.so` (scipy will fall back to pure Python)
4. Switch to canonical CLI install which uses a separate venv

Let me check the broken `.so` first, then offer fix options. The desktop app venv path is clear: `/Volumes/AI/Comfy/ComfyUI/venv/`.

Let me look at the actual broken file to confirm and then present options to the user.

</details>

**Tool call: clarify**

```json
{
  "question": "How do you want to fix the scipy _propack crash in the ComfyUI desktop app venv?",
  "choices": [
    {
      "command": "cd /Volumes/AI/Comfy/ComfyUI && /Applications/ComfyUI.app/Contents/Resources/uv/macos/uv pip install --upgrade --force-reinstall --reinstall-package scipy scipy",
      "label": "Reinstall scipy via uv (recommended)"
    },
    {
      "command": "rm -f /Volumes/AI/Comfy/Comf
