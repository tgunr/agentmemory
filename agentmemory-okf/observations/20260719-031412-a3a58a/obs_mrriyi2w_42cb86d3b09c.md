---
type: CommandRun
title: Check BlueBubbles config and server status
description: Verified .env allowlist settings and pinged local BB server
resource: agentmemory://observation/obs_mrriyi2w_42cb86d3b09c
tags: ["BlueBubbles", "Environment variables", "User allowlist", "Health check", "commandrun"]
timestamp: 2026-07-19T08:19:22.758448+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent verified the BlueBubbles configuration in the ~/.hermes/.env file, confirming that global user access is disabled and specific phone numbers are allowlisted. It also successfully pinged the local BlueBubbles server, confirming it is running and responsive.

## Facts
- Working directory set to ~/.hermes
- BLUEBUBBLES_ALLOW_ALL_USERS is set to false in .env
- BLUEBUBBLES_ALLOWED_USERS contains +193****0811,19364420811,9364420811
- BlueBubbles server at localhost:1234 returned HTTP 200 on /api/v1/ping

## Concepts
- BlueBubbles
- Environment variables
- User allowlist
- Health check

## Files
- `~/.hermes/.env`

_Importance: 4 · Confidence: 1_
