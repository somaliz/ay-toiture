#!/bin/bash

# Photo Processing Script for DebarrasPower
# Properly categorizes photos based on source folder

set -e

SOURCE_DIR="/Users/codezer0/Downloads/deb-power"
TARGET_DIR="public/images"

echo "📸 DebarrasPower Photo Processing (Corrected)"
echo "=============================================="
echo ""

# Function to convert HEIC to JPEG
convert_heic_to_jpeg() {
  local input="$1"
  local output="$2"
  local max_width="${3:-1920}"

  sips -s format jpeg \
       -s formatOptions 85 \
       -z $max_width 1440 \
       "$input" \
       --out "$output" >/dev/null 2>&1
}

# Function to convert JPEG to WebP
convert_jpeg_to_webp() {
  local input="$1"
  local output="$2"
  local quality="${3:-80}"

  cwebp -q $quality "$input" -o "$output" >/dev/null 2>&1
}

# Process each category folder
echo "🔄 Processing photos by category..."

# Classique folder
if [ -d "$SOURCE_DIR/Debarras classique" ]; then
  echo "  Processing: Classique"
  mkdir -p "$TARGET_DIR/classique"

  find "$SOURCE_DIR/Debarras classique" -type f \( -name "*.HEIC" -o -name "*.jpg" -o -name "*.JPG" \) | sort | while read -r photo; do
    filename=$(basename "$photo" | sed 's/\.[^.]*$//')

    # Skip Medium versions
    if [[ "$filename" == *"Medium"* ]]; then
      continue
    fi

    echo "    - $filename"

    if [[ "$photo" == *.HEIC ]]; then
      convert_heic_to_jpeg "$photo" "$TARGET_DIR/classique/${filename}.jpg"
    else
      cp "$photo" "$TARGET_DIR/classique/${filename}.jpg"
    fi

    convert_jpeg_to_webp "$TARGET_DIR/classique/${filename}.jpg" "$TARGET_DIR/classique/${filename}.webp"
  done
fi

# Brocante folder → objets-valeur
if [ -d "$SOURCE_DIR/Brocante" ]; then
  echo "  Processing: Objets de Valeur"
  mkdir -p "$TARGET_DIR/objets-valeur"

  find "$SOURCE_DIR/Brocante" -type f \( -name "*.HEIC" -o -name "*.jpg" -o -name "*.JPG" \) 2>/dev/null | sort | while read -r photo; do
    filename=$(basename "$photo" | sed 's/\.[^.]*$//')

    # Skip Medium versions and non-photo files
    if [[ "$filename" == *"Medium"* ]] || [[ "$photo" == *.txt ]]; then
      continue
    fi

    echo "    - $filename"

    if [[ "$photo" == *.HEIC ]]; then
      convert_heic_to_jpeg "$photo" "$TARGET_DIR/objets-valeur/${filename}.jpg"
    else
      cp "$photo" "$TARGET_DIR/objets-valeur/${filename}.jpg"
    fi

    convert_jpeg_to_webp "$TARGET_DIR/objets-valeur/${filename}.jpg" "$TARGET_DIR/objets-valeur/${filename}.webp"
  done
fi

# Diogene folder
if [ -d "$SOURCE_DIR/Syndrome de diogene" ]; then
  echo "  Processing: Syndrome de Diogène"
  mkdir -p "$TARGET_DIR/diogene"

  find "$SOURCE_DIR/Syndrome de diogene" -type f \( -name "*.HEIC" -o -name "*.jpg" -o -name "*.JPG" \) 2>/dev/null | sort | while read -r photo; do
    filename=$(basename "$photo" | sed 's/\.[^.]*$//')

    # Skip Medium versions
    if [[ "$filename" == *"Medium"* ]]; then
      continue
    fi

    echo "    - $filename"

    if [[ "$photo" == *.HEIC ]]; then
      convert_heic_to_jpeg "$photo" "$TARGET_DIR/diogene/${filename}.jpg"
    else
      cp "$photo" "$TARGET_DIR/diogene/${filename}.jpg"
    fi

    convert_jpeg_to_webp "$TARGET_DIR/diogene/${filename}.jpg" "$TARGET_DIR/diogene/${filename}.webp"
  done
fi

# Root folder → hero
echo "  Processing: Hero (root folder)"
mkdir -p "$TARGET_DIR/hero"

find "$SOURCE_DIR" -maxdepth 1 -type f \( -name "*.HEIC" -o -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" -o -name "*.JPEG" \) | sort | while read -r photo; do
  filename=$(basename "$photo" | sed 's/\.[^.]*$//')

  # Skip Medium versions
  if [[ "$filename" == *"Medium"* ]]; then
    continue
  fi

  echo "    - $filename"

  if [[ "$photo" == *.HEIC ]]; then
    convert_heic_to_jpeg "$photo" "$TARGET_DIR/hero/${filename}.jpg"
  else
    cp "$photo" "$TARGET_DIR/hero/${filename}.jpg"
  fi

  convert_jpeg_to_webp "$TARGET_DIR/hero/${filename}.jpg" "$TARGET_DIR/hero/${filename}.webp"
done

echo ""
echo "✅ Photo processing complete!"
echo ""
echo "📊 Summary:"
for category in hero classique objets-valeur diogene; do
  count=$(find "$TARGET_DIR/$category" -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
  echo "  • $category: $count photos"
done
