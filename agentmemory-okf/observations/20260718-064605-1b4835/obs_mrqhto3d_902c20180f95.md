---
type: FileRead
title: Read BlueBubbles adapter configuration tests
description: Inspected environment override and home-channel test setup.
resource: agentmemory://observation/obs_mrqhto3d_902c20180f95
tags: ["pytest monkeypatch", "environment configuration overrides", "BlueBubbles adapter", "platform home channel", "fileread"]
timestamp: 2026-07-18T14:59:51.478370+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 2
confidence: 1
---
# Summary

The test file validates BlueBubbles configuration loading from environment variables and adapter construction from platform configuration. It confirms typed parsing of ports, booleans, mention-pattern JSON, and home-channel settings.

## Facts
- _make_adapter constructs BlueBubblesAdapter from PlatformConfig with an enabled flag, server URL, password placeholder, and optional extra settings.
- Environment override tests verify server URL, webhook port 9999, require_mention=true, mention pattern parsing, and platform enablement.
- BLUEBUBBLES_HOME_CHANNEL is converted into a non-null home_channel whose chat_id matches the configured address.
- The file contains 1,056 lines; this read covered lines 10-59 and was truncated.

## Concepts
- pytest monkeypatch
- environment configuration overrides
- BlueBubbles adapter
- platform home channel

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 2 · Confidence: 1_
