---
type: Fact
title: # List of Rows with Bindings

source: chatgpt
session_id: 7e45d225-788d-44a8-b5f
description: # List of Rows with Bindings

source: chatgpt
session_id: 7e45d225-788d-44a8-b5f9-769fb3030bda
resource: chatgpt://conversation/7e45d225-788d-44a8-b5f9-769fb3030bda

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj5p0be_514ee17fa961
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/7e45d225-788d-44a8-b5f9-769fb3030bda"]
timestamp: 2026-09-01T21:05:19.969Z
source: agentmemory
strength: 7
---
# Content

# List of Rows with Bindings

source: chatgpt
session_id: 7e45d225-788d-44a8-b5f9-769fb3030bda
resource: chatgpt://conversation/7e45d225-788d-44a8-b5f9-769fb3030bda

# Conversation

- **Session ID:** `7e45d225-788d-44a8-b5f9-769fb3030bda`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-20T21:42:59.054717+00:00
- **Messages:** 20

---

### 👤 User

@Query var jobs: [SurfaceJob] returns the jobs in this SwitUI app, I want to pass each job down to. a subview "Row" as a binding the subview can further pass on to its subviews. How do I create a List of Rows for the view?

---

### 🤖 Assistant

To create a `List` of `Row` views in your SwiftUI app and pass each `job` as a `Binding` to the `Row` subview, you need to ensure that the `Row` view accepts a `Binding<SurfaceJob>`. Here is how you can achieve this:

1. **Define the `Row` view** that takes a `Binding<SurfaceJob>`:

```swift
import SwiftUI

struct Row: View {
    @Binding var job: SurfaceJob
    
    var body: some View {
        Text(job.title) // Customize the view based on your SurfaceJob properties
    }
}
```

2. **Define the parent view** that uses the `@Query` property to fetch the jobs and then passes each job to the `Row` view:

```swift
import SwiftUI
import CoreData

struct ContentView: View {
    @Query var jobs: [SurfaceJob] // Assuming @Query works similarly to @FetchRequest

    var body: some View {
        List($jobs, id: \.self) { $job in
            Row(job: $job)
        }
    }
}
```

In the `ContentView`, the `List` view uses the `$jobs` binding array to iterate over each job. The `$` prefix is used to convert each `job` into a `Binding` which is then passed to the `Row` view.

Make sure your `SurfaceJob` conforms to `Identifiable` if it doesn't already:

```swift
struct SurfaceJob: Identifiable {
    var id: UUID
    var title: String
    // Other properties
}
```

This way, each `Row` view will have a binding to the corresponding `SurfaceJob`, allowing the `Row` view to modify the job and propagate those changes back to the parent view.

Here's the complete code:

```swift
import SwiftUI
import CoreData

struct SurfaceJob: Identifiable {
    var id: UUID
    var title: String
    // Other properties
}

struct Row: View {
    @Binding var job: SurfaceJob
    
    var body: some View {
        Text(job.title) // Customize the view based on your SurfaceJob properties
    }
}

struct ContentView: View {
    @Query var jobs: [SurfaceJob] // Assuming @Query works similarly to @FetchRequest

    var body: some View {
        List($jobs, id: \.self) { $job in
            Row(job: $job)
        }
    }
}
```

This approach ensures that each `Row` view receives a binding to a `SurfaceJob`, allowing it to pass the binding further to its subviews if needed.

---

### 👤 User

That won't work I get Cannot find '$jobs' in scope

---

### 🤖 Assistant

To resolve the issue of "Cannot find '$jobs' in scope," we need to ensure the proper use of SwiftUI's `@State` or `@StateObject` for managing and binding data. Here is an approach that involves using `@State` or `@StateObject` instead of `@Query`.

Let's assume you are managing the list of jobs within your view or a view model. Here is an example of how to set it up:

1. **Define the `Row` view** that takes a `Binding<SurfaceJob>`:

```swift
import SwiftUI

struct Row: View {
    @Binding var job: SurfaceJob
    
    var body: some View {
        Text(job.title) // Customize the view based on your SurfaceJob properties
    }
}
```

2. **Create a view model** to manage the list of jobs:

```swift
import SwiftUI
import Combine

class JobsViewModel: ObservableObject {
    @Published var jobs: [SurfaceJob] = [
        SurfaceJob(id: UUID(), title: "Job 1"),
        SurfaceJob(id: UUID(), title: "Job 2"),
        SurfaceJob(id: UUID(), title: "Job 3")
    ]
}
```

3. **Define the parent view** that uses the `JobsViewModel` to fetch the jobs and then passes each job to the `Row` view:

```swift
import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = JobsViewModel()

    var body: some View {
        List($viewModel.jobs) { $job in
            Row(job: $job)
