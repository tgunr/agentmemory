---
type: file_edit
title: Repair CuaDriver on macOS
description: MCP initialize issue when running old daemon
resource: agentmemory://observation/obs_mwjhyi5u_0e1ff53bbfdf
tags: ["mcp initialize", "cua-driver", "file_edit"]
timestamp: 2026-11-16T16:47:45.517053+00:00
source: agentmemory
session_id: local-bdeff4a0d071d5405a3452ad4cc18e46de7b4432361b37e2cc7e464d310f0085
importance: 5
confidence: 0.9
---
# Summary

Repair issue by stopping old daemon, reconcile pin if needed, and then install updated Hermes repo.

## Facts
- CuaDriver on macOS can fail MCP initialize with incompatible daemon: contract version 0.8.0 does not match SDK 0.7.0

## Concepts
- mcp initialize
- cua-driver

## Files
- `/Applications/CuaDriver.app`

_Importance: 5 · Confidence: 0.9_
