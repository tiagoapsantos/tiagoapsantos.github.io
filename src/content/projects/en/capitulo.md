---
locale: en
kind: Web platform with CMS · Personal project
title: Capítulo
translationKey: capitulo
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/capitulo-demo/
sourceUrl: https://github.com/tiagoapsantos/capitulo-cms
description: Website platform for gastronomic brotherhoods and their federation, with a multi-tenant content management panel (CMS) designed for non-technical users.
tags: [Next.js, Payload CMS, TypeScript, SQLite, Multi-tenant]
video:
  src: /videos/capitulo-painel.webm
  poster: /images/projects/capitulo-cms.webp
  title: Capítulo admin panel demo — open the home screen, create an event, publish it and see it on the site.
  width: 1280
  height: 800
images:
  - src: /images/projects/capitulo-site.webp
    width: 1600
    height: 1160
    alt: Home page of the Capítulo demo, with a stone village photograph, the platform introduction and the sample brotherhood websites.
  - src: /images/projects/capitulo-cms.webp
    width: 1600
    height: 1160
    alt: Admin panel home with a greeting, shortcuts to the most common tasks and a list of recent changes.
---

## Context and goal

Capítulo is a personal portfolio project: a platform where each gastronomic brotherhood (confraria) has its own website, all managed from a single panel. The sites are updated by volunteer board members, so the panel had to be simple. All organisations, products and content shown are fictional; photographs come from Unsplash.

## Features

Each brotherhood has a home page, news, ceremonies and events with a programme, the product it promotes, recipes, galleries, governing bodies, documents and contacts, with its own colour and emblem. The federation site automatically gathers the events shared by every brotherhood into a common calendar. The panel offers shortcuts to the most common tasks, drafts, a "View on site" button and a short manual.

## Technical decisions

Next.js and Payload CMS in a single project, with the official multi-tenant plugin: each organisation is a tenant and its content is kept separate. There are four roles (administrator, federation manager, brotherhood manager and editor) with access rules checked by a script. The panel was translated into European Portuguese. The public site has no forms or visitor accounts, which keeps personal data to a minimum and allows a static version to be generated.

## Limitations

The public demo is a static version of the site (without the admin panel), generated from the project; the source code is available on GitHub for viewing (all rights reserved). Development uses SQLite; production is planned on PostgreSQL with hosting in the European Union. The accessibility statement has not yet been validated by a formal audit.
