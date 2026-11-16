---
type: file_edit
title: Setup Himalaya CLI email client
description: Install Himalaya CLI and configure server connection
resource: agentmemory://observation/obs_mwhwlttc_da35810e2c4d
tags: ["himalaya cli", "IMAP/SMTP authentication", "config.toml", "file_edit"]
timestamp: 2026-11-15T14:02:15.972835+00:00
source: agentmemory
session_id: local-b0b296ae38604ae911e767602300cb9975d6b04877225907a1471a0375079763
importance: 6
confidence: 1
---
# Summary

The user sets up the Himalaya CLI email client to manage emails from the terminal using IMAP, SMTP, Notmuch, or Sendmail backends. This skill is separate from the Hermes Email gateway adapter.

## Facts
- Himalaya CLI is installed using a pre-built binary (Linux/macOS — recommended)
- IMAP/SMTP credentials must be configured for use with Himalaya CLI
- Himalaya CLI requires a configuration file at ~/.config/himalaya/config.toml for IMAP/SMTP authentication

## Concepts
- himalaya cli
- IMAP/SMTP authentication
- config.toml

## Files
- `~/.config/himalaya/config.toml`

_Importance: 6 · Confidence: 1_
