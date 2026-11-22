---
type: Fact
title: # Set up Carlton Crafted DBA in Texas

source: hermes
session_id: local-c927ce85
description: # Set up Carlton Crafted DBA in Texas

source: hermes
session_id: local-c927ce85e6173b0781f75eb5f7fd815b1ba2f862766f1e085582602b70aa817a
resource: hermes://session/local-c927ce85e6173b0781f75eb5f7fd81
resource: agentmemory://memory/mem_mwq72s8u_7ef26bc278fc
tags: ["okf", "okf-hermes", "hermes", "/Users/davec/Documents/Hermes"]
timestamp: 2026-11-21T09:17:32.327Z
source: agentmemory
strength: 7
---
# Content

# Set up Carlton Crafted DBA in Texas

source: hermes
session_id: local-c927ce85e6173b0781f75eb5f7fd815b1ba2f862766f1e085582602b70aa817a
resource: hermes://session/local-c927ce85e6173b0781f75eb5f7fd815b1ba2f862766f1e085582602b70aa817a

# Conversation

- **Session ID:** `local-c927ce85e6173b0781f75eb5f7fd815b1ba2f862766f1e085582602b70aa817a`
- **Source:** local
- **Model:** kilo-auto/efficient
- **Started:** 2026-11-20T13:26:42Z
- **Ended:** 2026-11-20T19:03:43Z
- **Messages:** 25
- **CWD:** `/Users/davec/Documents/Hermes`
- **Tokens:** 83238 in / 17957 out

---

### 👤 User — 2026-11-20T13:26:43Z

My son has a small business called Carlton Tech Consulting LLC, what is needed in Texas for him to also do business as Carlton Crafted such that products made by Carlton Crafted are income to his business

### 🤖 Assistant — 2026-11-20T13:26:53Z

<details><summary>Reasoning</summary>

The user asks a legal/business question about Texas DBA (assumed name) filing for an LLC. There's a skill "diy-legal-docs" and "va-disability-benefits" in legal category. Maybe "diy-legal-docs" is relevant. Let me check if there's a relevant skill. The task: Texas assumed name certificate (DBA) for an LLC — filed with Texas Secretary of State (Form 503) for the LLC itself and also county-level assumed name certificate for sole proprietorships/other entities doing business under an assumed name (Form 502 for unincorporated). Actually Texas:

- An LLC that wants to do business under an assumed name must file Form 503 (Assumed Name Certificate) with the Texas Secretary of State, $25 fee, valid 10 years.
- If LLC conducts business in a county other than where registered, may also need county assumed name certificates? Let me think. Texas Business Organizations Code Chapter 71 covers assumed names for unincorporated entities and LLCs? Actually:
  - For corporations, LLCs, LPs, etc. (entities with a certificate of formation filed with SOS): file assumed name certificate with SOS under Chapter 71 subchapter B? Hmm.
  - Tex. Bus. & Org. Code § 71.101 — "a person required to file under this chapter" ... For corporations/LLCs, the assumed name certificate is filed with the Secretary of State. For unincorporated entities (sole proprietorships, general partnerships), it's filed with the county clerk.
  - Also, if the entity registers in multiple counties... For an LLC, the SOS filing is sufficient statewide? Practically, LLC files with SOS, and some counties also request a copy. Under BOC § 71.103? Let me verify.

Actually the key: Texas Business Organizations Code Chapter 71 assumed names. Tex. Bus. & Org. Code § 71.001-.203. Filing fees: SOS $25, county $10-ish. For an LLC, "an entity that is required to file with the secretary of state" files an assumed name certificate with the SOS. Also, an assumed name that is used in a county other than the one where the certificate was filed may need to be filed in each county? Historically, corporations filed with SOS only. The county requirement applies to unincorporated entities.

Also, the user's real question: "what is needed in Texas for him to also do business as Carlton Crafted such that products made by Carlton Crafted are income to his business" — so they want to ensure that revenue from the DBA flows to the LLC, not personal income, and that liability/tax structure holds.

Answer should cover:
1. File Assumed Name Certificate (Form 503) with Texas SOS, $25, name "Carlton Crafted" — must be same entity (Carlton Tech Consulting LLC) as owner. Not a new entity.
2. Name search / availability — assumed name must not be same as or deceptively similar to existing registered name; SOS checks? Actually SOS does check for assumed names? The SOS does check against existing entity names when filing? For assumed names, SOS may reject if identical to an existing entity name? Hmm. Assumed name doesn't grant exclusive rights; trademark issues separate. Do a search at SOS SOSDirect and consider trademark.
3. County filing if doing business as sole prop? No — LLC files with SOS. But if he wants a county-level record, optional.
4. Business license/permits: Texas has no general business license. If selling physical products: Texas Comptroller sales tax permit (Sales
