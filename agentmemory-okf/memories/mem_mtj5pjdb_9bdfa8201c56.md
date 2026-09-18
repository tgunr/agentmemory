---
type: Fact
title: # Fix codesign error

source: chatgpt
session_id: 6898bdeb-4e7c-8324-a69a-4660a1
description: # Fix codesign error

source: chatgpt
session_id: 6898bdeb-4e7c-8324-a69a-4660a11999e2
resource: chatgpt://conversation/6898bdeb-4e7c-8324-a69a-4660a11999e2

# Conversation

- **Session ID:** `6898bde
resource: agentmemory://memory/mem_mtj5pjdb_9bdfa8201c56
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/6898bdeb-4e7c-8324-a69a-4660a11999e2"]
timestamp: 2026-09-01T21:05:44.667Z
source: agentmemory
strength: 7
---
# Content

# Fix codesign error

source: chatgpt
session_id: 6898bdeb-4e7c-8324-a69a-4660a11999e2
resource: chatgpt://conversation/6898bdeb-4e7c-8324-a69a-4660a11999e2

# Conversation

- **Session ID:** `6898bdeb-4e7c-8324-a69a-4660a11999e2`
- **Source:** chatgpt (OpenAI)
- **Started:** 2025-08-10T15:42:36.897851+00:00
- **Messages:** 20

---

### 👤 User

40937 INFO: Build complete! The results are available in: /Volumes/Work/unsub-mail/mac/dist
codesign --force --options runtime --entitlements "/Volumes/Work/unsub-mail/mac//entitlements.plist" --sign "Developer ID Application: Dave Carlton (BG856GB4D8)" --deep dist/UnsubMail.app
Developer ID Application: Dave Carlton (BG856GB4D8): no identity found

---

### 🤖 Assistant

That error means codesign can’t find a matching **Developer ID Application** certificate (with private key) in your login keychain — or the display name doesn’t match what you’ve put in `IDENTITY`.

Quick checklist to fix:

1) Verify you actually have a Developer ID cert installed (and not just “Apple Development”):
```bash
security find-identity -v -p codesigning login.keychain-db
```
You should see a line like:
```
1) <SHA1HASH> "Developer ID Application: Dave Carlton (BG856GB4D8)"
```
- If you don’t: download the **Developer ID Application** cert for your team from Apple Developer → Certificates, create/sign a CSR in Keychain Access, then install the resulting cert (it must show a **private key** attached). Also install Apple’s “Developer ID Certification Authority” intermediate if Keychain prompts.

2) If you do see it but the **string is slightly different** from your Makefile (even an extra space or different first name), either:
- Update `IDENTITY?=` in the Makefile to match **exactly**, or
- Use the SHA-1 hash instead of the display name:
```bash
gmake -C mac sign IDENTITY="<SHA1HASH>"
```

3) Make sure your keychain is unlocked and allowed for codesign:
```bash
# (only needed if your keychain locks)
security unlock-keychain -p "<your-login-password>" ~/Library/Keychains/login.keychain-db
security set-key-partition-list -S apple-tool:,apple:,codesign: -s \
  -k "<your-login-password>" ~/Library/Keychains/login.keychain-db
```

4) Confirm Xcode CLTs are installed and selected:
```bash
xcode-select -p
xcodebuild -version
```

5) Try the sign step again:
```bash
gmake -C mac sign
```

If you want, I can add a `list-identities` target and a preflight check that fails with a clear message when no “Developer ID Application” identity for `$(TEAM_ID)` is present.

---

### 👤 User

davec@Mini mac % cd "/Volumes/Work/unsub-mail/mac" && make -f Makefile staple
xcrun stapler staple dist/UnsubMail.app
Processing: /Volumes/Work/unsub-mail/mac/dist/UnsubMail.app
CloudKit query for UnsubMail.app (2/9617e6e9b88689e749050c44775546da2d6b1504) failed due to "Record not found".
Could not find base64 encoded ticket in response for 2/9617e6e9b88689e749050c44775546da2d6b1504
The staple and validate action failed! Error 65.
make: *** [Makefile:127: staple] Error 65

---

### 🤖 Assistant

That “Record not found” from `stapler` means there’s **no notarization ticket** Apple can match to the exact bits in `dist/UnsubMail.app`. Usual causes:

- You didn’t submit this *exact* app build for notarization (you rebuilt after submitting, or you’re stapling a different `.app` than the one you uploaded).
- The notary submission didn’t actually finish with **Accepted**.
- You’re stapling before submission completed, or you submitted a **zip** of something else (wrong path).

Quickest way to diagnose right now:

1) Validate the app as-is (will also show a clearer message):
```bash
xcrun stapler validate dist/UnsubMail.app
```

2) Check your recent submissions:
```bash
xcrun notarytool history --keychain-profile unsubmail-profile
```

3) For the most recent ID (looks like a UUID), get details + log:
```bash
SUBMISSION_ID="<paste-id>"
xcrun notarytool info $SUBMISSION_ID --keychain-profile unsubmail-profile
xcrun notarytool log  $SUBMISSION_ID --keychain-profile unsubmail-profile
```
- Status must be **Accepted**. If it’s *Invalid*, the log explains what to fix (entitlements, hardened runtime, missing Team 
