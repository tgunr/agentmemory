---
type: CommandRun
title: Test HTTP requests to Kilo's API
description: Verify authentication with security and keychain
resource: agentmemory://observation/obs_mwcmjx3k_05cb0be94b33
tags: ["curl", "Authentication with keychain and environment variables", "commandrun"]
timestamp: 2026-11-11T21:21:59.885609+00:00
source: agentmemory
session_id: local-dd0218555f41343d159c312cfaa5b234baec2524d619034f5405e3290e928332
importance: 8
confidence: 0.9
---
# Summary

The script ran a series of HTTP requests to Kilo's API with different credentials to verify authentication and keychain functionality.

## Facts
- Command: K_KC=$(security find-internet-password -s "https://api.kilo.ai/api/gateway" -a Bearer -w 2>/dev/null); K_ENV=$(grep '^KILOCODE_API_KEY=' ~/.hermes/.env | cut -d= -f2- | tr -d '\"' '\"')\necho \"keychain: len=${#K_KC} tail=${K_KC: -6} | env: len=${#K_ENV} tail=${K_ENV: -6} | equal=$([ \"$K_KC\" = \"$K_ENV\" ] && echo yes || echo NO)\"\necho \"=== bogus key test (what does Kilo's 401 look like?) ===\"\ncurl -s -m 30 -o /tmp/bogus.json -w "HTTP %{http_code}\\n\" https://api.kilo.ai/api/gateway/v1/chat/completions -H "Content-Type: application/json\" -H "Authorization: Bearer sk-fake-key-123\" -d '{\"model\":\"kilo-auto/free\",\"messages\":[\"role\":\"user\",\"content\":\"hi\"],\"max_tokens\":8}'; head -c 300 /tmp/bogus.json; echo

## Concepts
- curl
- Authentication with keychain and environment variables

_Importance: 8 · Confidence: 0.9_
