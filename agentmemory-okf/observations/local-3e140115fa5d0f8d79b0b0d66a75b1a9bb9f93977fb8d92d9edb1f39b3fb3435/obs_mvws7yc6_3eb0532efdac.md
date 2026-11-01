---
type: CommandRun
title: HerMES process call failed
description: Probe token installation failed
resource: agentmemory://observation/obs_mvws7yc6_3eb0532efdac
tags: ["SSHTunnel", "HerMES Agent", "commandrun"]
timestamp: 2026-10-31T19:16:20.499204+00:00
source: agentmemory
session_id: local-3e140115fa5d0f8d79b0b0d66a75b1a9bb9f93977fb8d92d9edb1f39b3fb3435
importance: 7
confidence: 0.9
---
# Summary

The Hermes process call failed during probe token installation due to an unexpected error.

## Facts
- Session ID: proc_ae12cce677d2
- Command: printf 'probe-token-1234567890' > /tmp/hermes-probe-token.txt && <![CDATA[~/.hermes/hermes-agent/.hermes/bin/hermes serve --isolated --host 127.0.0.1 --port 61999 --ssh-session-token-file /tmp/hermes-probe-token.txt --ssh-owner-nonce 0123456789abcdef]]></cdatatext>
    <fact>Exit Code: 1

## Concepts
- SSHTunnel
- HerMES Agent

_Importance: 7 · Confidence: 0.9_
