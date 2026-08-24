---
type: FileRead
title: CloudFlared tool usage
description: Fed exec results and system info
resource: agentmemory://observation/obs_msfz9le3_072ef31269f8
tags: ["CloudFlared</command>
    <concept>Custom configuration file", "fileread"]
timestamp: 2026-08-05T11:02:22.342120+00:00
source: agentmemory
session_id: 20260805_055554_5fae0e
importance: 4
confidence: 1
---
# Summary

The tool <code>cloudflared</code> was run with custom config and produced outputs fed to grep. It also checked for the existence of its binary in various locations.

## Facts
- Running cloudflared with a custom config YAML file
- Piping output to grep to search for cloudflared instances
- Checking if cloudflared binary exists in /usr/local/bin/ or /opt/homebrew/ directories

## Concepts
- CloudFlared</command>
    <concept>Custom configuration file

## Files
- `/Applications/BlueBubbles.app/Contents/Resources/appResources/macos/daemons/cloudflare/arm64/cloudflared tunnel`

_Importance: 4 · Confidence: 1_
