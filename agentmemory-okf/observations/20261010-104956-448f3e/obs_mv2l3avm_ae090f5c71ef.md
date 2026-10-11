---
type: Error
title: terminal received 'code' parameter, but it requires a shell command
description: retry with command
resource: agentmemory://observation/obs_mv2l3avm_ae090f5c71ef
tags: ["terminal hook format validation", "execute_code vs command", "error"]
timestamp: 2026-10-10T16:03:40.878073+00:00
source: agentmemory
session_id: 20261010_104956_448f3e
importance: 5
confidence: 1
---
# Summary

The terminal hook received an invalid input format.

## Facts
- hook: post_tool_call
- tool: terminal
- input: { code: "# Resuming the paused rebase, diagnosing the promisor failure", timeout_s: "60" }

## Concepts
- terminal hook format validation
- execute_code vs command

_Importance: 5 · Confidence: 1_
