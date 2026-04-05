#!/bin/bash
# Creates symlinks from public/v1, v2, v3 → child project dist/ folders
# Run this once for local development

mkdir -p public

# Remove old symlinks if they exist
rm -rf public/v1 public/v2 public/v3

# Create symlinks to child project build outputs
ln -s ~/rowIQ/erg-dashboard/dist public/v1
ln -s ~/rowIQ/v2-athlete-cards/dist public/v2
ln -s ~/rowIQ/v3-timeline-explorer/dist public/v3

echo "✓ Symlinks created:"
echo "  public/v1 → erg-dashboard/dist"
echo "  public/v2 → v2-athlete-cards/dist"
echo "  public/v3 → v3-timeline-explorer/dist"
echo ""
echo "Run 'npm run dev' to start the dev server."
