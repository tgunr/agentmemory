---
type: file_edit
title: Fix BlueBubbles echo detection loop by recording bare handle keys
description: BlueBubbles re-webhooks replies as bare handles, causing echo detection to miss and infinite loops to survive
resource: agentmemory://observation/obs_mrrndoid_ab77d26e05d2
tags: ["BlueBubbles webhook echo detection", "iMessage channel prefix format (channel;-;handle)", "infinite message loop prevention", "normalized text deduplication", "self-message echo suppression", "file_edit"]
timestamp: 2026-07-19T10:23:09.392520+00:00
source: agentmemory
session_id: 20260718_064605_1b4835
importance: 8
confidence: 1
---
# Summary

Patched the BlueBubbles gateway to fix an infinite message loop caused by echo detection failure. BlueBubbles returns our own replies webhook'd under the bare phone handle rather than the prefixed "channel;-;handle" form we used to send, so the echo guard never matched. The fix now records sent-text entries under all key variants (full prefixed, bare handle after ";-;", chat_id, guid) so inbound echoes are correctly detected and suppressed.

## Facts
- File edited: /Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py around line 575
- BlueBubbles re-webhooks sent replies using the BARE handle (e.g. "+1...") even when originally sent under a prefixed form ("iMessage;-;+1..." / "any;-;+1...")
- Previous code only recorded echo detection keys under the prefixed chat_id and guid, so bare-handle echoes never matched
- Fix builds a _chat_keys set that includes both the original keys AND the suffix after ";-;" (the bare handle portion)
- Echo detection records normalized text under all key forms in self._sent_texts dict keyed by (chat_key, normalized_text) -&gt; timestamp
- Lint status: ok
- Warning: file was last read with offset/limit pagination (partial view); should re-read whole file before overwriting

## Concepts
- BlueBubbles webhook echo detection
- iMessage channel prefix format (channel;-;handle)
- infinite message loop prevention
- normalized text deduplication
- self-message echo suppression

## Files
- `/Users/davec/.hermes/hermes-agent/gateway/platforms/bluebubbles.py`

_Importance: 8 · Confidence: 1_
