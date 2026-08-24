---
type: file_write
title: skill manage write_file error
description: User-owned skill not curator-managed
resource: agentmemory://observation/obs_msptnxis_7d251149508a
tags: ["file_write"]
timestamp: 2026-08-12T08:23:15.313302+00:00
source: agentmemory
session_id: 20260718_095300_22c85c2d
importance: 4
confidence: 0.75
---
# Summary

The tool skill_manage attempted to write a file, but was denied due to the skill not being curator-managed. The user must opt-in the skill to autonomous curation by running `<code>hermes curator adopt agentmemory-hermes-integration</code>`.

## Facts
- background curator refused write file for agentmemory-hermes-integration skill
- userowned skill not opted into curator management

_Importance: 4 · Confidence: 0.75_
