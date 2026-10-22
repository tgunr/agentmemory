---
type: CommandRun
title: Invalid provider found in Hermes CLI
description: No output related to this issue will be shown unless the user explicitly views their tool output
resource: agentmemory://observation/obs_mvhvhop1_3e883c3e3280
tags: ["auth middleware", "commandrun"]
timestamp: 2026-10-21T08:51:20.659739+00:00
source: agentmemory
session_id: 20261021_033005_284670
importance: 7
confidence: 0.9
---
# Summary

The Hermes CLI threw an exception when it detected an unknown provider. The tool ran without errors, but there is a need to identify this issue for future improvements

## Facts
- Command used: `cd ~/.hermes/hermes-agent; grep -rn \"Unknown provider\" --include=*.py . | head -5``
- Total duration: 60 seconds

## Concepts
- auth middleware

_Importance: 7 · Confidence: 0.9_
