---
type: file_edit
title: SSO Endpoints
description: Error checking sso
resource: agentmemory://observation/obs_mw1b0qvh_f9e9a5e8cd17
tags: ["SSO", "file_edit"]
timestamp: 2026-11-03T23:13:41.635801+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 6
confidence: 0.9
---
# Summary

The terminal tool executed a curl command to retrieve SSO endpoint information from Plex, but encountered errors. Afterwards, it executed another curl command to retrieve the same information. The third command printed the contents of the user's inbox.

## Facts
- Google SSO endpoint returned 404 error
- Apple SSO endpoint returned 302 redirect

## Concepts
- SSO

## Files
- `/dev/null`

_Importance: 6 · Confidence: 0.9_
