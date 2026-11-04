---
type: FileRead
title: Verification of TLS certificate
description: No alternative certificate subject name matches target host name
resource: agentmemory://observation/obs_mw19j8yd_6ea7840bc0e4
tags: ["SSL certificate verification", "fileread"]
timestamp: 2026-11-03T22:32:05.646033+00:00
source: agentmemory
session_id: local-2b8acb7ac3eb9a1b9644aeae4b77fcabb7b001f9c5c685ddae8a7e1b13417617
importance: 6
confidence: 0.9
---
# Summary

The tool used a self-signed certificate to establish a secure connection to the Plex server, but failed verification and was unable to establish a secure connection.

## Facts
- Curl failed to verify the legitimacy of the server
- The server's SSL certificate was invalid

## Concepts
- SSL certificate verification

## Files
- `/dev/null`

_Importance: 6 · Confidence: 0.9_
