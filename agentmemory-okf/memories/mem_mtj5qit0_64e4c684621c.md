---
type: Fact
title: # PyInstaller module exclusion fix

source: chatgpt
session_id: 689b3b6e-cd38-83
description: # PyInstaller module exclusion fix

source: chatgpt
session_id: 689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb
resource: chatgpt://conversation/689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb

# Conversation

- **Session 
resource: agentmemory://memory/mem_mtj5qit0_64e4c684621c
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb"]
timestamp: 2026-09-01T21:06:30.600Z
source: agentmemory
strength: 7
---
# Content

# PyInstaller module exclusion fix

source: chatgpt
session_id: 689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb
resource: chatgpt://conversation/689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb

# Conversation

- **Session ID:** `689b3b6e-cd38-8321-ba3d-f41b6bcaf8fb`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-12T13:02:39.801977+00:00
- **Messages:** 2

---

### 👤 User

(.venv) davec@Mini unsub-mail % cd "/Volumes/Work/unsub-mail/mac" && make -f Makefile test
Building UnsubMail
Using PyInstaller /Volumes/Work/unsub-mail/UnsubMail.spec
105 INFO: PyInstaller: 6.15.0, contrib hooks: 2025.8
105 INFO: Python: 3.10.18
127 INFO: Platform: macOS-26.0-arm64-arm-64bit
127 INFO: Python environment: /Volumes/Work/unsub-mail/mac/.venv
138 WARNING: collect_data_files - skipping data collection for module 'requests' as it is not a package.
138 WARNING: collect_dynamic_libs - skipping library collection for module 'requests' as it is not a package.
194 WARNING: collect_data_files - skipping data collection for module 'urllib3' as it is not a package.
195 WARNING: collect_dynamic_libs - skipping library collection for module 'urllib3' as it is not a package.
247 WARNING: collect_data_files - skipping data collection for module 'charset_normalizer' as it is not a package.
247 WARNING: collect_dynamic_libs - skipping library collection for module 'charset_normalizer' as it is not a package.
293 WARNING: collect_data_files - skipping data collection for module 'idna' as it is not a package.
293 WARNING: collect_dynamic_libs - skipping library collection for module 'idna' as it is not a package.
347 WARNING: collect_data_files - skipping data collection for module 'certifi' as it is not a package.
347 WARNING: collect_dynamic_libs - skipping library collection for module 'certifi' as it is not a package.
405 INFO: Module search paths (PYTHONPATH):
['/Volumes/Work/unsub-mail/mac',
 '/opt/homebrew/Cellar/scons/4.7.0/libexec/lib/python3.12/site-packages',
 '/opt/homebrew/Cellar/python@3.10/3.10.18/Frameworks/Python.framework/Versions/3.10/lib/python310.zip',
 '/opt/homebrew/Cellar/python@3.10/3.10.18/Frameworks/Python.framework/Versions/3.10/lib/python3.10',
 '/opt/homebrew/Cellar/python@3.10/3.10.18/Frameworks/Python.framework/Versions/3.10/lib/python3.10/lib-dynload',
 '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages',
 '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/setuptools/_vendor',
 '/Volumes/Work/unsub-mail',
 '/Volumes/Work/unsub-mail',
 '/Volumes/Work/unsub-mail/python',
 '/Volumes/Work/unsub-mail/mac']
593 INFO: checking Analysis
601 INFO: Building because excludes changed
601 INFO: Running Analysis Analysis-00.toc
601 INFO: Target bytecode optimization level: 0
601 INFO: Initializing module dependency graph...
602 INFO: Initializing module graph hook caches...
611 INFO: Analyzing modules for base_library.zip ...
1006 INFO: Processing standard module hook 'hook-encodings.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks'
1302 INFO: Processing standard module hook 'hook-heapq.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks'
2019 INFO: Processing standard module hook 'hook-pickle.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks'
2837 INFO: Caching module dependency graph...
2873 INFO: Looking for Python shared library...
2876 INFO: Using Python shared library: /opt/homebrew/Cellar/python@3.10/3.10.18/Frameworks/Python.framework/Versions/3.10/Python
2876 INFO: Analyzing /Volumes/Work/unsub-mail/python/main.py
2919 INFO: Processing standard module hook 'hook-sqlite3.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks'
3404 INFO: Processing standard module hook 'hook-pygments.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks'
4273 INFO: Processing pre-safe-import-module hook 'hook-typing_extensions.py' from '/Volumes/Work/unsub-mail/mac/.venv/lib/python3.10/site-packages/PyInstaller/hooks/pre_safe_import_module'
4274 INFO: SetuptoolsInfo: initializing cached setuptools info...
7416 INF
