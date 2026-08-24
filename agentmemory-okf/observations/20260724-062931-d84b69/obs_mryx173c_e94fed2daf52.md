---
type: file_write
title: Xcode Agent Integration Setup
description: Setting up xcode/manage tool to enable Xcode integration with knowledge agents.
resource: agentmemory://observation/obs_mryx173c_e94fed2daf52
tags: ["ACP", "Xcode integration", "Kilo CLI", "file_write"]
timestamp: 2026-07-24T12:27:46.337037+00:00
source: agentmemory
session_id: 20260724_062931_d84b69
importance: 7
confidence: 0.9
---
# Summary

The xcode/manage tool setup caused issues with connecting to Kilo CLI and Xcode's in-IDE agent panel, which requires an ACP handshake for compatibility. The setup process involved updating kilo CLI, re-registering the ACP agent, and verifying that the protocol version is correct.

## Facts
- Failed to connect to Kilo CLI version 7.4.15 due to stale executable.
- Xcode's in-IDE agent panel is a separate integration from the external-MCP bridge.

## Concepts
- ACP
- Xcode integration
- Kilo CLI

## Files
- `/references/xcode27-agent-setup.md`

_Importance: 7 · Confidence: 0.9_
