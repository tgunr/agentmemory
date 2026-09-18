---
type: file_edit
title: mcp_agent_memory_memory_lesson_save tool usage
description: Recurring infra/outage incident for the hermes.polymicro.net public reverse-proxy to the Mac mini Hermes WebUI.
resource: agentmemory://observation/obs_msg0hgss_3aaf185a1720
tags: ["503 error", "Hermes WebUI", "pve apache", "MikroTik", "Mac mini", "file_edit"]
timestamp: 2026-08-05T11:36:29.258667+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 7
confidence: 0.9
---
# Summary

The cause of the recurring 503 error for hermes.polymicro.net is related to the Hermes WebUI process on the Mac mini.

## Facts
- Hermes WebUI process on Mac mini being down causing 503 error, not DNS, MikroTik, pve apache, or network
- Chain: hermes.polymicro.net -> pve apache2 reverse-proxy -> Mac mini ai.hermes.webui LaunchAgent

## Concepts
- 503 error
- Hermes WebUI
- pve apache
- MikroTik
- Mac mini

_Importance: 7 · Confidence: 0.9_
