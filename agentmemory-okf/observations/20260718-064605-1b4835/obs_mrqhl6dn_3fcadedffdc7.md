---
type: Error
title: skill_manage patch failed: read-before-write required
description: Attempted to patch bluebubbles-gateway.md without loading it first via skill_view
resource: agentmemory://observation/obs_mrqhl6dn_3fcadedffdc7
tags: ["skill_manage", "read-before-write pattern", "BlueBubbles gateway", "IPv4/IPv6 webhook binding", "macOS localhost resolution", "LaunchAgent", "error"]
timestamp: 2026-07-18T14:53:15.270453+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 4
confidence: 1
---
# Summary

The agent attempted to patch the BlueBubbles gateway reference documentation for the macos-integrations skill but failed due to a read-before-write requirement. The system refused the patch because the target file had not been loaded via skill_view in the current turn. The intended patch documents a critical IPv4/IPv6 webhook binding issue on macOS where localhost resolves to IPv6 first.

## Facts
- Tool: skill_manage, action: patch, skill: macos-integrations
- Target file: references/bluebubbles-gateway.md
- Error: Refusing background curator patch because file content was not loaded in current review turn (_read_before_write_required: true)
- Resolution: Must call skill_view(name, file_path=...) before retrying the write
- Intended patch adds critical documentation about macOS IPv4/IPv6 webhook binding issue where localhost resolves to ::1 first, causing inbound BlueBubbles webhooks to fail if Hermes binds to 127.0.0.1
- Fix documented in patch: set BLUEBUBBLES_WEBHOOK_HOST to concrete LAN IPv4 (not 0.0.0.0) and restart gateway from normal Terminal.app

## Concepts
- skill_manage
- read-before-write pattern
- BlueBubbles gateway
- IPv4/IPv6 webhook binding
- macOS localhost resolution
- LaunchAgent

## Files
- `references/bluebubbles-gateway.md`

_Importance: 4 · Confidence: 1_
