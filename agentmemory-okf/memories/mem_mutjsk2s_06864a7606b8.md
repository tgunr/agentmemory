---
type: Fact
title: # Find PrusaSlicer plugin creation guide

source: hermes
session_id: 20261001_07
description: # Find PrusaSlicer plugin creation guide

source: hermes
session_id: 20261001_072859_fa346e
resource: hermes://session/20261001_072859_fa346e

# Conversation

- **Session ID:** `20261001_072859_fa346e
resource: agentmemory://memory/mem_mutjsk2s_06864a7606b8
tags: ["okf", "okf-hermes", "hermes", "/Volumes/projects/3D/Multiboard"]
timestamp: 2026-10-04T08:17:24.256Z
source: agentmemory
strength: 7
---
# Content

# Find PrusaSlicer plugin creation guide

source: hermes
session_id: 20261001_072859_fa346e
resource: hermes://session/20261001_072859_fa346e

# Conversation

- **Session ID:** `20261001_072859_fa346e`
- **Source:** desktop
- **Model:** kilo-auto/free
- **Started:** 2026-10-01T12:29:00Z
- **Ended:** 2026-10-03T12:56:22Z
- **Messages:** 830
- **CWD:** `/Volumes/projects/3D/Multiboard`
- **Tokens:** 992456 in / 121323 out

---

### 👤 User — 2026-10-01T12:29:00Z

The new prusaslicer is supposed to have a plugin capability. Can you locate information about how to create a plugin?

### 👤 User — 2026-10-01T12:29:00Z

The new prusaslicer is supposed to have a plugin capability. Can you locate information about how to create a plugin?

### 🤖 Assistant — 2026-10-01T12:29:03Z

<details><summary>Reasoning</summary>

The user asks about PrusaSlicer plugin capability. Let me search the web. Also check if PrusaSlicer is installed locally maybe. Let's do a websearch.

</details>

**Tool call: web_search**

```json
{
  "query": "PrusaSlicer plugins create custom plugin documentation 2025",
  "limit": 6
}
```

**Tool call: web_search**

```json
{
  "query": "PrusaSlicer plugin system documentation github plugins",
  "limit": 6
}
```

### 🤖 Assistant — 2026-10-01T12:29:03Z

<details><summary>Reasoning</summary>

The user asks about PrusaSlicer plugin capability. Let me search the web. Also check if PrusaSlicer is installed locally maybe. Let's do a websearch.

</details>

**Tool call: web_search**

```json
{
  "query": "PrusaSlicer plugins create custom plugin documentation 2025",
  "limit": 6
}
```

**Tool call: web_search**

```json
{
  "query": "PrusaSlicer plugin system documentation github plugins",
  "limit": 6
}
```

### 🤖 Assistant — 2026-10-01T12:29:07Z

<details><summary>Reasoning</summary>

Let me fetch the actual Plugin_API.md doc and theAPI reference.

</details>

**Tool call: web_extract**

```json
{
  "urls": [
    "https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/doc/Plugin_API.md"
  ],
  "char_limit": 20000
}
```

**Tool call: web_search**

```json
{
  "limit": 5,
  "query": "PrusaSlicer \"Plugin API reference\" doc lua project.plugin load_stl"
}
```

### 🤖 Assistant — 2026-10-01T12:29:09Z

<details><summary>Reasoning</summary>

Let me fetch the raw doc via terminalcurl.

</details>

**Tool call: terminal**

```json
{
  "command": "curl -sL https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/doc/Plugin_API.md -o /tmp/Plugin_API.md; wc -l /tmp/Plugin_API.md"
}
```

### 🤖 Assistant — 2026-10-01T12:29:12Z

**Tool call: read_file**

```json
{
  "path": "/tmp/Plugin_API.md"
}
```

### 🤖 Assistant — 2026-10-01T12:29:14Z

<details><summary>Reasoning</summary>

Also check the API reference at prusa.io/ps-plugins and example resources/lua plugins. Let me do both inparallel.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && curl -sL -o ps-plugins.html -w \"%{http_code} %{url_effective}\\n\" https://prusa.io/ps-plugins/ ; echo ---; curl -s \"https://api.github.com/repos/prusa3d/PrusaSlicer/contents/resources/lua\" | python3 -c \"import sys,json;[print(d['name'],d['type']) for d in json.load(sys.stdin)]\""
}
```

### 🤖 Assistant — 2026-10-01T12:29:22Z

<details><summary>Reasoning</summary>

Let's grab the bundled calibration pluginsas examples.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && for f in manifest.json $(curl -s \"https://api.github.com/repos/prusa3d/PrusaSlicer/contents/resources/lua/com.prusa3d.slicer.calibration\" | grep -o '\"name\": \"[^\"]*\"' | cut -d'\"' -f4); do echo \"=== $f ===\"; curl -sL \"https://raw.githubusercontent.com/prusa3d/PrusaSlicer/master/resources/lua/com.prusa3d.slicer.calibration/$f\" | head -60; done 2>&1 | head -120"
}
```

### 🤖 Assistant — 2026-10-01T12:29:27Z

<details><summary>Reasoning</summary>

Let me get the full API surface. The API reference is generated docs (Doxygen likely). Let me check the LuaPluginAPI source for availablefunctions.

</details>

**Tool call: terminal**

```json
{
  "command": "cd /tmp && curl -s \"https://api.github.com/repos/prusa3d/PrusaSl
