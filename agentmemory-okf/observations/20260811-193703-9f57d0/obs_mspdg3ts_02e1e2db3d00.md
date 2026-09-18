---
type: FileRead
title: Install Kilo Code extension in VSCode
description: Find Kilo Code extension and globalStorage dir
resource: agentmemory://observation/obs_mspdg3ts_02e1e2db3d00
tags: ["VSCode extensions", "fileread"]
timestamp: 2026-08-12T00:49:16.381998+00:00
source: agentmemory
session_id: 20260811_193703_9f57d0
importance: 8
confidence: 0.9
---
# Summary

The tool executed a series of commands to find and install the Kilo Code extension in VSCode, as well as check the globalStorage directory. Execution was successful with an exit code of 0.

## Facts
- Executed command: echo "=== find Kilo Code extension install ==="; find "\$HOME/.vscode" "\$HOME/.vscode-insiders" "/Applications/Visual Studio Code.app" -iname "*kilocode*" -o -iname "*kilo-code*"\ 2>/dev/null | head;
- Executed command: echo "--- also check globalStorage extension dir ---"; ls -d "/Users/davec/Library/Application Support/Code/User/globalStorage/kilocode.kilo-code"\ 2>/dev/null;

## Concepts
- VSCode extensions

## Files
- `/usr/local/bin/bash`

_Importance: 8 · Confidence: 0.9_
