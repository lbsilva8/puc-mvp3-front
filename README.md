<h1 align="center">Front-end Lista de séries para assistir</h1>

<p align="center">
 <a href="#descricao">Descrição do projeto</a> •
 <a href="#executar">Como executar</a> • 
 <a href="#funcionalidades">Funcionalidades</a> • 
 <a href="#autor">Autor</a>
</p>

---

##  Descrição do projeto

MVP para a disciplina de Full Stack avançado da pós-graduação em Desenvolvimento Full Stack da PUC-RJ. <br>
Foi desenvolvida um front-end de uma whishlist onde o usuário adicionará os dados a sua lista de desejos e podera ver a lista atualizada, bem como pesquisar animes atravez de uma api externa. 

*A API relacionada a essa aplicação está disponível no link:* [https://github.com/lbsilva8/puc_mvp_3_api](https://github.com/lbsilva8/puc_mvp_3_api)

*API externa usada: https://kitsu.docs.apiary.io/# (Anime discovery platform), será utilizado a rota GET https://kitsu.io/api/edge/

## Como executar:

- Clonar o repositório ou realizar o download do mesmo;

- Executar o Front:
```
$ yarn dev
```

- Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:3000/#/) no navegador.

- Após isso, rodar a api relaciona para que o banco de dados seja ativo: https://github.com/lbsilva8/puc_mvp_3_api

## Como executar através do Docker:

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal e seus arquivos de aplicação e
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t puc_mvp_3_front .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 3000:3000 puc_mvp_3_front
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:3000/#/) no navegador.

Após isso, rodar a api relaciona através do docker para que o banco de dados seja ativo: https://github.com/lbsilva8/puc_mvp_3_api

## Funcionalidades

- [x] Página Home
- [x] Página de cadastro de séries
- [x] Página que mostra todos os dados cadastrados e possibilita a exclusão de séries
- [x] Página que mostra todos os dados da categoria anime e possibilita a exclusão de dados
- [ ] Cadastro de avaliação/comentários


### Autor
---

<a>
 <sub><b>Lorena Borges</b></sub></a>


Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Lorena-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lorenadasilvaborges/)](https://www.linkedin.com/in/lorenadasilvaborges/) 
[![Gmail Badge](https://img.shields.io/badge/-sborges.lorena@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:sborges.lorena@gmail.com)](mailto:sborges.lorena@gmail.com)


 🚧  Em construção  🚧
