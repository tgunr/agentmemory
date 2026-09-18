---
type: Fact
title: # PEP 440 overview

source: chatgpt
session_id: 68b2f213-45ac-8326-9edc-86b53f82
description: # PEP 440 overview

source: chatgpt
session_id: 68b2f213-45ac-8326-9edc-86b53f82415f
resource: chatgpt://conversation/68b2f213-45ac-8326-9edc-86b53f82415f

# Conversation

- **Session ID:** `68b2f213-
resource: agentmemory://memory/mem_mtj5o5fc_f132f6b23104
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/68b2f213-45ac-8326-9edc-86b53f82415f"]
timestamp: 2026-09-01T21:04:39.944Z
source: agentmemory
strength: 7
---
# Content

# PEP 440 overview

source: chatgpt
session_id: 68b2f213-45ac-8326-9edc-86b53f82415f
resource: chatgpt://conversation/68b2f213-45ac-8326-9edc-86b53f82415f

# Conversation

- **Session ID:** `68b2f213-45ac-8326-9edc-86b53f82415f`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-30T12:44:10.147497+00:00
- **Messages:** 4

---

### 👤 User

What is PEP 440

---

### 🤖 Assistant

**PEP 440** is the **Python Enhancement Proposal** that defines the **standard for version identifiers** in Python projects.  

It lays out how version numbers should be structured and compared, so that tools like `pip`, `setuptools`, and `wheel` can all interpret them consistently.

---

### Key Points of PEP 440

1. **Version Format**  
   A canonical version is structured as:
   ```
   [N!]N(.N)*[{a|b|rc}N][.postN][.devN]
   ```
   Where:
   - `N!` → **epoch** (rarely used, forces ordering when schemes change).
   - `N(.N)*` → **release segment** (e.g., `1.2.3`).
   - `{a|b|rc}N` → **pre-release tags** (`a1`, `b1`, `rc1`).
   - `.postN` → **post-release** (e.g., `1.0.post1`).
   - `.devN` → **development release** (e.g., `1.0.dev1`).

   Examples:  
   - `1.0.0`  
   - `1.2.3a2` (alpha release)  
   - `2.0.0rc1` (release candidate)  
   - `3.1.post1` (post-release)  
   - `4.0.dev2` (development release)

---

2. **Precedence Rules**  
   Versions are ordered in a predictable way:
   - `1.0.dev1 < 1.0a1 < 1.0b1 < 1.0rc1 < 1.0 < 1.0.post1`

---

3. **Local Versions**  
   You can append a local identifier (using `+`) for environment-specific builds, e.g.:
   ```
   1.0+ubuntu.1
   2.0+cpu
   ```
   These are not meant for PyPI distribution, but can be used internally.

---

4. **Comparison & Compatibility**  
   - Tools like `pip install` rely on PEP 440 for version comparisons.  
   - For example, `pip install "mypkg>=1.0,<2.0"` works correctly because all packages follow PEP 440 rules.

---

👉 In short: **PEP 440 is the “grammar” of Python package versions**—it ensures consistency so tooling, repositories (PyPI), and developers all understand version numbers the same way.  

---

Would you like me to show you a **cheat sheet of valid vs invalid PEP 440 versions** for quick reference?

---

### 👤 User

yes

---

### 🤖 Assistant

Perfect 👍 — here’s a **PEP 440 Cheat Sheet** showing valid vs invalid version examples:

---

## ✅ Valid PEP 440 Versions

| Example       | Meaning |
|---------------|---------|
| `1.0`         | Stable release |
| `2.1.3`       | Patch release |
| `1.0a1`       | Alpha release 1 |
| `1.0b2`       | Beta release 2 |
| `1.0rc3`      | Release candidate 3 |
| `1.0.dev1`    | Development release 1 |
| `1.0.post1`   | Post-release 1 |
| `1!1.0`       | Epoch 1, version 1.0 (used to reset ordering) |
| `1.0+cpu`     | Local version (non-PyPI, e.g. build variant) |
| `2.0+ubuntu.5`| Local build for Ubuntu, build 5 |
| `2025.08.30`  | Calendar-based version (valid numeric segments) |

---

## ❌ Invalid PEP 440 Versions

| Example        | Why it’s invalid |
|----------------|------------------|
| `1`            | Must be `1.0` (at least major.minor) |
| `1.0-alpha`    | Dashes not allowed; must use `a1` |
| `v1.0`         | Leading `v` not allowed (use `1.0`) |
| `1.0.0.0.0`    | Too many segments (not meaningful) |
| `1.0rc`        | Must include a number (e.g., `1.0rc1`) |
| `1.0.0-beta`   | Wrong pre-release marker (`beta` → `b`) |
| `1.0+build/7`  | Invalid characters in local version (`/`) |
| `1.0.post`     | Must include number (e.g., `1.0.post1`) |

---

## 📏 Ordering Summary

```
1.0.dev1 < 1.0a1 < 1.0b1 < 1.0rc1 < 1.0 < 1.0.post1
```

- **Dev** < **Alpha** < **Beta** < **RC** < **Final** < **Post**

---

Would you like me to also make you a **regex snippet** that can validate PEP 440 versions (e.g., for Python code or CI pipelines)?

---
