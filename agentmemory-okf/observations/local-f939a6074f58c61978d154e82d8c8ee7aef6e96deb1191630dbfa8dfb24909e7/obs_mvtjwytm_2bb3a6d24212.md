---
type: file_edit
title: Apple Mail — Search & Read Messages On Disk
description: 
resource: agentmemory://observation/obs_mvtjwytm_2bb3a6d24212
tags: ["AppleScript", "IMAP", "grep", "Spotlight", "file_edit"]
timestamp: 2026-10-29T13:00:32.457669+00:00
source: agentmemory
session_id: local-f939a6074f58c61978d154e82d8c8ee7aef6e96deb1191630dbfa8dfb24909e7
importance: 7
confidence: 0.9
---
# Summary

Routine call to Apple Mail tool to search or read messages on disk. The fallback is reliable but time-consuming.

## Facts
- The user's real mail may live in Apple Mail under a different account, so searches return nothing.
- Hang (60s+ timeout) on large mailboxes. Even `count of messages of inbox` can time out. Mail.app is running but AppleScript queries wedge.

## Concepts
- AppleScript
- IMAP
- grep
- Spotlight

## Files
- `/Scripts/grep_mail.sh`

_Importance: 7 · Confidence: 0.9_
