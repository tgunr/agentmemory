---
type: Fact
title: # RDP Connection Issues

source: abacus
session_id: 6cb6d45ca
resource: abacus:/
description: # RDP Connection Issues

source: abacus
session_id: 6cb6d45ca
resource: abacus://conversation/6cb6d45ca

# Conversation

- **Session ID:** `6cb6d45ca`
- **Source:** abacus.ai
- **Project:** AI Vault
-
resource: agentmemory://memory/mem_mti8s80h_bfb792d83fd5
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/6cb6d45ca"]
timestamp: 2026-09-01T05:44:02.598Z
source: agentmemory
strength: 7
---
# Content

# RDP Connection Issues

source: abacus
session_id: 6cb6d45ca
resource: abacus://conversation/6cb6d45ca

# Conversation

- **Session ID:** `6cb6d45ca`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-19T16:00:28+00:00
- **Messages:** 8

---

### 👤 User

mac cannot connect to this windows 11 via RDP,, need to reinstall whatever is necessary for RDP

---

### 🤖 Assistant

It sounds like your Windows 11 machine may be missing or misconfigured RDP components. Here’s a clean, reliable checklist to **re‑enable or reinstall everything required for Remote Desktop** so your Mac can connect again.

### 1. Make sure Remote Desktop is enabled on Windows 11
On the Windows machine:

1. Press `Win + I` (Settings).
2. Go to **System → Remote Desktop**.
3. Turn **Remote Desktop** ON.
4. Click **Advanced Settings** and make sure:
   - "Require devices to use Network Level Authentication (NLA)" is **ON**.
   - Note the PC name — your Mac will need it.

### 2. Reinstall/repair RDP services using PowerShell
Sometimes the RDP feature gets corrupted. You can repair it by re-enabling the optional features:

1. Open **PowerShell as Administrator**.
2. Run:
   ```powershell
   dism /online /add-capability /capabilityname:Microsoft.Windows.RemoteDesktop.Client~~~~0.0.1.0
   dism /online /add-capability /capabilityname:Microsoft.Windows.RemoteDesktop.Server~~~~0.0.1.0
   ```
3. Then restart:
   ``

`powershell
   shutdown /r /t 0
   ```

### 3. Restart RDP services manually
Just in case the service is stuck:

1. Open **Services** (`services.msc`).
2. Find: **Remote Desktop Services**
3. Right‑click → **Restart**

Also ensure startup type is **Automatic**.

### 4. Allow RDP through Windows Firewall
1. Open **Windows Security** → Firewall.
2. Click **Allow an app through firewall**.
3. Enable **Remote Desktop** on **Private** and **Public** networks.

Or run this in PowerShell:
```powershell
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
```

### 5. Make sure your Mac settings are correct
Use Microsoft’s official **Microsoft Remote Desktop** app from the Mac App Store.

Connect using:
- PC Name: your Windows 11 computer’s LAN IP (`192.168.x.x`) or hostname.

### 6. Common blockers
Check the following:

- Windows machine must NOT be asleep.
- You must be using a **local account password** (RDP does NOT accept blank passwords).
- Make sure both machines are on the same network.
- VPNs, antivirus, or

network isolation can block RDP.

---

If you'd like, tell me **the exact error message** your Mac shows, and I’ll pinpoint the problem further.

---

### 👤 User

error 07

---

### 🤖 Assistant

Got you — **RDP “Error Code 0x207” (or “07”)** on macOS is a *very* common Microsoft Remote Desktop for Mac error.  
It usually means:

**Your Mac can see the Windows PC, but RDP is being blocked or disabled on Windows.**

Here’s the exact fix sequence that works 99% of the time:

---

### ✅ **Fix 1 — Re‑enable RDP on Windows 11**
On the Windows PC:

1. Press **Win + R**, type: `SystemPropertiesRemote`, press Enter.
2. Under "Remote Desktop":
   - Select: **Allow remote connections to this computer**
   - Ensure **Allow connections only with Network Level Authentication (NLA)** is checked.

Click **Apply → OK**.

---

### ✅ **Fix 2 — Restart RDP services**
1. Press **Win + R**, type `services.msc`
2. Find:
   - Remote Desktop Services  
   - Remote Desktop Services UserMode Port Redirector  
3. For each:
   - Right‑click → **Restart**
   - Set **Startup Type = Automatic**

---

### ✅ **Fix 3 — Reinstall / repair RDP components**
Run these in **PowerShell as Administrator**:

```powershell
dism /online

/add-capability /capabilityname:Microsoft.Windows.RemoteDesktop.Server~~~~0.0.1.0
dism /online /add-capability /capabilityname:Microsoft.Windows.RemoteDesktop.Client~~~~0.0.1.0
```

Then reboot:

```powershell
shutdown /r /t 0
```

---

### ✅ **Fix 4 — Allow RDP through firewall**
Run in PowerShell:

```powershell
Enable-NetFirewallRule -DisplayGroup "Remote Desktop"
```

Or manually:  
Windows Security → Firewall → Allo
