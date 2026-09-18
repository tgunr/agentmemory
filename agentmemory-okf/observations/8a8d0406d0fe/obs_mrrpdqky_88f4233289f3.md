---
type: CommandRun
title: STL mesh vertex analysis for bore radius measurement
description: Python script analyzing sharpening_wheel_v2.stl geometry at different z-heights
resource: agentmemory://observation/obs_mrrpdqky_88f4233289f3
tags: ["STL file parsing", "3D mesh analysis", "binary data processing", "commandrun"]
timestamp: 2026-07-19T11:19:11.310809+00:00
source: agentmemory
session_id: 8a8d0406d0fe
importance: 6
confidence: 1
---
# Summary

Executed a geometric analysis script on a sharpening wheel STL model to measure bore wall radii at different heights. The script parsed binary STL format, extracted vertex coordinates, and computed radius distributions within the hub region to understand bore geometry.

## Facts
- Read STL binary format by parsing 80-byte header and triangle count
- Extracted 12 float values per triangle representing 3 vertices + normal
- Filtered vertices with radius r &lt; 13 (near-axis vertices)
- Grouped vertices into 1mm z-buckets using defaultdict
- Computed max and min radius per bucket for bore wall analysis</file>
    <fact>Limited output to hub region: z from -18 to 9

## Concepts
- STL file parsing
- 3D mesh analysis
- binary data processing

## Files
- `/Volumes/projects/3D/SharpWheel/sharpening_wheel_v2.stl`

_Importance: 6 · Confidence: 1_
