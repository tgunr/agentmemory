---
type: CommandRun
title: Terminal command to grep movement profile changes
description: Cd into Hermes agent, search for profile movement scripts
resource: agentmemory://observation/obs_mvuh5ux9_b0c240679cf7
tags: ["grep command", "commandrun"]
timestamp: 2026-10-30T04:31:14.634211+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 6
confidence: 0.9
---
# Summary

The tool terminal executed a command to search for profile movement scripts in the Hermes agent.

## Facts
- Command executed: cd /Users/davec/.hermes/hermes-agent && grep -rn \"move.*profile\\|profile.*move\\|transfer_session\\|session.*profile\" --include=*.py hermes/server hermes/cli 2>/dev/null | grep -i \"move\\|transfer\" | head -40

## Concepts
- grep command

_Importance: 6 · Confidence: 0.9_
