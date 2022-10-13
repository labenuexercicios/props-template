function Carro(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <ul>
        <li>cor: {props.cor}</li>
        <li>Ano: {props.ano}</li>
        <li>Flex: {props.flex}</li>
      </ul>
    </div>
  );
}

export default Carro;
