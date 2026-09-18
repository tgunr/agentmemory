---
type: discovery
title: Found BLUEBUBBLES environment variables in ~/.hermes/.env
description: Credentials and server URL discovered during environment check
resource: agentmemory://observation/obs_mrqfdp5a_9aa169890da1
tags: ["environment variables", "credentials storage", "BlueBubbles configuration", "discovery"]
timestamp: 2026-07-18T13:51:27.115049+00:00
source: agentmemory
session_id: 20260718_084855_083384
importance: 6
confidence: 1
---
# Summary

Environment check revealed BlueBubbles server configuration with localhost URL and a password credential. This exposes potentially sensitive authentication information that should be properly secured.

## Facts
- BLUEBUBBLES_SERVER_URL=http://localhost:1234
- BLUEBUBBLES_PASSWORD variable exists (redacted)
- Located in ~/.hermes/.env configuration file

## Concepts
- environment variables
- credentials storage
- BlueBubbles configuration

## Files
- `~/.hermes/.env`

_Importance: 6 · Confidence: 1_
