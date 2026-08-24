---
type: file_edit
title: Update BlueBubbles SKILL.md with deploy traps and verification recipe
description: Documents .env startup ordering trap, synthetic webhook verification, and echo loop regression tests
resource: agentmemory://observation/obs_mrrojpwb_7a1d9223a943
tags: ["BlueBubbles gateway", ".env startup ordering", "Webhook verification", "Echo loop prevention", "Regression testing", "file_edit"]
timestamp: 2026-07-19T10:55:50.743996+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 6
confidence: 1
---
# Summary

Updated the BlueBubbles gateway skill documentation to capture critical deploy-ordering traps where `.env` changes require a gateway restart to take effect. Added a synthetic webhook verification recipe and updated regression test names for the bare handle echo loop bug.

## Facts
- Gateway reads `.env` only once at startup; missing allowlist after setting allow_all=false rejects all users.
- Synthetic webhook POST to `http://&lt;HOST&gt;:8645/bluebubbles-webhook?password=&lt;pw&gt;` verifies authz and echo guard.
- Echo loop fix requires recording prefix-stripped chat key in `send()` (`c.split(";-;",1)[-1]`).
- Added regression test `test_status_reply_echo_with_prefix_and_multiline_dropped`.
- Removed outdated "Patched code is NOT auto-deployed" section.

## Concepts
- BlueBubbles gateway
- .env startup ordering
- Webhook verification
- Echo loop prevention
- Regression testing

## Files
- `/Users/davec/.hermes/skills/integrations/bluebubbles-gateway/SKILL.md`

_Importance: 6 · Confidence: 1_
