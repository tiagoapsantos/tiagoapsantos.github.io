---
locale: en
kind: Web tool · Personal project
title: Cartaz
translationKey: cartaz
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/cartaz-app/
description: A browser tool that turns a single form into an event's A4 poster, social media post and story, Facebook cover and caption text, accessible and in Portuguese.
tags: [TypeScript, Vite, SVG, Design, Accessibility]
images:
  - src: /images/projects/cartaz-ferramenta.webp
    width: 1600
    height: 1160
    alt: The Cartaz page with the materials generated for a sample event in the Festive style, showing contrast and text size for each format.
  - src: /images/projects/cartaz-estilos.webp
    width: 1600
    height: 1160
    alt: The same materials in the three styles (Classic, Festive and Modern) and the five formats, from A4 poster to Facebook cover.
---

## Context and goal

Associations, bands and festival committees remake the same poster in several sizes for print and social media. Market research showed that existing tools resize the design but do not reorganise the information (dates and venues get cut off) and treat accessibility as a separate step. Cartaz targets that gap: one form, every format, in Portuguese, for people without design training.

## Features

The event is filled in once (up to three dates, venue, programme, admission, organiser, logo and photo) and five formats appear side by side: A4 poster, Instagram post and story, Facebook event cover and square image. Each format has its own layout: the story lists the programme and keeps clear of the areas covered by the app interface; the Facebook cover shows only the essentials. There are three styles (Classic, Festive and Modern), a chosen colour, and short and long caption text. Each format downloads as PNG, everything as a ZIP, or the A4 poster as PDF.

## Design and accessibility

Text colour (white or dark) is chosen automatically for sufficient contrast; the layout engine picks the largest size that fits and enforces a legible minimum at the width each format is viewed (phone or paper). Each format shows its contrast and smallest text size, warns when text is too long, and image alt text is generated from the data. The page itself was checked with axe (WCAG 2.1 A and AA).

## Technical decisions

Vite and TypeScript with no server or database: the event is kept in browser storage and can be saved to a file. Templates are SVG with real text; the fonts (Archivo, Fredoka and Space Grotesk, open licence) are embedded in exported images so they look the same on any computer. Imported files are validated and user text is always escaped. Automated tests with Vitest.

## Limitations

No free-form editing (dragging elements) and no direct posting to social networks. The PDF is created through the browser's print dialog. The source code is not public.
