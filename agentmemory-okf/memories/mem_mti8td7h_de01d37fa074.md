---
type: Fact
title: # Daily Electricity Cost Calculation

source: abacus
session_id: edef15934
resou
description: # Daily Electricity Cost Calculation

source: abacus
session_id: edef15934
resource: abacus://conversation/edef15934

# Conversation

- **Session ID:** `edef15934`
- **Source:** abacus.ai
- **Project:
resource: agentmemory://memory/mem_mti8td7h_de01d37fa074
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/edef15934"]
timestamp: 2026-09-01T05:44:55.992Z
source: agentmemory
strength: 7
---
# Content

# Daily Electricity Cost Calculation

source: abacus
session_id: edef15934
resource: abacus://conversation/edef15934

# Conversation

- **Session ID:** `edef15934`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-06-03T17:23:05+00:00
- **Messages:** 2

---

### 👤 User

If I pay $0.13 per kW and there is a 240 V circuit at 50 A, what would the charge be per day?

---

### 🤖 Assistant

To calculate the daily cost of running a 240V, 50A circuit at full capacity, we first determine the power consumption in kilowatts (kW) and then multiply it by the usage time and the electricity rate.

#### 1. Calculate Power (kW)
The power in watts is found by multiplying voltage by current ($$P = V \times I$$).
$$240\text{ V} \times 50\text{ A} = 12,000\text{ Watts}$$
Converting to kilowatts:
$$12,000\text{ Watts} / 1,000 = 12\text{ kW}$$

#### 2. Calculate Daily Energy Consumption (kWh)
To find the energy used in a 24 hours, we multiply the power by the number of hours.
$$12\text{ kW} \times 24\text{ hours} = 288\text{ kWh}$$

#### 3. Calculate Total Cost
Finally, multiply the daily energy use by your rate of $0.13 per kWh.
$$288\text{ kWh} \times \$0.13/\text{kWh} = \$37.44$$

The total charge would be **$37.44 per day**, assuming the circuit is drawing a continuous 50A load for the full 24 hours.

---
