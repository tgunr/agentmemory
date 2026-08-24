---
type: CommandRun
title: Extract BlueBubbles config and auth docs from HTML
description: Parsed /tmp/bb_docs.html for env vars and pairing instructions
resource: agentmemory://observation/obs_mrqcha3k_7dc7a5670b68
tags: ["BlueBubbles", "Hermes", "iMessage integration", "environment variables", "webhook configuration", "user authorization", "DM pairing", "mention gating", "commandrun"]
timestamp: 2026-07-18T12:30:15.390057+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Ran a shell command to extract BlueBubbles environment variables and authorization/pairing documentation from a local HTML file. Identified key configuration options for webhook routing, user allowlisting, and mention-based gating in group chats for the Hermes iMessage integration.

## Facts
- Extracted BlueBubbles env vars: SERVER_URL, WEBHOOK_HOST (127.0.0.1), WEBHOOK_PORT (8645), WEBHOOK_PATH, HOME_CHANNEL, ALLOWED_USERS, ALLOW_ALL_USERS, REQUIRE_MENTION, MENTION_PATTERNS
- Authorization methods: DM pairing (hermes pairing approve bluebubbles &lt;CODE&gt;), pre-authorized users (BLUEBUBBLES_ALLOWED_USERS), or open access (BLUEBUBBLES_ALLOW_ALL_USERS=true)
- Mention gating enabled via require_mention: true in config and regex patterns like (?&lt;![\w@])@?amos\b[,:\\-]?
- Secrets were redacted in the source document (e.g., BLUEBUBBLES_[REDACTED_SECRET])

## Concepts
- BlueBubbles
- Hermes
- iMessage integration
- environment variables
- webhook configuration
- user authorization
- DM pairing
- mention gating

## Files
- `/tmp/bb_docs.html`
- `~/.hermes/.env`

_Importance: 6 · Confidence: 1_
