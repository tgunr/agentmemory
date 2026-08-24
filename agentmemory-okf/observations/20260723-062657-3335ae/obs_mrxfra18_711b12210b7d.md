---
type: FileRead
title: runtimeSessionId & selectedStoredSessionIdRef updates in desktop-controller.tsx
description: No-op run on .hermes/hermes-agent/apps/desktop/src/app/desktop-controller.tsx, refetched session state from $messagingSessions
resource: agentmemory://observation/obs_mrxfra18_711b12210b7d
tags: ["messagingTranscriptSignatureRef", "useMessageStream and usePreviewRouting utilities", "$messagingSessions", "fileread"]
timestamp: 2026-07-23T11:36:23.944272+00:00
source: agentmemory
session_id: 20260723_062657_3335ae
importance: 7
confidence: 0.9
---
# Summary

The desktop-controller.tsx was re-read, and session state was updated from $messagingSessions. No new messages were detected in this run.

## Facts
- sessions are checked for validity and matched to their corresponding profile when hydrating
- refreshActiveMessagingTranscript function uses messagingTranscriptSignatureRef to track changes to the transcript signature

## Concepts
- messagingTranscriptSignatureRef
- useMessageStream and usePreviewRouting utilities
- $messagingSessions

## Files
- `.hermes/hermes-agent/apps/desktop/src/app/desktop-controller.tsx`

_Importance: 7 · Confidence: 0.9_
