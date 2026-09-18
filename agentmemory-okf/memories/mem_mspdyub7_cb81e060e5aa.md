---
type: Fact
title: # Kilocode3 Failure Diagnosis

source: hermes
session_id: 20260611_091445_f2ab28
description: # Kilocode3 Failure Diagnosis

source: hermes
session_id: 20260611_091445_f2ab28
resource: hermes://session/20260611_091445_f2ab28

# Conversation

- **Session ID:** `20260611_091445_f2ab28`
- **Sourc
resource: agentmemory://memory/mem_mspdyub7_cb81e060e5aa
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:03:50.472Z
source: agentmemory
strength: 7
---
# Content

# Kilocode3 Failure Diagnosis

source: hermes
session_id: 20260611_091445_f2ab28
resource: hermes://session/20260611_091445_f2ab28

# Conversation

- **Session ID:** `20260611_091445_f2ab28`
- **Source:** cli
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T14:15:18Z
- **Ended:** 2026-06-11T20:15:37Z
- **Messages:** 80
- **CWD:** `/Users/davec`
- **Tokens:** 2186478 in / 9710 out

---

### 👤 User — 2026-06-11T14:15:19Z

Why is kilocode3 failing with this:

### 👤 User — 2026-06-11T14:15:23Z

A fatal error occurred!   Reset TUI    Exit


Error: [Reconciler] Unknown component type: spinner                                                                                                                  ▀
    at createElement (../../node_modules/@opentui/solid/index.js:546:17)
    at children (src/cli/cmd/tui/component/prompt/index.tsx:1463:30)
    at <anonymous> (../../node_modules/solid-js/dist/dev.js:1541:21)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at Kc (../../node_modules/solid-js/dist/dev.js:659:67)
    at <anonymous> (../../node_modules/@opentui/solid/index.js:169:62)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at n8 (../../node_modules/solid-js/dist/dev.js:239:75)
    at K (../../node_modules/@opentui/solid/index.js:169:5)
    at children (src/cli/cmd/tui/component/prompt/index.tsx:1450:13)
    at <anonymous> (../../node_modules/solid-js/dist/dev.js:1578:19)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at l (../../node_modules/solid-js/dist/dev.js:272:10)
    at E8 (../../node_modules/solid-js/dist/dev.js:474:12)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at Zc (../../node_modules/solid-js/dist/dev.js:592:3)
    at <anonymous> (src/cli/cmd/tui/component/prompt/index.tsx:1425:21)
    at uf (src/cli/cmd/tui/component/prompt/index.tsx:1842:12)
    at E8 (../../node_modules/solid-js/dist/dev.js:474:12)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at Zc (../../node_modules/solid-js/dist/dev.js:592:3)
    at <anonymous> (src/cli/cmd/tui/plugin/slots.tsx:14:32)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)
    at L3 (../../node_modules/solid-js/dist/dev.js:723:3)
    at l (../../node_modules/solid-js/dist/dev.js:272:10)
    at CB (../../node_modules/solid-js/dist/dev.js:615:20)
    at pu (src/cli/cmd/tui/plugin/slots.tsx:14:17)
    at E8 (../../node_modules/solid-js/dist/dev.js:474:12)
    at Qc (../../node_modules/solid-js/dist/dev.js:741:22)

[Reconciler] Unknown component type: spinner

### 🤖 Assistant — 2026-06-11T14:28:12Z

<details><summary>Reasoning</summary>


We have search result. Need maybe load debugging skill? It might match TUI debugging. Let's load maybe.


</details>

**Tool call: skill_view**

```json
{
  "file_path": "",
  "name": "debugging-hermes-tui-commands"
}
```

### 🤖 Assistant — 2026-06-11T14:28:12Z

<details><summary>Reasoning</summary>


Skill not directly but has debugging tactics. Need maybe inspect issue. Use web_extract.


</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://github.com/anomalyco/opencode/issues/18590",
    "https://github.com/anomalyco/opencode/issues/17136",
    "https://github.com/anomalyco/opencode/issues/7415"
  ]
}
```

### 🤖 Assistant — 2026-06-11T14:28:12Z

<details><summary>Reasoning</summary>


Need maybe web_search exact issue enough. Could use curl? Terminal okay. Need maybe use GitHub raw? Could fetch issue HTML? We can use web_search or terminal curl. Need maybe not necessary. But to provide exact fix, need know opencode/kilocode. "kilocode3" maybe Kilo Code? Let's search web for kilocode3 opencode.


</details>

**Tool call: web_search**

```json
{
  "limit": 10,
  "query": "kilocode3 spinner opentui/solid unknown component type"
}
```

**Tool call: web_search**

```json
{
  "lim
