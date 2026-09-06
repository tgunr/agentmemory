---
type: Fact
title: # Troubleshooting Non-Consumable Purchases Across Mac and iPad

source: claude
s
description: # Troubleshooting Non-Consumable Purchases Across Mac and iPad

source: claude
session_id: cd809460-7f1d-4f99-aac2-f9e9c201a542
resource: claude://conversation/cd809460-7f1d-4f99-aac2-f9e9c201a542

# 
resource: agentmemory://memory/mem_mtj6dcxc_9964ae6e07bf
tags: ["okf", "okf-claude", "claude", "claude://conversation/cd809460-7f1d-4f99-aac2-f9e9c201a542"]
timestamp: 2026-09-01T21:24:15.962Z
source: agentmemory
strength: 7
---
# Content

# Troubleshooting Non-Consumable Purchases Across Mac and iPad

source: claude
session_id: cd809460-7f1d-4f99-aac2-f9e9c201a542
resource: claude://conversation/cd809460-7f1d-4f99-aac2-f9e9c201a542

# Conversation

- **Session ID:** `cd809460-7f1d-4f99-aac2-f9e9c201a542`
- **Source:** claude
- **Started:** 2024-06-25T17:55:24Z
- **Messages:** 8

---

### 👤 User — 2024-06-25T17:55:41Z

Please check these files for validity. I am encountering a problem where a non-consumable purchase on the Macintosh is valid, but when I load the application on an iOS iPad device, it's not detecting the non-consumable purchase was made.

_Attachments: ProductsStore.swift, PurchaseView.swift_

_Attachments: ProductsStore.swift, PurchaseView.swift_

---

### 🤖 Assistant — 2024-06-25T17:55:41Z

I've reviewed the files "ProductsStore.swift" and "PurchaseView.swift" for validity and potential issues related to non-consumable purchases not being detected on an iOS iPad device. Here are my observations and potential areas to investigate:

1. Verification and handling of purchases:
   The `ProductsStore` class seems to handle purchase verification and status updates. However, there might be an issue with how non-consumable purchases are being verified across devices.

2. Version checking:
   In the `handleTransaction` method of `ProductsStore`, there's a version check for non-consumable products:

   ```swift
   if product.item?.type == .nonConsumable {
       let id = product.item?.id
       let idComponents = id?.split(separator: ".")
       if idComponents!.count >= 2 {
           let lastTwoComponents = idComponents?.suffix(2)
           let combinedLastTwo = lastTwoComponents?.joined(separator: ".")
           let cv1 = combinedLastTwo?.split(separator: ".").first
           let cv2 = "v" + currentVersion.split(separator: ".").first!
           if cv1! == cv2 {
               product.bought = true
           } else {
               product.bought = false
           }
       }
   }
   ```

   This code checks if the product version matches the current app version. If they don't match, it sets `product.bought = false`. This could potentially cause issues if the app versions differ between Mac and iPad.

3. Receipt validation:
   The code doesn't show explicit receipt validation, which is crucial for verifying purchases across devices. You should implement server-side receipt validation to ensure consistent purchase status across all devices.

4. StoreKit 2 usage:
   The code uses both StoreKit 1 (SKPaymentQueue) and StoreKit 2 (Transaction) APIs. Mixing these can lead to inconsistencies. Consider fully migrating to StoreKit 2 for better cross-device support and simpler API usage.

5. Keychain storage:
   There's no visible implementation of storing purchase information in the device's keychain. Storing a flag in the keychain for non-consumable purchases can help maintain purchase status across app reinstalls and devices.

6. Transaction handling:
   The `TransactionObserver` class handles transactions, but it's not clear if it's properly finishing transactions, especially for non-consumable products. Ensure that transactions are being properly finished on both platforms.

7. iCloud sync:
   If you're using iCloud to sync purchase information, make sure it's implemented correctly and consistently across both platforms.

To resolve the issue:

1. Implement proper receipt validation, preferably server-side.
2. Use StoreKit 2's `Transaction.currentEntitlements` to check for non-consumable purchases consistently across devices.
3. Store a flag in the keychain for non-consumable purchases.
4. Ensure you're finishing transactions properly on both platforms.
5. Review and possibly remove the version checking logic for non-consumable products if it's causing issues.
6. Consider fully migrating to StoreKit 2 for more consistent behavior across platforms.
7. Implement proper error handling and logging to better diagnose issues on different platforms.

By addressing these points, you should be able to achieve more consistent behavior for non-consumable purchases across your Mac and iPad versions of the app.

---

### 👤 User — 2024-06-25T17:58:46Z

As for nu
