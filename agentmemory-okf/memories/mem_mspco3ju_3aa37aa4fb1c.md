---
type: Fact
title: # In macOS in the iCloud folder, how do I tell if a file has not been uploaded u
description: # In macOS in the iCloud folder, how do I tell if a file has not been uploaded usi

source: kilo
session_id: 019befc7-02d2-7413-80a5-e7a0ed236818
resource: kilo://task/019befc7-02d2-7413-80a5-e7a0ed23
resource: agentmemory://memory/mem_mspco3ju_3aa37aa4fb1c
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:27:29.582Z
source: agentmemory
strength: 7
---
# Content

# In macOS in the iCloud folder, how do I tell if a file has not been uploaded usi

source: kilo
session_id: 019befc7-02d2-7413-80a5-e7a0ed236818
resource: kilo://task/019befc7-02d2-7413-80a5-e7a0ed236818

# Conversation

- **Task ID:** `019befc7-02d2-7413-80a5-e7a0ed236818`
- **Source:** kilo
- **Started:** 2026-01-24T11:32:35Z
- **Ended:** 2026-01-24T11:33:07Z
- **Message blocks:** 5
- **Tokens:** 107056 in / 1915 out

---

### 👤 User — 2026-01-24T11:32:35Z

In macOS in the iCloud folder, how do I tell if a file has not been uploaded using the command line?

### 🤖 Assistant — 2026-01-24T11:32:42Z

<details><summary>Reasoning</summary>

The user asks: "In macOS in the iCloud folder, how do I tell if a file has not been uploaded using the command line?"


## Investigating iCloud Sync Status  
- The user wants to check if files in the iCloud folder on macOS have uploaded using the command line.  
- This involves finding a way to verify the sync status of iCloud files via terminal commands.

## Investigating iCloud Sync Status  
- Files in the iCloud folder, likely iCloud Drive (~/iCloud Drive/), use extended attributes to track upload status.  
- Checking sync status involves looking for attributes like "com.apple.icloud.desktop" to see if files are uploaded.

</details>

### 🤖 Assistant — 2026-01-24T11:32:51Z

<details><summary>Reasoning</summary>

The search results provide useful information.


## Reviewing iCloud Drive Commands  
- Found `brctl status` helps check iCloud Drive sync status, showing useful sync information.  
- Learned `brctl` is the command-line utility specifically for managing iCloud Drive.

## Reviewing iCloud Drive Commands  
- Noted `brctl status` provides a summary to check if files are uploaded to iCloud Drive.  
- For specific files, it doesn’t detail upload status directly, but you can monitor uploads generally.  
- Considered using `xattr` or `ls -l@` to check extended attributes for more file-specific details.

</details>

### 🤖 Assistant — 2026-01-24T11:33:01Z

<details><summary>Reasoning</summary>

Great, now I have the key information.


## Checking iCloud Upload Status  
- Found a method to verify if individual files in a folder are uploaded to iCloud.

</details>

### 🤖 Assistant — 2026-01-24T11:33:06Z

To check if a file in your iCloud Drive folder has been uploaded to iCloud using the command line on macOS, use the `mdls` command to query the file's metadata attribute `kMDItemUbiquitousItemIsUploaded`. This attribute indicates the upload status:

- **1**: The file has been successfully uploaded to iCloud.
- **0**: The file has not been uploaded yet (or is still in the process of uploading).

### Command Syntax
```bash
mdls -name kMDItemUbiquitousItemIsUploaded /path/to/your/file
```

### Example
Assuming your iCloud Drive is located at `~/Library/Mobile Documents/com~apple~CloudDocs/` (the default location), and you have a file named `example.txt`:

```bash
mdls -name kMDItemUbiquitousItemIsUploaded ~/Library/Mobile\ Documents/com~apple~CloudDocs/example.txt
```

- If the output is `kMDItemUbiquitousItemIsUploaded = 1`, the file is uploaded.
- If the output is `kMDItemUbiquitousItemIsUploaded = 0`, the file has not been uploaded.

### Notes
- The iCloud Drive folder path may vary; you can find it by opening Finder, navigating to iCloud Drive, and checking the path in the title bar or using `pwd` in Terminal after `cd`ing to it.
- This works for files in iCloud-synced locations. Files outside iCloud Drive won't have this attribute.
- For overall iCloud Drive sync status (including upload progress), use `brctl status` in Terminal, which provides a summary of sync operations.
- If you need to check multiple files, combine this with `find` and scripting, e.g., `find /path/to/icloud/folder -type f -exec mdls -name kMDItemUbiquitousItemIsUploaded {} \; | grep "= 0"` to list files not uploaded.
