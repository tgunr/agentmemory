---
type: Fact
title: # Reset Shared Model Container

source: chatgpt
session_id: ed7f1c23-221c-45b6-a
description: # Reset Shared Model Container

source: chatgpt
session_id: ed7f1c23-221c-45b6-a008-4541692be98b
resource: chatgpt://conversation/ed7f1c23-221c-45b6-a008-4541692be98b

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj5pn9u_beea5f994f19
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/ed7f1c23-221c-45b6-a008-4541692be98b"]
timestamp: 2026-09-01T21:05:49.731Z
source: agentmemory
strength: 7
---
# Content

# Reset Shared Model Container

source: chatgpt
session_id: ed7f1c23-221c-45b6-a008-4541692be98b
resource: chatgpt://conversation/ed7f1c23-221c-45b6-a008-4541692be98b

# Conversation

- **Session ID:** `ed7f1c23-221c-45b6-a008-4541692be98b`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-23T18:16:48.649764+00:00
- **Messages:** 4

---

### 👤 User

I'm creating an iOS app using Swift data. And old versions, using the model configuration, I just want to destroy it and start over. So, how should I do that in the shared model container initialization?

---

### 🤖 Assistant

To reset your shared model container and start over, you can configure the container to delete the existing store and recreate it. Here’s how you can do it in your `AppDelegate` or wherever you initialize your `NSPersistentContainer`:

1. **Remove Existing Store**: If the store exists, remove it from the file system.
2. **Reinitialize the Persistent Container**: Create a new persistent store.

Here's a code snippet to demonstrate how to achieve this:

```swift
import CoreData

class PersistenceController {
    static let shared = PersistenceController()

    let container: NSPersistentContainer

    init(inMemory: Bool = false) {
        container = NSPersistentContainer(name: "ModelName")

        if inMemory {
            container.persistentStoreDescriptions.first?.url = URL(fileURLWithPath: "/dev/null")
        }

        container.loadPersistentStores { storeDescription, error in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        }
    }

    func reset() {
        guard let storeURL = container.persistentStoreDescriptions.first?.url else {
            return
        }

        do {
            try container.persistentStoreCoordinator.destroyPersistentStore(at: storeURL, ofType: NSSQLiteStoreType, options: nil)
            try FileManager.default.removeItem(at: storeURL)

            container = NSPersistentContainer(name: "ModelName")
            container.loadPersistentStores { storeDescription, error in
                if let error = error as NSError? {
                    fatalError("Unresolved error \(error), \(error.userInfo)")
                }
            }
        } catch {
            fatalError("Failed to reset persistent store: \(error)")
        }
    }
}

// Usage
let persistenceController = PersistenceController()
persistenceController.reset()
```

In this example:

1. **Initialization**: The `PersistenceController` class initializes the `NSPersistentContainer`.
2. **Reset Method**: The `reset` method destroys the existing persistent store and removes the associated file.
3. **Reinitialize**: After destroying the store, the container is reinitialized and the persistent stores are loaded again.

By calling `persistenceController.reset()`, you destroy the existing store and start with a fresh configuration. This ensures that your shared model container is effectively reset and ready for new data.

---

### 👤 User

But what about subsequent launches? I only want to destroy it the first time that the new version is executed.

---

### 🤖 Assistant

For handling this only on the first launch of a new version, you can use `UserDefaults` to store a flag indicating whether the reset has already been performed for the current version.

Here's how you can implement it:

1. **Check the App Version**: Determine the current app version.
2. **Check UserDefaults**: See if the reset has already been performed for this version.
3. **Perform the Reset**: If not, perform the reset and set the flag.

Here's a complete example:

```swift
import CoreData

class PersistenceController {
    static let shared = PersistenceController()
    let container: NSPersistentContainer

    init(inMemory: Bool = false) {
        container = NSPersistentContainer(name: "ModelName")

        if inMemory {
            container.persistentStoreDescriptions.first?.url = URL(fileURLWithPath: "/dev/null")
        }

        if shouldResetStore() {
            reset()
            markResetAsPerformed()
        }

        container.loadPersistentStores {
