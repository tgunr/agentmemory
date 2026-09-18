---
type: Fact
title: # URL Scam Evaluation

source: abacus
session_id: 49be479df
resource: abacus://c
description: # URL Scam Evaluation

source: abacus
session_id: 49be479df
resource: abacus://conversation/49be479df

# Conversation

- **Session ID:** `49be479df`
- **Source:** abacus.ai
- **Project:** AI Vault
- *
resource: agentmemory://memory/mem_mti8rtqz_0acaea45747a
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/49be479df"]
timestamp: 2026-09-01T05:43:44.116Z
source: agentmemory
strength: 7
---
# Content

# URL Scam Evaluation

source: abacus
session_id: 49be479df
resource: abacus://conversation/49be479df

# Conversation

- **Session ID:** `49be479df`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-01-30T13:52:32+00:00
- **Messages:** 6

---

### 👤 User

Is this URL a scam site? https://tahuo.seddwsfe.com:8443/

---

### 🤖 Assistant

### What I can tell from the URL alone

I can’t confirm “scam” with certainty from public reputation data right now (my attempt to load the site failed, and web results don’t show any clear reports about this specific hostname). But **this URL is definitely high-risk / unusual**, and you should treat it as suspicious unless you *know exactly* why you’re being sent there.

Red flags:

- **Random-looking subdomain + domain**: `tahuo.seddwsfe.com` doesn’t resemble a known brand/organization.
- **Non‑standard HTTPS port `:8443`**: Port `8443` is commonly used for **admin panels** or internal services rather than public user sites. (It’s widely used as an alternate HTTPS port.) See e.g. general discussion of `8443` as “HTTPS Alt” in port references like [ScaniteX’s overview](https://scanitex.com/en/resources/ports/tcp/8443) and how some admin tools deliberately run on `8443` (example context in [Cloudflare Community](https://community.cloudflare.com/t/changing-a-https-url-from-port-8443-to-443/420258)).
- **It

wasn’t reachable via my fetch** (could be down, geo/IP-blocked, or intentionally restricted). That’s not proof of a scam, but it’s consistent with sketchy infrastructure too.

### What you should do (safe checks)

1. **Do not enter any credentials or payment info** on that page.
2. If you already opened it, **don’t download anything** it prompts you to install.
3. Check *why* you got the link:
   - Was it in an email/SMS/DM? If so, what did it claim (delivery issue, account locked, invoice, etc.)?
4. If you must investigate, do it safely:
   - Open it in a **private window** with **no saved logins**, ideally on a secondary device.
   - Click the padlock → inspect the **TLS certificate**: does it clearly identify a real company you trust, and does the domain match exactly?
5. If you entered a password there:
   - **Change that password immediately** on the real site (by navigating there yourself, not via the link).
   - If you reused the password elsewhere, change it there too.
   - Enable **2FA**.

### Quick

question (to give you a stronger yes/no)
Where did you get this link (email/text/app), and what was it asking you to do (login, “verify”, pay, download)? If you paste the message text (remove personal info), I can assess the scam likelihood much more accurately.

---

### 👤 User

came in an email

---

### 🤖 Assistant

### Likely phishing / malicious link (given it arrived via email)

A random-looking subdomain on a non-standard HTTPS port (`:8443`) is a common pattern for credential-harvest pages or malware delivery—especially when it’s not associated with a known brand and isn’t easily verifiable.

### What to do right now (safe steps)

1. **Do not click it again** (and don’t enter credentials / download anything).
2. **If you already clicked:**
   - **Do not type anything** into the site.
   - Close the tab, and run a quick malware scan (Windows Defender / your endpoint tool).
   - If you entered a password, **change it immediately** (and anywhere you reused it) and enable **MFA**.

3. **Check the email for red flags**
   - Urgency (“account will be closed”), threats, payment/parcel/HR docs, “view document” prompts.
   - Sender display name mismatching the actual address.
   - Reply-to address differs from From.
   - Poor grammar, odd formatting, unexpected attachment.

4. **Verify the link without visiting it**
   - On

desktop email clients, **hover** to see the real URL.
   - If you must inspect further, use a safe analysis service in a browser (don’t run downloads):
     - VirusTotal URL check
     - urlscan.io
   (These can still leak the URL to third parties, but are far safer than visiting directly.)

### If you paste details, I can ass
