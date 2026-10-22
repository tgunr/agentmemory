---
type: file_edit
title: Creat and verify Cloudflare DNS records
description: Add/verify Cloudflare DNS records (SPF, DKIM, DMARC) for mail authentication.
resource: agentmemory://observation/obs_mvi6jwor_1de3e93dcde9
tags: ["Cloudflare DNS record management", "DKIM verification", "SPF verification", "file_edit"]
timestamp: 2026-10-21T14:01:00.178449+00:00
source: agentmemory
session_id: 20261021_072819_f04629
importance: 8
confidence: 0.9
---
# Summary

The tool manage created and verified Cloudflare DNS records for mail authentication. The records were created using the `mcp__cloudflare__post_zones_dns_records` endpoint. The tool also created a script to verify DNS records.

## Facts
- The `mcp__cloudflare__post_zones_dns_records` endpoint requires a JSON string in the `body` parameter.
- The `name` field must be the full FQDN for TXT records.

## Concepts
- Cloudflare DNS record management
- DKIM verification
- SPF verification

## Files
- `scripts/verify_dns.py`

_Importance: 8 · Confidence: 0.9_
