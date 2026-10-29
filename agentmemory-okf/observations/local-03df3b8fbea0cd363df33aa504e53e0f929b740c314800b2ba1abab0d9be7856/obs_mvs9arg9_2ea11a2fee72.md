---
type: file_edit
title: Policy Server Certificate Expiration Checks
description: Validating certificate expiration dates for each domain
resource: agentmemory://observation/obs_mvs9arg9_2ea11a2fee72
tags: ["Certificate expiration tracking", "OpenSSL", "file_edit"]
timestamp: 2026-10-28T15:15:34.133333+00:00
source: agentmemory
session_id: local-03df3b8fbea0cd363df33aa504e53e0f929b740c314800b2ba1abab0d9be7856
importance: 7
confidence: 0.9
---
# Summary

A daily tool to check certificate expiration dates on each domain's certificate using OpenSSL, ensuring policies are up-to-date and secure.

## Facts
- Running regular expiration checks on each domain's certificate
- Certificate expiration checks are performed daily using OpenSSL

## Concepts
- Certificate expiration tracking
- OpenSSL

## Files
- `/etc/letsencrypt live`

_Importance: 7 · Confidence: 0.9_
