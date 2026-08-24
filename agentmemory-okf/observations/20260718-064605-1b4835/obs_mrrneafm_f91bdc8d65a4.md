---
type: FileRead
title: Reviewed BlueBubbles configuration tests
description: Tests cover environment overrides, mention settings, and home channel setup.
resource: agentmemory://observation/obs_mrrneafm_f91bdc8d65a4
tags: ["BlueBubbles adapter", "environment variable configuration", "pytest monkeypatch", "configuration parsing", "home channel", "fileread"]
timestamp: 2026-07-19T10:23:37.807754+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 3
confidence: 1
---
# Summary

The test suite validates BlueBubbles adapter construction and configuration loading from environment variables. It confirms type conversion for port, boolean, and regex-list values, plus home-channel mapping and initial coverage of missing-password behavior.

## Facts
- _make_adapter constructs BlueBubblesAdapter from PlatformConfig using server_url, password, and optional extra settings.
- Environment overrides enable Platform.BLUEBUBBLES and parse webhook_port as 9999, require_mention as true, and mention_patterns as a JSON list.
- BLUEBUBBLES_HOME_CHANNEL is converted into a non-null home_channel whose chat_id matches the configured address.
- A test begins verifying behavior when BLUEBUBBLES_PASSWORD is absent.
- The file contains 1257 lines; this read covered lines 11-65.

## Concepts
- BlueBubbles adapter
- environment variable configuration
- pytest monkeypatch
- configuration parsing
- home channel

## Files
- `/Users/davec/.hermes/hermes-agent/tests/gateway/test_bluebubbles.py`

_Importance: 3 · Confidence: 1_
