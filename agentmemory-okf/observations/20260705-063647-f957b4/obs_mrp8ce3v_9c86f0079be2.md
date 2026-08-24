---
type: Search
title: Search exports in pet-gallery.ts store
description: Identifying all exported symbols from the pet gallery state management module
resource: agentmemory://observation/obs_mrp8ce3v_9c86f0079be2
tags: ["Jotai atoms state management", "pet gallery CRUD operations", "GatewayRequest RPC pattern", "pet scale clamping", "pet export with base64 zip", "search"]
timestamp: 2026-07-17T17:46:42.665073+00:00
source: agentmemory
session_id: 20260705_063647_f957b4
importance: 4
confidence: 1
---
# Summary

Searched the pet-gallery store module to catalog all exported symbols. The module manages pet gallery state with Jotai atoms, provides CRUD operations for pets (adopt, rename, remove, export), and includes pet scale management with clamping utilities. All functions accept a GatewayRequest parameter for RPC calls.

## Facts
- File: /tmp/hermes-profile-fix/apps/desktop/src/store/pet-gallery.ts
- 27 total export matches found
- Key atoms: $petGallery, $petGalleryStatus, $petGalleryError, $petBusy
- Scale constants: PET_SCALE_MIN=0.1, PET_SCALE_MAX=3.0, PET_SCALE_DEFAULT=0.33
- Exported functions: resetPetGallery, loadPetThumb, loadPetGallery, applyAdoptedPet, rankedGalleryPets, adoptPet, setPetEnabled, clampPetScale, nextScaleFromWheel, setPetScale, exportPet, renamePet, removePet
- Exported types/interfaces: GalleryPet, PetGallery, PetGalleryStatus, GatewayRequest
- Toggle constants: TOGGLE_ON='\0on', TOGGLE_OFF='\0off'
- exportPet uses petRpc with 'pet.export' method returning zipBase64

## Concepts
- Jotai atoms state management
- pet gallery CRUD operations
- GatewayRequest RPC pattern
- pet scale clamping
- pet export with base64 zip

## Files
- `/tmp/hermes-profile-fix/apps/desktop/src/store/pet-gallery.ts`

_Importance: 4 · Confidence: 1_
