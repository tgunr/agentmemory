---
type: Fact
title: # Fixing Node-Sass Build Error

source: hermes
session_id: claude__e2317d71-4588
description: # Fixing Node-Sass Build Error

source: hermes
session_id: claude__e2317d71-4588-44e3-8419-c9d434fed41d
resource: hermes://session/claude__e2317d71-4588-44e3-8419-c9d434fed41d

# Conversation

- **Ses
resource: agentmemory://memory/mem_mtj638rg_de838abd8baf
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:24.050Z
source: agentmemory
strength: 7
---
# Content

# Fixing Node-Sass Build Error

source: hermes
session_id: claude__e2317d71-4588-44e3-8419-c9d434fed41d
resource: hermes://session/claude__e2317d71-4588-44e3-8419-c9d434fed41d

# Conversation

- **Session ID:** `claude__e2317d71-4588-44e3-8419-c9d434fed41d`
- **Source:** claude
- **Model:** None
- **Started:** 2024-07-09T23:31:59Z
- **Ended:** 2024-07-12T16:19:26Z
- **Messages:** 86
- **CWD:** `/Users/davec`

---

### 👤 User — 2024-07-09T23:32:09Z

How to fix this

_Attachments: paste.txt_

_Attachments: paste.txt_

### 🤖 Assistant — 2024-07-09T23:32:09Z

Based on the error log you've provided, it appears the main issue is related to building the `node-sass` package. The error suggests that Python is missing the `distutils` module, which is required for the build process. Let's go through the steps to resolve this issue:

1. Install Python's distutils:
   The error indicates that the `distutils` module is missing. This module is typically included with Python, but it might be missing in your installation. To fix this, you can try installing the `python3-distutils` package:

   ```
   sudo apt-get update
   sudo apt-get install python3-distutils
   ```

   If you're not using apt, use the appropriate package manager for your system.

2. Update node-sass:
   The version of `node-sass` you're using might be incompatible with your Node.js version (22.2.0). Try updating `node-sass` to the latest version:

   ```
   npm uninstall node-sass
   npm install node-sass@latest
   ```

3. Clear npm cache and node_modules:
   Sometimes, clearing the npm cache and removing the node_modules directory can help resolve build issues:

   ```
   npm cache clean --force
   rm -rf node_modules
   npm install
   ```

4. Use an LTS version of Node.js:
   You're using Node.js version 22.2.0, which is a very recent version. Some packages might not be compatible with it yet. Consider using an LTS (Long Term Support) version of Node.js, such as 20.x:

   ```
   nvm install 20
   nvm use 20
   ```

   Then try installing the dependencies again.

5. Install build essentials:
   Ensure you have the necessary build tools installed:

   ```
   sudo apt-get install build-essential
   ```

6. Update npm:
   Make sure you're using the latest version of npm:

   ```
   npm install -g npm@latest
   ```

After making these changes, try running the installation command again:

```
cd src/svelte-components && npm i
```

If you're still encountering issues after trying these steps, please provide the output of the new error message, and I'll be happy to help further.

### 👤 User — 2024-07-09T23:48:17Z

still not working

_Attachments: paste.txt_

_Attachments: paste.txt_

### 🤖 Assistant — 2024-07-09T23:48:17Z

I see that the issue is persisting. The error message still indicates that Python is missing the `distutils` module, even after switching to Node.js v20.15.1. Let's try a different approach:

1. First, let's check your Python version:

   ```
   python3 --version
   ```

2. It seems you're using Python 3.12 (based on the path `/home/linuxbrew/.linuxbrew/opt/python@3.12/bin/python3.12`). In Python 3.12, `distutils` has been removed. We need to use an earlier version of Python. Let's install Python 3.11:

   ```
   brew install python@3.11
   ```

3. Set Python 3.11 as the default:

   ```
   echo 'export PATH="/home/linuxbrew/.linuxbrew/opt/python@3.11/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

4. Verify the Python version:

   ```
   python3 --version
   ```

   It should now show Python 3.11.x

5. Now, let's remove the existing `node-sass` and install a version compatible with Node.js 20:

   ```
   npm uninstall node-sass
   npm install node-sass@7.0.3
   ```

6. Clear npm cache and node_modules again:

   ```
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

7. If you're still having issues, try setting the Python path explicitly before running npm install:

   ```
   export PYTHON=/home/linuxbrew/.linuxbrew/opt/python@3.11/bin/python3
   npm install
   ```

8. If the issue persists, we might need to rebuild `node-gyp`:

   ```
   npm explore npm -g -- npm install node-gyp@latest
 
