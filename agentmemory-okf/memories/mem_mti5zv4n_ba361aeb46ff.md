---
type: Fact
title: # Relay-Controlled Power Distribution System

source: claude
session_id: 221d2fa
description: # Relay-Controlled Power Distribution System

source: claude
session_id: 221d2fa2-8f8a-42a8-9655-0d3f35b1dd96
resource: claude://conversation/221d2fa2-8f8a-42a8-9655-0d3f35b1dd96

# Conversation

- **
resource: agentmemory://memory/mem_mti5zv4n_ba361aeb46ff
tags: ["okf", "okf-claude", "claude", "claude://conversation/221d2fa2-8f8a-42a8-9655-0d3f35b1dd96"]
timestamp: 2026-09-01T04:26:00.329Z
source: agentmemory
strength: 7
---
# Content

# Relay-Controlled Power Distribution System

source: claude
session_id: 221d2fa2-8f8a-42a8-9655-0d3f35b1dd96
resource: claude://conversation/221d2fa2-8f8a-42a8-9655-0d3f35b1dd96

# Conversation

- **Session ID:** `221d2fa2-8f8a-42a8-9655-0d3f35b1dd96`
- **Source:** claude
- **Started:** 2025-02-13T20:35:59Z
- **Messages:** 26

---

### 👤 User — 2025-02-13T20:36:00Z

I need to create a electrical connection box using this schematic as a model.
The input source is 120 volts AC into a NEMA 5-15 plug. Each of the diodes represents a NEMA 5-15 outlet receptacle. The receptacles and switches in the lower part are external to the connection box and shown for illustrative, connective purposes only.  So, I need to connect the wires to terminal strips and distribution terminals using barrier strips, etc., in order to distribute the voltage out to each relay and into each receptacle controlled by that relay.

_Attachments: CleanShot 20250213 at 14.32.52.png_

---

### 🤖 Assistant — 2025-02-13T20:36:10Z

This appears to be a relay-controlled power distribution system. Let me help break down what you'll need to build this safely:

Key Components Needed:
1. Project box/enclosure (metal or high-temperature plastic) rated for AC applications
2. 1x NEMA 5-15 input plug with appropriate gauge wire
3. 4x NEMA 5-15 receptacles
4. 4x Relays (make sure they're rated for 120V AC and appropriate current)
5. Terminal strips/barrier strips rated for AC voltage
6. 14 AWG wire (minimum) for all AC connections
7. Grounding bus bar
8. Strain relief connectors for all cable entries/exits
9. Wire nuts and crimp connectors rated for AC

Important Safety Considerations:
1. All connections must be properly insulated
2. The enclosure must be properly grounded
3. All components must be UL listed or similarly certified
4. Include proper ventilation if needed based on heat load
5. All terminal strips must have proper spacing for 120V AC
6. Include fusing or circuit protection for each circuit
7. All wire routing must prevent physical contact between circuits

Before proceeding with construction:
1. Verify the current requirements for each outlet
2. Ensure the total load won't exceed circuit capacity
3. Check local electrical codes for any specific requirements
4. Consider having the final assembly inspected by a licensed electrician

Would you like me to provide more specific details about any of these aspects, particularly about the terminal strip layout or grounding configuration?

---

### 👤 User — 2025-02-13T20:37:59Z

The wiring is 12-gauge copper.
 And the enclosure box is 3D printed PET-G.
Again, the relays and the switches in the lower part are not needed in the connection box. They're just there to illustrate all of the connection.
All the other conditions are as you stated.

---

### 🤖 Assistant — 2025-02-13T20:38:08Z

I need to express serious safety concerns about using a 3D printed PET-G enclosure for a 120V AC power distribution system. While PETG has good temperature resistance, it's not rated or tested for electrical enclosure use, particularly for line voltage applications. Here are the specific issues:

1. Fire Safety:
- PETG, even high-temp versions, isn't UL listed for electrical enclosures
- No inherent flame retardant properties
- Could melt or burn if there's an electrical fault
- Doesn't provide proper fire containment

2. Structural Issues:
- No standardized mounting points for electrical components
- Layer lines could create paths for moisture ingress
- Can't provide proper grounding continuity
- May deform under component weight/heat

3. Code Compliance:
- Most electrical codes require UL listed or equivalent enclosures
- Needs to meet specific flame rating requirements
- Must provide proper electrical isolation
- Requires specific environmental protection ratings

Strong Recommendation:
Please use a proper electrical enclosure that is:
- UL listed (or equivalent certification)
- Made of appropriate materials (metal or rated electrical enclosure plastic)
- Properly sized for your components
- Has appropriate knockouts for cable entry
- Includes mounting points for components
- Provides proper grounding capability

