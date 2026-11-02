---
type: Fact
title: # Fix hermes 65K context length display

source: hermes
session_id: local-922e38
description: # Fix hermes 65K context length display

source: hermes
session_id: local-922e38c1e2fcc4a37bf6d75af5e5ad5d678d4e358aa149db2fd5543125af03e2
resource: hermes://session/local-922e38c1e2fcc4a37bf6d75af5e5
resource: agentmemory://memory/mem_mvxm9og3_071ca21f30c7
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/.hermes/hermes-agent"]
timestamp: 2026-11-01T09:17:29.300Z
source: agentmemory
strength: 7
---
# Content

# Fix hermes 65K context length display

source: hermes
session_id: local-922e38c1e2fcc4a37bf6d75af5e5ad5d678d4e358aa149db2fd5543125af03e2
resource: hermes://session/local-922e38c1e2fcc4a37bf6d75af5e5ad5d678d4e358aa149db2fd5543125af03e2

# Conversation

- **Session ID:** `local-922e38c1e2fcc4a37bf6d75af5e5ad5d678d4e358aa149db2fd5543125af03e2`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-10-31T09:56:36Z
- **Ended:** 2026-10-31T10:06:28Z
- **Messages:** 103
- **CWD:** `/Users/davec/.hermes/hermes-agent`
- **Tokens:** 88813 in / 18487 out

---

### 👤 User — 2026-10-31T09:58:17Z

I am using Kilo/Efficient High model which has a large context window yet the hermes status bar shows context length og 65K. That does not seem right.

### 🤖 Assistant — 2026-10-31T09:58:27Z

<details><summary>Reasoning</summary>

The user is asking about the context length shown in the Hermes status bar being 65K while using Kilo/Efficient High model with a large context window. Let me investigate.

Let me load relevant skills and check the config/model metadata.

Let me search the codebase for context length resolution.

</details>

**Tool call: search_files**

```json
{
  "limit": 20,
  "output_mode": "files_only",
  "path": "/Users/davec/.hermes/hermes-agent",
  "pattern": "kilo-auto|efficient"
}
```

**Tool call: terminal**

```json
{
  "command": "grep -rn \"context_length\\|context_window\\|max_context\" /Users/davec/.hermes/hermes-agent/hermes_cli/*.py | head -50"
}
```

### 🤖 Assistant — 2026-10-31T09:58:32Z

<details><summary>Reasoning</summary>

The user's model is `kilo-auto/efficient` (from the Model line: "Model: kilo-auto/efficient", provider kilocode). The status bar shows 65K context. Let me check the model metadata resolution and config.

Let me check the current config and where 65536 comes from.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rn \"65536\\|6553\" agent/model_metadata.py | head -30; echo ---; grep -n \"kilo\" -i hermes_cli/models_pricing.py | head -30; echo ---; grep -rn \"kilo\" -i ~/.hermes/config.yaml | head -30"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && grep -rn \"def get_model_context_length\" -A 80 agent/model_metadata.py | head -140"
}
```

### 🤖 Assistant — 2026-10-31T09:58:36Z

<details><summary>Reasoning</summary>

Now let's see what the kilocode provider profile declares for context length, and what the actual gateway /models reports for kilo-auto/efficient.

Let me check plugins/model-providers/kilocode.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && ls plugins/model-providers/ | grep -i kilo; echo ---; grep -rn \"get_model_context_length\\|context\" plugins/model-providers/kilocode/*.py | head -40"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && python -c \"\nimport os,json,urllib.request\nk=os.getenv('KILOCODE_API_KEY','')\nprint('key set:', bool(k))\n\" ; grep -n \"KILOCODE\" ~/.hermes/.env | sed 's/=.*/=<set>/'"
}
```

### 🤖 Assistant — 2026-10-31T09:58:40Z

<details><summary>Reasoning</summary>

Let's look at the kilocode provider profile and query the actual gateway /models for kilo-auto/efficient to see the reported context window.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && ls plugins/model-providers/kilocode/; echo ---; cat plugins/model-providers/kilocode/__init__.py | head -80"
}
```

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && set +u; KEY=$(grep '^KILOCODE_API_KEY=' ~/.hermes/.env | cut -d= -f2- | tr -d '\"'\"'\"'); BASE=$(grep -A3 'kilocode' plugins/model-providers/kilocode/__init__.py | grep -o 'https://[^\"]*' | head -1); echo \"BASE=$BASE\"; curl -s -H \"Authorization: Bearer $KEY\" \"https://kilocode.ai/api/gateway/v1/models\" 2>/dev/null | head -c 400"
}
```

### 🤖 Assistant — 2026-10-31T09:58:44Z

**Tool call: terminal**

```json
{
  "command": "cd /Users/davec/.hermes/hermes-agent && python3 - <<'EOF'\nimport os,json,urllib.request,re\np=os.path.expanduser('~/.hermes/.env')\nkey=''
