---
type: Fact
title: # Python version complexity and installation clutter

source: hermes
session_id:
description: # Python version complexity and installation clutter

source: hermes
session_id: 20261002_015723_3de3f1
resource: hermes://session/20261002_015723_3de3f1

# Conversation

- **Session ID:** `20261002_0
resource: agentmemory://memory/mem_mutjsoso_72328ff86421
tags: ["okf", "okf-hermes", "hermes", "hermes://session/20261002_015723_3de3f1"]
timestamp: 2026-10-04T08:17:30.376Z
source: agentmemory
strength: 7
---
# Content

# Python version complexity and installation clutter

source: hermes
session_id: 20261002_015723_3de3f1
resource: hermes://session/20261002_015723_3de3f1

# Conversation

- **Session ID:** `20261002_015723_3de3f1`
- **Source:** desktop
- **Model:** free-mix
- **Started:** 2026-10-02T06:57:23Z
- **Ended:** 2026-10-03T23:03:11Z
- **Messages:** 479
- **Tokens:** 1583023 in / 238486 out

---

### 👤 User — 2026-10-02T06:57:23Z

What is the prevailing opinion on the state of Python complexity with multiple versions and Python turds all over the system.

### 👤 User — 2026-10-02T06:57:23Z

What is the prevailing opinion on the state of Python complexity with multiple versions and Python turds all over the system.

### 🤖 Assistant — 2026-10-02T06:58:44Z

<details><summary>Reasoning</summary>

The user asks a general knowledge question. Just answer directly, no tools needed.

</details>

## The Short Version

The community consensus is: **the mess is real, it's mostly self-inflicted, and the tooling to fix it now actually works.**

## Prevailing Opinions

**1. Never touch system Python** — near-unanimous dogma. The OS owns it; `apt`/`dnf`/`brew` depend on it. Most "weird Python behavior" stories start here.

**2. The turds are real cruft** — `__pycache__`, orphaned `dist-info`/`egg-info`, half-uninstalled packages, and stale scripts in `/usr/local/bin`. Python leaves more behind than Node or Rust, because the install model grew by accretion rather than design.

**3. Version proliferation is mostly a PATH problem** — the pain isn't multiple versions existing (legitimate: enterprise LTS, scientific stacks, OS compatibility, long-lived projects), it's not knowing *which* `python3` wins. `which -a python python3 pip` is the diagnostic everyone reaches for.

**4. Virtualenvs are mandatory, not optional** — global `pip install` is considered reckless. Contempt for "activation fatigue" is mild because newer tooling removes the need to activate at all.

**5. venvs are the band-aid, containers are the cure** — venvs isolate *dependencies*, not the interpreter sprawl. For anything service-shaped, the "don't fight it, containerize it" view dominates.

**6. The fragmentation was historically overengineered** — pip, pip-tools, virtualenv, pipenv, poetry, PDM, conda, pyenv all solving overlapping problems. That overlap is what's collapsing now.

## The Emerging Consensus Stack

- **uv** for versions + venvs + deps + lockfiles (Astral; the new default recommendation, mostly displacing pyenv)
- **mise/asdf** for polyglot version management
- **conda** still legitimately dominant in scientific/binary-dep land
- **pyenv** only when several genuinely incompatible runtimes must coexist
- **Docker** for reproducible deployment
- **PEP 668** (`externally-managed-environment`) is widely seen as correct in principle, confusing in practice

**Notably absent:** "one turd per version." Nobody defends keeping cruft around anymore. If a venv is suspect, delete and recreate — that's the standard advice.

## The Honest Assessment

Sentiment has shifted from *frustration* to *pragmatism*. It's "better than a disaster, not good" — better than the Py2/Py3 era, but onboarding still routinely trips people on `python` vs `python3`, stale `pip`, and `PATH` shadowing.

The core argument now: **runtime compatibility is genuinely hard (real compatibility problem), but the surrounding tooling sprawl was an accident of history, not a requirement.** Modern opinion is isolation and reproducibility over global accumulation.

---

If this is aimed at *your* machine rather than the discourse, say the word and I'll run the actual audit — enumerate every Python on PATH, all `site-packages`, orphaned metadata, and shadowing.

### 🤖 Assistant — 2026-10-02T06:58:44Z

<details><summary>Reasoning</summary>

The user asks a general knowledge question. Just answer directly, no tools needed.

</details>

## The Short Version

The community consensus is: **the mess is real, it's mostly self-inflicted, and the tooling to fix it now actually works.**

## Prevailing Opinions

**1. Never touch system Python** — near-unanimous dogma. The OS owns it; `
