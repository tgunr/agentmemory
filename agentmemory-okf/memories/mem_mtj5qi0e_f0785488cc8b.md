---
type: Fact
title: # Using ViewModel in SwiftUI

source: chatgpt
session_id: 764d1dad-92a2-45f6-a31
description: # Using ViewModel in SwiftUI

source: chatgpt
session_id: 764d1dad-92a2-45f6-a31f-067109715b54
resource: chatgpt://conversation/764d1dad-92a2-45f6-a31f-067109715b54

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj5qi0e_f0785488cc8b
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/764d1dad-92a2-45f6-a31f-067109715b54"]
timestamp: 2026-09-01T21:06:29.565Z
source: agentmemory
strength: 7
---
# Content

# Using ViewModel in SwiftUI

source: chatgpt
session_id: 764d1dad-92a2-45f6-a31f-067109715b54
resource: chatgpt://conversation/764d1dad-92a2-45f6-a31f-067109715b54

# Conversation

- **Session ID:** `764d1dad-92a2-45f6-a31f-067109715b54`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-23T14:20:57.788006+00:00
- **Messages:** 2

---

### 👤 User

Show me some examples of using a ViewModel in SwiftUI.

---

### 🤖 Assistant

Sure! Using a ViewModel in SwiftUI follows the MVVM (Model-View-ViewModel) pattern, which helps in organizing your code and making it more testable. Below are some examples demonstrating how to use a ViewModel in SwiftUI.

### Basic Example

**1. Define a ViewModel**

```swift
import SwiftUI
import Combine

class CounterViewModel: ObservableObject {
    @Published var count = 0
    
    func increment() {
        count += 1
    }
    
    func decrement() {
        count -= 1
    }
}
```

**2. Use the ViewModel in a View**

```swift
import SwiftUI

struct CounterView: View {
    @ObservedObject var viewModel = CounterViewModel()
    
    var body: some View {
        VStack {
            Text("Count: \(viewModel.count)")
                .font(.largeTitle)
            
            HStack {
                Button(action: {
                    viewModel.increment()
                }) {
                    Text("Increment")
                }
                .padding()
                
                Button(action: {
                    viewModel.decrement()
                }) {
                    Text("Decrement")
                }
                .padding()
            }
        }
    }
}
```

### More Complex Example with API Call

**1. Define a ViewModel with API Call**

```swift
import SwiftUI
import Combine

struct User: Identifiable, Codable {
    let id: Int
    let name: String
}

class UserViewModel: ObservableObject {
    @Published var users = [User]()
    private var cancellables = Set<AnyCancellable>()
    
    func fetchUsers() {
        guard let url = URL(string: "https://jsonplaceholder.typicode.com/users") else { return }
        
        URLSession.shared.dataTaskPublisher(for: url)
            .map { $0.data }
            .decode(type: [User].self, decoder: JSONDecoder())
            .receive(on: DispatchQueue.main)
            .sink(receiveCompletion: { _ in }, receiveValue: { [weak self] users in
                self?.users = users
            })
            .store(in: &cancellables)
    }
}
```

**2. Use the ViewModel in a View**

```swift
import SwiftUI

struct UserListView: View {
    @ObservedObject var viewModel = UserViewModel()
    
    var body: some View {
        NavigationView {
            List(viewModel.users) { user in
                Text(user.name)
            }
            .navigationTitle("Users")
            .onAppear {
                viewModel.fetchUsers()
            }
        }
    }
}
```

### Example with StateObject for Better Performance

**1. Define the ViewModel**

```swift
import SwiftUI

class ExampleViewModel: ObservableObject {
    @Published var text = "Hello, world!"
    
    func updateText() {
        text = "Text updated!"
    }
}
```

**2. Use StateObject in a View**

```swift
import SwiftUI

struct ExampleView: View {
    @StateObject private var viewModel = ExampleViewModel()
    
    var body: some View {
        VStack {
            Text(viewModel.text)
                .padding()
            
            Button(action: {
                viewModel.updateText()
            }) {
                Text("Update Text")
            }
        }
    }
}
```

In these examples, the ViewModel handles the business logic and state management, while the SwiftUI View updates its UI based on the ViewModel's state. This separation of concerns makes your code more modular and easier to test.

---
