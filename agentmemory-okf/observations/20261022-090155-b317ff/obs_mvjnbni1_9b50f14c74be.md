---
type: file_edit
title: Re-running hermes-webui
description: Executing script in background process
resource: agentmemory://observation/obs_mvjnbni1_9b50f14c74be
tags: ["Python command line execution", "file_edit"]
timestamp: 2026-10-22T14:38:14.708253+00:00
source: agentmemory
session_id: 20261022_090155_b317ff
importance: 4
confidence: 1
---
# Summary

The hermes-webui script was re-run in a background process to launch the webui. Output was redirected and error output was also redirected.

## Facts
- HERMES_HOME environment variable set to /Users/davec/.hermes
- HERMES_WEBUI_PORT and HERMES_WEBUI_HOST environment variables set to 8799 and 127.0.0.1 respectively
- Hermes webui script executed with Python 3
- Output redirected to /tmp/webui-probe3.log and error output to the same path

## Concepts
- Python command line execution

## Files
- `/Users/davec/.hermes/installs/977a2b64e85cdb79/environments/b5798a0a474946e98f59b9e145852aa8/venv/bin/python3`
- `/tmp/webui-probe3.log`

_Importance: 4 · Confidence: 1_
