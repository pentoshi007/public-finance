# The Role of Taxation Policies in Reducing Income Inequality

A comprehensive presentation on taxation policies and income inequality in India, available in multiple formats.

## 📁 Project Structure

```
pres/
├── ppt.html                    # Original HTML presentation (standalone)
├── presentation.pptx           # PowerPoint format (auto-generated)
├── presentation-app/           # Next.js interactive presentation app
├── convert_to_pptx.py         # Python script to convert HTML to PPTX
├── slides_screenshots/         # Screenshot images of each slide
├── requirements.txt            # Python dependencies
└── setup_and_convert.sh       # Setup script for conversion
```

## 🎯 Available Formats

### 1. HTML Presentation (`ppt.html`)
- Standalone HTML file with embedded styles and scripts
- Interactive charts using Chart.js
- Can be opened directly in any browser
- No dependencies required

### 2. PowerPoint (`presentation.pptx`)
- Standard PPTX format
- 10 slides with all content
- Compatible with PowerPoint, Keynote, Google Slides
- Generated from HTML using Python script

### 3. Next.js Web App (`presentation-app/`)
- Modern, interactive presentation app
- PowerPoint-like experience in the browser
- Keyboard navigation (← → arrows)
- Fullscreen mode (Press F)
- Live charts with Chart.js

## 🚀 Quick Start

### View HTML Presentation
```bash
# Simply open in browser
open ppt.html
```

### Run Next.js App
```bash
cd presentation-app
npm install
npm run dev
# Open http://localhost:3000
```

### Convert HTML to PPTX
```bash
# Setup (first time only)
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
playwright install chromium

# Convert
python3 convert_to_pptx.py
```

## 🎨 Presentation Content

### Slides Overview
1. **Title Slide** - Introduction and presenter information
2. **Why Income Inequality Matters** - Context and statistics
3. **The Growing Gap** - Interactive chart showing wealth distribution trends
4. **How Taxes Reduce Inequality** - Direct vs Indirect taxes
5. **India's Tax Structure** - Income tax slabs with visualization
6. **International Comparison** - Gini coefficient across countries
7. **Problems with India's System** - Current challenges
8. **Solutions** - Policy recommendations
9. **Key Takeaways** - Summary of main points
10. **Conclusion** - Final quote and thank you

## ⌨️ Keyboard Shortcuts (Next.js App)

- **→ (Right Arrow)** or **Space**: Next slide
- **← (Left Arrow)**: Previous slide
- **F**: Toggle fullscreen
- **ESC**: Exit fullscreen

## 🛠️ Technologies Used

- **HTML/CSS/JavaScript** - Base presentation
- **Chart.js** - Interactive data visualizations
- **Next.js 16** - React framework for web app
- **Python** - Conversion scripts
- **Playwright** - Browser automation for screenshots
- **python-pptx** - PowerPoint generation

## 📊 Data Sources

- World Inequality Lab (Bharti et al., 2024)
- Income Tax Department, Government of India (2025)
- OECD and World Bank data (2023)

## 👤 Author

**Aniket Pandey**  
Registration Number: 210310762828

## 📝 License

This presentation is created for educational purposes.

## 🤝 Contributing

Feel free to fork and improve the presentation!

