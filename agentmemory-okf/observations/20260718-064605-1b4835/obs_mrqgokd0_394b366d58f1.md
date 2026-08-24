---
type: Error
title: Agent blocked from modifying Hermes config
description: Security policy prevents agent from editing sensitive configuration
resource: agentmemory://observation/obs_mrqgokd0_394b366d58f1
tags: ["security policy", "configuration management", "agent restrictions", "Hermes config", "error"]
timestamp: 2026-07-18T14:27:53.742635+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

The agent attempted to patch the Hermes configuration file to set the bluebubbles server URL, but the operation was refused due to security restrictions preventing agents from modifying sensitive configuration files. User intervention is required to complete this configuration change.

## Facts
- Attempted to update bluebubbles.server_url from '' to 'http://localhost:1234'
- Operation blocked by security policy in patch tool
- Agents cannot modify security-sensitive configuration files
- User must edit ~/.hermes/config.yaml directly or use 'hermes config' command

## Concepts
- security policy
- configuration management
- agent restrictions
- Hermes config

## Files
- `/Users/davec/.hermes/config.yaml`

_Importance: 5 · Confidence: 1_
