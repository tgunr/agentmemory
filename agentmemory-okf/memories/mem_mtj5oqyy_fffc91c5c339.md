---
type: Fact
title: # iOS Transaction Handling: Notifications

source: chatgpt
session_id: fcf7e714-
description: # iOS Transaction Handling: Notifications

source: chatgpt
session_id: fcf7e714-dbb3-4fdf-871d-f7fcdc959d25
resource: chatgpt://conversation/fcf7e714-dbb3-4fdf-871d-f7fcdc959d25

# Conversation

- **S
resource: agentmemory://memory/mem_mtj5oqyy_fffc91c5c339
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/fcf7e714-dbb3-4fdf-871d-f7fcdc959d25"]
timestamp: 2026-09-01T21:05:07.866Z
source: agentmemory
strength: 7
---
# Content

# iOS Transaction Handling: Notifications

source: chatgpt
session_id: fcf7e714-dbb3-4fdf-871d-f7fcdc959d25
resource: chatgpt://conversation/fcf7e714-dbb3-4fdf-871d-f7fcdc959d25

# Conversation

- **Session ID:** `fcf7e714-dbb3-4fdf-871d-f7fcdc959d25`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-16T21:29:45.870663+00:00
- **Messages:** 2

---

### 👤 User

How does the iOS app get notified when a transaction is cancelled? Is it through a published notification, or do I need to poll?

---

### 🤖 Assistant

In iOS, when handling transactions, including cancellations, the app is notified via the `SKPaymentTransactionObserver` protocol. You need to implement this protocol in your app to monitor the transaction states. Here's how it typically works:

1. **Add the Transaction Observer**: At the start of your app (usually in the `application(_:didFinishLaunchingWithOptions:)` method of your AppDelegate or within your scene delegate), you add the observer to the `SKPaymentQueue`.

2. **Implement Observer Methods**: You implement the required methods of `SKPaymentTransactionObserver`, especially `paymentQueue(_:updatedTransactions:)`. This method gets called whenever a transaction is updated. Here, you will check the state of each transaction passed to the method.

3. **Handle Different States**: The `updatedTransactions` method provides an array of transactions, each with a `transactionState`. For cancellations, you'd typically look for `.failed` states. If the transaction's error code corresponds to a user cancellation (such as error code `SKError.paymentCancelled`), you can then handle it accordingly.

4. **Finish the Transaction**: It’s important to call `finishTransaction` on the `SKPaymentQueue` for every transaction once it's been processed (including failed transactions), to remove it from the queue and prevent further updates.

Here’s a basic example of how to set up and use the transaction observer:

```swift
import StoreKit

class TransactionObserver: NSObject, SKPaymentTransactionObserver {
    func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for transaction in transactions {
            switch transaction.transactionState {
            case .purchased:
                // Handle the successful purchase
                break
            case .failed:
                if let error = transaction.error as? SKError {
                    if error.code == .paymentCancelled {
                        // Handle cancellation here
                    } else {
                        // Handle other errors
                    }
                }
                SKPaymentQueue.default().finishTransaction(transaction)
            case .restored:
                // Handle restored transactions
                SKPaymentQueue.default().finishTransaction(transaction)
            default:
                break
            }
        }
    }
}

// Add this observer somewhere in your app initialization
let observer = TransactionObserver()
SKPaymentQueue.default().add(observer)
```

This way, you don’t need to poll for transaction updates; the observer pattern used by `SKPaymentQueue` will actively notify your app of any changes, including cancellations, through the delegate methods.

---
