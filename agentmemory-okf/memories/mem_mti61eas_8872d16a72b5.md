---
type: Fact
title: # Python Uvicorn Server Import Error

source: claude
session_id: e3869e23-c5cf-4
description: # Python Uvicorn Server Import Error

source: claude
session_id: e3869e23-c5cf-4a85-a52a-94b0855077ce
resource: claude://conversation/e3869e23-c5cf-4a85-a52a-94b0855077ce

# Conversation

- **Session 
resource: agentmemory://memory/mem_mti61eas_8872d16a72b5
tags: ["okf", "okf-claude", "claude", "claude://conversation/e3869e23-c5cf-4a85-a52a-94b0855077ce"]
timestamp: 2026-09-01T04:27:11.827Z
source: agentmemory
strength: 7
---
# Content

# Python Uvicorn Server Import Error

source: claude
session_id: e3869e23-c5cf-4a85-a52a-94b0855077ce
resource: claude://conversation/e3869e23-c5cf-4a85-a52a-94b0855077ce

# Conversation

- **Session ID:** `e3869e23-c5cf-4a85-a52a-94b0855077ce`
- **Source:** claude
- **Started:** 2025-07-23T16:27:02Z
- **Messages:** 6
- **Summary:** **Conversation Overview**

The user encountered a Python module import error while trying to run a FastAPI application using uvicorn. They were attempting to start a server for their "unified-registry-manager" project but received a "ModuleNotFoundError: No module named 'server'" error when running the command from their Mac terminal. Claude diagnosed the issue as a Python module path problem and provided four potential solutions: checking directory structure to ensure proper `__init__.py` files exist, running the command from the correct directory, using relative paths, or adding the current directory to the Python path. The conversation then shifted to discussing pyenv installation practices, where Claude explained the advantages of keeping pyenv in the home folder including user-level isolation, no sudo requirements, automatic PATH management, and clean system Python preservation. Finally, the user asked about resetting their pyenv installation, and Claude provided comprehensive instructions for complete reset (full reinstall), partial reset options for just Python installations or settings, and a quick fresh start approach. The user is working with Python 3.12.9, uses pyenv for Python version management, and is developing what appears to be a web application using FastAPI and uvicorn on macOS.

---

### 👤 User — 2025-07-23T16:27:10Z

davec@Mini unified-registry-manager % /Users/davec/.pyenv/shims/python3 -m uvicorn server.app:app --host 0.0.0.0 --port 8000 --reload --log-level info
INFO:     Will watch for changes in these directories: ['/Volumes/AI/Servers/unified-registry-manager']
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [36444] using WatchFiles
Process SpawnProcess-1:
Traceback (most recent call last):
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/multiprocessing/process.py", line 314, in _bootstrap
    self.run()
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/multiprocessing/process.py", line 108, in run
    self._target(*self._args, **self._kwargs)
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/_subprocess.py", line 78, in subprocess_started
    target(sockets=sockets)
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/server.py", line 62, in run
    return asyncio.run(self.serve(sockets=sockets))
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/asyncio/runners.py", line 195, in run
    return runner.run(main)
           ^^^^^^^^^^^^^^^^
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/asyncio/runners.py", line 118, in run
    return self._loop.run_until_complete(task)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "uvloop/loop.pyx", line 1518, in uvloop.loop.Loop.run_until_complete
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/server.py", line 69, in serve
    config.load()
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/config.py", line 458, in load
    self.loaded_app = import_from_string(self.app)
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/importer.py", line 24, in import_from_string
    raise exc from None
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/site-packages/uvicorn/importer.py", line 21, in import_from_string
    module = importlib.import_module(module_str)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/Users/davec/.pyenv/versions/3.12.9/lib/python3.12/importlib/__init__.py", line 90, in import_module
    return *bootstrap.*gcd_import(name[level:], package, level)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "<f
