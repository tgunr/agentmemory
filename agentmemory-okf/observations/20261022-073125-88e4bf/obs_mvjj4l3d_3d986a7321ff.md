---
type: file_edit
title: Failed to set up Google Workspace
description: No credentials found
resource: agentmemory://observation/obs_mvjj4l3d_3d986a7321ff
tags: ["Authentication", "Profile management", "file_edit"]
timestamp: 2026-10-22T12:40:46.508226+00:00
source: agentmemory
session_id: 20261022_073125_88e4bf
importance: 7
confidence: 0.9
---
# Summary

Failed to authenticate with Google Workspace due to missing credentials.

## Facts
- HERMES_HOME environment variable is set to $HOME/.hermes if not specified
- No token or client secret found in the hermes profile

## Concepts
- Authentication
- Profile management

## Files
- `${HOME}/.hermes/google_token.json`
- `${HOME}/.hermes/google_client_secret.json`

_Importance: 7 · Confidence: 0.9_
