---
type: Fact
title: # Debug agentmemory not working

source: hermes
session_id: 0f34d0593386
resourc
description: # Debug agentmemory not working

source: hermes
session_id: 0f34d0593386
resource: hermes://session/0f34d0593386

# Conversation

- **Session ID:** `0f34d0593386`
- **Source:** webui
- **Model:** kilo
resource: agentmemory://memory/mem_mv0p0mpc_4ef74a178749
tags: ["okf", "okf-hermes", "hermes", "hermes://session/0f34d0593386"]
timestamp: 2026-10-09T08:18:02.142Z
source: agentmemory
strength: 7
---
# Content

# Debug agentmemory not working

source: hermes
session_id: 0f34d0593386
resource: hermes://session/0f34d0593386

# Conversation

- **Session ID:** `0f34d0593386`
- **Source:** webui
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-07T18:31:13Z
- **Messages:** 198
- **Tokens:** 425162 in / 40830 out
- **Est. cost:** $-69318.0000

---

### 👤 User — 2026-10-07T18:31:11Z

Check why agentmemory is not working

### 👤 User — 2026-10-07T18:31:11Z

[Workspace::v1: /Users/davec]
Check why agentmemory is not working

### 🤖 Assistant — 2026-10-07T18:31:19Z

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: terminal**

```json
{
  "command": "ps aux | grep -i agentmemory | grep -v grep; echo \"---PORTS---\"; lsof -nP -iTCP -sTCP:LISTEN 2>/dev/null | grep -Ei 'agentmemory|8081|8420|9100|3456' ; echo \"---CONFIG---\"; grep -rn -i -A6 'agentmemory' ~/.hermes/config.yaml 2>/dev/null | head -60"
}
```

### 🤖 Assistant — 2026-10-07T18:31:19Z

**Tool call: skill_view**

```json
{
  "name": "agentmemory-hermes-integration"
}
```

**Tool call: terminal**

```json
{
  "command": "ps aux | grep -i agentmemory | grep -v grep; echo \"---PORTS---\"; lsof -nP -iTCP -sTCP:LISTEN 2>/dev/null | grep -Ei 'agentmemory|8081|8420|9100|3456' ; echo \"---CONFIG---\"; grep -rn -i -A6 'agentmemory' ~/.hermes/config.yaml 2>/dev/null | head -60"
}
```

### 🤖 Assistant — 2026-10-07T18:31:25Z

<details><summary>Reasoning</summary>

Interesting: agentmemory MCP processes are running but ports show nothing listening (lsof found nothing for 3111/3113 etc). Let me check port 3111 and 3113. Also there's a hanging `npm exec @agentmemory/mcp` process. Let's check.

Let me read the skill content more (spillover file) — but let's first probe ports.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== LISTEN PORTS ===\"; lsof -nP -iTCP -sTCP:LISTEN 2>/dev/null | awk 'NR==1||/311|3111|3113|8420|node|iii/'; echo \"=== 3111 ===\"; curl -s -m 5 -o /dev/null -w '%{http_code}\\n' http://localhost:3111/ ; echo \"=== 3113 ===\"; curl -s -m 5 -o /dev/null -w '%{http_code}\\n' http://localhost:3113/ ; echo \"=== health ===\"; curl -s -m 5 http://localhost:3111/health; echo; echo \"=== iii config ===\"; cat /Users/davec/MCP_Local/agentmemory/iii-config.yaml 2>/dev/null | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== AM env/secret ===\"; ls -la ~/.agentmemory/ 2>/dev/null; grep -c AGENTMEMORY_SECRET ~/.agentmemory/.env 2>/dev/null; echo \"=== launchd ===\"; launchctl list 2>/dev/null | grep -i -E 'agentmemory|iii|memory'; echo \"=== recent err/logs ===\"; ls -lt ~/.agentmemory/logs/ 2>/dev/null | head; ls -lt /tmp/*agentmemory* 2>/dev/null | head"
}
```

**Tool call: read_file**

```json
{
  "limit": 140,
  "offset": 30,
  "path": "/Users/davec/.hermes/cache/spillover/call_00_kqs62mhv5z3zzwxxxmzhiit9.txt"
}
```

### 🤖 Assistant — 2026-10-07T18:31:31Z

<details><summary>Reasoning</summary>

The engine (iii) is listening on 3111, returns 404 on / (expected maybe), /health empty. 3113 viewer is DOWN (000). Also `com.github.agentmemory` launchd job shows exit status 1 (last exit code 1, not running).

Let's read the logs: /tmp/agentmemory.stderr.log and the skill's diagnostics section. The skill file is one line (JSON). Let me read it via execute_code to extract the content properly.

Also check com.github.agentmemory plist and why exit 1. And 3113 viewer.

Let me batch: read stderr log tail, plist, and extract skill content.

</details>

**Tool call: terminal**

```json
{
  "command": "echo \"=== STDERR tail ===\"; tail -60 /tmp/agentmemory.stderr.log; echo; echo \"=== STDERR errors grep ===\"; grep -i -E 'error|fail|EADDR|denied|401|refused|throw' /tmp/agentmemory.stderr.log | tail -30"
}
```

**Tool call: terminal**

```json
{
  "command": "echo \"=== plist ===\"; ls -la ~/Library/LaunchAgents/ | grep -i -E 'agentmemory|memory'; echo \"---\"; cat ~/Library/LaunchAgents/com.github.agentmemory.plist 2>/dev/null; echo \"=== stdout tail ===\"; tail -30 /tmp/agentmemory.stdout.log"
}
```

**Tool call:
