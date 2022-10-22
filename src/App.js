import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Isaias"
  const carro = {
    nomeDoCarro: "Fusca",
    ano: 1970,
    cor: "Azul",
    flex: false,
    
    }

  const carro2 = {
    nomeDoCarro: "Brasilia",
    ano: 1965,
    cor: "Amarela",
    flex: false,
    
  }

  const carro3 = {
    nomeDoCarro: "Opala",
    ano: 1975,
    cor: "Verde",
    flex: false,
    
  }

  const luxo = {
    nomeDoCarro: "Ferrari",
    ano: 2019,
    cor: "Vermelho",
    flex: false,
    
    }

  const luxo2 = {
    nomeDoCarro: "BMW",
    ano: 2020,
    cor: "Amarela",
    flex: true,
    
  }

  const luxo3 = {
    nomeDoCarro: "Lamborghini ",
    ano: 2022,
    cor: "Verde",
    flex: true,
    
  }
  function apresenta(nome) {

    alert(`Bem vindo a garagem de ${nome} `)
  }

  return (
    <div>
      <Garagem
        nome={" Isaias"}
        carro={carro}
        carro2={carro2}
        carro3={carro3}
        funcao={apresenta}
       
      />
      <Garagem
        nome={" luxo de Isaias"}
        carro={luxo}
        carro2={luxo2}
        carro3={luxo3}
        funcao={apresenta}
       
      />
    </div>
  );
}
