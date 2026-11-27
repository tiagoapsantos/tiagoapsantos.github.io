---
locale: pt
kind: Plataforma web com CMS · Projecto pessoal
title: Capítulo
translationKey: capitulo
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/capitulo-demo/
sourceUrl: https://github.com/tiagoapsantos/capitulo-cms
description: Plataforma de sites para confrarias gastronómicas e a sua federação, com um painel de gestão (CMS) multi-cliente pensado para quem não é técnico.
tags: [Next.js, Payload CMS, TypeScript, SQLite, Multi-tenant]
video:
  src: /videos/capitulo-painel.webm
  poster: /images/projects/capitulo-cms.webp
  title: Demonstração do painel do Capítulo — abrir o Início, marcar um evento, publicar e vê-lo no site.
  width: 1280
  height: 800
images:
  - src: /images/projects/capitulo-site.webp
    width: 1600
    height: 1160
    alt: Página inicial da demonstração do Capítulo, com fotografia de uma aldeia de pedra, apresentação da plataforma e os sites das confrarias de exemplo.
  - src: /images/projects/capitulo-cms.webp
    width: 1600
    height: 1160
    alt: Início do painel de gestão com saudação, atalhos para as tarefas mais comuns e lista de alterações recentes.
---

## Contexto e objectivo

O Capítulo é um projecto pessoal de portefólio: uma plataforma onde cada confraria gastronómica tem o seu próprio site e todas são geridas num só painel. Quem atualiza os sites são dirigentes voluntários, por isso o painel tinha de ser simples. Todas as organizações, produtos e conteúdos mostrados são fictícios; as fotografias vêm do Unsplash.

## Funcionalidades

Cada confraria tem página inicial, notícias, capítulos e eventos com programa, o produto que defende, receitas, galerias, órgãos sociais, documentos e contactos, com cor e emblema próprios. O site da federação junta automaticamente num calendário comum os eventos que as confrarias partilham. O painel tem atalhos para as tarefas mais comuns, rascunhos, botão "Ver no site" e um manual curto.

## Decisões técnicas

Next.js e Payload CMS num só projecto, com o plugin oficial multi-cliente: cada organização é um inquilino e os conteúdos ficam separados. Há quatro perfis (administrador, gestor da federação, gestor de confraria e editor) com regras de acesso verificadas por script. O painel foi traduzido para português de Portugal. O site público não tem formulários nem contas de visitantes, o que reduz os dados pessoais ao mínimo e permite gerar uma versão estática.

## Limitações

A demonstração pública é uma versão estática do site (sem o painel de gestão), gerada a partir do projecto; o código-fonte está disponível no GitHub para consulta (todos os direitos reservados). Em desenvolvimento usa SQLite; para produção está prevista a passagem para PostgreSQL num alojamento na União Europeia. A declaração de acessibilidade ainda não foi validada por uma avaliação formal.
