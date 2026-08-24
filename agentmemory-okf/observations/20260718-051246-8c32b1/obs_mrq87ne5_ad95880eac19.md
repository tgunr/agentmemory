---
type: FileRead
title: Read project audit and consolidation reference guide
description: Techniques for deduplicating tool installs, APFS cache quirks, and process CWD verification
resource: agentmemory://observation/obs_mrq87ne5_ad95880eac19
tags: ["APFS directory cache quirk", "Process CWD verification", "Directory inventory scripting", "Duplicate install consolidation", "lsof vs ps aux", "fileread"]
timestamp: 2026-07-18T10:30:47.592205+00:00
source: agentmemory
session_id: 20260718_051246_8c32b1
importance: 4
confidence: 1
---
# Summary

The agent read a reference document detailing workflows for auditing and consolidating duplicate AI tool installations. It covers OS-specific filesystem quirks (APFS caching), directory inventory scripting, and reliable process working directory verification using lsof instead of ps.

## Facts
- Reference document for cleaning up duplicate installs of AI tools like ComfyUI and llama.cpp
- Documents APFS kernel directory-cache quirk where ls returns parent contents; bypassed via stat -f '%i', os.scandir, or sleep 1 && /bin/ls
- Includes Python inventory script to calculate directory size, file count, and git commit ref
- Warns that ps aux is unreliable for finding live server source trees due to bash -lic wrappers; recommends lsof -p $PID to verify actual CWD

## Concepts
- APFS directory cache quirk
- Process CWD verification
- Directory inventory scripting
- Duplicate install consolidation
- lsof vs ps aux

## Files
- `~/.hermes/skills/productivity/projects/references/audit-and-consolidation.md`

_Importance: 4 · Confidence: 1_
