---
type: Fact
title: # V as Python alternative for AI

source: hermes
session_id: 20260719_030519_80a
description: # V as Python alternative for AI

source: hermes
session_id: 20260719_030519_80ab6a
resource: hermes://session/20260719_030519_80ab6a

# Conversation

- **Session ID:** `20260719_030519_80ab6a`
- **So
resource: agentmemory://memory/mem_mspdzrqy_559354bb053f
tags: ["okf", "okf-hermes", "hermes", "/Volumes/alpha/sources/v"]
timestamp: 2026-08-12T01:04:33.801Z
source: agentmemory
strength: 7
---
# Content

# V as Python alternative for AI

source: hermes
session_id: 20260719_030519_80ab6a
resource: hermes://session/20260719_030519_80ab6a

# Conversation

- **Session ID:** `20260719_030519_80ab6a`
- **Source:** tui
- **Model:** tencent/hy3:free
- **Started:** 2026-07-19T08:05:19Z
- **Messages:** 4
- **CWD:** `/Volumes/alpha/sources/v`
- **Tokens:** 29552 in / 2266 out

---

### 👤 User — 2026-07-19T08:05:24Z

Can V used in place of python in AI work?

### 🤖 Assistant — 2026-07-19T08:05:47Z

<details><summary>Reasoning</summary>

The user is asking a general question about whether V (the V programming language) can be used in place of Python for AI work. This is a question about the V language, and I happen to be sitting in a V repo (/Volumes/alpha/sources/v). Let me think about this.

This is a conceptual/advisory question, not a coding task. The user wants my assessment. I should answer based on knowledge of V and the AI ecosystem. I'm in a V compiler repo, so I have some context, but the question is about using V for AI work generally.

Let me give a thoughtful, honest answer. I don't need to run tools necessarily, but I could check what's in the repo to ground my answer about V's capabilities. However, the question is pretty general. Let me think about what I actually know.

V is a statically-typed compiled language (vlang.io). Key facts:
- It compiles to C, then to machine code, very fast compilation, single binary output.
- It has a C ABI interop, so it can call C libraries.
- For AI/ML: the ecosystem is far smaller than Python. Python dominates AI due to NumPy, PyTorch, TensorFlow, scikit-learn, HuggingFace, Jupyter, etc.
- V does have some libraries but nowhere near the breadth.
- V has `vsl` (VSL - V Scientific Library) and some ML efforts but they're early-stage.
- V can wrap C libraries via FFI, so in principle you could call PyTorch's C++ API or ONNX Runtime, but it's not idiomatic or easy.
- V has no mature autodiff, no tensor library comparable to PyTorch.
- V has builtin JSON, concurrency (green threads/coroutines), good for tooling and backend services.
- V can call Python via C interop? There's a way to embed Python (it has `@[python]`? no). Actually V has `vpython`? Let me not invent. There's the ability to use CPython via C bindings.

Actually, I should be careful not to invent features. Let me consider whether to verify with the repo. The repo is the V compiler itself. I could check if there's any AI/ML related module in vlib. But that's not really going to answer the breadth question.

The honest answer: V is not a drop-in replacement for Python in AI/ML work today. Python's dominance is due to ecosystem, not language features. V is great for CLI tools, systems, web backends, and could be used for the *non-ML* parts (data pipelines, serving, tooling) and can interoperate with Python/ML libs via FFI or by shelling out. But for training models, research, using pretrained models with rich ecosystems — Python remains necessary.

I should be concise and structured per the AGENTS.md tone but this is a chat question not a repo task. The persona says "friendly coworker who happens to know everything." Keep it scannable.

Let me give a balanced answer:
- Short answer: No, not as a full replacement for AI/ML work, but it can complement Python.
- Where V shines: fast binaries, deployment/serving, tooling, data preprocessing, CLI.
- Where it falls short: ecosystem (PyTorch, HF, NumPy, Jupyter), autodiff/training, community.
- Interop options: FFI to C++/C libs, shell out to Python, ONNX Runtime, llama.cpp (which is C/C++ and V can bind).
- Practical recommendation.

I should keep it grounded and not overclaim. I don't think I need tool calls. But maybe I can quickly verify V's ML ecosystem state via web search to be accurate and current (model date is 2026). Actually a quick search could help me give accurate current info about V's AI ecosystem. Given the instruction to be accurate and not invent, a web search about V language AI/ML libraries in 2026 would be valuable. Let me do that to ground the answer.

Actually, let me reconsider. The user asked a fai
