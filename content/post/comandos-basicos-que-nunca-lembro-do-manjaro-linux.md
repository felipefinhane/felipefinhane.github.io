---
title: "Comandos Básicos Que Nunca Lembro Do Manjaro Linux"
date: 2017-07-27T22:22:22-03:00
draft: false
toc: true
comments: true
categories:
- Linux 
tags:
- linux
- manjaro
---


<!--more-->
Sempre que preciso de um comando específico ou então atualizar o sistema ou determinada aplicação tenho que procurar em alguma das minhas anotações (físicas ou digitais), pois são comandos que não utilizo com frequência como por exemplo o “ll” que a propósito utilizo alias de “ls -l” por preguiça. Segue um apanhado que fiz pelas pesquisas na web, e com certeza alguns deles nem testei, caso encontrem falhas favor me avisar:

<pre>


# Sincroniza os repositórios.
$ pacman -Sy

# Procura por atualização.
$ pacman -Su

# Sincroniza os repositórios/procura por atualização.
$ pacman -Syu

# Sincroniza os repositórios do Manjaro Linux.
$ pacman -Syy

# Sincronização total/procura por atualização.
$ pacman -Syyu

# Instala um pacote;
$ pacman -S pacote

# Remove um pacote.
$ pacman -R pacote

# Remove o pacote junto com as dependências não usadas por outros pacotes.
$ pacman -Rs pacote

# Remove o pacote junto com as dependências não usadas por outros pacotes e junto com os arquivos de configuração.
$ pacman -Rsn pacote

# Procura por um pacote.
$ pacman -Ss pacote

# Apenas baixa o pacote e não o instala.
$ pacman -Sw pacote

# Mostra informações de um pacote não instalado.
$ pacman -Si pacote

# Mostra informações do pacote já instalado.
$ pacman -Qi pacote

# Instala apenas as dependências.
$ pacman -Se pacote

# Mostra todos os arquivos pertencentes ao pacote.
$ pacman -Ql pacote

# Mostra os pacotes que serão atualizados.
$ pacman -Qu

# Lista todos os pacotes instalados.
$ pacman -Q

# Mostra a qual pacote aquele arquivo pertence.
$ pacman -Qo arquivo

# Deleta do cache todos os pacotes antigos.
$ pacman -Sc

# Instala um pacote local.
$ pacman -A arquivo.pkg.tar.gz

# Limpa o cache, removendo todos os pacotes existentes no /var/cache/pacman/pkg/.
$ pacman -Scc

#  Otimiza a base de dados do pacman.
$ pacman-optimize

#  Instala ignorando as dependências.
$ pacman -Sdd

# Elimina um paquete ignorando las dependências.
$ pacman -Rdd

# Para gerenciar pacman.cof
$ pacman-mirrors.conf

# Para gerar um novo mirrorlist
$ pacman-mirrors -g

# Instalar pacotes baixados
$ pacman -U

# Desinstala pacotes e suas dependencias e seus registros, tudo.
$ pacman -Rscn

# Instala o pacote sem precisar confirmar com "yes/no ,S/N"...
$ pacman -S pacote --nonconfirm

# Sincroniza os repositórios/procura por atualização e ignora os grupos dos pacotes solicitados.
$ pacman -Syu --ignoregroup pacote1 , pacote2...

</pre>
