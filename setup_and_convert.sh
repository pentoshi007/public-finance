#!/bin/bash

echo "🚀 Setting up environment and converting HTML to PPTX..."
echo ""

# Install Python packages
echo "📦 Installing required Python packages..."
pip3 install python-pptx Pillow playwright

# Install Playwright browsers
echo "🌐 Installing Playwright browsers..."
playwright install chromium

# Run the conversion
echo ""
echo "🔄 Converting HTML to PPTX..."
python3 convert_to_pptx.py

echo ""
echo "✅ Done! Check presentation.pptx"

