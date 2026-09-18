---
type: Fact
title: # Fix import error

source: chatgpt
session_id: 689a17f5-44a4-832d-860c-03e0b08f
description: # Fix import error

source: chatgpt
session_id: 689a17f5-44a4-832d-860c-03e0b08f0ae6
resource: chatgpt://conversation/689a17f5-44a4-832d-860c-03e0b08f0ae6

# Conversation

- **Session ID:** `689a17f5-
resource: agentmemory://memory/mem_mtj5plvf_bb932db7d208
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689a17f5-44a4-832d-860c-03e0b08f0ae6"]
timestamp: 2026-09-01T21:05:47.895Z
source: agentmemory
strength: 7
---
# Content

# Fix import error

source: chatgpt
session_id: 689a17f5-44a4-832d-860c-03e0b08f0ae6
resource: chatgpt://conversation/689a17f5-44a4-832d-860c-03e0b08f0ae6

# Conversation

- **Session ID:** `689a17f5-44a4-832d-860c-03e0b08f0ae6`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-11T16:19:02.299662+00:00
- **Messages:** 23

---

### 👤 User

(.venv) davec@Mini unsub-mail % dist/UnsubMail.app/Contents/MacOS/UnsubMail --debug
2025-08-11 11:18:27,990 - unsub_mail_ui - INFO - Python version: 3.11.9 (main, Aug 10 2025, 08:39:01) [Clang 17.0.0 (clang-1700.0.13.5)]
2025-08-11 11:18:27,990 - unsub_mail_ui - INFO - Python executable: /Volumes/Work/unsub-mail/dist/UnsubMail.app/Contents/MacOS/UnsubMail
2025-08-11 11:18:27,990 - unsub_mail_ui - INFO - Current working directory: /Volumes/Work/unsub-mail
2025-08-11 11:18:27,991 - unsub_mail_ui - INFO - Script directory: /Volumes/Work/unsub-mail/dist/UnsubMail.app/Contents/Frameworks
Traceback (most recent call last):
  File "main.py", line 19, in <module>
  File "<frozen importlib._bootstrap>", line 1176, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1147, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 690, in _load_unlocked
  File "PyInstaller/loader/pyimod02_importers.py", line 457, in exec_module
  File "ui.py", line 156, in <module>
  File "ui.py", line 157, in UnsubscribeUI
NameError: name 'EmailDatabase' is not defined
[PYI-23348:ERROR] Failed to execute script 'main' due to unhandled exception: name 'EmailDatabase' is not defined
[PYI-23348:ERROR] Traceback:
Traceback (most recent call last):
  File "main.py", line 19, in <module>
  File "<frozen importlib._bootstrap>", line 1176, in _find_and_load
  File "<frozen importlib._bootstrap>", line 1147, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 690, in _load_unlocked
  File "PyInstaller/loader/pyimod02_importers.py", line 457, in exec_module
  File "ui.py", line 156, in <module>
  File "ui.py", line 157, in UnsubscribeUI
NameError: name 'EmailDatabase' is not defined

(.venv) davec@Mini unsub-mail % pip list                                           
Package                   Version
------------------------- -------
altgraph                  0.17.4
build                     1.3.0
exceptiongroup            1.3.0
iniconfig                 2.1.0
macholib                  1.16.3
markdown-it-py            4.0.0
mdurl                     0.1.2
packaging                 25.0
pip                       25.2
pluggy                    1.6.0
Pygments                  2.19.2
pyinstaller               6.15.0
pyinstaller-hooks-contrib 2025.8
pyproject_hooks           1.2.0
pytest                    8.4.1
rich                      14.1.0
setuptools                80.9.0
tomli                     2.2.1
typing_extensions         4.14.1
wheel                     0.45.1
(.venv) davec@Mini unsub-mail % pip install email-database                         
ERROR: Could not find a version that satisfies the requirement email-database (from versions: none)
ERROR: No matching distribution found for email-database
(.venv) davec@Mini unsub-mail %

---

### 🤖 Assistant

That traceback means `ui.py` is trying to use `EmailDatabase` **while the module is being imported**, but `EmailDatabase` isn’t in scope yet. It’s not a pip package—you likely defined it in your own code (e.g., `email_database.py`, `database.py`, or similar). PyInstaller is fine here; this is a plain Python import/name-ordering issue.

Here’s how to fix it fast:

### 1) Import the class explicitly (and early)
At the very top of `ui.py`, add the correct import for wherever you defined it:
```python
# ui.py
from email_database import EmailDatabase  # or: from database import EmailDatabase
```
Adjust the module name to match your file.

### 2) Avoid using `EmailDatabase` at class-definition time
The error suggests something like this is happening inside `UnsubscribeUI`’s class body:
```python
class UnsubscribeUI:
    db = EmailDatabase("emails.db")                   # ❌ executed during import
    # or a dataclass: field(default_factory=EmailDatabase)  # ❌ name not yet bound
```
Move c
