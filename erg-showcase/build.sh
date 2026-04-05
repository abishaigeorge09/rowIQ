#!/bin/bash
set -e

echo "═══════════════════════════════════════"
echo "  RowIQ Erg Showcase — Full Build"
echo "═══════════════════════════════════════"

# Build child projects
echo ""
echo "▸ Building V1 (Command Center)..."
cd ~/rowIQ/erg-dashboard && npm run build

echo "▸ Building V2 (Athlete Cards)..."
cd ~/rowIQ/v2-athlete-cards && npm run build

echo "▸ Building V3 (Timeline Explorer)..."
cd ~/rowIQ/v3-timeline-explorer && npm run build

# Build wrapper
echo "▸ Building wrapper..."
cd ~/rowIQ/erg-showcase && npm run build

# Copy child builds into wrapper dist (for deployment — symlinks don't work on Vercel)
echo "▸ Copying child builds into dist/..."
mkdir -p dist/v1 dist/v2 dist/v3
cp -r ~/rowIQ/erg-dashboard/dist/* dist/v1/
cp -r ~/rowIQ/v2-athlete-cards/dist/* dist/v2/
cp -r ~/rowIQ/v3-timeline-explorer/dist/* dist/v3/

echo ""
echo "═══════════════════════════════════════"
echo "  ✓ Build complete!"
echo "  dist/ contains everything for deployment."
echo "═══════════════════════════════════════"
