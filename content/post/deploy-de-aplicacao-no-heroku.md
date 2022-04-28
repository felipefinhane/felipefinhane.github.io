---
title: "Deploy De Aplicação No Heroku"
date: 2018-02-15T22:22:22-03:00
draft: false
toc: false
comments: false
categories:
- Programação
- DevOps
tags:
- NodeJs
- Heroku
- Deploy
---


<!--more-->
Heroku utiliza o conceito PaaS (Plataform as a Service), onde o seu foco é a hospegadem de uma aplicação como serviço, forcenendo uam boa infraestrutura e um menor custo.Devido a isso não é possivel armazenar arquivos ou enviar email a partir do heroku, mas você pode utilizar serviços externos adicionados na sua aplicação.

Com esse conceito o heroku é perfeito para o desenvolvedor que não quer se preocupar com a infraestrutura  pois tudo está pré-configurado e as intalações podem ser feitas de forma visual e o acesso as credenciais  de serviços solicitadas são fornecidas de forma simples e fácil pelo painel de controle.

Esse post é sobre o deploy de duas aplicações:

+ HTML/JS/CSS
+ NodeJs

### Itens necessários para prosseguir:

+ Internet (https://pt.wikipedia.org/wiki/Internet)
+ Conta criada no heroku (https://heroku.com)
+ Git (https://git-scm.com/about)
+ NodeJs (https://nodejs.org/en/)
+ npm (https://www.npmjs.com/)
+ heroku-cli (https://devcenter.heroku.com/articles/heroku-cli)
+ lite-server
+ Express (http://expressjs.com)
+ lite-server: Servidor node baseado no conceito Browser Sync .
+ Procfile : Arquivo de instruções de como o heroku deve trabalhar com a sua aplicação.
+ Process: Variável contendo informacoes do ambiente onde está rodando a aplicação.

### Aplicação HTML/JS/CSS

1. Criar a pasta para o projeto
2. Acessar a pasta criada
3. Criar arquivo index.html
4. npm init
5. npm install lite-server –save (Servidor Basico) – utiliza ferramenta Browser Sync
6. Criar arquivo “.gitignore” e adicionar: “node_modules”
7. Criar Procfile
8. web: ./node_modules/.bin/lite-server -c server.js
9. Criar arquivo server.js

{{< highlight JavaScript >}}

module.exports = {
    port: process.env.PORT
}

{{< / highlight >}}


10. git init
11. git add .
12. git commit -m “First Commit”
13. heroku create NOME DA APLICACAO OPCIONAL
14. git push heroku master
15. No final do build se tudo ocorreu bem será disponibilizado o link de acesso da sua aplicação. Este também pode ser obtido pelo painel de controle do heroku

Obs: A cada novo push a aplicação antiga é apagada e uma nova entra no lugar.

### Aplicação NodeJS

Vou utilizar a mesma aplicação para a explicação  e tranformar em uma aplicação NodeJs. Mas pode ser feito em uma nova.

1. npm install express –save (–save indica que será salva a dependência no arquivo package.json e o heroku vai instalar na hora do build)
2. Criar arquivo index.js

{{< highlight JavaScript >}}

const express = require(‘express’);
const app = express();
const port = process.env.PORT || 3000;
app.get(”, (req, res) => {
res.send(‘Deploy da aplicação NodeJS’)
});
app.listen(port, () => {
console.log(‘Express Funcionando!’);
});

{{< / highlight >}}
3. Alterar Procfile

{{< highlight JavaScript >}}

web: node index.js

{{< / highlight >}}

4. git add .
5. git commit -m “Node application”
6. git push heroku master

No final do build se tudo ocorreu bem será disponibilizado o link de acesso da sua aplicação. Este também pode ser obtido pelo painel de controle do heroku.
