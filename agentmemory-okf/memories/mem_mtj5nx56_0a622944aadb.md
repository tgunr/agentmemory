---
type: Fact
title: # PyInstaller module fix

source: chatgpt
session_id: 689b6c8a-a068-8324-ba45-9f
description: # PyInstaller module fix

source: chatgpt
session_id: 689b6c8a-a068-8324-ba45-9f0b8129abff
resource: chatgpt://conversation/689b6c8a-a068-8324-ba45-9f0b8129abff

# Conversation

- **Session ID:** `689
resource: agentmemory://memory/mem_mtj5nx56_0a622944aadb
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/689b6c8a-a068-8324-ba45-9f0b8129abff"]
timestamp: 2026-09-01T21:04:29.219Z
source: agentmemory
strength: 7
---
# Content

# PyInstaller module fix

source: chatgpt
session_id: 689b6c8a-a068-8324-ba45-9f0b8129abff
resource: chatgpt://conversation/689b6c8a-a068-8324-ba45-9f0b8129abff

# Conversation

- **Session ID:** `689b6c8a-a068-8324-ba45-9f0b8129abff`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-12T16:32:11.500346+00:00
- **Messages:** 12

---

### 👤 User

(.venv) davec@Mini unsub-mail % /Volumes/Work/unsub-mail/dist/UnsubMail/UnsubMail
sys._MEIPASS: /Volumes/Work/unsub-mail/dist/UnsubMail/_internal
sys.path: ['/Volumes/Work/unsub-mail/dist/UnsubMail/_internal/base_library.zip', '/Volumes/Work/unsub-mail/dist/UnsubMail/_internal/lib-dynload', '/Volumes/Work/unsub-mail/dist/UnsubMail/_internal']
cwd: /Volumes/Work/unsub-mail
Traceback (most recent call last):
  File "python/main.py", line 21, in <module>
    from database import EmailDatabase
ModuleNotFoundError: No module named 'database'
[PYI-4715:ERROR] Failed to execute script 'main' due to unhandled exception!
(.venv) davec@Mini unsub-mail %

---

### 🤖 Assistant

You’re hitting this because your local module `database.py` isn’t being collected into the app. In your spec, `pathex` is empty, so PyInstaller doesn’t know to look in your `python/` source folder for imports. `hiddenimports=['database']` does **not** add a search path—it only forces-in modules that PyInstaller already knows how to find. The fix is to point `pathex` at your source dir. citeturn12search1turn18search2

Here’s the minimal change:

```diff
 a = Analysis(
     ['python/main.py'],
-    pathex=[],
+    pathex=['python'],
     binaries=[],
     datas=[],
-    hiddenimports=['requests', 'database'],
+    hiddenimports=['requests', 'database', 'ui'],
     hookspath=[],
     hooksconfig={},
     runtime_hooks=[],
     excludes=[],
     noarchive=False,
     optimize=0,
 )
```

Then rebuild cleanly:

```bash
(.venv) rm -rf build dist
(.venv) pyinstaller UnsubMail.spec --noconfirm --distpath dist --workpath build
```

Why this works  
- `pathex` adds directories to the import search *during analysis*, so PyInstaller can actually find and bundle `python/database.py`. Without it, you get `ModuleNotFoundError` at runtime. citeturn12search1  
- Use `hiddenimports` for modules imported dynamically (e.g., via `importlib`), not to point to your source tree. citeturn18search1

Quick sanity checks
- After the build, open `build/UnsubMail/xref-UnsubMail.html` and confirm `database` is listed under `a.pure` and what imports it. This page is generated explicitly to debug issues like this. citeturn14search3
- At runtime, the onedir layout puts your Python archive and libs under `_internal` and sets `sys._MEIPASS` there—so you won’t see your project root on `sys.path`; bundling is the only way those modules get found. citeturn15search1

If your files are in a package (e.g., `unsub_mail/database.py`) and you import with `from database import EmailDatabase`, either:
- change the import to `from unsub_mail.database import EmailDatabase`, **or**  
- keep the flat layout and the spec tweak above (adding `pathex=['python']`) so the bare `database` module is discoverable.

Try that build and run the binary again from `dist/UnsubMail/UnsubMail`. If it errors next on `ui`, the added `hiddenimports=['ui']` above should cover it; if not, we’ll add its path the same way.

---

### 👤 User

@terminal

---

### 🤖 Assistant

gotcha — here’s a clean, copy‑paste terminal sequence to rebuild and verify the bundle now that your spec has `pathex=['python','scripts']`:

```bash
# From project root
cd /Volumes/Work/unsub-mail

# Use your venv
source .venv/bin/activate

# Clean old artifacts
rm -rf build dist *.spec~ || true

# Rebuild with explicit dist/work dirs and verbose logging
pyinstaller UnsubMail.spec \
  --noconfirm \
  --distpath dist \
  --workpath build \
  --log-level=DEBUG

# Sanity check: confirm bundled modules are present
python - << 'PYI_CHECK'
import sys, zipfile, pathlib
z = pathlib.Path("dist/UnsubMail/_internal/base_library.zip")
print("base_library.zip exists:", z.exists())
if z.exists():
    with zipfile.ZipFile(z) as zp:
        names = [n for n in zp.namelist() if n.ends
