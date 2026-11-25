# 360Tech Engineering — Premium Homepage

A custom-built, premium, mobile-first homepage redesign for **360Tech Engineering**, a Mullingar (Co. Westmeath, Ireland) based engineering company specialising in air conditioning, commercial refrigeration and electrical installations.

## Project Overview

This repository contains a complete static homepage redesign, built from a full research pass of the original website ([360tech.ie](https://360tech.ie/)). The design is a distinctive, conversion-focused editorial/industrial style — no generic template.

### Business

- **Name:** 360Tech Engineering
- **Industry:** Engineering services — Air Conditioning, Commercial Refrigeration, Electrical Installations, Facilities Management, Servicing & Maintenance, Energy Solutions
- **Base:** Unit 4, Zone C, Mullingar Industrial Estate, Mullingar, Co. Westmeath, Ireland
- **Contact:** 044 9382052 · 24hr 087 2803487 · info@360tech.ie
- **Credentials:** F-Gas certified refrigeration specialists · 24-hour refrigeration breakdown assistance

## Design System

- **Direction:** Premium industrial editorial — bold typographic hierarchy, full-bleed photography, asymmetric service composition
- **Logo:** The company's original logo with background removed to a transparent PNG (`assets/logo/logo-transparent.png`), used in header and footer
- **Brand colours (extracted from logo):** Indigo `#3D3E6A`, supporting blue `#5673A5`, crimson accent `#A41F34`
- **Typography:** Oswald (headings) + Inter (body)
- **Iconography:** Custom inline SVG (Lucide-style strokes)
- **Imagery:** Custom-generated, industry-specific photography

## Homepage Sections

1. Premium fixed navigation header (sticky scroll state, mobile overlay menu, dropdown)
2. Signature full-bleed hero with dual CTA
3. Trust & authority bar (clients, 24/7 breakdown, F-Gas, nationwide coverage)
4. Business introduction (about + credential badge)
5. Core services showcase (asymmetric feature grid)
6. Why choose us (six value pillars)
7. Work process (four-step approach)
8. Service coverage areas
9. FAQ accordion
10. Premium final CTA with full contact details
11. Professional footer
12. Mobile floating action bar (Call + Get a Quote)

## Tech Stack

- HTML5 · CSS3 (custom properties, mobile-first) · Vanilla JavaScript
- Zero dependencies — fully static, no build step

## Project Structure

```
├── index.html
├── .nojekyll
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    ├── icons/
    └── logo/
```

## Local Preview

Serve the repository root with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## GitHub Pages

This project is GitHub Pages ready. All asset paths are relative, so it works both at the repository root and from a project subdirectory URL. Enable **Settings → Pages → Deploy from a branch** with the source set to this branch and root folder, then the site is live.

> Demo/redesign project — the `noindex` directive is set so it does not compete with the original site in search results.
