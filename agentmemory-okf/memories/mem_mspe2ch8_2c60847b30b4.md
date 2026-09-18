---
type: Fact
title: # VS Code keeps crashing: The window terminated unexpectedly (reason: 'crashed',
description: # VS Code keeps crashing: The window terminated unexpectedly (reason: 'crashed', c

source: kilo
session_id: 0ae6078a-68f9-41f7-8bd5-5648f5c25f78
resource: kilo://task/0ae6078a-68f9-41f7-8bd5-5648f5c2
resource: agentmemory://memory/mem_mspe2ch8_2c60847b30b4
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:06:33.965Z
source: agentmemory
strength: 7
---
# Content

# VS Code keeps crashing: The window terminated unexpectedly (reason: 'crashed', c

source: kilo
session_id: 0ae6078a-68f9-41f7-8bd5-5648f5c25f78
resource: kilo://task/0ae6078a-68f9-41f7-8bd5-5648f5c25f78

# Conversation

- **Task ID:** `0ae6078a-68f9-41f7-8bd5-5648f5c25f78`
- **Source:** kilo
- **Started:** 2025-11-25T20:23:08Z
- **Ended:** 2025-11-25T20:26:17Z
- **Message blocks:** 24
- **Tokens:** 515723 in / 4239 out

---

### 👤 User — 2025-11-25T20:23:08Z

VS Code keeps crashing: The window terminated unexpectedly (reason: 'crashed', code: '5') help me fix this

### 🤖 Assistant — 2025-11-25T20:23:11Z

<details><summary>Reasoning</summary>

The user is reporting that VS Code keeps crashing with the error: "The window terminated unexpectedly (reason: 'crashed', code: '5')". I need to help fix this.


## Investigating the VS Code crash

- The user reported VS Code crashing with the error: "The window terminated unexpectedly (reason: 'crashed', code: '5')."
- Need to help troubleshoot and fix the issue based on the error details.

## Investigating the VS Code crash
- Possible causes include extension conflicts, corrupted user data, outdated VS Code versions, system resource issues, GPU/driver problems, corrupted workspace settings, and OS compatibility issues.
- Narrowing down to 1-2 likely sources, such as extension conflicts or corrupted user data, for further investigation.

## Validating assumptions
- Suggest adding logs to confirm whether an extension or user data corruption is causing the crash.
- Recommend asking the user to verify the diagnosis before proceeding with a fix.

## Investigating the VS Code crash
- Plugin or language server issues could also contribute, especially with background processes.
- Extension conflicts remain a top suspect due to their frequent impact after updates.

## Validating assumptions
- Suggest checking VS Code crash logs, like those in ~/Library/Logs/DiagnosticReports/ on macOS, to pinpoint the cause.
- Propose enabling developer console logging or reviewing system crash reports for deeper insight.

## Checking memory availability  
- Found a memory MCP server available for use in the current task.  
- Need to ask the user if they want to leverage memory for troubleshooting the VS Code crash.  

## Exploring memory tools  
- Considering using search_nodes with a query like "VS Code crash" to find similar past issues.  
- Noting the user's macOS system, need to ensure the memory collection matches the operating environment.

</details>

### 🤖 Assistant — 2025-11-25T20:23:25Z

<details><summary>Reasoning</summary>

The search for "VS Code crash" returned no entities or relations, so no memory is available for this issue.


## Handling Search Results
- The search for "VS Code crash" found no relevant entities or relations.  
- No memory is available for this specific issue, so we'll proceed without it.

## Evaluating Possible Causes  
- VS Code crashes with code 5 could stem from extension conflicts, especially after recent installs.  
- Other potential issues include corrupted installation, user data problems, system resource limits, GPU issues, OS updates, large files, or background processes.  

## Distilling Likely Sources  
- Extension conflicts and corrupted user data are the top suspects, given their frequency in crash reports.  
- Let's focus on these two for further investigation.  

## Validating Assumptions  
- To confirm, we'll need to add logs to check for extension errors or corrupted data.  
- Please confirm the diagnosis before we proceed with fixes.

</details>

### 🤖 Assistant — 2025-11-25T20:23:30Z

**Tool call: command**

```json
{
  "command": "ls -la ~/Library/Logs/DiagnosticReports/ | grep -i vscode | tail -5"
}
```

### 🤖 Assistant — 2025-11-25T20:23:38Z

<details><summary>Reasoning</summary>

The command returned no output, meaning no VS Code crash reports in DiagnosticReports.


</details>

### 🤖 Assistant — 2025-11-25T20:23:41Z

**Tool call: command**

```json
{
  "command": "ls -la ~/Library/Application\\ Support/Code/logs/ | tail -5"
}
```

### 🤖 Assistant — 2025-11-25T20:23:48Z

<details><summary>Reasoning</summary>

There are recent log directories. The latest 
