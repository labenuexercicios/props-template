import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 = "Conway";
  const nome2 = "Galera;"

  const apresentaGaragem = (nomeNaGaragem) =>{
    alert(`Boas vindas a garagem da ${nomeNaGaragem}`)
  }

  const carro1 = {
    nome: "Gol",
    cor: "branco",
    ano: 2015,
    Flex: true
  }

  const carro2 ={
    nome: "Fusca",
    cor: "azul",
    ano: 1985,
    Flex: false
  }

  const carro3 ={
    nome: "Fiesta",
    cor: "Preta",
    ano: 2012,
    Flex: true
  }

  const carro4 ={
    nome: "Ônix",
    cor: "Vermelha",
    ano: 2015,
    Flex: true
  }

  const carro5 ={
    nome: "Ka",
    cor: "Prata",
    ano: 2007,
    Flex: false
  }

  const carro6 ={
    nome: "Palio",
    cor: "Verde",
    ano: 2000,
    Flex: false
  }


  return (
    <div>
      <Garagem 
      nome ={nome1} 
      apresentaGaragem={apresentaGaragem}
      carro1={carro1}
      carro2={carro2}
      />
      <Garagem
      nome={nome2}
      apresentaGaragem={apresentaGaragem}
      carro1={carro3}
      carro2={carro4}
      carro5={carro5}
      carro6={carro6}
      />

    </div>
  );
}
