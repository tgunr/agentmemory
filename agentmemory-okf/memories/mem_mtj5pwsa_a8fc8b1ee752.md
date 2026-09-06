---
type: Fact
title: # AVCaptureSession on Background Thread

source: chatgpt
session_id: 693acc34-dd
description: # AVCaptureSession on Background Thread

source: chatgpt
session_id: 693acc34-ddef-4635-95c2-536e61d06195
resource: chatgpt://conversation/693acc34-ddef-4635-95c2-536e61d06195

# Conversation

- **Ses
resource: agentmemory://memory/mem_mtj5pwsa_a8fc8b1ee752
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/693acc34-ddef-4635-95c2-536e61d06195"]
timestamp: 2026-09-01T21:06:02.052Z
source: agentmemory
strength: 7
---
# Content

# AVCaptureSession on Background Thread

source: chatgpt
session_id: 693acc34-ddef-4635-95c2-536e61d06195
resource: chatgpt://conversation/693acc34-ddef-4635-95c2-536e61d06195

# Conversation

- **Session ID:** `693acc34-ddef-4635-95c2-536e61d06195`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-07-10T16:30:09.602923+00:00
- **Messages:** 2

---

### 👤 User

-[AVCaptureSession startRunning] should be called from background thread. Calling it on the main thread can lead to UI unresponsiveness

---

### 🤖 Assistant

The message you've mentioned, `-[AVCaptureSession startRunning] should be called from a background thread. Calling it on the main thread can lead to UI unresponsiveness`, indicates that the method `startRunning()` of the `AVCaptureSession` class should be invoked on a background thread rather than the main thread. This recommendation is due to the potentially time-consuming nature of starting the capture session, which can lead to unresponsiveness in the user interface if executed on the main thread.

To address this issue, you can move the call to `startRunning()` to a background thread or a concurrent queue using Grand Central Dispatch (GCD) or another threading mechanism. Here's an example of how you can achieve this using GCD:

```swift
DispatchQueue.global(qos: .userInitiated).async {
    captureSession.startRunning()
}
```

In the above code snippet, `captureSession` represents an instance of `AVCaptureSession`. By dispatching the call to `startRunning()` asynchronously on a global background queue with a higher quality of service (`.userInitiated`), you ensure that it doesn't block the main thread, thus preventing UI unresponsiveness.

Remember to handle any UI updates or interactions related to the capture session, such as updating preview layers or user controls, on the main thread. You can use the main queue for such tasks:

```swift
DispatchQueue.main.async {
    // Update UI or handle user interactions related to the capture session here
}
```

By using this approach, you can avoid potential UI issues caused by executing time-consuming operations on the main thread.

---
