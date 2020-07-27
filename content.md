## Exercício Business Cards

  Nessa aplicação, criaremos um livro de cartões de visita!

  # CardBook

  1 - Crie uma aplicação react utilizando `npx create-react-app business-cards`

  2 - Dentro do componente app crie um modelo de cartão de visita contendo:
    - Seu nome,
    - Um texto de introdução,
    - Seu email,
    - Seu linkedin,
    - Seu telefone,
    - Uma foto sua.
  Obs: Adicione sua foto em uma pasta separada.
  Dica: Observe como o logo do React é importado para o projeto.

  3 - A partir do modelo de cartão, crie, em um novo arquivo, um componente BusinessCard. Renderize esse componente dentro do componente App.

  4 - Faça com que seu componente BusinessCard aceite props das informações pedidas no item 2.

  5 - Crie um arquivo chamado `data.js` e nele, crie um array com vários objetos `pessoa` contendo as informações pedidas no item 2 para cada uma(Pelo menos 5 objetos).
  Obs: Adicione todas as fotos em uma pasta separada.

  6 - Crie, em outro arquivo, um componente CardBook que visualiza todos os cartões existentes. Ele deve utilizar o componente BusinessCard para cada pessoa do `data.js`. Adicione o componente BusinessCard ao componente App.

  # CardViewer

  7 - Crie, em outro arquivo, um componente CardViewer que cicla entre as informações das pessoas do `data.js`.

    - Renderize o componente BusinessCard para um usuário específico do array de pessoas do `data.js`,
    - Adicione um state userIndex que contêm o índice do usuário a ser mostrado,
    - Crie um botão de `próximo` para passar ao proximo cartão,
    - Crie uma função que incrementa o userIndex cada vez que pressionado,
    - Ligue a função anterior ao botão `próximo`,
    - Faça com que o componente após a última pessoa volte a posição inicial.

    Adicione o componente CardViewer ao componente App.

  # UserForm

  8 - Crie, em um novo arquivo um componente UserForm contendo inputs para os itens descritos no item 2. Adicione também um botão para enviar o formulário.

  9 - Adicione a UserForm um state user que será um objeto contendo as informações descritas no item 2.

  10 - Adicione o componente UserForm ao componente CardBook.

  11 - Crie um state `users` no componente CardBook contendo, inicialmente todos elementos do array contido em `data.js`.

  12 - Faça com que o componente CardBook mostre os cards relativos ao state `users` e não do array do arquivo `data.js`.

  13 - Crie uma função no componente CardBook que, dado um novo objeto pessoa (item 9), o adiciona ao state `users`.

  # Frame

  14 - Crie, em um novo arquivo o componente Frame. O componente Frame deve adicionar uma div em volta do que lhe foi passado como `props.children`. A div deve ter as seguinte propriedade CSS `border: 2px solid #000000;`

  # PropTypes

  15 -  Instale prop-types e adicione a todos os props dos componentes anteriormente passados.

  # React Router


  16 - Instale react-router-dom 

  17 - Crie um componente Home que contém links para as rotas:

    - '/cardbook' com o texto CardBook
    - '/cardviewer' com o texto CardViewer
    - '/card/new' com o texto NewCard
  
  No componente App substitua seu conteúdo, criando as rotas:

    - '/' para o componente Home
    - '/cardbook' para o componente CardBook
    - '/cardviewer' para o componente CardViewer
    - '/card/new' para o componente UserForm
    - '/card/:id' para o componente BusinessCard em que o id será o index do cartão mostrado.

  # Bonus(Difícil)

  Crie dois componentes o NewCard e o EditCard que compartilham o componente UserForm. Crie também um componente ShowCard, que contém o componente BusinessCard e um link para a página de edição do card mostrado. 

  Modifique as rotas
  - '/card/:id' para o componente ShowCard em que o id será o index do cartão mostrado.
   - '/card/new' para o componente NewCard

  E adicione 
   - '/card/:id/edit' para o componente EditCard
  