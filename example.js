class Titulo extends React.Component {
  constructor() {
    // Posso inserir meu comportamento aqui! 
    
    //Quando o React entrar nessa fase do ciclo de vida 
    // ele vai chamar essa função e meu comportamento será executado
  }

  componentDidMount() {
    // O mesmo vale para outros momentos do ciclo de vida! Chegando aqui, o React chama!
  }

  // Se eu não definir esse método no meu componente, 
  // o React não faz nada além do padrão quando chegar nessa fase.

  //O único método obrigatório de se definir é o `render`!
  render() {
    return (
      <div>
        <p>Sou obrigatório</p>
      </div>
    );
  }
}