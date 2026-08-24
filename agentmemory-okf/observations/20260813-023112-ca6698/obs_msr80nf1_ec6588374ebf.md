---
type: file_edit
title: Show and tell about HERMES gateway Busy ACK status
description: This update involves some important changes to what happens when an agent is busy
resource: agentmemory://observation/obs_msr80nf1_ec6588374ebf
tags: ["React hooks", "file_edit"]
timestamp: 2026-08-13T07:52:49.544860+00:00
source: agentmemory
session_id: 20260813_023112_ca6698
importance: 8
confidence: 0.9
---
# Summary

The current implementation of the HERMES gateway's busy ACK status feature has been updated to better reflect its behavior when an agent is interrupted. This change affects how the status message is displayed, particularly when using the Telegram pipeline.

## Facts
- Changes made by the _prepare_gateway_status_message function in gateway/run.py from version v1.4.2 to v1.5.0
- _display_cfg \"busy_ack_enabled\" now controls whether the status message for busy agents shows an \"Interrupting current task}\" prompt

## Concepts
- React hooks

## Files
- `/home/hermes/hermes-agent/gateway/run.py`

_Importance: 8 · Confidence: 0.9_
