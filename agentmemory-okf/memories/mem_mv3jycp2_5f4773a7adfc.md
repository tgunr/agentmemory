---
type: Fact
title: # Reorganize project folder structure

source: hermes
session_id: 20261010_11265
description: # Reorganize project folder structure

source: hermes
session_id: 20261010_112653_d317e3
resource: hermes://session/20261010_112653_d317e3

# Conversation

- **Session ID:** `20261010_112653_d317e3`
-
resource: agentmemory://memory/mem_mv3jycp2_5f4773a7adfc
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Documents/Eviction"]
timestamp: 2026-10-11T08:19:36.363Z
source: agentmemory
strength: 7
---
# Content

# Reorganize project folder structure

source: hermes
session_id: 20261010_112653_d317e3
resource: hermes://session/20261010_112653_d317e3

# Conversation

- **Session ID:** `20261010_112653_d317e3`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-10T16:26:54Z
- **Messages:** 25
- **CWD:** `/Users/davec/Documents/Eviction`
- **Tokens:** 32032 in / 9665 out

---

### 👤 User — 2026-10-10T16:26:54Z

reorganize the project folder, far too many loose files

### 🤖 Assistant — 2026-10-10T16:27:01Z

<details><summary>Reasoning</summary>

Let me look at the project folder first.

</details>

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/Documents/Eviction"
}
```

### 🤖 Assistant — 2026-10-10T16:27:11Z

<details><summary>Reasoning</summary>

This is an eviction legal case project. Let me look at the structure. There are directories: "Barn Video", "node_modules", "ring-downloads". And package.json suggests ring-downloader node project.

Let me check contents of subdirectories and package.json to understand what's part of the node project vs. legal docs.

Reorganization plan: create subdirectories like `legal/` (notices, filings), `evidence/` (transcripts, messages, photos), `tools/` (scripts), `images/` or `photos/`, keep node project files at root (package.json, node_modules, ring-download.mjs?).

But careful: package.json may reference ring-download.mjs path. Also scripts (download-barn-incidents.sh, fix-downloads.sh) may reference paths. Let me check.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Documents/Eviction && cat package.json && echo ---- && ls \"Barn Video\" | head -50 && echo ---- && ls ring-downloads | head -25 && echo ---- && head -30 download-barn-incidents.sh fix-downloads.sh"
}
```

### 🤖 Assistant — 2026-10-10T16:27:35Z

<details><summary>Reasoning</summary>

Let me understand the project structure. This is an eviction legal case folder with:
- Legal docs (md files) - notices, court filings, evidence summaries
- Evidence files (james_west transcripts, messages json)
- Photos/screenshots (HEIC, PNG)
- Ring downloader tool (package.json, ring-download.mjs, scripts, node_modules, ring-downloads)
- Barn Video folder

Let me check a few more things and then plan the reorganization. Note the memory rule: non-destructive file creation - when modifying existing SCAD/STL create new variant. But that's for CAD work. For reorganizing folders, I should be careful but the user explicitly asked to reorganize. Still I should be careful not to break things - especially the ring-downloader tool which references paths.

Let me check ring-download.mjs for hardcoded paths, and what the .ring-refresh-token is. Also check the txt files and orphaned.txt.

Let me look at more structure details before proposing a plan. This is a reorganization of a folder with legal evidence - I should be thoughtful. Let me propose a structure and confirm, OR just do it cleanly with git? Is there git? Let me check.

Actually the user said "reorganize the project folder, far too many loose files" - fairly clear directive. But moving legal evidence files around could break references. Let me check for cross-references in files (links between md files). Let me gather info first.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Documents/Eviction && echo \"=== git? ===\" && git status 2>&1 | head -3; echo \"=== ring-download.mjs hardcoded paths ===\" && grep -nE \"ring-downloads|\\.ring-refresh-token|ring-downloader|Barn|dirname|process.cwd|OUT|path\\.\" ring-download.mjs | head -30"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/Documents/Eviction && echo \"=== cross-refs between md files (filenames mentioned in other files) ===\" && for f in *.md *.html *.sh *.mjs; do  grep -l \"$f\" *.md *.html *.sh *.mjs 2>/dev/null | grep -v \"^$f$\" | sed \"s|^|$f referenced-by: |\"; done | sort -u | head -60"
}
```

### 🤖 Assistant — 2026-10-10T16:29:35Z

<details><summary>Reasoning</summary>

There are many cross-references between markdown files. The references are likely 
