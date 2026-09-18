---
type: Fact
title: # Parametric Box with Centered Handle

source: hermes
session_id: claude__d4e9dc
description: # Parametric Box with Centered Handle

source: hermes
session_id: claude__d4e9dcae-9b67-403f-925b-bf126e0911e7
resource: hermes://session/claude__d4e9dcae-9b67-403f-925b-bf126e0911e7

# Conversation


resource: agentmemory://memory/mem_mtj6344f_2db03fd148db
tags: ["okf", "okf-hermes", "hermes", "/Users/davec"]
timestamp: 2026-09-01T21:16:18.042Z
source: agentmemory
strength: 7
---
# Content

# Parametric Box with Centered Handle

source: hermes
session_id: claude__d4e9dcae-9b67-403f-925b-bf126e0911e7
resource: hermes://session/claude__d4e9dcae-9b67-403f-925b-bf126e0911e7

# Conversation

- **Session ID:** `claude__d4e9dcae-9b67-403f-925b-bf126e0911e7`
- **Source:** claude
- **Model:** None
- **Started:** 2025-03-13T19:30:44Z
- **Ended:** 2025-03-13T20:09:11Z
- **Messages:** 38
- **CWD:** `/Users/davec`

---

### 👤 User — 2025-03-13T19:30:45Z

In this SCAD code I want to add a small handle in the center of the front which is 34X19. // Final Height of the stacked parts in mm, including stack or not (see C)
H = 56;
// number of stacked parts that should fit in that height
N = 2;
// Final Width in mm
W = 42;
// Final length in mm
L = 83;
// Thickness of wall and stack in mm (use a multiple of nozzle size, ex for 0.4: [1,2, 1.6, ...])
T = 1.2;
// radius for rouding of corner
R = 5;
// [1/0] enable/disable stack
S = 1;
// [1/0] count/discard stack in final height
C = 1;
// Looseness of the stack
l = 0.5;
// [1/0] enable/disable dig bottom
D = 1;
$fn=100;
// define base shape, exemple for a round rectangle
// ensuring that it fit inside a box of w x l
module round_rect_shape(w=W,l=L,radius=R) {
    w = w - 2*R;
    l = l - 2*R;
    
    points = [ [0,0,0], [w,0,0], [0,l,0], [w,l,0] ];
    
    translate([R, R, 0])
    projection(cut = false)
    hull(){
        for (p = points){
            translate(p) cylinder(r=radius, h=1);
        }
    }
}
// take shape as children
// and to the extrusion
module top_box( height, thickness, looseness = l) {
    B = thickness * S;
    total = height - B*C;                    // adjust total height with stack    
    
    // compute height for given number of parts: x*N + thickness = total
    height = (total - thickness) / N; 
    
    A = height - thickness;
    difference() {    
        color("DodgerBlue") 
        linear_extrude(height)              // outer height
              children();
        color("Khaki")
        translate([0, 0, thickness])        // bottom
        linear_extrude(height = A + 0.1)
            offset(delta = -thickness)      // side
                children();
        
        if( S*D == 1) {
            linear_extrude(height = B + 0.1) // dig bottom
            offset(delta = -( thickness * 2 + looseness) )      // side
                children();        
        }
     }
     
    // stack
    color("Khaki")
    translate([0, 0, -B])               // under part
    linear_extrude(height = B)
        offset(delta = -( thickness + looseness))      // side
            children();
 }
 
// box
module box( height, thickness) {
 top_box( height, thickness) 
 rotate ([180,0,0]) children();
}
box(H, T) round_rect_shape();

### 🤖 Assistant — 2025-03-13T19:31:07Z

I'll help you add a small handle to the center of the front face of your SCAD box. Let me analyze your code first and then add the handle functionality.

Based on your code, you have a parametric box with rounded corners and dimensions of 42×83×56mm. The handle should be 34×19mm and placed in the center of the front face (which I'm assuming is the 42mm wide face).

Let me modify your code to add this handle:
```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```



I've modified your SCAD code to add a handle to the front of the box. Here's what I added:

1. New parameters for the handle:
   - `Handle_Width = 34` (as per your requirements)
   - `Handle_Height = 19` (as per your requirements)
   - `Handle_Depth = 10` (how far the handle protrudes from the box)
   - `Handle_Thickness = T` (using the same thickness as the box walls)

2. A new `handle_shape` module that creates a rounded rectangle for the handle (similar to your `round_rect_shape` but sized for the handle)

3. A new `box_with_handle` module that:
   - Creates the main box using your existing code
   - Adds a handle to the front, positioned in the center
   - Makes the handle hollow with the same wall thickness as the box

The handle is positioned in the center of the front face (the 42mm wide side) and extends outward. You can adjust the `Handle_Depth` parameter if you w
