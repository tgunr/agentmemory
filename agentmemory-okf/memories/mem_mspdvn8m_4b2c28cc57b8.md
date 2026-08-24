---
type: Fact
title: # Organizing Hermes profiles and sessions

source: hermes
session_id: 20260718_0
description: # Organizing Hermes profiles and sessions

source: hermes
session_id: 20260718_051246_8c32b1
resource: hermes://session/20260718_051246_8c32b1

# Conversation

- **Session ID:** `20260718_051246_8c32b
resource: agentmemory://memory/mem_mspdvn8m_4b2c28cc57b8
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:01:21.347Z
source: agentmemory
strength: 7
---
# Content

# Organizing Hermes profiles and sessions

source: hermes
session_id: 20260718_051246_8c32b1
resource: hermes://session/20260718_051246_8c32b1

# Conversation

- **Session ID:** `20260718_051246_8c32b1`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-18T10:12:47Z
- **Messages:** 209
- **CWD:** `/Users/davec`
- **Tokens:** 215690 in / 81751 out

---

### 👤 User — 2026-07-18T10:12:48Z

Examine how I am using hermes with profiles and sessions. How is one supposed to keep things organized? Am I doing the right thing? Do you have any recommendations?

### 🤖 Assistant — 2026-07-18T10:12:59Z

<details><summary>Reasoning</summary>

The user wants me to examine how they're using Hermes with profiles and sessions, and give recommendations on keeping things organized. Let me gather real data about their setup.

I should look at:
1. Their profiles directory structure
2. Their memory files
3. Their session usage patterns

Let me start by exploring the filesystem and gathering data. I can make several independent calls in parallel.

Let me think about what I need:
- `~/.hermes/profiles/` - to see profiles
- The current profile's memories
- Session data

Let me explore the actual structure. I'll use terminal commands and search_files to understand the layout without cat/ls.

Let me batch independent calls:
1. List profiles directory
2. Look at the hermes config
3. session_search to see recent sessions

Actually, session_search with no args returns recent sessions. Let me do that too.

Let me start gathering

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== HERMES HOME ===\" && ls -la ~/.hermes/ 2>/dev/null; echo \"=== PROFILES ===\" && ls -la ~/.hermes/profiles/ 2>/dev/null; echo \"=== DEFAULT PROFILE TREE ===\" && find ~/.hermes/profiles/default -maxdepth 2 -type d 2>/dev/null"
}
```

**Tool call: search_files**

```json
{
  "pattern": "*",
  "target": "files",
  "path": "~/.hermes/profiles",
  "limit": 100
}
```

**Tool call: session_search**

```json
{}
```

### 🤖 Assistant — 2026-07-18T10:14:00Z

<details><summary>Reasoning</summary>

Let me understand the picture. The user has 10 profiles:
- ai
- cc
- default
- develop
- ollama
- personal
- pveroot
- ranch
- shop
- (and the cnc profile mentioned in memory but it shows cnc was deprecated/merged into cc — but I don't see "cnc" in the profiles list! Let me re-check. The profiles listed: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop. That's 9. Wait, earlier memory mentioned cnc at ~/.hermes/profiles/cnc/ deprecated but exists. But the directory listing shows only 9 profile dirs. Hmm, maybe cnc was actually removed. Anyway.)

Actually the listing shows directories: ai, cc, default, develop, ollama, personal, pveroot, ranch, shop = 9 profiles. Wait that's odd, the memory said CNC at ~/.hermes/profiles/cnc/ deprecated but exists. Maybe it doesn't exist anymore (migrate_cnc_to_cc.py is empty - size 0). So cnc was merged.

Wait, there's also a top-level `~/.hermes/jo` directory (not under profiles). That's odd — `jo` appears in the top-level hermes home listing: `drwx------@ 38 davec staff 1216 Jul 16 10:06 jo`. That's a stray profile-like dir at top level, not under profiles/. Interesting.

Also there's top-level `memories/`, `skills/`, `projects.db`, `projects.yaml`, `cron/`, `sessions/`. The top-level `~/.hermes/sessions` exists (71 entries). And there are per-profile state.db files.

I need to understand:
1. What each profile is for (the user has named them: ai, cc, develop, ollama, personal, pveroot, ranch, shop, default).
2. How sessions are organized — both top-level ~/.hermes/sessions and per-profile state.db.
3. The config.yaml — how `skills.external_dirs` and `profiles` are configured.
4. Cron jobs per profile.
5. The agentmemory observer plugin situation.

Let me gather more. Let me look at:
- config.yaml relevant parts (profiles, skills.external_dirs, default_profile)
- projects.yaml
- Each profile's state.db session count (to see where sessions actually live)
- The top-level `jo` dir
- cron jobs across profiles

Actually, the key question: how does Hermes actu
