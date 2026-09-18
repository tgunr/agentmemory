---
type: Fact
title: # How do pass a clipboard url to wget using apple shortcut

source: kilo
session
description: # How do pass a clipboard url to wget using apple shortcut

source: kilo
session_id: 85a67e6c-6228-4416-b709-d3ec445dce60
resource: kilo://task/85a67e6c-6228-4416-b709-d3ec445dce60

# Conversation

- 
resource: agentmemory://memory/mem_mspdyn8s_51c0fb144cc0
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:03:41.316Z
source: agentmemory
strength: 7
---
# Content

# How do pass a clipboard url to wget using apple shortcut

source: kilo
session_id: 85a67e6c-6228-4416-b709-d3ec445dce60
resource: kilo://task/85a67e6c-6228-4416-b709-d3ec445dce60

# Conversation

- **Task ID:** `85a67e6c-6228-4416-b709-d3ec445dce60`
- **Source:** kilo
- **Started:** 2026-01-04T23:12:58Z
- **Ended:** 2026-01-04T23:16:37Z
- **Message blocks:** 11
- **Tokens:** 348612 in / 3842 out

---

### 👤 User — 2026-01-04T23:12:58Z

How do pass a clipboard url to wget using apple shortcut

### 👤 User — 2026-01-04T23:13:04Z

I'll help you create an Apple Shortcut that passes a clipboard URL to wget. Let me first check if there are any existing shortcut files in your workspace that might be relevant.



### 🤖 Assistant — 2026-01-04T23:13:05Z

**Tool call: listFilesRecursive**

```json
{
  "path": "davec",
  "isOutsideWorkspace": false,
  "content": "No files found."
}
```

### 👤 User — 2026-01-04T23:13:08Z

Now I'll create an Apple Shortcut that passes a clipboard URL to wget. Since this is a specific task, I'll create a comprehensive solution that includes both the shortcut file and documentation.



### 🤖 Assistant — 2026-01-04T23:13:17Z

**Tool call: newFileCreated**

```json
{
  "path": "apple_shortcut_wget_clipboard_url.sh",
  "content": "===================================================================\n--- /dev/null\n+++ apple_shortcut_wget_clipboard_url.sh\n@@ -0,0 +1,63 @@\n+#!/bin/bash\n+# Apple Shortcut: Pass Clipboard URL to wget\n+# This script demonstrates how to create an Apple Shortcut that takes a URL from the clipboard and downloads it with wget\n+\n+# Instructions for creating the Apple Shortcut:\n+# 1. Open the Shortcuts app on your iPhone/iPad\n+# 2. Create a new shortcut\n+# 3. Add the following actions in order:\n+\n+# Action 1: Get Clipboard\n+# - Action: \"Get Clipboard\"\n+# - This retrieves the current contents of your clipboard\n+\n+# Action 2: Get URLs from Input\n+# - Action: \"Get URLs from Input\"\n+# - Input: (result from Get Clipboard)\n+# - This extracts any URLs found in the clipboard content\n+\n+# Action 3: Choose from List (optional, for multiple URLs)\n+# - Action: \"Choose from List\"\n+# - List: (result from Get URLs from Input)\n+# - This allows you to select which URL to download if multiple are found\n+# - Turn on \"Allow Multiple Selection\" if you want to download multiple URLs\n+\n+# Action 4: Run Shell Script\n+# - Action: \"Run Shell Script\"\n+# - Script: wget -O ~/Downloads/$(basename \"$1\") \"$1\"\n+# - Input: (selected URL(s) from previous step)\n+# - This runs wget to download the URL(s)\n+\n+# Action 5: Show Result (optional)\n+# - Action: \"Show Result\"\n+# - Input: \"Download completed successfully!\"\n+# - This displays a confirmation message\n+\n+# Alternative: Single Action Shortcut\n+# If you want a simpler version with just one action:\n+\n+# Action: Run Shell Script\n+# - Script: \n+#   #!/bin/bash\n+#   url=$(pbpaste)\n+#   if [[ $url =~ ^https?:// ]]; then\n+#       filename=$(basename \"$url\")\n+#       wget -O ~/Downloads/\"$filename\" \"$url\"\n+#       echo \"Downloaded: $filename\"\n+#   else\n+#       echo \"No valid URL found in clipboard\"\n+#   fi\n+\n+# Usage:\n+# 1. Copy a URL to your clipboard\n+# 2. Run the shortcut\n+# 3. The file will be downloaded to your Downloads folder\n+\n+# Notes:\n+# - Make sure wget is installed on your device\n+# - The shortcut will only work with valid HTTP/HTTPS URLs\n+# - Files are saved to the Downloads folder by default\n+# - You can modify the output directory in the wget command\n+\n+echo \"Apple Shortcut instructions for passing clipboard URL to wget\"\n+echo \"See comments in this file for detailed setup instructions\"\n\n",
  "isOutsideWorkspace": false,
  "isProtected": false,
  "diffStats": {
    "added": 63,
    "removed": 0
  }
}
```

### 👤 User — 2026-01-04T23:15:14Z

Now let me create a more detailed documentation file with the actual Apple Shortcut XML format that can be imported directly:



### 🤖 Assistant — 2026-01-04T23:15:27Z

**Tool call: newFileCreated**

```json
{
  "path": "clipboard_to_wget_shortcut.plist",
  "content": "=============================================
