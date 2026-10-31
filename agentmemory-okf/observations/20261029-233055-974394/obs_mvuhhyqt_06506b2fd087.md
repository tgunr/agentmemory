---
type: file_edit
title: ASAR file edit by davec
description: naming and moving ASAR files
resource: agentmemory://observation/obs_mvuhhyqt_06506b2fd087
tags: ["ASAR file management", "file_edit"]
timestamp: 2026-10-30T04:40:39.458337+00:00
source: agentmemory
session_id: 20261029_233055_974394
importance: 5
confidence: 0.9
---
# Summary

Tool used to rename and link ASAR files, performed successfully.

## Facts
- Command used was `ASAR=/Applications/Hermes.app/Contents/Resources/app.asar && mv -f \"$ASAR\" \"$ASAR.prev\" && mv -f /tmp/hermes-app.asar.new \"$ASAR\" && ls -l \"$ASAR\" && grep -c \"session.profile.move\" \"$ASAR\"`

## Concepts
- ASAR file management

## Files
- `/Applications/Hermes.app/Contents/Resources/app.asar`

_Importance: 5 · Confidence: 0.9_
