import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem da {props.nome}</h1>
      <button onClick={props.mensagemApresentacao} >Clique em mim</button>
    
      <Carro 
      adicionadoPor = {props.nome}
      cor ={"Preto"}
      ano={"2022"}
      flex={"True"}
      />
      <Carro adicionadoPor = {props.nome}
      cor ={"Branco"}
      ano={"2001"}
      flex={"True"}
      />
      <Carro 
      adicionadoPor = {props.nome}
      cor={"Vermelho"}
      ano={"1998"}
      flex={"True"}
      />
      <Carro 
      adicionadoPor = {props.nome}
      cor={"Roxo"}
      ano={"1990"}
      flex={"False"}
      />

      <Carro adicionadoPor = {props.nome}
      cor={"vinho"}
      ano={1995}
      flex={"True"}
      />

      <Carro 
      adicionadoPor = {props.nome}
      cor = {"laranja"}
      ano = {2011}
      flex = {"False"}
      />

      <Carro 
      adicionadoPor = {props.nome}
      cor ={"rosa"}
      ano ={1996}
      flex={"False"}
      />


    </div>
  );
}

export default Garagem;
