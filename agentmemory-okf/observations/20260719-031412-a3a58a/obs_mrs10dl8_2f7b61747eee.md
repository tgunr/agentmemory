---
type: CommandRun
title: Explored remindctl CLI capabilities and auth status
description: Checked status, add help, and list commands for Apple Reminders CLI
resource: agentmemory://observation/obs_mrs10dl8_2f7b61747eee
tags: ["Apple Reminders CLI", "macOS Privacy permissions", "CLI argument parsing", "commandrun"]
timestamp: 2026-07-19T16:44:43.335977+00:00
source: agentmemory
session_id: 20260719_031412_a3a58a
importance: 4
confidence: 1
---
# Summary

The agent investigated the remindctl CLI for managing Apple Reminders, discovering it requires explicit macOS privacy authorization to function. It also documented the command's syntax and flags for adding reminders, including list, due date, notes, and priority options.

## Facts
- remindctl requires macOS Privacy & Security authorization for Reminders access
- Authorization requires running `remindctl authorize` and allowing Terminal in System Settings
- remindctl add accepts title, list (-l), due (-d), notes (-n), and priority (-p: none/low/medium/high)
- remindctl supports JSON (-j), plain (--plain), and quiet (-q) output formats

## Concepts
- Apple Reminders CLI
- macOS Privacy permissions
- CLI argument parsing

_Importance: 4 · Confidence: 1_
