import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={()=> props.apresentaGaragem(props.nome)}>Apresentar a garagem</button>
      <Carro carro = {props.carro1}/>
      <Carro carro = {props.carro2}/>
      {/* <h1>Garagem da {props.nome}</h1>
      <button onClick={()=> props.apresentaGaragem(props.nome)}>Apresentar a garagem</button>
      <Carro carro = {props.carro3}/>
      <Carro carro = {props.carro4}/>
      <Carro carro = {props.carro5}/>
      <Carro carro = {props.carro6}/> */}
      
    </div>
  );
}

export default Garagem;
