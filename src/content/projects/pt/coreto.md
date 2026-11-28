---
locale: pt
kind: Plataforma web com CMS · Projeto pessoal
title: Coreto
translationKey: coreto
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/coreto-demo/
description: Plataforma para bandas filarmónicas mostrarem as datas livres e receberem pedidos de orçamento de comissões de festas, com um painel simples para os dirigentes.
tags: [Next.js, Payload CMS, TypeScript, SQLite, RGPD]
images:
  - src: /images/projects/coreto-site.webp
    width: 1600
    height: 1160
    alt: Página inicial da demonstração do Coreto, com a fotografia de um coreto, a apresentação da plataforma e a pesquisa de bandas livres por dia, distrito e serviço.
  - src: /images/projects/coreto-cms.webp
    width: 1600
    height: 1054
    alt: Início do painel de um dirigente de banda, com os pedidos de orçamento por responder, as próximas datas ocupadas e os atalhos.
---

## Contexto e objetivo

O Coreto é um projeto pessoal de portefólio que parte de uma lacuna real: as comissões de festas contratam bandas filarmónicas por telefone e por conhecimentos, sem saber que bandas estão livres numa data. A plataforma junta a agenda de cada banda, o repertório e os serviços, e permite pedir orçamento. Todas as bandas, localidades e pedidos mostrados são fictícios; os distritos são reais, para a pesquisa fazer sentido.

## Funcionalidades

Pesquisa de bandas livres por dia, distrito e serviço (procissão, arruada, concerto, festival, cerimónia): as bandas com o dia todo ocupado ficam de fora e as ocupadas só numa parte do dia aparecem com essa indicação. Cada banda tem uma agenda dos próximos meses (livre, parcial ou ocupado, em texto e em cor), repertório, notícias, galerias e um formulário de pedido de orçamento. No painel, o dirigente marca datas ocupadas, vê os pedidos por responder no Início e, ao aceitar um pedido, o dia passa automaticamente a ocupado.

## Privacidade e segurança

O único dado pessoal é o nome e o contacto de quem pede orçamento. Os pedidos só entram por código do servidor, com campo isca para robôs, tempo mínimo de preenchimento, limite de envios e validação de todos os campos; só os dirigentes da banda destinatária os veem, o aviso por e-mail à banda não leva dados pessoais e os pedidos são apagados automaticamente ao fim de 12 meses. Um script confirma 24 regras de acesso e de retenção.

## Decisões técnicas

Parte do código do Capítulo (Next.js e Payload CMS com o plugin multi-cliente), adaptado com coleções próprias: datas ocupadas, repertório e pedidos. As ilustrações de exemplo são geradas pelo próprio projeto, sem fotografias de terceiros. A demonstração pública é estática: a pesquisa de bandas livres corre no navegador a partir de dados exportados (sem as notas internas das bandas).

## Limitações

Na demonstração não há painel e o formulário de orçamento está desligado. O código-fonte não é público. O envio real de e-mails e o alojamento em produção (PostgreSQL num servidor na União Europeia) ainda não estão configurados, e a declaração de acessibilidade não foi validada por uma avaliação formal.
