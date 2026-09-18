---
type: Fact
title: # Pipx Installation Error

source: abacus
session_id: 13555bc6f8
resource: abacu
description: # Pipx Installation Error

source: abacus
session_id: 13555bc6f8
resource: abacus://conversation/13555bc6f8

# Conversation

- **Session ID:** `13555bc6f8`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8qs8q_ba787c462432
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/13555bc6f8"]
timestamp: 2026-09-01T05:42:55.528Z
source: agentmemory
strength: 7
---
# Content

# Pipx Installation Error

source: abacus
session_id: 13555bc6f8
resource: abacus://conversation/13555bc6f8

# Conversation

- **Session ID:** `13555bc6f8`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2025-08-21T09:18:27+00:00
- **Messages:** 8

---

### 👤 User

davec@Mini .startup % pipx install open-interpreter
Fatal error from pip prevented installation. Full pip output in file:
    /Users/davec/.local/pipx/logs/cmd_2025-08-21_04.16.16_pip_errors.log

pip failed to build package:
    tiktoken

Some possibly relevant errors from pip install:
    error: subprocess-exited-with-error
    error: failed to run custom build command for `pyo3-ffi v0.20.3`
    error: the configured Python interpreter version (3.13) is newer than PyO3's maximum supported version (3.12)
    error: `cargo rustc --lib --message-format=json-render-diagnostics --manifest-path Cargo.toml --release -v --features pyo3/extension-module --crate-type cdylib -- -C 'link-args=-undefined dynamic_lookup -Wl,-install_name,@rpath/_tiktoken.cpython-313-darwin.so'` failed with code 101
    error: failed-wheel-build-for-install

Error installing open-interpreter.

---

### 🤖 Assistant

You’re running into this error because your Python version (3.13) is too new for the `tiktoken` package, which is a dependency of `open-interpreter`. The error message:

> the configured Python interpreter version (3.13) is newer than PyO3's maximum supported version (3.12)

means that the underlying Rust library (`PyO3`) used by `tiktoken` does **not** yet support Python 3.13.

### How to Fix

You need to use Python 3.12 (or lower) to install `open-interpreter` successfully. Here’s what you can do:

1. **Install Python 3.12**  
   You can use [pyenv](https://github.com/pyenv/pyenv) to manage multiple Python versions easily:
   ```sh
   brew install pyenv
   pyenv install 3.12.3
   pyenv global 3.12.3
   ```

2. **Re-run pipx with the correct Python**  
   Tell `pipx` to use your Python 3.12:
   ```sh
   pipx install open-interpreter --python $(pyenv which python3)
   ```

3. **Verify**  
   Check that `open-interpreter` is installed and working:
   ```sh
   open-interpreter --version

```

---

**Summary:**  
`open-interpreter` (and its dependencies) do not yet support Python 3.13. Downgrade to Python 3.12 and try again.

If you need step-by-step help with `pyenv` or managing multiple Python versions, let me know!

---

### 👤 User

I don't want to change my global pyenv

---

### 🤖 Assistant

No problem! You **don’t** need to change your global Python version to use `open-interpreter` with `pipx`. You can specify the Python version for just this install.

Here’s how you can do it:

1. **Install Python 3.12 with pyenv** (if you haven’t already):
   ```sh
   pyenv install 3.12.3
   ```

2. **Use pipx with a specific Python version**  
   You can tell `pipx` to use the Python 3.12 you just installed, without changing your global version:
   ```sh
   pipx install open-interpreter --python $(pyenv root)/versions/3.12.3/bin/python
   ```

   Or, if you want to be sure of the path:
   ```sh
   pipx install open-interpreter --python $(pyenv which -v 3.12.3 python)
   ```

3. **Check it works**  
   ```sh
   open-interpreter --version
   ```

**This will install `open-interpreter` in its own isolated environment using Python 3.12, and your global Python version will remain unchanged.**

Let me know if you want a more detailed explanation or run into any issues!

---

### 👤 User

davec@Mini .startup % pipx install open-interpreter --python /Users/davec/.pyenv/versions/3.13.2/bin/python
Fatal error from pip prevented installation. Full pip output in file:
    /Users/davec/.local/pipx/logs/cmd_2025-08-21_04.25.57_pip_errors.log

pip failed to build package:
    tiktoken

Some possibly relevant errors from pip install:
    error: subprocess-exited-with-error
    error: failed to run custom build command for `pyo3-ffi v0.20.3`
    error: the configured Python interpreter version (3.13) is newer than PyO3's maximum supported version (3.12)
    error: `cargo rustc -
