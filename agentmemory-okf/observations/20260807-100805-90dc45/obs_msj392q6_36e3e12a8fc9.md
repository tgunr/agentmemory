---
type: file_write
title: Punching transparent holes in PNG alpha channels with Pillow
description: Image manipulation skill using Pillow (PIL)
resource: agentmemory://observation/obs_msj392q6_36e3e12a8fc9
tags: ["Pillow (PIL)", "file_write"]
timestamp: 2026-08-07T15:17:15.139218+00:00
source: agentmemory
session_id: 20260807_100805_90dc45
importance: 8
confidence: 0.9
---
# Summary

The skill manages post-processing of images with transparent holes.
To achieve this, one should use a direct alpha drawing approach with Pillow (
```
python
from PIL import Image, ImageDraw

img = Image.open("input.png").convert("RGBA")
alpha = img.split()[3].convert("L")
draw = ImageDraw.Draw(alpha)
...
img.putalpha(alpha)
img.save("output.png")
```), avoiding pitfalls like stamp-paste antialiasing and ensuring the `dpi` parameter is preserved for accurate output measurements.

## Facts
- Pillow must be imported and used to handle the image
- The `dpi` parameter is crucial for accurate output measurements

## Concepts
- Pillow (PIL)

## Files
- `templates/perforated_mask.py`
- `templates/perforated_mask_app.py`

_Importance: 8 · Confidence: 0.9_
