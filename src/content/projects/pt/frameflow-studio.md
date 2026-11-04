---
locale: pt
kind: Demonstração técnica · Projecto pessoal
title: FrameFlow Studio
translationKey: frameflow-studio
caseStudy: true
sourceUrl: https://github.com/tiagoapsantos/frameflow-studio
description: Aplicação de demonstração técnica para criação de animações 2D a partir de imagens estáticas, com editor visual, keyframes, timeline e exportação automática de vídeo.
tags: [React, TypeScript, Remotion, Konva, IndexedDB]
images:
  - src: /images/projects/frameflow-editor.webp
    width: 1459
    height: 1225
    alt: Interface local do FrameFlow Studio com biblioteca, composição demonstrativa e controlos do editor visual.
  - src: /images/projects/frameflow-timeline.webp
    width: 1423
    height: 1208
    alt: Timeline da composição demonstrativa com camadas, propriedades e marcadores de keyframes.
---

## Contexto e objectivo

O FrameFlow Studio é um projecto pessoal de demonstração para portefólio que explora a criação de animações 2D a partir de imagens estáticas. Não é um produto comercial e não existe uma demonstração web pública da aplicação. O código-fonte está disponível no GitHub.

## Funcionalidades

O protótipo permite importar PNG e WebP, posicionar camadas num editor visual, definir keyframes e controlar tempos numa timeline. Inclui pré-visualização Remotion, referências visuais, biblioteca de projectos local e backups portáteis. A exportação MP4 é executada localmente.

## Decisões técnicas

React, TypeScript e Konva suportam a interface; o motor de animação baseado em JSON é partilhado pelo Player e pelo renderizador Remotion. O IndexedDB guarda os projectos e as imagens no navegador. Os backups mantêm as referências visuais separadas dos assets do vídeo.

## Limitações

Não existe instalador Windows. A exportação depende do servidor de desenvolvimento local e de um navegador compatível; o armazenamento depende do perfil do navegador. A edição individual de elementos dentro de grupos e o áudio ainda não estão disponíveis. As dependências mantêm as suas próprias condições de licenciamento.
