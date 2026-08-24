---
type: Fact
title: # Using Projects in the Hermex iOS app

source: hermes
session_id: 5d2b9c36b7a0

description: # Using Projects in the Hermex iOS app

source: hermes
session_id: 5d2b9c36b7a0
resource: hermes://session/5d2b9c36b7a0

# Conversation

- **Session ID:** `5d2b9c36b7a0`
- **Source:** webui
- **Model:
resource: agentmemory://memory/mem_mspdw3ef_450e6b393429
tags: ["okf", "okf-hermes", "hermes", "hermes://session/5d2b9c36b7a0"]
timestamp: 2026-08-12T01:01:42.297Z
source: agentmemory
strength: 7
---
# Content

# Using Projects in the Hermex iOS app

source: hermes
session_id: 5d2b9c36b7a0
resource: hermes://session/5d2b9c36b7a0

# Conversation

- **Session ID:** `5d2b9c36b7a0`
- **Source:** webui
- **Model:** kilo-auto/balanced
- **Started:** 2026-06-17T16:21:59Z
- **Messages:** 70
- **Tokens:** 198 in / 3348 out
- **Est. cost:** $0.0953

---

### 👤 User — 2026-06-17T16:21:59Z

How do i use projects in Hermex IOS app

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

The user is asking about how to use "projects" in the Hermes iOS app. Let me think about what I know about this.

The user has mentioned they have a Hermes app on iOS that they use for connecting to the Hermes agent. Let me check if the hermes-agent skill has information about the iOS app and its project feature.

Let me search for relevant documentation.

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
  "query": "Hermes agent iOS app projects feature site:hermes-agent.nousresearch.com"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

The user is asking about the "Projects" feature in the Hermes iOS app. Let me check if there's documentation about this in the Hermes docs site or if I can find info about it.

The skill didn't have specific info about the iOS app's projects feature. Let me try to find documentation about this on the Hermes website.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://hermes-agent.nousresearch.com/docs/user-guide/mobile-app",
    "https://hermes-agent.nousresearch.com/docs/integrations/ios-app",
    "https://hermes-agent.nousresearch.com/docs/user-guide/features/projects"
  ]
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

The web tools aren't available with the current profile (local Ollama doesn't include web tools). Let me try to find information about the Hermes iOS app's projects feature through other means - maybe the docs site or GitHub.

</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://hermes-agent.nousresearch.com/docs/user-guide/mobile"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

Let me try to find the right URL for the Hermes iOS app docs.


</details>

**Tool call: browser_navigate**

```json
{
  "url": "https://hermes-agent.nousresearch.com/docs"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

I need to find information about the iOS app and its "Projects" feature. Let me look at the sidebar navigation to find mobile/iOS related docs.

</details>

**Tool call: browser_click**

```json
{
  "ref": "e110"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

Let me look at the expanded sidebar to find mobile/iOS related docs.

</details>

**Tool call: browser_snapshot**

```json
{}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

Let me look through the Messaging Platforms section to find iOS/mobile related content. Let me expand the sub-menus.

</details>

**Tool call: browser_click**

```json
{
  "ref": "e134"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

Let me see the sidebar now with the "Popular" section expanded.

</details>

**Tool call: browser_snapshot**

```json
{}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

I didn't see an iOS-specific section in the messaging platforms. The iOS app might be under "Integrations" or "Other". Let me check those sections. Also, let me check the "Features" section since "Projects" might be a feature doc.

</details>

**Tool call: browser_click**

```json
{
  "ref": "e137"
}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

Let me check the sidebar now.

</details>

**Tool call: browser_snapshot**

```json
{}
```

### 🤖 Assistant — 2026-06-17T16:25:27Z

<details><summary>Reasoning</summary>

The "Other" section didn't expand visually 
