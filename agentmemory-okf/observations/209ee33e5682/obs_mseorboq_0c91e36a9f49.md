---
type: file_edit
title: Hermes WebUI configuration &amp; management
description: Configure, manage, and troubleshoot the Hermes WebUI
resource: agentmemory://observation/obs_mseorboq_0c91e36a9f49
tags: ["Python PBKDF2", "file_edit"]
timestamp: 2026-08-04T13:20:27.606998+00:00
source: agentmemory
session_id: 209ee33e5682
importance: 8
confidence: 0.9
---
# Summary

The WebUI configuration includes methods for password discovery, authentication, binding, and environment variables. The default bind is enabled on all interfaces by the Hermes desktop app.

## Facts
- The password is set via the `HERMES_WEBUI_PASSWORD` env var, or it can be discovered from a running server using specific bash commands.
- Auth priority: env var takes precedence over settings.json. No login required if neither is set.

## Concepts
- Python PBKDF2

_Importance: 8 · Confidence: 0.9_
