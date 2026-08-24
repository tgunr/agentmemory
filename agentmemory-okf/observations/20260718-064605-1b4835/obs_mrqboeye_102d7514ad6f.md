---
type: decision
title: Clarify Hermes iMessage integration scope and SIP status
description: Choosing between basic AppleScript or full Private API with SIP disabled
resource: agentmemory://observation/obs_mrqboeye_102d7514ad6f
tags: ["macOS System Integrity Protection (SIP)", "AppleScript automation", "macOS Private API", "iMessage integration", "Dynamic library injection (dylib)", "decision"]
timestamp: 2026-07-18T12:07:48.657038+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 7
confidence: 1
---
# Summary

The agent paused to clarify the architectural scope and security trade-offs of the Hermes iMessage integration. It presented the user with a choice between safe AppleScript automation and advanced Private API injection via a Tahoe dylib, explicitly noting the security risks and reboot requirements of disabling SIP.

## Facts
- Project "Hermes" integrates with iMessage on macOS.
- Basic integration uses AppleScript and keeps System Integrity Protection (SIP) enabled.
- Full Private API integration uses a "Tahoe dylib" for reactions, edits, and tapbacks.
- Full API approach requires disabling SIP, which is a security downgrade requiring a recovery-mode reboot.
- User is given a phased option to prove basic AppleScript send/receive before committing to disabling SIP.

## Concepts
- macOS System Integrity Protection (SIP)
- AppleScript automation
- macOS Private API
- iMessage integration
- Dynamic library injection (dylib)

_Importance: 7 · Confidence: 1_
