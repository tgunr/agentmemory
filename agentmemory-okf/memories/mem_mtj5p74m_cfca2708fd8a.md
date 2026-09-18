---
type: Fact
title: # Prusa MK4 Shipping Status

source: chatgpt
session_id: 073d9df8-a2ab-4180-b23f
description: # Prusa MK4 Shipping Status

source: chatgpt
session_id: 073d9df8-a2ab-4180-b23f-314689ec2a2c
resource: chatgpt://conversation/073d9df8-a2ab-4180-b23f-314689ec2a2c

# Conversation

- **Session ID:** `
resource: agentmemory://memory/mem_mtj5p74m_cfca2708fd8a
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/073d9df8-a2ab-4180-b23f-314689ec2a2c"]
timestamp: 2026-09-01T21:05:28.812Z
source: agentmemory
strength: 7
---
# Content

# Prusa MK4 Shipping Status

source: chatgpt
session_id: 073d9df8-a2ab-4180-b23f-314689ec2a2c
resource: chatgpt://conversation/073d9df8-a2ab-4180-b23f-314689ec2a2c

# Conversation

- **Session ID:** `073d9df8-a2ab-4180-b23f-314689ec2a2c`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-05-20T17:58:55.739986+00:00
- **Messages:** 4

---

### 👤 User

What are the current estimates on shipments of prusa mk4

---

### 🤖 Assistant

I'm sorry, it seems like there's an issue with my browsing tool. Unfortunately, I'm not able to fetch live data at the moment. As of my last update in September 2021, I don't have specific information about Prusa MK4 shipments. I would recommend checking the official Prusa website or relevant 3D printing forums for the most current updates.

---

### 👤 User

Create a polygon that is 58mm along base,  5mm high, then and arc from one corner to the other that is 8mm high in openscad

---

### 🤖 Assistant

Sure, you can create such a polygon in OpenSCAD using the `polygon` and `translate` functions for the base and the arc respectively. Here's an example script:

```scad
points = [[0, 0], [58, 0], [58, 5], [0, 5]];

module base() {
    polygon(points);
}

module arc() {
    translate([29, 0, 0])
    rotate([0, 180, 0])
    cylinder(h = 5, r1 = 0, r2 = 8, center = true);
}

difference() {
    base();
    arc();
}
```

This script first defines the base of the polygon as a set of points. It then creates an arc by using a cylinder shape, which we rotate and translate to the right position. The `difference` function is used to subtract the arc from the base, leaving you with a polygon that has an arc-shaped indentation.

Please note that due to OpenSCAD's limitations in creating arcs, the above script uses a `cylinder` to create the arc. It's not perfect and may need to be adjusted to fit your exact requirements. If you require a perfect arc, you might need to use a different method or CAD software that supports arcs better.

---
