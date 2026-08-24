---
type: CommandRun
title: Test IPv4/IPv6 connectivity to BlueBubbles webhook
description: Verify gateway listening state and network binding
resource: agentmemory://observation/obs_mrqgxpmk_37cf7ddb2cd3
tags: ["IPv4 vs IPv6 binding", "Loopback network testing", "Webhook endpoint debugging", "Socket listening state verification", "commandrun"]
timestamp: 2026-07-18T14:35:00.473175+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 5
confidence: 1
---
# Summary

Executed curl commands to test webhook connectivity across IPv4 and IPv6 loopback addresses. Results show the Python gateway is bound exclusively to IPv4 (127.0.0.1), causing IPv6 connections to fail, while IPv4 connections reach the server but return a 400 Bad Request.

## Facts
- IPv4 (127.0.0.1) and localhost requests to port 8645 return HTTP 400
- IPv6 ([::1]) requests to port 8645 return HTTP 000 (connection failed)
- lsof confirms python3 (PID 65055) is listening exclusively on IPv4 127.0.0.1:8645
- Webhook endpoint tested is /bluebubbles-webhook

## Concepts
- IPv4 vs IPv6 binding
- Loopback network testing
- Webhook endpoint debugging
- Socket listening state verification

_Importance: 5 · Confidence: 1_
