---
type: file_edit
title: Test dxf file with dwg_read_file and dwg_write_dxf
description: Test command
resource: agentmemory://observation/obs_mw9g64p8_ea632cac7bd0
tags: ["dwg_read_file", "dwg_write_dxf", "file_edit"]
timestamp: 2026-11-09T16:00:00.323268+00:00
source: agentmemory
session_id: local-1f28301d1d21594964207a1d5d9d73553a3bf4f15d6662387568057a6f54f82b
importance: 4
confidence: 1
---
# Summary

The test program executes a command in the terminal, reads a DWG file, and writes a DXF file, but encounters a segmentation fault due to an invalid format.

## Facts
- Tool: terminal
- Command: cd /tmp/dwgtest && cat > t.c
- Read DWG file: in.dwg
- Warning: format specifies type 'char *' but the argument has underlying type 'unsigned int'
- Write DXF file: back.dxf
- Segmentation fault (SIGSEGV)
- Exit code 139

## Concepts
- dwg_read_file
- dwg_write_dxf

## Files
- `/tmp/dwgtest/t.c`
- `/tmp/dwgtest/in.dwg`
- `/tmp/dwgtest/back.dxf`

_Importance: 4 · Confidence: 1_
