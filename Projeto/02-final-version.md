# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Thiago Corgosinho Silva 20.2.8117*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

  O meu trabalho foi feito em Ruby on Rails e Vue.js no Ubunto 20.04 e tem como objetivo criar um sistema de avaliação de mídias, como filmes, livros e séries e comentar o que achou. 

### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->
Implementei basicamente duas tabelas, uma de mídias e uma de usuário.
Na qual a mídia se relaciona com o usuário. Criei componentes para o fazer o cadastro de Usuário e de mídias
  
### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->
Basicamente ficou faltando o CRUD completo, tanto na parte de Usuários, que eu gostaria de criar um pouco mais complexo e com mais informações ( Parecido como implementei no figma ) e também a parte de edição da avaliação.
Faltou também a parte do perfil do usuário
### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->
Implementei algumas verificações bacanas, como o backup no local storage, verificação se já existe usuário, dentre correções de possíveis erros.
A princípio eu ia fazer apenas um usuário, mas resolvi que podem ser adicionados mais de um
### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
O maior desafio foi com toda certeza o tempo, com mais tempo tenho certeza que eu conseguiria implementar tudo que eu gostaria.

### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->
Para rodar o programa o usuário deve possuir na maquina:

- 1- Rails com o ruby:  '2.7.0' -> https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-20-04
- 2- Npm e yarn -> https://edca.com.br/blog/instalando-o-nodejs-e-o-yarn-em-4-passos
- 3- Pgadmin -> https://cursos.alura.com.br/forum/topico-dica-de-como-instalar-pgadmin4-no-ubuntu-167465

Agora, com os requisitos acimas, podemos rodar os scripts para execução do programa:

1-> CONFIGURANDO BACK: 
Entre na pasta 'api' do projeto para rodar os comandos do back:
  - Primeiro comando: bundle ( para instalar as gems da api )
  - Segundo comando: rails db:create ( para criar o banco de dados no pgadmin )
  - Terceiro comando: rails db:migrate ( para rodar as migrações do banco )
  - Quarto comando: rails s ( para rodar o servidor )
  - Pronto, o servidor estará rodando na porta 3000 do localhost

2-> CONFIGURANDO FRONT:
Entre na pasta 'front' do projeto para rodar os comandos do front:
  - Primeiro comando : yarn ou yarn install, para instalar todas as dependências do projeto
  - Segundo comando: yarn serve ( para rodar o backend )
  - Pronto, o front estará rodando na porta 8080 do localhost

Prontinho! Podemos agora mexer na aplicação :)


### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->
