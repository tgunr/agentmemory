---
type: Fact
title: BoxTap database storage analysis (2026-10-16):

Current DB: Two simulator contai
description: BoxTap database storage analysis (2026-10-16):

Current DB: Two simulator containers, both EMPTY (0 boxes/items). Active store default.store 344KB (86x4K pages) + 32KB shm, ~0.35MB schema + CloudKit s
resource: agentmemory://memory/mem_mvayzneb_30608cf08624
tags: ["boxtap storage", "swiftdata size", "photo jpeg size", "external storage", "cloudkit quota", "downscale"]
timestamp: 2026-10-16T12:54:53.950Z
source: agentmemory
strength: 7
---
# Content

BoxTap database storage analysis (2026-10-16):

Current DB: Two simulator containers, both EMPTY (0 boxes/items). Active store default.store 344KB (86x4K pages) + 32KB shm, ~0.35MB schema + CloudKit shadow tables. _EXTERNAL_DATA empty. Real user data (if any) is on device, not simulator.

Dominant cost is photo: ImagePickerPresenter.swift:35 encodes full-res UIImage as jpegData(q0.8) with no downscale, one JPEG per BoxItem.photo via @Attribute(.externalStorage) to _EXTERNAL_DATA. No thumbnails cached. DB row overhead ~1-3KB negligible.

Measured JPEG q0.8 via ImageMagick: 12MP photo-like ~1.3MB, 12MP worst-case noise ~7.4MB, 48MP photo-like ~4.5MB. Typical iPhone 12MP ~1.5-3MB. Use ~2MB/item for planning. Downscale tests: 2048px long edge ~320KB (~6x smaller), 1024px ~90KB (~20x smaller).

Projections @ ~2MB/photo:
- 100 items: typical ~200MB (low ~80MB, high ~0.7GB)
- 1,000 items: typical ~2GB (low ~0.8GB, high ~7GB)
- 10,000 items: typical ~20GB (low ~8GB, high ~70GB)
Rows/indexes add <1%.

Caveats: CloudKit mirrors assets against 5GB free iCloud quota (~2500 items @2MB). Soft-delete keeps photos until Trash purge. List/grid decodes full-res images (memory, not disk). Legacy Box.photos unused.

Offered next step: capture-time downscale cap 2048px long edge (or HEIC) – user has not yet approved.

## Files
- `BoxTap/BoxTap/ImagePickerPresenter.swift`
- `BoxTap/BoxTap/BoxItem.swift`
- `BoxTap/BoxTap/Box.swift`
