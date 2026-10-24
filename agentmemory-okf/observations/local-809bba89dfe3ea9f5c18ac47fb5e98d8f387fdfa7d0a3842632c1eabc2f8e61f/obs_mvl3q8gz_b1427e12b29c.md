---
type: file_edit
title: Re-export WARP_BOOTSTRAPPED if it was set to prevent re-initialization
description: Note: `hj` (HERMES_HOME=~/jo hermes) is defined as an alias in ~/.startup/zsh/darwin/aliases.zsh, so it is not duplicated here.
resource: agentmemory://observation/obs_mvl3q8gz_b1427e12b29c
tags: ["WARP_BOOTSTRAPPED", "HERMES_HOME", "zsh rc file modifications", "file_edit"]
timestamp: 2026-10-23T15:05:15.104937+00:00
source: agentmemory
session_id: local-809bba89dfe3ea9f5c18ac47fb5e98d8f387fdfa7d0a3842632c1eabc2f8e61f
importance: 5
confidence: 0.9
---
# Summary

The tool patch was used to edit the content of /Users/davec/.zshrc.local, changing the re-export of WARP_BOOTSTRAPPED. This change aims to prevent re-initialization, while preserving the hermes command alias.

## Facts
- A patch was applied to the /Users/davec/.zshrc.local file.

## Concepts
- WARP_BOOTSTRAPPED
- HERMES_HOME
- zsh rc file modifications

## Files
- `/Users/davec/.zshrc.local`

_Importance: 5 · Confidence: 0.9_
