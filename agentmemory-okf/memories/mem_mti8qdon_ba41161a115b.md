---
type: Fact
title: # Sheep Size in Metric Aspire

source: abacus
session_id: 10d425260e
resource: a
description: # Sheep Size in Metric Aspire

source: abacus
session_id: 10d425260e
resource: abacus://conversation/10d425260e

# Conversation

- **Session ID:** `10d425260e`
- **Source:** abacus.ai
- **Project:** A
resource: agentmemory://memory/mem_mti8qdon_ba41161a115b
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/10d425260e"]
timestamp: 2026-09-01T05:42:36.655Z
source: agentmemory
strength: 7
---
# Content

# Sheep Size in Metric Aspire

source: abacus
session_id: 10d425260e
resource: abacus://conversation/10d425260e

# Conversation

- **Session ID:** `10d425260e`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-25T23:04:09+00:00
- **Messages:** 2

---

### 👤 User

In Vectric aspire can each sheet have its own size?

---

### 🤖 Assistant

In Vectric Aspire, individual sheets within a single project file cannot have different sizes. The job dimensions (width, height, and thickness) are global settings that apply to every sheet in that specific `.crv3d` file.

If you need to work with different material sizes, some common workflows include:

*   **Multiple Project Files:** Create separate Aspire files for each material size. This is the most straightforward way to manage different stock dimensions.
*   **Oversized Master Sheet:** Set the job size to your largest piece of material and use the "Sheets" feature to organize parts. You can then manually draw rectangles representing your smaller physical stock pieces on specific sheets to ensure your toolpaths stay within those boundaries.
*   **Nesting on Different Sheets:** While the sheet boundary remains the same, you can nest different groups of vectors onto different sheets. You would just need to be mindful that the software's visual "white space" represents the same maximum area for all of

them.

If you are looking to manage complex multi-material projects, you might find it helpful to use the **Sheet Manager** (usually found at the bottom of the 2D View or via the `Sheets` tab) to quickly switch between layouts, even if the outer boundary remains constant.

---
