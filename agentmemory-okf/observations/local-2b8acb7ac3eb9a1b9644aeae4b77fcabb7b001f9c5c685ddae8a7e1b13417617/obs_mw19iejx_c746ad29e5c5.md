---
type: FileRead
title: Shutting down and restarting NAT rules
description: Adding two NAT rules for Plex and Hairpin connections
resource: agentmemory://observation/obs_mw19iejx_c746ad29e5c5
tags: ["NAT configuration", "fileread"]
timestamp: 2026-11-03T22:31:26.243766+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 6
confidence: 0.9
---
# Summary

The tool <code>terminal</code> executed a command to update NAT rules. Two new rules were added: one for Plex to PVE traffic and another for Hairpin Plex traffic from the LAN. The rules are necessary for Plex to function properly with its WAN configuration. The updates were successful, with an exit code of <code>0</code>.

## Facts
- Added Plex rule for WAN traffic to PVE
- Add nat rule for Hairpin Plex backhaul from LAN

## Concepts
- NAT configuration

## Files
- `/ip firewall nat`

_Importance: 6 · Confidence: 0.9_
