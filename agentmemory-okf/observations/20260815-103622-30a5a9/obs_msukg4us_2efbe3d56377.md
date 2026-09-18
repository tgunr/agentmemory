---
type: file_edit
title: sparse output of scad script executed via ssh command
description: example of calculated_vertical_separator_positions usage in basic_cavity
resource: agentmemory://observation/obs_msukg4us_2efbe3d56377
tags: ["scad scripting", "calculated_vertical_separator_positions", "Mesh generation", "aerofoil design", "file_edit"]
timestamp: 2026-08-15T16:04:05.899943+00:00
source: agentmemory
session_id: 20260815_103622_30a5a9
importance: 8
confidence: 0.9
---
# Summary

The output of the executed scad script contains examples of how to calculate calculated_vertical_separator_positions, used in basic_cavity. This is an example and part of a larger calculation for GridFinity.

## Facts
- calculated_vertical_separator_positions = module calculateSeparators
      (separ_config = vertical_chambers[iChamber_irregular_subdivisions] 
        ? vertical_chambers[iChamber_separator_config]
        : splitChamber(vertical_chambers[iChamber_count]-1, divider_width=vertical_chambers[iChamber_wall_thickness].x, container_width=num_x*env_pitch().x - env_clearance().x - wall_thickness*2), 
      length = env_pitch().y*num_y,
      height = env_pitch().z*(num_z)-sepFloorHeight+fudgeFactor*2-max(headroom, vertical_chambers[iChamber_wall_headroom]), 
      wall_thickness = vertical_chambers[iChamber_wall_thickness],
      wall_top_radius = vertical_chambers[iChamber_wall_top_radius],
      bend_position = vertical_chambers[iChamber_separator_bend_position],
      bend_angle = vertical_chambers[iChamber_separator_bend_angle],
      bend_separation = vertical_chambers[iChamber_separator_bend_separation],
      cut_depth = vertical_chambers[iChamber_separator_cut_depth]);

## Concepts
- scad scripting
- calculated_vertical_separator_positions
- Mesh generation
- aerofoil design

## Files
- `/home/projects/GridFinity/gridfinity_extended_openscad/module_gridfinity_cup.scad`

_Importance: 8 · Confidence: 0.9_
