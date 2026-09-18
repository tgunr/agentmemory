---
type: Fact
title: # API Tool Type Schema Fix

source: grok
session_id: 454d06f2-66d1-45a4-b302-cb5
description: # API Tool Type Schema Fix

source: grok
session_id: 454d06f2-66d1-45a4-b302-cb5ff884361f
resource: grok://conversation/454d06f2-66d1-45a4-b302-cb5ff884361f

# Conversation

- **Session ID:** `454d06f
resource: agentmemory://memory/mem_mthho26v_51cb394b774d
tags: ["okf", "okf-grok", "grok", "grok://conversation/454d06f2-66d1-45a4-b302-cb5ff884361f"]
timestamp: 2026-08-31T17:04:58.822Z
source: agentmemory
strength: 7
---
# Content

# API Tool Type Schema Fix

source: grok
session_id: 454d06f2-66d1-45a4-b302-cb5ff884361f
resource: grok://conversation/454d06f2-66d1-45a4-b302-cb5ff884361f

# Conversation

- **Session ID:** `454d06f2-66d1-45a4-b302-cb5ff884361f`
- **Source:** grok
- **Model:** grok-3
- **Started:** 2026-08-22T16:24:17Z
- **Messages:** 2

---

### 👤 User — 2026-08-22T16:24:32Z

Scan failed (422). Failed to deserialize the JSON body into the target type: tools[0].type: unknown variant `web_search`, expected `function` or `live_search` at line 1 column 2998

---

### 🤖 Assistant — 2026-08-22T16:24:32Z

**This is a 422 Unprocessable Entity error** from an API that expects a specific JSON schema for a `tools` array.

### What the error means
The server failed to deserialize (parse) the request body because:

- `tools[0].type` has the value `"web_search"`
- The allowed values for that field are only `"function"` or `"live_search"`

In short: the client sent a tool definition whose `type` is not in the set the API accepts.

### Typical causes
1. **Wrong tool schema** – You’re sending a tool object shaped for a different API (or an older/newer version) that uses free-form names like `"web_search"`, `"open_page"`, etc., instead of the restricted enum `"function"` / `"live_search"`.
2. **Incorrect payload construction** – The JSON was built by concatenating or templating tool definitions that don’t match the target API’s OpenAPI/JSON Schema.
3. **Client library mismatch** – A wrapper or SDK is emitting tool types that the backend no longer (or never) supported.

### How to fix it
- Inspect the exact JSON body being sent (especially the `tools` array).
- Change the first tool’s `"type"` field to either `"function"` or `"live_search"` (whichever the API documentation says is appropriate for that tool).
- If you need web-search-like behavior, map it to the allowed type and put any extra configuration (name, description, parameters, etc.) in the fields the schema actually defines for `"function"` or `"live_search"`.
- Validate the whole payload against the API’s schema before sending.

If you can share the relevant part of the request body (or the API docs / client code that generates the `tools` array), I can help pinpoint the exact change needed.

---
