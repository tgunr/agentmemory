---
type: Fact
title: # Hermes and Kilo Code agentmemory coexistence

source: hermes
session_id: 20260
description: # Hermes and Kilo Code agentmemory coexistence

source: hermes
session_id: 20260718_061804_159701
resource: hermes://session/20260718_061804_159701

# Conversation

- **Session ID:** `20260718_061804_
resource: agentmemory://memory/mem_msp0czun_a993c0412ff7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-11T18:42:56.235Z
source: agentmemory
strength: 7
---
# Content

# Hermes and Kilo Code agentmemory coexistence

source: hermes
session_id: 20260718_061804_159701
resource: hermes://session/20260718_061804_159701

# Conversation

- **Session ID:** `20260718_061804_159701`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-18T11:18:04Z
- **Messages:** 49
- **CWD:** `/Users/davec`
- **Tokens:** 86767 in / 15265 out

---

### 👤 User — 2026-07-18T11:18:04Z

Tell me how Hermes and Kilo Code can both use agentmemory without conflict.

### 🤖 Assistant — 2026-07-18T11:18:11Z

<details><summary>Reasoning</summary>

The user is asking about how Hermes and Kilo Code can both use agentmemory without conflict. This relates to the AgentMemory integration. I have a memory note about AgentMemory service on :3111, and there's a skill `agentmemory-hermes-integration`. Let me load that skill to give an accurate answer. Also, I should think about whether there's a conflict issue.

The user is asking a conceptual question about how two agents (Hermes and Kilo Code) can both use agentmemory without conflict. This is a question that the skill should answer. Let me load the skill.

Let me also consider: the user might want me to verify the livez of the service. But the question is conceptual. Let me load the skill first.

Let me load the `agentmemory-hermes-integration` skill

</details>

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

### 🤖 Assistant — 2026-07-18T11:18:33Z

<details><summary>Reasoning</summary>

The user is asking about how Hermes and Kilo Code can both use agentmemory without conflict. Let me think about this carefully.

From the skill, I understand:
- AgentMemory is a service running on port 3111 (API) and 3113 (UI)
- Hermes connects to it via an MCP server and a `memory.provider: agentmemory` config
- There's a `kilo`/`kilocode` provider thing for Kilo Code

Wait — the question is about how Hermes AND Kilo Code can both use agentmemory without conflict. This suggests Kilo Code (a VS Code extension / coding agent) also uses AgentMemory, and there might be conflict concerns.

Let me think about what I actually know vs. what the skill tells me. The skill is heavily focused on the Hermes integration and the Kilo Code provider routing (kilo vs kilocode). But the question is about both Hermes and Kilo Code using agentmemory without conflict.

Let me look more carefully. The skill mentions:
- `agentmemory-kilo-hooks` wrapper
- `kilocode-provider` plugin
- The MCP server command uses `agentmemory-kilo-hooks/agentmemory-wrapper.sh`

Hmm, so there's an "agentmemory-kilo-hooks" directory. This suggests there's a hooks system designed to work with Kilo Code. The wrapper script likely injects the secret etc.

The core question: how can two different agent clients (Hermes and Kilo Code) both use the same AgentMemory instance without conflict?

Key design points that prevent conflict:
1. **AgentMemory is a shared, multi-tenant-capable service.** Both clients talk to the same REST API on port 3111. There's no inherent per-client lock — it's just an HTTP service.
2. **Session namespacing via session IDs.** Each agent registers its own sessions via `POST /agentmemory/session/start` with unique session IDs. Hermes uses `YYYYMMDD_HHMMSS_hash` style IDs. Kilo Code would use its own session IDs. As long as they use distinct session IDs, their observations don't collide.
3. **The secret is shared** — both need `AGENTMEMORY_SECRET`. The wrapper script (for Hermes MCP) sets it; Kilo Code hooks presumably also resolve it.
4. **The `agentmemory-kilo-hooks`** suggests the hook-based integration for Kilo Code (which is a VS Code extension that fires hooks on tool calls). Hermes has its own `agentmemory_observer` plugin. These are SEPARATE observer mechanisms — one for Hermes (plugin), one for Kilo Code (hooks). They both push to the same AgentMemory instance but with their own session IDs.
5. **No shared mutable state conflict** because AgentMemory stores observations keyed by session ID. Each conversation/agent run is a distinct session. There's no global "current session" that both would fight over — each wr
