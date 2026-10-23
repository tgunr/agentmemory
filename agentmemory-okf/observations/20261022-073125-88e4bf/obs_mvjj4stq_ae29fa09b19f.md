---
type: file_edit
title: Whois and DNS lookup using dig and grep
description: No specific context
resource: agentmemory://observation/obs_mvjj4stq_ae29fa09b19f
tags: ["DNS lookup", "Whois search", "grep pattern matching", "file_edit"]
timestamp: 2026-10-22T12:40:56.536411+00:00
source: agentmemory
session_id: 20261022_073125_88e4bf
importance: 5
confidence: 0.9
---
# Summary

This observation combines whois and DNS lookup using dig and grep to extract DNS records and host information

## Facts
- Running `dig +short -x 98.96.55.218` yielded the IP address `98-96-55-218.dyn.tachusfiber.net.`
- Whois lookup of `98.96.55.218` indicated CIDR range `98.96.0.0/17` with hostname `TACHUS-V4-03`, Org Name `Ezee Fiber`

## Concepts
- DNS lookup
- Whois search
- grep pattern matching

## Files
- `none specified`

_Importance: 5 · Confidence: 0.9_
