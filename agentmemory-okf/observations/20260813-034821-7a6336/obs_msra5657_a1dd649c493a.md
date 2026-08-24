---
type: file_edit
title: Editing bash script for pve.root with ssh command
description: Ping checks and network IP address listing
resource: agentmemory://observation/obs_msra5657_a1dd649c493a
tags: ["ssh command", "ip routing tables", "file_edit"]
timestamp: 2026-08-13T08:52:19.670323+00:00
source: agentmemory
session_id: 20260813_034821_7a6336
importance: 6
confidence: 1
---
# Summary

Edited a bash script to retrieve network IP addresses using ssh command<nl>, which resulted in an error due to the &quot;==&quot; syntax not being available on zsh. The error code is 1.

## Facts
- Command executed: ssh pve.root &quot;ip -br addr show; echo ===; ip route show | grep -E &apos;10.89|default;&apos;; echo ===; ls /sys/class/net/ | grep -iE &apos;br-|^podman&#39;&#icol;
- Error code: 1
- Error message: &quot;zsh:1: == not found&quot;

## Concepts
- ssh command
- ip routing tables

_Importance: 6 · Confidence: 1_
