---
type: Observation
title: Integration details for xcode-agent
description: Config snippets for Kilo ↔ Xcode integration
resource: agentmemory://observation/obs_mryxz13x_c39421b49b34
tags: ["Xcode integration", "Acp agent usage", "observation"]
timestamp: 2026-07-24T12:54:04.889764+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 8
confidence: 1
---
# Summary

Tool skill_view was called and provided config snippets for Kilo ↔ Xcode 27 connection. Integration details included Acp agent, xcrun mcpbridge command, and MCP file path.
The importance of this tool call is moderate, as it enhances the Kilo integration with Xcode, but does not introduce a critical architectural decision.

## Facts
- Acp agent added to Xcode modal values
- Mcp file path is ~/.config/kilo/kilo.json
      with xcrun mcpbridge command enabled in Xcode
- XcodeAgent integration already whitelisted by Kilo

## Concepts
- Xcode integration
- Acp agent usage

## Files
- `templates/kilo-xcode-acp-config.md`

_Importance: 8 · Confidence: 1_
