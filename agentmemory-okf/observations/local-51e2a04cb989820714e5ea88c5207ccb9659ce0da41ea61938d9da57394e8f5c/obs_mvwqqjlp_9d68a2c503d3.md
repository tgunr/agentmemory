---
type: CommandRun
title: Registy Output
description: A command was run to display the Hermes registry
resource: agentmemory://observation/obs_mvwqqjlp_9d68a2c503d3
tags: ["Git repository management", "commandrun"]
timestamp: 2026-10-31T18:34:48.629428+00:00
source: agentmemory
session_id: local-51e2a04cb989820714e5ea88c5207ccb9659ce0da41ea61938d9da57394e8f5c
importance: 7
confidence: 1
---
# Summary

The output from running a command to display the Hermes registry is an indication of the registry's integrity and relevance for updating the project structures.

## Facts
- Command: ls -1 /Users/davec/.hermes/profiles/ 2>/dev/null; echo \"--- registry ---\"; for f in /Users/davec/.hermes/projects.yaml /Users/davec/.hermes/profiles/*/projects.yaml; do [ -f \"$f\" ] && echo \"== $f\" && grep -nE '^\\- name:|^  path:' \"$f\"; done
- Output: {
  "output": "ai\ncc\ndefault\ndesigner\nollama\nsystems\nworker\n--- registry ---\n== /Users/davec/.hermes/projects.yaml\n== /Users/davec/.hermes/profiles/ai/projects.yaml\n2:- name: AgentMemory\n11:  path: /Volumes/AI/agentmemory\n15:- name: hermes-agent\n26:  path: /Volumes/AI/ai/workspace/hermes-agent\n90:- name: EXO\n99:  path: /Volumes/AI/exo\n107:- name: Comfy\n115:  path: /Volumes/AI/Comfy\n129:- name: MCP\n137:  path: /Users/davec/.hermes/profiles/ai/workspace/mcp\n151:- name: Ollama\n159:  path: /Volumes/AI/ollama\n173:- name: demo-workspace\n181:  path: /Volumes/AI/ai/workspace/demo-workspace\n185:- name: demo2\n191:  path: /Volumes/AI/default/workspace/demo2\n== /Users/davec/.hermes/profiles/cc/projects.yaml\n2:- name: USPIS\n13:  path: /Users/davec/.hermes/profiles/cc/workspace/USPIS\n28:- name: Aspire\n34:  path: /Volumes/projects/aspire\n36:- name: coins\n47:  path: /Volumes/projects/uv/coins\n56:- name: uv\n63:  path: /Volumes/projects/uv\n67:- name: eufy\n76:  path: /Volumes/projects/uv/eufy\n97:- name: epoxy\n108:  path: /Volumes/projects/epoxy\n127:- name: self-leveling-bed\n136:  path: /Volumes/projects/epoxy/projects/self-leveling-bed\n140:- name: Texas 3 Color\n147:  path: /Volumes/projects/epoxy/projects/Texas 3 Color\n151:- name: mold-design\n160:  path: /Volumes/projects/epoxy/projects/mold-design\n
- exit_code: 0

## Concepts
- Git repository management

_Importance: 7 · Confidence: 1_
