---
type: Fact
title: # Verifying --help full usage output

source: hermes
session_id: 20260806_081527
description: # Verifying --help full usage output

source: hermes
session_id: 20260806_081527_c12345
resource: hermes://session/20260806_081527_c12345

# Conversation

- **Session ID:** `20260806_081527_c12345`
- 
resource: agentmemory://memory/mem_muqoxwvf_42ab81eb8f04
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/projects/Develop"]
timestamp: 2026-10-02T08:18:13.665Z
source: agentmemory
strength: 7
---
# Content

# Verifying --help full usage output

source: hermes
session_id: 20260806_081527_c12345
resource: hermes://session/20260806_081527_c12345

# Conversation

- **Session ID:** `20260806_081527_c12345`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-08-06T13:15:53Z
- **Ended:** 2026-08-08T12:48:41Z
- **Messages:** 26
- **CWD:** `/Users/davec/projects/Develop`
- **Tokens:** 64124 in / 4457 out

---

### 👤 User — 2026-08-06T13:15:53Z

Need full usage and instructtions in the --help argument

### 🤖 Assistant — 2026-08-06T13:15:59Z

<details><summary>Reasoning</summary>

The user wants me to add full usage and instructions to the `--help` argument of something in the CameraGrid project. Let me first look at the project structure and the perforated_mask.py script since that's the main script mentioned in AGENTS.md.

</details>

**Tool call: read_file**

```json
{
  "limit": 2000,
  "path": "/Volumes/projects/UV/Camera Grid/scripts/perforated_mask.py"
}
```

**Tool call: read_file**

```json
{
  "limit": 2000,
  "path": "/Volumes/projects/UV/Camera Grid/notes/brief.md"
}
```

### 🤖 Assistant — 2026-08-06T13:16:06Z

<details><summary>Reasoning</summary>

The path has a space in it: "Camera Grid". Let me search for the actual script files and notes in this project.

</details>

**Tool call: search_files**

```json
{
  "path": "/Volumes/projects/UV",
  "pattern": "perforated_mask*"
}
```

**Tool call: search_files**

```json
{
  "path": "/Volumes/projects/UV",
  "pattern": "CameraGrid"
}
```

### 🤖 Assistant — 2026-08-06T13:16:13Z

<details><summary>Reasoning</summary>

The file `perforated_mask.py` was read but returned as binary. That's odd for a Python file. Let me use terminal to read it, or use the file directly. The search results show some content from it - line numbers 3, 14, 16, 23, 166. Let me use terminal to cat it or use execute_code to read it with Python, since read_file seems to have trouble with it.

</details>

**Tool call: terminal**

```json
{
  "command": "cat \"/Volumes/projects/UV/Camera Grid/scripts/perforated_mask.py\""
}
```

### 🤖 Assistant — 2026-08-06T13:16:27Z

<details><summary>Reasoning</summary>

The user wants full `--help` output added to `perforated_mask.py`. Currently it has a module docstring with usage examples, but no `--help` argument handling. I should add `argparse` with a proper `--help` argument that documents all options, while keeping the existing manual parser's behavior (sticky `--mm`/`--inch` unit flags) intact.

Let me plan the change:
1. Add `--help` handling: when `--help` is present, print comprehensive help text and exit.
2. Keep all existing behavior identical otherwise.

I'll use `argparse.ArgumentParser` for the help text, but trigger it manually from the existing parser so the sticky-unit behavior doesn't change.

Let me write the patch.

</details>

**Tool call: patch**

```json
{
  "mode": "replace",
  "new_string": "# ── Argument parser (manual — sticky unit flags) ────────────────────────────\n\ndef print_help() -> None:\n    print(\"\"\"Usage: perforated_mask.py input.png [OPTIONS]\n\nPunch a grid of antialiased transparent circular holes through a PNG for UV\nflatbed printing.  Sticky unit flags (--mm / --inch) apply to every numeric\nargument that follows them until the next unit flag.\n\nUV printer DPI: 1440\n  • Soft  warning when any feature < 0.30 mm (~17 px)\n  • Hard  warning when any feature < 0.15 mm (~ 9 px)\n\nArguments:\n  input.png              Input image path (PNG recommended; any format Pillow\n                         accepts will be converted to RGBA).\n\nOptions:\n  --mm                   Set millimeters as the unit for subsequent numeric\n                         arguments.\n  --inch                 Set inches as the unit for subsequent numeric\n                         arguments.\n  --imgSizeX SIZE        Resize image width to SIZE pixels or units (see\n                         --mm / --inch).\n  --imgSizeY SIZE        Resize image height to SIZE pixels or units.\n  --gridSizeX SIZE       Grid area width  in pixels or units.\n  --gridSizeY SIZE       Grid area height in 
