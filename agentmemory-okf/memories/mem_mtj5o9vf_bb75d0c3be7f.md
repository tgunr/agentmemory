---
type: Fact
title: # Arc Generation in OpenSCAD

source: chatgpt
session_id: 1fd0663c-9cef-4f27-9cd
description: # Arc Generation in OpenSCAD

source: chatgpt
session_id: 1fd0663c-9cef-4f27-9cd8-4af190f614a1
resource: chatgpt://conversation/1fd0663c-9cef-4f27-9cd8-4af190f614a1

# Conversation

- **Session ID:** 
resource: agentmemory://memory/mem_mtj5o9vf_bb75d0c3be7f
tags: ["okf", "okf-chatgpt", "chatgpt", "chatgpt://conversation/1fd0663c-9cef-4f27-9cd8-4af190f614a1"]
timestamp: 2026-09-01T21:04:45.707Z
source: agentmemory
strength: 7
---
# Content

# Arc Generation in OpenSCAD

source: chatgpt
session_id: 1fd0663c-9cef-4f27-9cd8-4af190f614a1
resource: chatgpt://conversation/1fd0663c-9cef-4f27-9cd8-4af190f614a1

# Conversation

- **Session ID:** `1fd0663c-9cef-4f27-9cd8-4af190f614a1`
- **Source:** chatgpt (OpenAI)
- **Started:** 2023-05-20T20:22:34.663089+00:00
- **Messages:** 2

---

### 👤 User

in openscad, given points = [[0, 0], [58, 0], [58, 5], [0, 5]];
polygon(points); create an arc 8mm high from [58,5] to [0,5]

---

### 🤖 Assistant

Creating an arc with a specified height in OpenSCAD is not straightforward, as the `circle` or `cylinder` primitives can't directly be transformed into an arc. However, we can approximate an arc using multiple line segments. This requires creating a list of points that follow the path of the arc.

In your case, you're asking for an arc of 8mm height from [58,5] to [0,5]. This is essentially a semi-circle with diameter 58mm and height 8mm. So, we can create a function that generates points on this arc.

Here's a rough implementation that should work:

```OpenSCAD
points = [[0, 0], [58, 0], [58, 5]];

// Function to generate points on the arc
function arc_points(center, radius, start_angle, end_angle, resolution = 100) = [
    for(i = [start_angle: (end_angle-start_angle)/resolution :end_angle])
        [radius * cos(i) + center[0], radius * sin(i) + center[1]]
];

// Define the center, radius, and angles for the arc
center = [29, 5];
radius = 29 + 8;
start_angle = 0;
end_angle = 180;

// Add the generated arc points to the points list
points = concat(points, arc_points(center, radius, start_angle, end_angle));

// Draw the polygon
polygon(points);
```

This script approximates the arc using 100 line segments (`resolution` parameter in the `arc_points` function). You can adjust the `resolution` parameter to get a smoother or rougher arc. The `start_angle` and `end_angle` define the start and end angles of the arc in degrees.

Remember that OpenSCAD uses degrees, not radians, and that its coordinate system has the Y-axis pointing downwards. Therefore, 0 degrees is to the right, and angles increase clockwise.

This code generates an arc starting from point [58,5] going upwards and ending at [0,5]. If you want the arc to go downwards, you would reverse the start and end angles.

---
