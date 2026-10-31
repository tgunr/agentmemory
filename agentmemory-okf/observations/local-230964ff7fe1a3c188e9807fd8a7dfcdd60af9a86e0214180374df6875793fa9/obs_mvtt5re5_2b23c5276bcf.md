---
type: CommandRun
title: Search for email and imap errors in gateway error log
description: Recent gateway log entries with specific error codes
resource: agentmemory://observation/obs_mvtt5re5_2b23c5276bcf
tags: ["grep command", "timestamp filtering", "commandrun"]
timestamp: 2026-10-29T17:19:19.272910+00:00
source: agentmemory
session_id: local-230964ff7fe1a3c188e9807fd8a7dfcdd60af9a86e0214180374df6875793fa9
importance: 4
confidence: 0.9
---
# Summary

A command was executed to search for specific error codes in the gateway error log. The search command returned the top 20 most recent hits.

## Facts
- Log entries filtered for error codes and timestamp
- Tools used: grep, awk, cut, sort, uniq, tail, file access to .hermes/logs/gateway.error.log

## Concepts
- grep command
- timestamp filtering

## Files
- `~/.hermes/logs/gateway.error.log`

_Importance: 4 · Confidence: 0.9_
