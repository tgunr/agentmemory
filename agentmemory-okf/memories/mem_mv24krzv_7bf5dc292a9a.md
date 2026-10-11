---
type: Fact
title: # Set up Hermes jev compaction

source: hermes
session_id: 20261009_030534_37b4e
description: # Set up Hermes jev compaction

source: hermes
session_id: 20261009_030534_37b4eb
resource: hermes://session/20261009_030534_37b4eb

# Conversation

- **Session ID:** `20261009_030534_37b4eb`
- **Sour
resource: agentmemory://memory/mem_mv24krzv_7bf5dc292a9a
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Desktop"]
timestamp: 2026-10-10T08:21:22.613Z
source: agentmemory
strength: 7
---
# Content

# Set up Hermes jev compaction

source: hermes
session_id: 20261009_030534_37b4eb
resource: hermes://session/20261009_030534_37b4eb

# Conversation

- **Session ID:** `20261009_030534_37b4eb`
- **Source:** desktop
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-09T08:06:10Z
- **Ended:** 2026-10-09T10:24:05Z
- **Messages:** 254
- **CWD:** `/Users/davec/Desktop`
- **Tokens:** 1394788 in / 55091 out
- **Est. cost:** $-243965.0000

---

### 👤 User — 2026-10-09T08:06:10Z

Using /Users/davec/Desktop/fast-jev-compaction folder setup Hermes to use jev compaction

### 🤖 Assistant — 2026-10-09T08:06:17Z

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

**Tool call: search_files**

```json
{
  "pattern": "*",
  "path": "/Users/davec/Desktop/fast-jev-compaction",
  "target": "files"
}
```

### 🤖 Assistant — 2026-10-09T08:07:24Z

**Tool call: terminal**

```json
{
  "command": "ls -la /Users/davec/Desktop/fast-jev-compaction"
}
```

### 🤖 Assistant — 2026-10-09T08:07:28Z

**Tool call: read_file**

```json
{
  "limit": 200,
  "path": "/Users/davec/Desktop/fast-jev-compaction/README.md"
}
```

**Tool call: terminal**

```json
{
  "command": "find /Users/davec/Desktop/fast-jev-compaction/hermes-plugin -maxdepth 3 | head -50"
}
```

### 🤖 Assistant — 2026-10-09T08:08:47Z

**Tool call: read_file**

```json
{
  "path": "/Users/davec/Desktop/fast-jev-compaction/hermes-plugin/README.md"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -n \"TYPESAFE\\|context.engine\\|context:\" ~/.hermes/config.yaml | head -30; echo ---; grep -n \"TYPESAFE\" ~/.hermes/.env 2>/dev/null | sed 's/=.*/=<set>/'"
}
```

### 🤖 Assistant — 2026-10-09T08:10:04Z

**Tool call: terminal**

```json
{
  "command": "grep -rn \"TYPESAFE\" ~/.hermes/.env ~/.zshenv ~/.zshrc ~/.zprofile 2>/dev/null | sed 's/=.*/=<redacted>/' | head; echo ---config---; sed -n '170,200p' ~/.hermes/config.yaml"
}
```

### 🤖 Assistant — 2026-10-09T08:10:11Z

**Tool call: terminal**

```json
{
  "command": "grep -rin \"typesafe\\|jev\" ~/.hermes/.env 2>/dev/null | sed 's/=.*/=<redacted>/'; echo ---search-notes---; echo done"
}
```

**Tool call: search_files**

```json
{
  "limit": 20,
  "path": "/Users/davec/Desktop/fast-jev-compaction/hermes-plugin/fast-jev/__init__.py",
  "pattern": "TYPESAFE_API_KEY|OPENROUTER_API_KEY|JEV_"
}
```

### 🤖 Assistant — 2026-10-09T08:11:19Z

**Tool call: execute_code**

```json
{
  "code": "import os, re\n# Check .env for relevant keys (names only)\nfor line in open(os.path.expanduser(\"~/.hermes/.env\")):\n    m = re.match(r'\\s*(export\\s+)?([A-Z0-9_]+)=', line)\n    if m and any(k in m.group(2) for k in (\"TYPESAFE\",\"OPENROUTER\",\"JEV\")):\n        print(m.group(2), \"=<set>\")\n# engine's env var reads\nsrc = open(\"/Users/davec/Desktop/fast-jev-compaction/hermes-plugin/fast-jev/__init__.py\").read()\nprint(sorted(set(re.findall(r'os\\.environ(?:\\.get)?\\(?[\"\\']([A-Z_]+)[\"\\']', src))))\nprint(\"len\", len(src))\n"
}
```

### 🤖 Assistant — 2026-10-09T08:11:24Z

**Tool call: terminal**

```json
{
  "command": "cp -R /Users/davec/Desktop/fast-jev-compaction/hermes-plugin/fast-jev ~/.hermes/plugins/fast-jev && ls ~/.hermes/plugins/fast-jev && cd ~/.hermes/hermes-agent && ./venv/bin/python -c \"\nimport sys; sys.path.insert(0, '.')\nfrom plugins.context_engine import discover_context_engines, load_context_engine\nprint([(n,a) for n,_,a in discover_context_engines() if n == 'fast-jev'])\nprint(load_context_engine('fast-jev'))\"",
  "timeout": 120
}
```

### 🤖 Assistant — 2026-10-09T08:13:42Z

**Tool call: terminal**

```json
{
  "command": "ls ~/.hermes/plugins/fast-jev 2>/dev/null; echo ---; ls ~/.hermes/hermes-agent/venv/bin/python 2>/dev/null || echo no-venv-python",
  "timeout": 30
}
```

### 🤖 Assistant — 2026-10-09T08:13:49Z

**Tool call: write_file**

```json
{
  "content": "import sys\nsys.path.insert(0, '.')\nfrom plugins.context_engine import discover_context_engines, load_context_engine\nprint([(n, a) for n, _, a in discover_context_engines() if n == 'fast-jev'])\nprint(load_context_engine('fast-jev'))\n",
  "path": "/tmp/hermes-verify-fastjev.py"
