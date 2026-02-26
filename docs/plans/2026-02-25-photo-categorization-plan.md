# Photo Categorization Report Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Produce `docs/photo-analysis-report.json` with analysis for each photo in `docs/photo-analysis-inventory.json` (142 entries).

**Architecture:** Use the inventory file as the source of truth, generate a report skeleton with required fields, then manually review each image using `full_path` and fill in analysis fields. Validate the output JSON for completeness and count accuracy.

**Tech Stack:** Python 3 (local), JSON, image viewer via tool.

---

### Task 1: Verify Inventory + Create Report Skeleton

**Files:**
- Read: `docs/photo-analysis-inventory.json`
- Create: `docs/photo-analysis-working.json`

**Step 1: Verify inventory count and fields**

```bash
python - <<'PY'
import json
rows = json.load(open('docs/photo-analysis-inventory.json'))
print('count', len(rows))
print('keys', sorted(rows[0].keys()))
PY
```

Expected: `count 142` and keys include `path`, `full_path`, `current_category`.

**Step 2: Create working report skeleton**

```bash
python - <<'PY'
import json
rows = json.load(open('docs/photo-analysis-inventory.json'))
report = {
  'photos': [
    {
      'path': row['path'],
      'full_path': row['full_path'],
      'current_category': row['current_category'],
      'analysis': {
        'clearance_type': '',
        'main_subject': '',
        'category_correct': False,
        'suggested_category': '',
        'notes': ''
      }
    }
    for row in rows
  ]
}
with open('docs/photo-analysis-working.json','w') as f:
  json.dump(report, f, indent=2, ensure_ascii=True)
PY
```

### Task 2: Review Photos 1-10 (index 0-9)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill `clearance_type`, `main_subject`, `category_correct`, `suggested_category` (empty if correct), and `notes` for photos 1-10 in list order.

### Task 3: Review Photos 11-20 (index 10-19)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 11-20 in list order.

### Task 4: Review Photos 21-30 (index 20-29)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 21-30 in list order.

### Task 5: Review Photos 31-40 (index 30-39)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 31-40 in list order.

### Task 6: Review Photos 41-50 (index 40-49)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 41-50 in list order.

### Task 7: Review Photos 51-60 (index 50-59)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 51-60 in list order.

### Task 8: Review Photos 61-70 (index 60-69)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 61-70 in list order.

### Task 9: Review Photos 71-80 (index 70-79)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 71-80 in list order.

### Task 10: Review Photos 81-90 (index 80-89)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 81-90 in list order.

### Task 11: Review Photos 91-100 (index 90-99)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 91-100 in list order.

### Task 12: Review Photos 101-110 (index 100-109)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 101-110 in list order.

### Task 13: Review Photos 111-120 (index 110-119)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 111-120 in list order.

### Task 14: Review Photos 121-130 (index 120-129)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 121-130 in list order.

### Task 15: Review Photos 131-142 (index 130-141)

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Open each image and fill analysis fields**

Fill analysis fields for photos 131-142 in list order.

### Task 16: Finalize Report

**Files:**
- Create: `docs/photo-analysis-report.json`

**Step 1: Validate completeness**

```bash
python - <<'PY'
import json
report = json.load(open('docs/photo-analysis-working.json'))
photos = report.get('photos', [])
missing = [i for i,p in enumerate(photos) if not p['analysis']['clearance_type'] or not p['analysis']['main_subject']]
print('total', len(photos))
print('missing', len(missing))
print('first_missing_indices', missing[:10])
PY
```

Expected: `total 142`, `missing 0`.

**Step 2: Write final report**

```bash
cp docs/photo-analysis-working.json docs/photo-analysis-report.json
```

**Step 3: Validate JSON**

```bash
python -m json.tool docs/photo-analysis-report.json > /tmp/photo-analysis-report.json
```
