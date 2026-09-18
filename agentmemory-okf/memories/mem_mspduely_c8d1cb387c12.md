---
type: Fact
title: # Hermes Desktop and CLI Interchangeable Sessions

source: hermes
session_id: 20
description: # Hermes Desktop and CLI Interchangeable Sessions

source: hermes
session_id: 20260611_053138_a31ba0
resource: hermes://session/20260611_053138_a31ba0

# Conversation

- **Session ID:** `20260611_0531
resource: agentmemory://memory/mem_mspduely_c8d1cb387c12
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-08-12T01:00:23.475Z
source: agentmemory
strength: 7
---
# Content

# Hermes Desktop and CLI Interchangeable Sessions

source: hermes
session_id: 20260611_053138_a31ba0
resource: hermes://session/20260611_053138_a31ba0

# Conversation

- **Session ID:** `20260611_053138_a31ba0`
- **Source:** tui
- **Model:** kilo-auto/free
- **Started:** 2026-06-11T10:31:38Z
- **Ended:** 2026-06-11T20:15:37Z
- **Messages:** 34
- **CWD:** `/Users/davec`
- **Tokens:** 520216 in / 4199 out

---

### 👤 User — 2026-06-11T10:31:40Z

explain what HERMIES agent is, what it can do, and how best to use it. Give specific examples of best case usage

### 🤖 Assistant — 2026-06-11T10:36:59Z

<details><summary>Reasoning</summary>


The user is asking me to explain Hermes Agent, what it can do, and how best to use it. This is a meta-question about the system I'm running on. The system prompt mentions I should load the `hermes-agent` skill for additional guidance when users ask about Hermes itself.

Let me load the hermes-agent skill to get the authoritative information about Hermes Agent capabilities and best practices.


</details>

**Tool call: skill_view**

```json
{
  "name": "hermes-agent"
}
```

### 🤖 Assistant — 2026-06-11T10:36:59Z

<details><summary>Reasoning</summary>


The user is asking me to explain Hermes Agent based on the skill content I just loaded. I have the complete skill documentation now, so I should provide a comprehensive explanation.


</details>

# Hermes Agent: Complete Overview

## What is Hermes Agent?

Hermes Agent is an **open-source AI agent framework by Nous Research** that runs in your terminal, messaging platforms, and IDEs. It belongs to the same category as tools like Claude Code (Anthropic), Codex (OpenAI), and OpenClaw — autonomous coding and task-execution agents that use tool calling to interact with your system.

Unlike a simple chat interface, Hermes is a **full system agent** with:

- **Persistent memory across sessions** — remembers who you are, your preferences, and lessons learned
- **Self-improving through skills** — saves reusable procedures that accumulate over time
- **Multi-platform gateway** — runs on Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Email, and more
- **Provider-agnostic** — works with 15+ LLM providers (OpenRouter, Anthropic, OpenAI, DeepSeek, local models, etc.)
- **True multi-agent** — can spawn independent agent instances that work in parallel

## Core Capabilities

### 1. **System Interaction Tools**
- **Terminal** — Run shell commands, manage processes, install software
- **File operations** — Read, write, search, and patch files with syntax checking
- **Web browsing** — Search the web, extract content, analyze pages
- **Vision** — Analyze images, screenshots, and documents
- **Code execution** — Run sandboxed Python with full Hermes tool access

### 2. **Multi-Agent Workflows**
- **Delegate tasks** — Spawn subagents for parallel work on research, code review, debugging
- **Spawn Hermes instances** — Fully independent processes via tmux for long-running missions
- **Kanban boards** — Multi-profile collaboration system for complex projects

### 3. **Automation & Scheduling**
- **Cron jobs** — Schedule recurring tasks with skills, scripts, and delivery targets
- **Webhooks** — Event-driven agent runs triggered by HTTP POSTs
- **Background processes** — Run long-running servers or batch jobs

### 4. **Voice & Media**
- **STT** — Voice-to-text via faster-whisper (local) or cloud APIs
- **TTS** — Text-to-speech with multiple providers
- **Image/video generation** — AI media creation tools

---

## Best Case Usage Examples

### **Example 1: Autonomous Codebase Refactor**
```
User: "Refactor this entire codebase to use modern Python practices"
```
**What Hermes does:**
1. Uses codebase-inspection skill to analyze project structure (1000+ files across 90 directories in your case)
2. Delegates parallel subagents to different modules
3. Applies PEP 8 styling, adds type hints, fixes imports
4. Runs tests on each module, fixes failures
5. Creates a summary report with all changes

**Why it works:** The delegate_task system lets Hermes break a massive refactor into parallel chunks, then reassemble.

---

### **
