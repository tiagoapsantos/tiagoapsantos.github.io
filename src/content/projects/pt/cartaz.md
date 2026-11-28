---
locale: pt
kind: Ferramenta web · Projeto pessoal
title: Cartaz
translationKey: cartaz
caseStudy: true
demoUrl: https://tiagoapsantos.github.io/cartaz-app/
description: Ferramenta no navegador que, a partir de um único formulário, gera o cartaz A4, as publicações e o story para as redes sociais, a capa do Facebook e o texto de um evento, acessíveis e em português.
tags: [TypeScript, Vite, SVG, Design, Acessibilidade]
images:
  - src: /images/projects/cartaz-ferramenta.webp
    width: 1600
    height: 1160
    alt: Página do Cartaz com os materiais gerados para um evento de exemplo no estilo Festivo, com contraste e tamanho de letra indicados em cada formato.
  - src: /images/projects/cartaz-estilos.webp
    width: 1600
    height: 1160
    alt: Os mesmos materiais nos três estilos (Clássico, Festivo e Moderno) e nos cinco formatos, de cartaz A4 a capa do Facebook.
---

## Contexto e objetivo

Associações, bandas, confrarias e comissões de festas refazem o mesmo cartaz em vários tamanhos para imprimir e para as redes sociais. O estudo de mercado mostrou que as ferramentas existentes redimensionam o design, mas não reorganizam a informação (a data e o local ficam cortados) e tratam a acessibilidade como um passo à parte. O Cartaz parte dessa lacuna: um formulário, todos os formatos, em português, para quem não sabe design.

## Funcionalidades

Preenche-se uma vez o evento (até três dias, local, programa, entrada, organização, logótipo e fotografia) e aparecem lado a lado cinco formatos: cartaz A4, publicação e story do Instagram, capa de evento do Facebook e imagem quadrada. Cada formato tem a sua paginação: o story leva o programa em lista e deixa livres as zonas tapadas pela interface; a capa do Facebook mostra só o essencial. Há três estilos (Clássico, Festivo e Moderno), cor à escolha e texto da publicação gerado em versão curta e longa. Descarrega-se cada formato em PNG, tudo num ZIP ou o cartaz A4 em PDF.

## Design e acessibilidade

A cor do texto (branco ou escuro) é escolhida sozinha para ter contraste suficiente; o paginador escolhe o maior tamanho de letra que cabe e garante um mínimo legível à largura a que cada formato é visto (telemóvel ou papel). Cada formato mostra o contraste e a letra mais pequena, avisa quando o texto é longo demais e o texto alternativo das imagens é gerado a partir dos dados. A própria página foi verificada com o axe (WCAG 2.1 A e AA).

## Decisões técnicas

Vite e TypeScript, sem servidor nem base de dados: o evento fica no armazenamento do navegador e pode ser guardado num ficheiro. Os modelos são SVG com texto real; as letras (Archivo, Fredoka e Space Grotesk, licença livre) são incorporadas nas imagens exportadas, para ficarem iguais em qualquer computador. Ficheiros importados são validados e o texto do utilizador é sempre escapado. Testes automáticos com o Vitest.

## Limitações

Não há edição livre (arrastar elementos), nem publicação direta nas redes. O PDF é criado pela impressão do navegador. O código-fonte não é público.
