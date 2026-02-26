# Photo Analysis Report Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Produce a JSON report that analyzes every clearance photo in `public/images/{hero,classique,objets-valeur,diogene}` and writes it to `docs/photo-analysis-report.json`.

**Architecture:** Inventory JPG photos by folder, manually review each unique image once, apply the analysis to every folder placement, then compute summary stats (total, misplaced count, accuracy). Use a small Python helper for inventory and JSON validation.

**Tech Stack:** Python 3 (local), JSON, local image viewer via tool.

---

### Task 1: Inventory Photo Files

**Files:**
- Create: `docs/photo-analysis-inventory.json`

**Step 1: Generate list of JPG files**

```bash
python - <<'PY'
import os, json
roots = [
  'public/images/hero',
  'public/images/classique',
  'public/images/objets-valeur',
  'public/images/diogene',
]
rows = []
for r in roots:
  for f in sorted(os.listdir(r)):
    if f.lower().endswith('.jpg'):
      rows.append({
        'path': f"/images/{os.path.basename(r)}/{f}",
        'current_category': os.path.basename(r)
      })
print(json.dumps(rows, indent=2, ensure_ascii=True))
PY
```

**Step 2: Save output to inventory file**

```bash
python - <<'PY'
import os, json
roots = [
  'public/images/hero',
  'public/images/classique',
  'public/images/objets-valeur',
  'public/images/diogene',
]
rows = []
for r in roots:
  for f in sorted(os.listdir(r)):
    if f.lower().endswith('.jpg'):
      rows.append({
        'path': f"/images/{os.path.basename(r)}/{f}",
        'current_category': os.path.basename(r)
      })
with open('docs/photo-analysis-inventory.json','w') as f:
  json.dump(rows, f, indent=2, ensure_ascii=True)
PY
```

### Task 2: Create Working Report Skeleton

**Files:**
- Create: `docs/photo-analysis-working.json`

**Step 1: Create placeholder structure**

```bash
python - <<'PY'
import json
rows = json.load(open('docs/photo-analysis-inventory.json'))
report = {
  'photos': [
    {
      'path': row['path'],
      'current_category': row['current_category'],
      'analysis': {
        'type': '',
        'subject': '',
        'correct_category': False,
        'suggested_category': '',
        'confidence': ''
      }
    }
    for row in rows
  ],
  'summary': {
    'total_photos': len(rows),
    'misplaced_photos': 0,
    'category_accuracy': ''
  }
}
with open('docs/photo-analysis-working.json','w') as f:
  json.dump(report, f, indent=2, ensure_ascii=True)
PY
```

### Task 3: Manually Review and Classify Images

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Review images and fill analysis fields**

Process each JPG in `docs/photo-analysis-working.json` by opening the corresponding file in `public/images/...` and filling:
- `type`
- `subject`
- `correct_category`
- `suggested_category`
- `confidence`

**Step 2: Mark misplaced photos**

Set `correct_category` to `false` when a photo does not match the folder category, and set `suggested_category` accordingly.

### Task 4: Compute Summary Stats

**Files:**
- Modify: `docs/photo-analysis-working.json`

**Step 1: Compute misplaced and accuracy**

```bash
python - <<'PY'
import json
report = json.load(open('docs/photo-analysis-working.json'))
misplaced = sum(1 for p in report['photos'] if not p['analysis']['correct_category'])
report['summary']['misplaced_photos'] = misplaced
if report['summary']['total_photos']:
  acc = 100 * (report['summary']['total_photos'] - misplaced) / report['summary']['total_photos']
  report['summary']['category_accuracy'] = f"{acc:.1f}%"
with open('docs/photo-analysis-working.json','w') as f:
  json.dump(report, f, indent=2, ensure_ascii=True)
PY
```

### Task 5: Finalize Report

**Files:**
- Create: `docs/photo-analysis-report.json`

**Step 1: Copy working file to final report**

```bash
cp docs/photo-analysis-working.json docs/photo-analysis-report.json
```

**Step 2: Validate JSON**

```bash
python -m json.tool docs/photo-analysis-report.json > /tmp/photo-analysis-report.json
```

