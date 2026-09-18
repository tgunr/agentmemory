---
type: file_edit
title: Update bluebubbles-gateway skill API commands
description: Patch SKILL.md to fix chat/query endpoint usage
resource: agentmemory://observation/obs_mrrpzmnu_b77355c62aa7
tags: ["BlueBubbles API", "REST API endpoints", "HTTP POST vs GET methods", "JSON request body", "curl commands", "API authentication", "file_edit"]
timestamp: 2026-07-19T11:36:12.661425+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The bluebubbles-gateway skill was updated to fix API interaction with the BlueBubbles server. The chat/query endpoint requires POST with JSON body instead of GET with query parameters, which was causing 404 errors. The updated commands properly extract chat identifiers from the API response.

## Facts
- Skill "bluebubbles-gateway" SKILL.md was patched with 1 replacement
- BlueBubbles API chat/query endpoint changed from GET to POST with JSON body
- GET requests to chat/query return 404 "Not Found" on this API version
- New curl command uses POST with Content-Type: application/json and body {"limit":20}
- Response parsing extracts chat guid and chatIdentifier/identifier fields using Python
- API base URL is http://localhost:1234 with password authentication via query parameter

## Concepts
- BlueBubbles API
- REST API endpoints
- HTTP POST vs GET methods
- JSON request body
- curl commands
- API authentication

## Files
- `bluebubbles-gateway/SKILL.md`

_Importance: 5 · Confidence: 1_
