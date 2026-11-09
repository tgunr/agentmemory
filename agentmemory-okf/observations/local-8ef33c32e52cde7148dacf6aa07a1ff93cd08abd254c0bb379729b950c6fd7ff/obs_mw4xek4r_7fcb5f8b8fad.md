---
type: file_edit
title: Reset and test unit
description: Lift of failed service
resource: agentmemory://observation/obs_mw4xek4r_7fcb5f8b8fad
tags: ["SQL gateway error", "file_edit"]
timestamp: 2026-11-06T12:03:36.165737+00:00
source: agentmemory
session_id: local-8ef33c32e52cde7148dacf6aa07a1ff93cd08abd254c0bb379729b950c6fd7ff
importance: 8
confidence: 0.9
---
# Summary

The previous version reading the net carrier status from /sys/class/net/eno1/carrier incorrectly caused a timeout. A gate could not be passed. This patch resets the service to active instead which has an exit code of 0, state of active and an error message indicating that previous value was EINVAL. After a reset the service is able to run correctly.

## Facts
- Previous version read carrier value incorrectly for gate
- Error code and error message were not reported

## Concepts
- SQL gateway error

## Files
- `/etc/systemd/system/ifupdown2-pre.service.d/zzz-wait-nic-carrier.conf`

_Importance: 8 · Confidence: 0.9_
