---
type: Fact
title: # Python Uvicorn Server Import Error

source: hermes
session_id: claude__e3869e2
description: # Python Uvicorn Server Import Error

source: hermes
session_id: claude__e3869e23-c5cf-4a85-a52a-94b0855077ce
resource: hermes://session/claude__e3869e23-c5cf-4a85-a52a-94b0855077ce

# Conversation

-
resource: agentmemory://memory/mem_mtj639yk_bc3a7c4256ae
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:25.624Z
source: agentmemory
strength: 7
---
# Content

# Python Uvicorn Server Import Error

source: hermes
session_id: claude__e3869e23-c5cf-4a85-a52a-94b0855077ce
resource: hermes://session/claude__e3869e23-c5cf-4a85-a52a-94b0855077ce

# Conversation

- **Session ID:** `claude__e3869e23-c5cf-4a85-a52a-94b0855077ce`
- **Source:** claude
- **Model:** None
- **Started:** 2025-07-23T16:27:02Z
- **Ended:** 2025-07-23T16:30:56Z
- **Messages:** 6
- **CWD:** `/Users/davec`

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
  File "<frozen importlib._bootstrap>", line 1387, in *gcd*import
  File "<frozen importlib._bootstrap>", line 1360, in *find*and_load
  File "<frozen importlib._bootstrap>", line 1310, in *find*and_load_unlocked
  File "<frozen importlib._bootstrap>", line 488, in *call*with_frames_removed
  File "<frozen importlib._bootstrap>", line 1387, in *gcd*import
  File "<frozen importlib._bootstrap>", line 1360, in *find*and_load
  File "<frozen importlib._bootstrap>", line 1324, in *find*and_load_unlocked
ModuleNotFoundError: No module named 'server'
^CINFO:     Stopping reloader process [36444]
davec@Mini unified-registry-manager %

### 🤖 Assistant — 2025-07-23T16:27:20Z

The error shows that Python can't find the `server` module when trying to import `server.app:app`. This is a common issue with Python module paths. Here are a few ways to fix this:

## Solution 1: Check your directory structure
Make sure you have the correct file structure. You should have:
```
unified-registry-manager/
├── server/
│   ├── __init__.py
│   └── app.py
```

The `__init__.py` file can be empty but is required for Python to recognize `server` as a package.

## Solution 2: Run from the correct directory
Make sure you're running the command from the directory that c
