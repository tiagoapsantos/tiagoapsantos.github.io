---
locale: en
kind: Web platform with CMS · Personal project
title: Coreto
translationKey: coreto
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/coreto-demo/
description: A platform where Portuguese brass bands show their free dates and receive quote requests from festival committees, with a simple admin panel for band managers.
tags: [Next.js, Payload CMS, TypeScript, SQLite, GDPR]
images:
  - src: /images/projects/coreto-site.webp
    width: 1600
    height: 1160
    alt: Home page of the Coreto demo, with a photo of a bandstand, the platform introduction and the search for free bands by date, district and service.
  - src: /images/projects/coreto-cms.webp
    width: 1600
    height: 1054
    alt: Admin panel home for a band manager, with unanswered quote requests, upcoming booked dates and shortcuts.
---

## Context and goal

Coreto is a personal portfolio project built around a real gap: Portuguese festival committees book philharmonic bands by phone and word of mouth, with no way to see which bands are free on a given date. The platform brings together each band's calendar, repertoire and services, and lets committees request a quote. All bands, places and requests shown are fictional; the districts are real so the search makes sense.

## Features

Search for free bands by date, district and service (procession, street parade, concert, festival, ceremony): bands booked for the whole day are left out and partly booked bands are shown with a note. Each band has a calendar for the coming months (free, partly booked or booked, in text and colour), repertoire, news, galleries and a quote request form. In the admin panel, managers mark booked dates and see unanswered requests on the home screen; accepting a request automatically marks that day as booked.

## Privacy and security

The only personal data is the name and contact of whoever requests a quote. Requests only enter through server code, with a honeypot field, a minimum fill time, rate limits and validation of every field; only the managers of the chosen band can see them, the email notification to the band carries no personal data, and requests are deleted automatically after 12 months. A script checks 24 access and retention rules.

## Technical decisions

Built from the Capítulo codebase (Next.js and Payload CMS with the multi-tenant plugin) and adapted with its own collections: booked dates, repertoire and quote requests. The sample photos come from Unsplash (free licence) and were chosen with no recognisable faces, since they illustrate fictional bands. The public demo is static: the free-band search runs in the browser from exported data (without the bands' internal notes).

## Limitations

The demo has no admin panel and the quote form is disabled. The source code is not public. Real email delivery and production hosting (PostgreSQL on a server in the European Union) are not set up yet, and the accessibility statement has not been formally audited.
