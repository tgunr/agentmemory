---
type: file_edit
title: Patch file update: Kilo Gateway token swap
description: Updated kilo-xcode-acp-config.md to reflect key usage change
resource: agentmemory://observation/obs_mryxzsnm_59c9ed638df3
tags: ["Kilo API key", "file_edit"]
timestamp: 2026-07-24T12:54:40.590257+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 7
confidence: 0.9
---
# Summary

The kilo-xcode-acp-config.md file was updated to reflect the key usage change from `KILOCODE_API_KEY` to `KILO_API_KEY`. This modification ensures compatibility with the Kilo Gateway token. The previous string value is ignored by Kilo.

## Facts
- New string value with swapped API key: | Environment | `KILO_API_KEY` = `<Kilo Gateway token>`  ⚠️ NOT `KILOCODE_API_KEY` (Kilo ignores that name) |
- Original file located at /Users/davec/.hermes/skills/apple/xcode-agent-integration/templates/kilo-xcode-acp-config.md

## Concepts
- Kilo API key

## Files
- `/Users/davec/.hermes/skills/apple/xcode-agent-integration/templates/kilo-xcode-acp-config.md`

_Importance: 7 · Confidence: 0.9_
