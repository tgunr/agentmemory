---
type: Fact
title: # SwiftUI StoreKit Integration

source: chatgpt
session_id: 2924677f-a5f1-4c15-a
description: # SwiftUI StoreKit Integration

source: chatgpt
session_id: 2924677f-a5f1-4c15-af14-69854457945e
resource: chatgpt://conversation/2924677f-a5f1-4c15-af14-69854457945e

# Conversation

- **Session ID:*
resource: agentmemory://memory/mem_mtj5oe3z_03e0a2d021c7
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/2924677f-a5f1-4c15-af14-69854457945e"]
timestamp: 2026-09-01T21:04:51.208Z
source: agentmemory
strength: 7
---
# Content

# SwiftUI StoreKit Integration

source: chatgpt
session_id: 2924677f-a5f1-4c15-af14-69854457945e
resource: chatgpt://conversation/2924677f-a5f1-4c15-af14-69854457945e

# Conversation

- **Session ID:** `2924677f-a5f1-4c15-af14-69854457945e`
- **Source:** chatgpt (OpenAI)
- **Started:** 2024-06-13T22:10:13.311709+00:00
- **Messages:** 6

---

### 👤 User

I need a complete example of how to use StoreKit with SwiftUI to purchase or subscribe products, validate subscriptions on startup, take actions when they expire.

---

### 🤖 Assistant

To implement in-app purchases and subscriptions using StoreKit with SwiftUI, you'll need to manage the entire lifecycle of the product: displaying the product, initiating the purchase, and handling the transaction. Additionally, it's crucial to validate and monitor the subscription status.

Below is a complete example of integrating StoreKit for in-app purchases and subscriptions in a SwiftUI app. This example will cover:
1. Fetching products.
2. Making purchases.
3. Validating receipts.
4. Observing the subscription status.

### Step 1: Import StoreKit

```swift
import SwiftUI
import StoreKit
```

### Step 2: Define a Product Model

```swift
struct Product: Identifiable {
    var id: String
    var title: String
    var description: String
    var price: String
}
```

### Step 3: Create a StoreManager

This class will handle fetching products, making purchases, and restoring purchases.

```swift
class StoreManager: NSObject, ObservableObject, SKProductsRequestDelegate, SKPaymentTransactionObserver {
    @Published var products: [Product] = []
    @Published var transactionState: SKPaymentTransactionState?

    override init() {
        super.init()
        SKPaymentQueue.default().add(self)
    }

    func fetchProducts() {
        let productIDs: Set<String> = ["com.example.app.product1", "com.example.app.subscription1"]
        let request = SKProductsRequest(productIdentifiers: productIDs)
        request.delegate = self
        request.start()
    }

    func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse) {
        self.products = response.products.map { Product(id: $0.productIdentifier, title: $0.localizedTitle, description: $0.localizedDescription, price: $0.price.stringValue) }
    }

    func buyProduct(_ product: SKProduct) {
        let payment = SKPayment(product: product)
        SKPaymentQueue.default().add(payment)
    }

    func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for transaction in transactions {
            switch transaction.transactionState {
            case .purchased, .restored:
                if transaction.payment.productIdentifier == "com.example.app.subscription1" {
                    // Validate receipt and unlock features
                }
                SKPaymentQueue.default().finishTransaction(transaction)
            case .failed:
                if let error = transaction.error as? SKError {
                    print("Transaction Failed: \(error.localizedDescription)")
                }
                SKPaymentQueue.default().finishTransaction(transaction)
            default:
                break
            }
        }
    }
    
    func restorePurchases() {
        SKPaymentQueue.default().restoreCompletedTransactions()
    }
    
    deinit {
        SKPaymentQueue.default().remove(self)
    }
}
```

### Step 4: SwiftUI View for Displaying and Purchasing Products

```swift
struct ContentView: View {
    @ObservedObject var storeManager = StoreManager()
    
    var body: some View {
        List(storeManager.products) { product in
            VStack(alignment: .leading) {
                Text(product.title).font(.headline)
                Text(product.description).font(.subheadline)
                Text("Price: \(product.price)")
                Button("Buy") {
                    if let skProduct = SKProduct() {
                        storeManager.buyProduct(skProduct)
                    }
                }
            }
        }.onAppear {
            storeManager.fetchProducts()
        }
    }
}
```


