---
type: Fact
title: # Creating Etsy Listings Programmatically

source: abacus
session_id: e10bd4167

description: # Creating Etsy Listings Programmatically

source: abacus
session_id: e10bd4167
resource: abacus://conversation/e10bd4167

# Conversation

- **Session ID:** `e10bd4167`
- **Source:** abacus.ai
- **Pro
resource: agentmemory://memory/mem_mti8t94t_97c84a1231eb
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/e10bd4167"]
timestamp: 2026-09-01T05:44:50.702Z
source: agentmemory
strength: 7
---
# Content

# Creating Etsy Listings Programmatically

source: abacus
session_id: e10bd4167
resource: abacus://conversation/e10bd4167

# Conversation

- **Session ID:** `e10bd4167`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-03-19T14:12:56+00:00
- **Messages:** 6

---

### 👤 User

Is there a way to programmatically create an Etsy listing?

---

### 🤖 Assistant

Yes! Etsy provides an official API that allows you to programmatically create listings. Here's a quick overview:

### Etsy Open API v3

**Getting Started:**
1. Create an Etsy developer account at [developers.etsy.com](https://developers.etsy.com)
2. Register your app to get an **API key**
3. Implement OAuth 2.0 for user authentication

**Key Endpoint:**
```
POST https://openapi.etsy.com/v3/application/shops/{shop_id}/listings
```

**Required fields:**
- `quantity` – number of items available
- `title` – listing title
- `description` – listing description
- `price` – item price
- `who_made` – e.g., `"i_did"`, `"someone_else"`, `"collective"`
- `when_made` – e.g., `"made_to_order"`, `"2020_2024"`
- `taxonomy_id` – category ID for the listing

**Example (Python):**

```python
import requests

url = "https://openapi.etsy.com/v3/application/shops/{shop_id}/listings"
headers = {
    "x-api-key": "YOUR_API_KEY",
    "Authorization": "Bearer YOUR_OAUTH_TOKEN",
    "Content-Type": "application/json"
}
payload = {

"quantity": 10,
    "title": "Handmade Ceramic Mug",
    "description": "A beautiful handmade ceramic mug.",
    "price": 25.00,
    "who_made": "i_did",
    "when_made": "made_to_order",
    "taxonomy_id": 1
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())
```

**Key Notes:**
- You need **OAuth 2.0** with the `listings_w` scope to create listings
- New listings are created as **drafts** by default — you need to set `state` to `"active"` or activate them separately
- To add images, use a separate endpoint: `POST /listings/{listing_id}/images`

**Docs:** [Etsy API v3 Reference](https://developers.etsy.com/documentation/reference)

Would you like help with the OAuth flow or any other part of the integration?

---

### 👤 User

What are some Etsy applications available for the Mac OS?

---

### 🤖 Assistant

### Etsy apps on macOS

If you mean **official Etsy apps for Mac**, the web results suggest:

- **There is not a native Etsy consumer Mac app**. An Apple Community answer states that on Mac, Etsy is accessed through a web browser like Safari rather than a Mac app: [Apple Community](https://discussions.apple.com/thread/254704793).
- Etsy’s own app download page highlights only **iPhone and Android** apps, not a macOS app: [Etsy Mobile](https://www.etsy.com/mobile).
- Etsy community discussion also indicates **there isn’t a desktop app** for sellers: [Etsy Community](https://community.etsy.com/t5/Technical-Issues/New-Seller-App/td-p/142216955).

### So what can you use on a Mac?

On macOS, people generally use:

- **Etsy in a browser** via [Etsy.com](https://www.etsy.com)
- **Seller tools for creating products/listing assets**, such as:
  - **Swift Publisher for Mac** for designing printables and graphics to sell on Etsy: [Swift Publisher

article](https://www.swiftpublisher.com/useful-articles/make-money-on-etsy-with-swift-publisher-for-mac)

### Practical answer

If your goal is to **shop or manage an Etsy store on a Mac**, the main option is:
- use Etsy through **Safari, Chrome, or another browser**

If you want, I can also give you:
1. a list of **best Mac apps for Etsy sellers** (design, inventory, photos, bookkeeping), or  
2. a list of **official Etsy seller tools vs third-party tools**.

---

### 👤 User

I have an inventory of many images and designs that can be printed on my UV printer or carved with a CNC router or built with a 3D printer. I need to have an application that can go through these images and files and create listings for them. This would be a good use case for an Etsy application.

---

### 🤖 Assistant

Please click the below button to continue the conversation in DeepAgent

[DEEPAGENT session
