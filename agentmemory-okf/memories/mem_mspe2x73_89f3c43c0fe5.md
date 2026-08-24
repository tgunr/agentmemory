---
type: Fact
title: # Getting a sigabort on launching the. app

source: kilo
session_id: 8e465a1c-c0
description: # Getting a sigabort on launching the. app

source: kilo
session_id: 8e465a1c-c01f-4db1-9b6a-4484232956c8
resource: kilo://task/8e465a1c-c01f-4db1-9b6a-4484232956c8

# Conversation

- **Task ID:** `8e
resource: agentmemory://memory/mem_mspe2x73_89f3c43c0fe5
tags: ["okf", "okf-kilo", "kilo"]
timestamp: 2026-08-12T01:07:00.829Z
source: agentmemory
strength: 7
---
# Content

# Getting a sigabort on launching the. app

source: kilo
session_id: 8e465a1c-c01f-4db1-9b6a-4484232956c8
resource: kilo://task/8e465a1c-c01f-4db1-9b6a-4484232956c8

# Conversation

- **Task ID:** `8e465a1c-c01f-4db1-9b6a-4484232956c8`
- **Source:** kilo
- **Started:** 2026-01-03T13:41:03Z
- **Ended:** 2026-01-03T19:12:54Z
- **Message blocks:** 181
- **Tokens:** 3761705 in / 13211 out

---

### 👤 User — 2026-01-03T13:41:03Z

Getting a sigabort on launching the. app

### 🤖 Assistant — 2026-01-03T13:41:08Z

<details><summary>Reasoning</summary>

The user is reporting a SIGABRT error when launching the app. This is a crash signal that typically indicates an unrecoverable error. Let me analyze the current state and gather information to debug this issue.

First, let me look at the project structure and the files that are currently open in VSCode to understand what might be causing this issue.

From the environment details, I can see:
- This is a GCodeGen iOS application built with Swift and SwiftUI
- Using Xcode 15.2+ and targeting iOS 17.0+
- Multiple Swift files are open in VSCode, particularly related to SurfaceJob
- The project structure shows it's a SwiftUI app with various modules

A SIGABORT typically occurs when:
1. An assertion fails
2. An unhandled exception is thrown
3. Memory corruption occurs
4. Swift runtime errors (like force unwrapping nil, index out of bounds, etc.)

Since I need to debug this, I should:
1. Look at the current code to identify potential issues
2. Check for common Swift/SwiftUI problems that cause SIGABRT
3. Examine recent changes that might have introduced this issue
4. Provide a systematic approach to debugging

Let me start by examining the main app entry point and the currently open files to understand what might be causing the crash.

</details>

### 👤 User — 2026-01-03T13:41:13Z

I'll help you debug the SIGABORT crash when launching the app. Let me start by examining the current code and project structure to identify potential causes.


### 🤖 Assistant — 2026-01-03T13:41:14Z

**Tool call: readFile**

```json
{
  "batchFiles": [
    {
      "path": "Sources/SurfaceJob/SurfaceJobsView.swift",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "Sources/SurfaceJob/SurfaceJobsView.swift",
      "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJobsView.swift"
    },
    {
      "path": "Sources/SurfaceJob/SurfaceJob.swift",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "Sources/SurfaceJob/SurfaceJob.swift",
      "content": "/Volumes/Work/GCodeGen/Sources/SurfaceJob/SurfaceJob.swift"
    },
    {
      "path": "GCodeGen.xcodeproj/project.pbxproj",
      "lineSnippet": "",
      "isOutsideWorkspace": false,
      "key": "GCodeGen.xcodeproj/project.pbxproj",
      "content": "/Volumes/Work/GCodeGen/GCodeGen.xcodeproj/project.pbxproj"
    }
  ]
}
```

### 🤖 Assistant — 2026-01-03T13:41:26Z

<details><summary>Reasoning</summary>

I can see the issue now. Looking at the code and project structure, I notice a few potential problems that could cause a SIGABORT:

1. **iOS Deployment Target Mismatch**: I can see in the project file that there are two different iOS deployment targets:
   - Line 683: `IPHONEOS_DEPLOYMENT_TARGET = 17.0;`
   - Line 783: `IPHONEOS_DEPLOYMENT_TARGET = 26.0;`
   - Line 830: `IPHONEOS_DEPLOYMENT_TARGET = 26.0;`

   The app is targeting iOS 26.0 which doesn't exist yet (current iOS is around iOS 18). This is likely causing the crash.

2. **SurfaceJob Type Alias**: In SurfaceJob.swift line 14-15, there's a type alias:
   ```swift
   @available(iOS 26.0, *)
   typealias SurfaceJob = SurfaceJobV1.SurfaceJob
   ```
   
   This is trying to use iOS 26.0 availability which doesn't exist.

3. **Preview Code**: The preview code in SurfaceJobsView.swift (lines 360-370) is using a `Previewer` class that might not be properly implemented.

Let me also check the main app file and other related files to get a complete picture.

</details>

### 👤 User — 2026-01-03T13:41:31Z

I can see the issue causing the SIGABORT crash. There are several critical problems in the code:

1. **iOS Deployment Target M
