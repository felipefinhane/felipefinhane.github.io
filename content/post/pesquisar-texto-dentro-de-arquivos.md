---
title: "Pesquisar Texto Dentro De Arquivos"
date: 2017-09-19T22:22:22-03:00
draft: false
toc: true 
comments: false
categories:
- Linux
tags:
- Linux
- Bash
- Shell
---


<!--more-->
O comando abaixo é um exemplo da pesquisa da palavra TESTE dentro dos arquivos da pasta atual.

<pre>
$ find ./* -type f -exec grep -l TESTE {} \;
</pre>
