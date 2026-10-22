---
type: file_edit
title: Raise DKIM TTL on carltontc.com (60s -> 3600s)
description: All day task for Google Workspace email authentication
resource: agentmemory://observation/obs_mvi7n6tx_52da24f830b1
tags: ["Google Workspace", "Cloudflare zone", "DKIM", "file_edit"]
timestamp: 2026-10-21T14:31:32.942779+00:00
source: agentmemory
session_id: 20261021_072819_f04629
importance: 7
confidence: 1
---
# Summary

Remindctl add a new reminder to raise the DKIM TTL on carltontc.com from 60s to 3600s, once Google DKIM signing is enabled and confirmed.

## Facts
- Cloudflare zone carltontc.com = ad3f5e50c4294258b5bb7557c9a3a5a6. TXT record google._domainkey.carltontc.com (record id 824f2a7a37d177d4f93f4ce2258b7928) is at TTL 60, set low for testing.
- Need to patch with mcp__cloudflare__patch_zones_dns_records_by_dns_record_id and verify with the cloudflare-dns skill.
- Gmail 2048-bit keys can take up to 48h to start signing.
- Note SPF and DKIM are published but DMARC is still missing.

## Concepts
- Google Workspace
- Cloudflare zone
- DKIM

## Files
- `Google Workspace email authentication`

_Importance: 7 · Confidence: 1_
