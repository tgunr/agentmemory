---
type: Fact
title: # Plex Server Remote Access Setup

source: claude
session_id: 58323cd4-fc6a-419a
description: # Plex Server Remote Access Setup

source: claude
session_id: 58323cd4-fc6a-419a-9498-a90aa9edc8df
resource: claude://conversation/58323cd4-fc6a-419a-9498-a90aa9edc8df

# Conversation

- **Session ID:
resource: agentmemory://memory/mem_mti60anm_c8b17b82f3ce
tags: ["okf", "okf-claude", "claude", "claude://conversation/58323cd4-fc6a-419a-9498-a90aa9edc8df"]
timestamp: 2026-09-01T04:26:20.433Z
source: agentmemory
strength: 7
---
# Content

# Plex Server Remote Access Setup

source: claude
session_id: 58323cd4-fc6a-419a-9498-a90aa9edc8df
resource: claude://conversation/58323cd4-fc6a-419a-9498-a90aa9edc8df

# Conversation

- **Session ID:** `58323cd4-fc6a-419a-9498-a90aa9edc8df`
- **Source:** claude
- **Started:** 2025-06-23T00:07:20Z
- **Messages:** 26

---

### 👤 User — 2025-06-23T00:07:21Z

Help me configure the correct settings to enable remote access to my plex server. The images are from plex server plex.local, plex.polymicro.net, and plex.tv

_Attachments: CleanShot 20250622 at 18.58.392x.png, CleanShot 20250622 at 19.03.002x.png, CleanShot 20250622 at 19.05.512x.png_

---

### 🤖 Assistant — 2025-06-23T00:07:48Z

The user is showing me three images of their Plex server network configuration settings. Let me analyze what I can see in these images:

Image 1: Shows the main Plex network configuration page with:
- Enable server support for IPv6 is unchecked
- Secure connections set to "Preferred" 
- Custom certificate location: /etc/letsencrypt/live/plex.polymicro.net/fullchain.pem
- Custom certificate encryption key: /etc/letsencrypt/live/plex.polymicro.net/privkey.pem
- Custom certificate domain: plex.polymicro.net
- Preferred network interface: "Any"
- Strict TLS configuration is unchecked
- Enable local network discovery (GDM) is checked
- Remote streams allowed per user: "Unlimited"
- LAN Networks: 10.1.1.0/24, 10.1.2.1/24

Image 2: Shows additional network settings:
- Custom certificate settings (same as above)
- Preferred network interface: "Any"
- Strict TLS configuration is unchecked
- Enable local network discovery (GDM) is checked
- Remote streams allowed per user: "Unlimited"
- LAN Networks: 10.1.1.0/24, 10.1.2.1/24
- Terminate Sessions Paused for Longer Than: 0
- Treat WAN IP As LAN Bandwidth is checked
- Enable Relay is checked
- Custom server access URLs: https://plex.polymicro.net

Image 3: Shows similar settings with some slight variations:
- Same certificate configuration
- Custom certificate domain: plex.polymicro.net
- Preferred network interface: "Any"
- Strict TLS configuration is unchecked
- Enable local network discovery (GDM) is checked
- Remote streams allowed per user: "Unlimited"
- LAN Networks: 10.1.1.0/24, 10.1.2.1/24
 
I notice the remote access configuration includes session management and network optimization settings. The zero-duration session termination suggests they want immediate disconnection of paused streams. Enabling relay and treating WAN IP as LAN bandwidth indicates a focus on flexible, seamless remote streaming capabilities. The custom HTTPS URL with SSL certificates shows a professional approach to securing remote access.

To complete remote access, I'll verify critical network infrastructure: router port forwarding, external network accessibility, domain routing, SSL certificate validation, and Plex account authentication. These steps ensure a robust, secure remote streaming environment.Looking at your Plex server network configuration, I can see you have a good foundation with SSL certificates and a custom domain (plex.polymicro.net). Here's what you need to configure for proper remote access:

## Current Configuration Analysis
Your setup shows:
- Custom SSL certificates configured for `plex.polymicro.net`
- Custom server access URLs pointing to your domain
- LAN networks properly defined (10.1.1.0/24, 10.1.2.1/24)
- Relay enabled as backup

## Essential Steps for Remote Access

### 1. **Port Forwarding on Your Router**
You need to forward port **32400** (TCP) from your router to your Plex server's internal IP address. This is the most critical step that's often missed.

### 2. **Verify Server Registration**
- Go to **Settings > General** and ensure your server is signed in to your Plex account
- Check that "Manually specify public port" is set to 32400 if you're using the default port

### 3. **Network Interface Settings**
Your "Preferred network interface" is set to "Any" which is fine, but you could also:
- Specify the exact network interface if you have multiple NICs
- This can help with routing issues

### 4. **Recommended Setting Changes**

**Enable IPv6 Support** (optiona
