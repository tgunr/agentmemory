---
type: Fact
title: # Document Picker Not Working

source: chatgpt
session_id: 91c22d81-f5db-49ec-a9
description: # Document Picker Not Working

source: chatgpt
session_id: 91c22d81-f5db-49ec-a9e6-81d27eb7b61d
resource: chatgpt://conversation/91c22d81-f5db-49ec-a9e6-81d27eb7b61d

# Conversation

- **Session ID:**
resource: agentmemory://memory/mem_mtj5q9h8_955ae20a19ee
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/91c22d81-f5db-49ec-a9e6-81d27eb7b61d"]
timestamp: 2026-09-01T21:06:18.507Z
source: agentmemory
strength: 7
---
# Content

# Document Picker Not Working

source: chatgpt
session_id: 91c22d81-f5db-49ec-a9e6-81d27eb7b61d
resource: chatgpt://conversation/91c22d81-f5db-49ec-a9e6-81d27eb7b61d

# Conversation

- **Session ID:** `91c22d81-f5db-49ec-a9e6-81d27eb7b61d`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-04T19:05:39.086046+00:00
- **Messages:** 14

---

### 👤 User

In this code the documentPicker is never getting called. makeCoordinator is work, verified delegate is set, picker is presented, still no processing

---

### 🤖 Assistant

Here's a snippet of your code that you've provided. To identify why the document picker is not functioning as expected, we'll need to examine the specific parts of the code related to the document picker, particularly:

1. The `makeCoordinator` function.
2. The document picker presentation logic.
3. Delegate methods of the document picker.

Let's dive into the relevant parts of your Swift file. Could you specify if there are particular lines or sections where the document picker setup and delegate methods are implemented? This will help in narrowing down the issue more effectively.

---

### 👤 User

A document picker is on line 192 and in the class coordinator. The delegate is set in line 137

---

### 🤖 Assistant

From the provided code, the document picker setup and its coordinator are implemented as follows:

### Document Picker Setup in `loadJob` Function

```swift
func loadJob() {
    let documentPicker = UIDocumentPickerViewController(forOpeningContentTypes: [UTType.json])
    documentPicker.allowsMultipleSelection = false
    let c = makeCoordinator()
    documentPicker.delegate = c
    if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
        windowScene.windows.first?.rootViewController?.present(documentPicker, animated: true, completion: nil)
    }
}
```

### Coordinator Class with Delegate Methods

```swift
class Coordinator: NSObject, UIDocumentPickerDelegate {
    var parent: SurfaceJobsView

    init(parent: SurfaceJobsView) {
        self.parent = parent
    }

    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        guard let url = urls.first else { return }
        do {
            print("URL selected: \(url)") // Debugging statement
            let data = try Data(contentsOf: url)
            let loadedJob = try JSONDecoder().decode(SurfaceJob.self, from: data)
            if let existingJob = parent.jobs.first(where: { $0.name == loadedJob.name }) {
                parent.duplicateJobName = existingJob.name
                parent.newJob = loadedJob
```

### Issues and Possible Solutions

1. **Delegate Methods Not Being Called**:
    - Ensure the delegate methods are correctly defined and implemented.
    - Verify if the `documentPicker` method signature is accurate and matches the required delegate method.

2. **Coordinator Initialization**:
    - The coordinator is initialized and set as the delegate for the document picker.
    - The `makeCoordinator` function creates and returns the coordinator.

3. **Presentation Logic**:
    - Ensure the document picker is being presented correctly within the window scene.

### Troubleshooting Steps

1. **Check if the Coordinator is Properly Assigned**:
    - Verify the coordinator instance `c` is correctly assigned as the delegate.

2. **Verify Delegate Method Signature**:
    - Ensure the method signature matches exactly with the UIDocumentPickerDelegate protocol.

3. **Debug Statements**:
    - Add more print/debug statements in the coordinator to confirm if the delegate methods are being called.

Let's enhance the debug output and check the delegate method signature.

```swift
class Coordinator: NSObject, UIDocumentPickerDelegate {
    var parent: SurfaceJobsView

    init(parent: SurfaceJobsView) {
        self.parent = parent
    }

    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        print("Delegate method called") // Debugging statement
        guard let url = urls.first else { return }
        do {
            print("URL selected: \(url)") // Debugging statement
