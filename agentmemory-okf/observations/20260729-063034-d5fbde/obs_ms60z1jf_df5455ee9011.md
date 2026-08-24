---
type: file_edit
title: Grep command to extract project-related files from Hermes agent source code
description: Search for and output project-related files in /Users/davec/.hermes/hermes-agent/web/src/.
resource: agentmemory://observation/obs_ms60z1jf_df5455ee9011
tags: ["regex pattern", "file_edit"]
timestamp: 2026-07-29T11:52:27.528305+00:00
source: agentmemory
session_id: 20260729_063034_d5fbde
importance: 5
confidence: 0.9
---
# Summary

The tool executed a custom grep command to extract project-related files from the source code of the Hermes agent, with output truncated to 20 lines.

## Facts
- Executed the following grep command:
      <fact>grep -rn \"project\" /Users/davec/.hermes/heres-agent/web/src/ --include=\"*.tsx\" 2>/dev/null | grep -v node_modules | grep -v \".d.ts\" | grep -vi \\\"test\\|spec\\|website\\|docusaurus\\|workspacePath\\|project.*dir\\|project.*path\\|path.*project\\|create.*project\\|new.*project\\\" | grep -i \\\\\\\|/display\\\\|show\\\\|list\\\\|nested\\\\|tree\\\\|hierarch\\\|group\\\\

## Concepts
- regex pattern

_Importance: 5 · Confidence: 0.9_
