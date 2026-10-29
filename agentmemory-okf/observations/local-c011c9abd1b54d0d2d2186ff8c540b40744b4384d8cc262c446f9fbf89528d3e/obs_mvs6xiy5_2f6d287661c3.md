---
type: file_edit
title: BMC SOL access patch
description: Update kernel command line to use correct UART
resource: agentmemory://observation/obs_mvs6xiy5_2f6d287661c3
tags: ["SOL UART", "file_edit"]
timestamp: 2026-10-28T14:09:17.354585+00:00
source: agentmemory
session_id: local-c011c9abd1b54d0d2d2186ff8c540b40744b4384d8cc262c446f9fbf89528d3e
importance: 8
confidence: 0.9
---
# Summary

This post-tool call patches the BMC SOL access documentation to correctly use `ttyS1` with `115200` baud for the BMC console.
    The changes affect the kernel command line and serial getty configuration to ensure the correct UART is used for the BMC console.
    This patch is crucial for diagnosing upgrade failures and verifying the console settings.

## Facts
- Updates for `console=ttyS0` to use `ttyS1` with `115200` baud.
- Corrects `serial-getty@ttyS0` to inherit baud matching `ttyS1` with `115200`.

## Concepts
- SOL UART

## Files
- `references/bmc-out-of-band-access.md`

_Importance: 8 · Confidence: 0.9_
