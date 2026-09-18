---
type: Fact
title: # Adding Tool Type in Aspire

source: abacus
session_id: 6472d2511
resource: aba
description: # Adding Tool Type in Aspire

source: abacus
session_id: 6472d2511
resource: abacus://conversation/6472d2511

# Conversation

- **Session ID:** `6472d2511`
- **Source:** abacus.ai
- **Project:** AI Va
resource: agentmemory://memory/mem_mti8s4yy_f35b93e1bb80
tags: ["okf", "okf-abacus", "abacus", "abacus://conversation/6472d2511"]
timestamp: 2026-09-01T05:43:58.594Z
source: agentmemory
strength: 7
---
# Content

# Adding Tool Type in Aspire

source: abacus
session_id: 6472d2511
resource: abacus://conversation/6472d2511

# Conversation

- **Session ID:** `6472d2511`
- **Source:** abacus.ai
- **Project:** AI Vault
- **Deployment:** AbacusAI
- **Started:** 2026-02-11T16:57:58+00:00
- **Messages:** 2

---

### 👤 User

How can I add a new tool type for laser engraving in Vectric Aspire?

---

### 🤖 Assistant

To add a new tool type for laser engraving in Vectric Aspire, you need to access the **Tool Database**. While the software has predefined categories like the V-Bit shown in your first image, laser tools are handled slightly differently depending on your version of Aspire.

#### Accessing the Tool Database
You can open the Tool Database by clicking the **Select...** button in the Toolpaths pane (as seen in your second image) or by going to the **Toolpaths** menu at the top and selecting **Tool Database**.

#### Adding the Laser Tool
Once the Tool Database window is open, follow these steps:

*   **Create a New Tool**: Click the **Add Tool** button (usually a plus icon or a "New" button at the bottom left of the tool list).
*   **Select Tool Type**: In the **Tool Type** dropdown menu (which currently says "V-Bit" in your screenshot), look for **Laser Cutter**. If you are using an older version of Aspire that does not have a specific "Laser" type, many users create a "Category" named Laser and use an **End

Mill** with a very small diameter (e.g., 0.005 inches) to represent the laser beam width (kerf).
*   **Set Geometry**: Enter the **Diameter** of your laser beam. This is typically very small, often between 0.002" and 0.01".
*   **Cutting Parameters**: Set your **Stepover**. For engraving or "hatching" fills, a stepover of 10% to 20% is common to ensure the lines overlap enough for a solid burn.
*   **Feeds and Speeds**: This is the most critical part for a laser.
    *   **Spindle Speed**: In many laser post-processors, this value controls the **Laser Power** (often 0-100 or 0-255).
    *   **Feed Rate**: This determines how dark the burn is. Slower speeds result in deeper/darker burns.
*   **Save the Tool**: Give it a descriptive name like "Laser Engraver - 0.005 Kerf" and click **Apply** or **OK**.

#### Using the Laser Toolpath
Note that simply adding the tool is only half the process. To actually generate laser code, you should use the **Laser Cut-and-Fill** toolpath strategy if your version of Aspire

supports it (found in the Toolpaths tab). If you are using a standard **2D Profile Toolpath** (like in your second image), ensure your **Post Processor** is specifically designed for a laser, as it needs to convert "Spindle On/Off" commands into "Laser On/Off" commands.

---
