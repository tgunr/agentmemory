---
type: Fact
title: # Move profile ollama cron jobs to profile

source: hermes
session_id: 20260813_
description: # Move profile ollama cron jobs to profile

source: hermes
session_id: 20260813_135238_f88d0e
resource: hermes://session/20260813_135238_f88d0e

# Conversation

- **Session ID:** `20260813_135238_f88d
resource: agentmemory://memory/mem_mtg1263b_78c28ab03ece
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-30T16:32:17.404Z
source: agentmemory
strength: 7
---
# Content

# Move profile ollama cron jobs to profile

source: hermes
session_id: 20260813_135238_f88d0e
resource: hermes://session/20260813_135238_f88d0e

# Conversation

- **Session ID:** `20260813_135238_f88d0e`
- **Source:** desktop
- **Model:** tencent/hy3:free
- **Started:** 2026-08-13T18:52:38Z
- **Ended:** 2026-08-24T22:20:25Z
- **Messages:** 29
- **CWD:** `/Users/davec`
- **Tokens:** 77283 in / 20847 out

---

### 👤 User — 2026-08-13T18:52:41Z

move the cron jobs from profile ollama into this profile

### 🤖 Assistant — 2026-08-13T18:52:52Z

<details><summary>Reasoning</summary>

The user wants to move cron jobs from profile "ollama" into "this profile" (the current/active profile, which is "default" based on the system prompt: "Active Hermes profile: default").

Let me think about this. Cron jobs are stored in the Hermes profile directory. The cron tool has a `list` action. But moving between profiles would require accessing the other profile's cron store.

Let me first understand the structure. Each profile has its own cron/ directory under /Users/davec/.hermes/profiles/<name>/.

Let me check the current state. I should:
1. List cron jobs in the "ollama" profile
2. List cron jobs in the current "default" profile
3. Move them

But the cron tool operates on the active profile. To move between profiles, I likely need to manipulate files directly, OR use the API with profile context.

Let me first verify the profile layout and find where cron jobs are stored. Let me look at the filesystem.

Actually, the cron tool doesn't have a "move" or profile parameter. So I'd need to handle this at the file level. Let me investigate.

Let me start by exploring the profiles directory structure and the cron storage

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== active profile ===\" && echo \"default\" && echo \"=== profiles dir ===\" && ls -la /Users/davec/.hermes/profiles/ 2>/dev/null && echo \"=== ollama cron ===\" && ls -la /Users/davec/.hermes/profiles/ollama/cron/ 2>/dev/null && echo \"=== default cron ===\" && ls -la /Users/davec/.hermes/profiles/default/cron/ 2>/dev/null"
}
```

### 🤖 Assistant — 2026-08-13T18:53:05Z

<details><summary>Reasoning</summary>

The active profile is "default" (this profile). The default cron directory is empty/missing. Let me look at the jobs.json in ollama to understand the structure, and understand how Hermes cron jobs are stored and associated with profiles.

Let me check the default profile's cron directory and the format. Also I should understand whether jobs are associated with a profile by directory location or by a profile field in jobs.json. Let me look.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== ollama jobs.json ===\" && cat /Users/davec/.hermes/profiles/ollama/cron/jobs.json && echo \"\" && echo \"=== default cron dir? ===\" && ls -la /Users/davec/.hermes/profiles/default/cron 2>&1 && echo \"=== global cron location ===\" && ls -la /Users/davec/.hermes/cron 2>&1"
}
```

### 🤖 Assistant — 2026-08-13T18:53:31Z

<details><summary>Reasoning</summary>

So the ollama profile has one cron job. The default profile doesn't have a cron dir yet. Let me check how cron jobs are stored — the default profile appears to be the global one at ~/.hermes/. Let me check where the active profile's cron is.

Actually, the active profile is "default". The cron dir is per-profile at ~/.hermes/profiles/<name>/cron/. The default profile has no cron dir yet. Let me create it by moving the job.

But wait — there's an important consideration. The job's prompt references `~/.hermes/profiles/ollama/scripts/gpu_price_monitor.sh`. If I move the job to the default profile, that script path still points to ollama's scripts. Should I move that too? The user said "move the cron jobs from profile ollama into this profile." So just move the cron job itself.

But the job references ollama's script. That's a content issue, not a structural one. The user just wants the job definition moved. I should move the job and mention the script path reference.

Let me also check: is the cron runner running? Moving jobs.json while the runn
