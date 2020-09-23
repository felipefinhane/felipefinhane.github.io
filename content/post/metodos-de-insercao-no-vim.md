---
title: "Métodos de inserção no VIM"
date: 2019-08-23T00:37:49-03:00
draft: false
toc: false
comments: false
categories:
- Linux
tags:
- Linux
- Vim
- Texto
- Programação
---


<!--more-->

Abaixo alguns modos de inserção para ser utilizado no Vim

## Inserção
| i | Ativa modo inserção                           |
| a | Ativa modo de inserção um caracter a frente   |
| I | Ativa modo de inserção no início da linha    |
| A | Atica modo de inserção no final da linha      |
| o | Ativa modo de inserção na linha de baixo      |
| O | Ativa modo de inserção na linha de cima       |
| S | Apaga a linha toda e ativa modo de inserção   | 

## Copiar, Recortar/Remover e Colar
|   yy  |   Copia a linha inteira   |
|   dd  |   Recorta/Remove  a linha inteira |

* Se desejar realizar as operações acima em mais linha basta digitar a quantidade de linhas que deseja.
Exemplo com 3 linhas

|   3yy |   Copia a linha atual e mais 2 abaixo |
|   3dd |   Recorta/Remove a linha atual e mais 2 abaixo    |
|   p   |   Cola na posição do cursor o que foi copiado/recortado   |

## Sair, Salvar e Abrir Arquivos

|   :q                      |   Sair do Vim             |
|   :q!                     |   Sair sem salvar do Vim  |
|   :wq                     |   Salvar e depois sair    |
|   :w CAMINHO DO ARQUIVO   | Salvar o atual arquivo em outro local ou outro nome   | 
|   :x                      |   Salvar e depois sair    | 
|   Shift + zz              | Salvar e depois sair  |
|   :e CAMINHO DO ARQUIVO   |   Abre um arquivo no Vim  | 
|   :r CAMINHO DO ARQUIVO   |   Carreta o conteúdo do arquivo selecionado no arquivo atual e na posição do cursor |
