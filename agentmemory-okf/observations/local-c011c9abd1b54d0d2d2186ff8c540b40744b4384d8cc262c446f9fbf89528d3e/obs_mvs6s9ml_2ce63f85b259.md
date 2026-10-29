---
type: file_edit
title: Set serial getty service file
description: Change serial getty service configuration
resource: agentmemory://observation/obs_mvs6s9ml_2ce63f85b259
tags: ["systemd serial getty", "file_edit"]
timestamp: 2026-10-28T14:05:11.992210+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 8
confidence: 1
---
# Summary

The terminal tool was used to edit and enable a new serial getty service configuration.

## Facts
- Created symlink /etc/systemd/system/getty.target.wants/serial-getty@ttyS1.service → /lib/systemd/system/serial-getty@.service.
- enabled
- active

## Concepts
- systemd serial getty

## Files
- `/etc/systemd/system/serial-getty@ttyS1.service.d/baud.conf`

_Importance: 8 · Confidence: 1_
