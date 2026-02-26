#!/bin/bash

# Photo Processing Script for DebarrasPower
# Converts HEIC to JPEG, creates WebP versions, and optimizes for web

set -e

SOURCE_DIR="/Users/codezer0/Downloads/deb-power"
TARGET_DIR="public/images"

echo "📸 DebarrasPower Photo Processing"
echo "=================================="
echo ""

# Count total photos
TOTAL=$(find "$SOURCE_DIR" -type f \( -name "*.HEIC" -o -name "*.jpg" -o -name "*.JPG" -o -name "*.jpeg" -o -name "*.JPEG" \) | wc -l | tr -d ' ')
echo "Found $TOTAL photos to process"
echo ""

# Function to convert HEIC to JPEG
convert_heic_to_jpeg() {
  local input="$1"
  local output="$2"
  local max_width="${3:-1920}"

  # Convert HEIC to JPEG using sips
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

# Function to get category from filename
get_category() {
  local filename=$(basename "$1")
  local category="classique"  # default

  # You can customize this logic based on your file naming
  # For now, distribute randomly across categories
  case $((RANDOM % 4)) in
    0) category="classique" ;;
    1) category="objets-valeur" ;;
    2) category="diogene" ;;
    3) category="hero" ;;
  esac

  echo "$category"
}

# Process all HEIC files
echo "🔄 Processing HEIC files..."
count=0

find "$SOURCE_DIR" -type f \( -name "*.HEIC" -o -name "*.JPG" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.JPEG" \) | sort | while read -r photo; do
  count=$((count + 1))
  filename=$(basename "$photo" | sed 's/\.[^.]*$//')
  category=$(get_category "$photo")

  echo "  [$count/$TOTAL] $filename → $category"

  # Create category directory if not exists
  mkdir -p "$TARGET_DIR/$category"

  # Convert HEIC to JPEG if needed
  if [[ "$photo" == *.HEIC ]]; then
    convert_heic_to_jpeg "$photo" "$TARGET_DIR/${category}/${filename}.jpg"
  else
    # Just copy existing JPEG/JPG files
    cp "$photo" "$TARGET_DIR/${category}/${filename}.jpg"
  fi

  # Create WebP version
  convert_jpeg_to_webp "$TARGET_DIR/${category}/${filename}.jpg" "$TARGET_DIR/${category}/${filename}.webp"

done

echo ""
echo "✅ Photo processing complete!"
echo ""
echo "📊 Summary:"
for category in hero classique objets-valeur diogene team; do
  count=$(find "$TARGET_DIR/$category" -name "*.jpg" 2>/dev/null | wc -l | tr -d ' ')
  echo "  • $category: $count photos"
done
echo ""
echo "🌐 Next steps:"
echo "  1. Review photos in $TARGET_DIR"
echo "  2. Categorize manually if needed"
echo "  3. Update src/data/photos.ts with actual photo paths"
echo "  4. Test the gallery on the live site"
