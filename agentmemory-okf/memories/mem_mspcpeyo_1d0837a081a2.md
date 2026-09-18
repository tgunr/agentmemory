---
type: Fact
title: # Why is my exclude list in my settings.json being ignored?

source: kilo
sessio
description: # Why is my exclude list in my settings.json being ignored?

source: kilo
session_id: a5166505-1a8a-46c9-892c-c4b06be4813e
resource: kilo://task/a5166505-1a8a-46c9-892c-c4b06be4813e

# Conversation

-
resource: agentmemory://memory/mem_mspcpeyo_1d0837a081a2
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T00:28:31.017Z
source: agentmemory
strength: 7
---
# Content

# Why is my exclude list in my settings.json being ignored?

source: kilo
session_id: a5166505-1a8a-46c9-892c-c4b06be4813e
resource: kilo://task/a5166505-1a8a-46c9-892c-c4b06be4813e

# Conversation

- **Task ID:** `a5166505-1a8a-46c9-892c-c4b06be4813e`
- **Source:** kilo
- **Started:** 2025-11-24T16:34:25Z
- **Ended:** 2025-11-24T16:38:15Z
- **Message blocks:** 24
- **Tokens:** 311009 in / 4567 out

---

### 👤 User — 2025-11-24T16:34:25Z

Why is my exclude list in my settings.json being ignored?

### 🤖 Assistant — 2025-11-24T16:34:28Z

<details><summary>Reasoning</summary>

The user is asking why their exclude list in settings.json is being ignored. The open tab is davec/.startup/.vscode/settings.json, so that's likely the file in question.


## Investigating user issue  
- The user reports their exclude list in settings.json is being ignored.  
- The open file, davec/.startup/.vscode/settings.json, is likely the relevant settings file.

## Investigating user issue  
- The exclude list in settings.json likely controls file explorer visibility or search exclusions in VSCode.

</details>

### 🤖 Assistant — 2025-11-24T16:34:47Z

**Tool call: readFile**

```json
{
  "path": "davec/.startup/.vscode/settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/.startup/.vscode/settings.json",
  "reason": ""
}
```

### 🤖 Assistant — 2025-11-24T16:34:49Z

<details><summary>Reasoning</summary>

The settings.json file has:


## Examining settings configuration  
- The settings.json file contains a "files.exclude" section with "**/.*": false, indicating hidden files (starting with a dot) are not excluded.  
- This means hidden files should be visible in the file explorer based on the current settings.

## Examining settings configuration  
- The user mentions the exclude list is being ignored, possibly wanting to exclude files, but "**/.*": false includes hidden files instead.  
- It's possible other excludes exist, but the provided file only shows this one setting, suggesting no conflicts there.  
- User settings or workspace configurations might be overriding the current settings in davec/.startup/.vscode/settings.json.  
- The current workspace directory is /Users, while the settings file is in davec/.startup, which may cause the settings to not apply as expected.  
- It's worth checking if VSCode is open with the workspace set to davec/.startup, as this could affect how settings are recognized.  

## Investigating pattern behavior  
- The pattern "**/.*" should match files starting with a dot in any directory, but may not be working as intended.  
- This could explain why hidden files are not being excluded despite the settings.

</details>

### 🤖 Assistant — 2025-11-24T16:34:58Z

**Tool call: readFile**

```json
{
  "path": "Library/Application Support/Code/User/settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/Library/Application Support/Code/User/settings.json",
  "reason": ""
}
```

### 🤖 Assistant — 2025-11-24T16:35:00Z

<details><summary>Reasoning</summary>

The user settings file doesn't exist at that path. On macOS, it might be in a different location.


</details>

### 🤖 Assistant — 2025-11-24T16:35:01Z

**Tool call: readFile**

```json
{
  "path": "davec/Library/Application Support/Code/User/settings.json",
  "isOutsideWorkspace": false,
  "content": "/Users/davec/Library/Application Support/Code/User/settings.json",
  "reason": ""
}
```

### 🤖 Assistant — 2025-11-24T16:35:04Z

<details><summary>Reasoning</summary>

Now I have the user settings. Looking at it, there is no "files.exclude" in user settings, so no override there.


## Examining User Settings  
- Found no "files.exclude" setting in the user configuration, so no overrides are in place.  
- Noted "showHideExcludedConfig.exclude": [], indicating an empty exclusion list in the settings.  
- This suggests no files are currently being excluded based on user configuration.

## Investigating Workspace Settings  
- Found "files.exclude": { "**/.*": false } in workspace settings, which should make hidden files visible in the file explorer.  
- If hidden files remain hidden, it could mean this setting is being ignored, co
