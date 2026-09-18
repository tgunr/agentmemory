---
type: file_edit
title: Backup WebUI workspaces before editing
description: Edit webui-workspaces json in home directory
resource: agentmemory://observation/obs_ms87vvae_07b14b40c654
tags: ["JSON formatting", "Backup and restore", "file_edit"]
timestamp: 2026-07-31T00:41:29.121840+00:00
source: agentmemory
session_id: 85016383fe9f
importance: 5
confidence: 0.9
---
# Summary

The terminal was used to backup the webui workspaces JSON file, edit it in place, and check for valid JSON.

## Facts
- Tool used: terminal
- Command executed: cp -n ~/.hermes/webui/workspaces.json /tmp/webui-workspaces.json.bak 2>/dev/null && echo "backed up" || echo "(nothing to back up — file absent)"; echo "writing new file..."; cat > ~/.hermes.webui/workspaces.json << EOF\n[\n  {\n    \"path\": \"/Users/davec\",\n    \"name\": \"Home\"\n  },\n  {\n    \"path\": \"/Volumes/projects\",\n    \"name\": \"projects\"\n  }\n]\nEOF\necho "written. contents:\"; cat ~/.hermes/webui/workspaces.json; echo;

## Concepts
- JSON formatting
- Backup and restore

## Files
- `/tmp/webui-workspaces.json.bak`
- `/Users/davec/.hermes/webui/workspaces.json`

_Importance: 5 · Confidence: 0.9_
