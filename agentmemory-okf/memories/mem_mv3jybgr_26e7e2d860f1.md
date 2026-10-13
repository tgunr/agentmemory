---
type: Fact
title: # Fix context window showing 65k

source: hermes
session_id: 20261010_100757_256
description: # Fix context window showing 65k

source: hermes
session_id: 20261010_100757_256cde
resource: hermes://session/20261010_100757_256cde

# Conversation

- **Session ID:** `20261010_100757_256cde`
- **So
resource: agentmemory://memory/mem_mv3jybgr_26e7e2d860f1
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-10-11T08:19:34.770Z
source: agentmemory
strength: 7
---
# Content

# Fix context window showing 65k

source: hermes
session_id: 20261010_100757_256cde
resource: hermes://session/20261010_100757_256cde

# Conversation

- **Session ID:** `20261010_100757_256cde`
- **Source:** tui
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-10T15:08:26Z
- **Ended:** 2026-10-10T15:09:02Z
- **Messages:** 11
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 48205 in / 794 out
- **Est. cost:** $-31711.0000

---

### 👤 User — 2026-10-10T15:08:26Z

This model is showing a context window of 65k when, in fact, it is over 1 million. We've had this problem before. Fix it.

### 🤖 Assistant — 2026-10-10T15:08:33Z

<details><summary>Reasoning</summary>

The user says the model shows a context window of 65k but it's actually over 1 million. "We've had this problem before. Fix it."

Model: kilo-auto/efficient, provider: kilocode. So the context window for a kilocode model is misconfigured. Let me look at the Hermes config for model context windows.

Let me load the hermes-agent skill and check where context windows are defined.

Memory: there's a note about model selection routing. Also "hermes-cron" skill: "Fix Hermes cron jobs broken by inference-config drift". Maybe the previous problem was recorded in a skill. Let me check skills for context window issues — "model-selection-routing", "hermes-cron".

Let me start by searching the repo for context window definitions and checking config.

Let's do parallel: load hermes-agent skill, and grep for context window config.

</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -rn \"context_window\\|max_context\\|context_length\" ~/.hermes/config.yaml 2>/dev/null | head -50; echo \"---PROFILES---\"; ls ~/.hermes/profiles/ 2>/dev/null"
}
```

### 🤖 Assistant — 2026-10-10T15:08:38Z

<details><summary>Reasoning</summary>

The active model is kilo-auto/efficient with provider kilocode. Context window shows 65k. Let me look at the config around those lines.

</details>

**Tool call: read_file**

```json
{
  "limit": 60,
  "offset": 755,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

**Tool call: read_file**

```json
{
  "limit": 55,
  "offset": 20,
  "path": "/Users/davec/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-10-10T15:08:44Z

<details><summary>Reasoning</summary>

The config says kilo-auto/efficient has context_length 1000000. But the model shows 65k. So something else is capping it — maybe the model catalog, or a model_context cache in hermes home, or the model_catalog. Let me check.

We've "had this problem before" — likely there's a cached model context file (e.g. `~/.hermes/model_context_cache.json` or `~/.hermes/cache/models.json`) that stores context_length from a probe. Let me search.

</details>

**Tool call: terminal**

```json
{
  "command": "cd ~/.hermes && grep -rn \"65536\" --include=\"*.json\" --include=\"*.yaml\" . 2>/dev/null | grep -v node_modules | grep -v \"/skills/\" | head -30; echo \"=== cache files ===\"; ls -la ~/.hermes/*.json ~/.hermes/cache/ 2>/dev/null | head -40"
}
```

**Tool call: search_files**

```json
{
  "limit": 40,
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "context_length",
  "target": "files"
}
```
