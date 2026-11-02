---
type: FileRead
title: Postman request failed registration
description: The POST request for registering an OAuth client failed with a 404 response.
resource: agentmemory://observation/obs_mvxn7l25_a20be427bd43
tags: ["Oauth registration", "fileread"]
timestamp: 2026-11-01T09:43:51.385634+00:00
source: agentmemory
session_id: local-0d7f2c764086a9aea06abb3f72b0b99f17f46f390e6fd02f93edf51349b195a2
importance: 7
confidence: 0.9
---
# Summary

The registration of an OAuth client failed due to a missing client.

## Facts
- Command: for p in oauth/register register oauth/clients oauth/token oauth/introspect; do printf ‘%-18s ' “$p”; curl -s -m 10 -o /tmp/p.out -w ‘%{http_code} %{content_type}’ “https://cloud.polymicro.net/apps/mcp/$p”; echo -n ' | '; head -c 160 /tmp/p.out | tr -d ‘\n’ | cut -c1-160; echo; done
- curl -s -m 10 -X POST -H ‘Content-Type: application/json’ -d ‘{”redirect_uris”:[”http://127.0.0.1:27890/callback”],”client_name”:"Hermes Agent","token_endpoint_auth_method”:"none”}’ -w ‘|\n[%{http_code}]\n’ https://cloud.polymicro.net/apps/mcp/oauth/register | head -c 400

## Concepts
- Oauth registration

_Importance: 7 · Confidence: 0.9_
