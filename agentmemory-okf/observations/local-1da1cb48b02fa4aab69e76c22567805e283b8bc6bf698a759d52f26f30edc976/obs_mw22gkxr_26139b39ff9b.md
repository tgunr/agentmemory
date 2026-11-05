---
type: file_write
title: Create/Update email-authentication skill
description: Create/Update email-authentication skill without asking
resource: agentmemory://observation/obs_mw22gkxr_26139b39ff9b
tags: ["DMARC", "file_write"]
timestamp: 2026-11-04T12:01:50.071381+00:00
source: agentmemory
session_id: local-1da1cb48b02fa4aab69e76c22567805e283b8bc6bf698a759d52f26f30edc976
importance: 8
confidence: 0.9
---
# Summary

The skill manage tool created a new email-authentication skill by default and enforced the existing policies on supported domains with existing DMARC records. The tool checked for DKIM before promising enforcement, and wrote an update to the zone files.

## Facts
- A domain with a `google._domainkey` TXT (or the provider's selector) can pass DMARC via DKIM alignment which survives forwarding

## Concepts
- DMARC

## Files
- `references/rollout-to-enforcement.md`

_Importance: 8 · Confidence: 0.9_
