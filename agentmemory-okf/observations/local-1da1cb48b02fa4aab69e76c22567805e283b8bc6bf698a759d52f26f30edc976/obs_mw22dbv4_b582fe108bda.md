---
type: file_edit
title: MX record lookups using dig
description: Digital forensics
resource: agentmemory://observation/obs_mw22dbv4_b582fe108bda
tags: ["MX record analysis", "file_edit"]
timestamp: 2026-11-04T11:59:18.349042+00:00
source: agentmemory
session_id: local-1da1cb48b02fa4aab69e76c22567805e283b8bc6bf698a759d52f26f30edc976
importance: 6
confidence: 0.9
---
# Summary

The tool executed a custom command to query MX records for a list of domains, extracting relevant information using the `dig` and `awk` tools. The command was successful, but some SPF records were incomplete.

## Facts
- dig +short MX example_domain |awk '{print $2}' | grep 'route1.mx.cloudflare.net'
- Google SPF and DMARC records

## Concepts
- MX record analysis

## Files
- `/usr/bin/dig`
- `/usr/bin/awk`
- `/usr/bin/paste`
- `/usr/bin/Bash`

_Importance: 6 · Confidence: 0.9_
