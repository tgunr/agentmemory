---
type: Fact
title: # Task Context with Swift

source: chatgpt
session_id: 76091b47-6f12-4cf9-833d-2
description: # Task Context with Swift

source: chatgpt
session_id: 76091b47-6f12-4cf9-833d-2e55536109e2
resource: chatgpt://conversation/76091b47-6f12-4cf9-833d-2e55536109e2

# Conversation

- **Session ID:** `76
resource: agentmemory://memory/mem_mtj5omz3_4b0529aa68ab
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/76091b47-6f12-4cf9-833d-2e55536109e2"]
timestamp: 2026-09-01T21:05:02.684Z
source: agentmemory
strength: 7
---
# Content

# Task Context with Swift

source: chatgpt
session_id: 76091b47-6f12-4cf9-833d-2e55536109e2
resource: chatgpt://conversation/76091b47-6f12-4cf9-833d-2e55536109e2

# Conversation

- **Session ID:** `76091b47-6f12-4cf9-833d-2e55536109e2`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-07-04T12:16:47.211189+00:00
- **Messages:** 2

---

### 👤 User

In Swift, is there any way to determine from inside a function which tasks that it is running within?

---

### 🤖 Assistant

In Swift, if you want to determine which tasks a function is running within, you can use task-local values introduced in Swift Concurrency. Task-local values allow you to store and access data specific to the current task.

Here's an example of how you can use task-local values to determine the context of a task:

```swift
import Foundation

// Define a task-local key
struct TaskLocalKey: TaskLocalKeyProtocol {
    static var defaultValue: String = "No Task"
}

extension TaskLocalValues {
    var taskName: TaskLocalKey {
        get { self[TaskLocalKey.self] }
        set { self[TaskLocalKey.self] = newValue }
    }
}

func exampleFunction() {
    let taskName = Task.localValues.taskName
    print("This function is running within task: \(taskName)")
}

Task {
    // Set a task-local value
    Task.localValues.taskName = "Task 1"
    
    // Run the function within this task
    exampleFunction()
}

Task {
    // Set a different task-local value
    Task.localValues.taskName = "Task 2"
    
    // Run the function within this task
    exampleFunction()
}
```

In this example, `TaskLocalKey` is a key used to store and retrieve task-local values. Inside the `exampleFunction`, we access the task-local value using `Task.localValues.taskName`. Depending on the task that is executing the function, the printed message will indicate the task context.

This approach allows you to determine which task a function is running within by leveraging task-local values.

---
