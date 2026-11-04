---
locale: en
kind: Technical demonstration · Personal project
title: FrameFlow Studio
translationKey: frameflow-studio
caseStudy: true
sourceUrl: https://github.com/tiagoapsantos/frameflow-studio
description: Technical demonstration project for creating 2D animations from static images, featuring a visual editor, keyframes, timeline and automated video rendering.
tags: [React, TypeScript, Remotion, Konva, IndexedDB]
images:
  - src: /images/projects/frameflow-editor.webp
    width: 1459
    height: 1225
    alt: Local FrameFlow Studio interface with project library, demo composition and visual editor controls.
  - src: /images/projects/frameflow-timeline.webp
    width: 1423
    height: 1208
    alt: Demo composition timeline showing layers, properties and keyframe markers.
---

## Context and goal

FrameFlow Studio is a personal portfolio demonstration exploring 2D animation from static images. It is not a commercial product, and there is no public web demo of the application. The source code is available on GitHub.

## Features

The prototype imports PNG and WebP images, positions layers in a visual editor, and defines keyframes and timing on a timeline. It includes a Remotion preview, visual references, a local project library and portable backups. MP4 rendering runs locally.

## Technical decisions

React, TypeScript and Konva support the interface; a JSON-based animation engine is shared by the Player and the Remotion renderer. IndexedDB stores projects and images in the browser. Backups keep visual references separate from video assets.

## Limitations

There is no Windows installer. Export requires the local development server and a compatible browser; storage depends on the browser profile. Individual editing of group children and audio are not yet available. Dependencies retain their own licensing terms.
