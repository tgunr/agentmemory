---
type: file_edit
title: External fetch via proxy
description: pexels proxy validation
resource: agentmemory://observation/obs_mw19uz9g_562b68ced753
tags: ["curl", "SSH", "Plex", "HTTPS", "file_edit"]
timestamp: 2026-11-03T22:41:12.957304+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 8
confidence: 0.9
---
# Summary

Executed a curl command to validate public TLS via a proxy, and then SSHed to retrieve Plex token and connections for plex.tv ad banners.

## Facts
- Command used: curl -sS -m 25 "https://api.allorigins.win/raw?url=https%3A%2F%2Fplex.polymicro.net%3A32400%2Fidentity" 2>&1 | head -c 300;
- Command used: timeout 25 ssh -o ConnectTimeout=6 -o BatchMode=yes pve.root 'TOK=$(grep -oE "PlexOnlineToken=\\\"[^\\\"]*\\\"" "/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Preferences.xml" | cut -d\\\" -f2);

## Concepts
- curl
- SSH
- Plex
- HTTPS

## Files
- `/tmp/http/output`
- `/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Preferences.xml`

_Importance: 8 · Confidence: 0.9_
