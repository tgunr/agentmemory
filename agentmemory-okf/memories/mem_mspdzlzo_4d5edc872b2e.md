---
type: Fact
title: # Using Apple Foundation Models With Hermes

source: hermes
session_id: 20260713
description: # Using Apple Foundation Models With Hermes

source: hermes
session_id: 20260713_115322_327202
resource: hermes://session/20260713_115322_327202

# Conversation

- **Session ID:** `20260713_115322_327
resource: agentmemory://memory/mem_mspdzlzo_4d5edc872b2e
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:04:26.333Z
source: agentmemory
strength: 7
---
# Content

# Using Apple Foundation Models With Hermes

source: hermes
session_id: 20260713_115322_327202
resource: hermes://session/20260713_115322_327202

# Conversation

- **Session ID:** `20260713_115322_327202`
- **Source:** tui
- **Model:** kilo-auto/balanced
- **Started:** 2026-07-13T16:53:23Z
- **Messages:** 416
- **CWD:** `/Users/davec`
- **Tokens:** 582 in / 26559 out
- **Est. cost:** $0.3559

---

### 👤 User — 2026-07-13T16:53:23Z

In MacOS 27 how can I use Apple Foundation Models with hermes?

### 🤖 Assistant — 2026-07-13T16:53:33Z

<details><summary>Reasoning</summary>

The user is asking about using Apple Foundation Models with Hermes on macOS 27. Let me think about what I know and what I should look up.

Apple Foundation Models - this is Apple's on-device AI framework introduced around macOS 15.4/iOS 18.4, which allows apps to use Apple's on-device language models. In macOS 27 (which would be the latest), there may be new capabilities.

Let me check the hermes-agent skill first since this is about configuring Hermes, and also do a web search for the current state of Apple Foundation Models API availability.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: web_search**

```json
{
  "query": "Apple Foundation Models API macOS 27 developer access 2025 2026",
  "limit": 5
}
```

### 🤖 Assistant — 2026-07-13T16:53:43Z

<details><summary>Reasoning</summary>

The user is asking about using Apple Foundation Models with Hermes on macOS 27. Let me look at the search results to understand what Apple Foundation Models are and whether there's a way to integrate them with Hermes.

From the search results:
1. Apple Foundation Models is a native Swift framework that gives direct access to on-device models (the same ones powering Apple Intelligence)
2. It's available on iOS 27 and macOS 27
3. It supports language understanding, structured output, and tool calling
4. No API key, no network, no cost for on-device models
5. There are also cloud models via PrivateCloudCompute


6. Since Hermes supports custom endpoints with OpenAI-compatible APIs, the real question is whether Apple Foundation Models exposes an HTTP endpoint that Hermes could connect to, or if there's an alternative integration path.

Let me search for more details about whether Apple's framework can be accessed through an API endpoint or if there's a bridge that would make it compatible with Hermes.


</details>

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Apple Foundation Models framework local API server HTTP endpoint OpenAI compatible macOS 27"
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "Apple Foundation Models swift CLI command line inference macOS 27 developer"
}
```

### 🤖 Assistant — 2026-07-13T16:53:51Z

<details><summary>Reasoning</summary>

The user is asking about using Apple Foundation Models with Hermes on macOS 27. Let me gather the key info:

1. Apple Foundation Models (AFM) is Apple's on-device LLM framework introduced in macOS 27 / iOS 27
2. It's accessible via Swift's Foundation Models framework
3. macOS 27 ships with `fm`, a command-line tool for the on-device Apple Foundation Model
4. There's also a Python SDK

The key question is: can Hermes use Apple Foundation Models as a provider?

Looking at the Hermes provider list, I don't see "Apple Foundation Models" as a built-in provider. 

Since Hermes supports custom OpenAI-compatible endpoints, I could potentially bridge AFM through that if Apple exposes an HTTP API, or use the `fm` CLI tool as a subprocess, or build a custom provider integration. Let me look into whether the `fm` CLI has an HTTP server mode or if there's an OpenAI-compatible endpoint available.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://blakecrosley.com/blog/foundation-models-python-fm-cli",
    "https://developer.apple.com/documentation/FoundationModels"
  ]
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "\"fm\" CLI macOS 27 \"foundation models\" OpenAI compatible server local endpoint"
}
```

### 🤖 Assistant — 2026-07-13T16:53:57Z

<details
