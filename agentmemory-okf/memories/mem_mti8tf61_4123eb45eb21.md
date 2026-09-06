---
type: Fact
title: # Plex Library Sharing Setup

source: abacus
session_id: f40c19e37
resource: aba
description: # Plex Library Sharing Setup

source: abacus
session_id: f40c19e37
resource: abacus://conversation/f40c19e37

# Conversation

- **Session ID:** `f40c19e37`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8tf61_4123eb45eb21
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/f40c19e37"]
timestamp: 2026-09-01T05:44:58.525Z
source: agentmemory
strength: 7
---
# Content

# Plex Library Sharing Setup

source: abacus
session_id: f40c19e37
resource: abacus://conversation/f40c19e37

# Conversation

- **Session ID:** `f40c19e37`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-06-07T17:00:27+00:00
- **Messages:** 30

---

### 👤 User

I have a Plex Media server running on my Debian server and I'm trying to give my cousin access we can see the account but he never gets to see my library, only the Plex services. I need step-by-step instructions for how to sign someone up so that they can see my library

---

### 🤖 Assistant

If your cousin can log into Plex but only sees Plex's free content (Movies & Shows, Live TV, Discover, etc.) and not your library, the issue is usually one of three things:

1. The invitation was not accepted correctly.
2. The library was not shared with the user.
3. The user is signed into a different Plex account than the one you invited.

### Step 1: Verify Your Cousin's Plex Account

Ask your cousin to:

1. Go to [Plex](https://app.plex.tv).
2. Click their profile icon in the upper-right.
3. Confirm the email address shown there.

Make sure this is the exact email address you shared your library with.

### Step 2: Share Your Library Correctly

On your Plex server account:

1. Open [Plex Web App](https://app.plex.tv).
2. Click the wrench/settings icon.
3. In the left sidebar, click "Manage Library Access" (or "Users & Sharing" depending on version).
4. Click "Grant Library Access."
5. Enter your cousin's Plex account email.
6. Click Continue.
7. Select the libraries you want to share:
   - Movies
   - TV

Shows
   - Music
   - Any other libraries
8. Click Grant Access.

### Step 3: Verify the Share Exists

After sending:

1. Go back to "Manage Library Access."
2. Your cousin should appear under the list of shared users.
3. Click their name.
4. Verify the desired libraries are checked.

### Step 4: Have Your Cousin Accept the Invitation

Your cousin should:

1. Log into [Plex](https://app.plex.tv).
2. Click the notifications bell.
3. Accept the library sharing invitation.

Alternatively:

1. Check email for a Plex invitation.
2. Open the invitation link.
3. Accept while logged into the correct Plex account.

### Step 5: Refresh Plex on Their Device

After accepting:

1. Log out of Plex on their device.
2. Log back in.
3. Look in the left sidebar under:
   - More >
   - Your server name

They should now see your shared libraries.

### Step 6: Verify Remote Access

If the library appears but content won't play:

1. On your Plex server:
   - Settings → Remote Access
2. Confirm it says:
   - "Fully accessible

outside your network"

If it says unavailable:

1. Click "Enable Remote Access."
2. Make sure TCP port 32400 is forwarded from your router to your Debian server.
3. Verify any firewall allows TCP 32400.

### Step 7: Check Library Sharing Restrictions

On your Plex server:

1. Settings → Manage Library Access.
2. Select your cousin.
3. Ensure:
   - Libraries are checked.
   - Restrictions are not hiding all content.
   - Labels aren't restricting access.

### Step 8: Confirm the Server Is Signed In

On the Debian server:

1. Open Plex Settings.
2. General.
3. Verify the server is claimed by your Plex account.

You should see your Plex username associated with the server.

### Most Common Fix

The most common cause is that the invitation was sent but the user never accepted it, or accepted it on a different Plex account. Remove the share completely, re-send it to the correct email address, have them accept it immediately, then sign out and back into Plex.

If you tell me:
- Your Plex Media Server version
-

Whether the user appears under "Manage Library Access"
- Whether they accepted the invitation
- Whether Remote Access shows "Fully accessible"

I can help narrow down exactly where the process is failing.

---

### 👤 User

In Step 3: Verify the Share Exists, on the Manage Library Access, he does not appear in the list of shared users. Only in the section that says Library Request Sent. He is not in the Accounts with Library Access

---

#
