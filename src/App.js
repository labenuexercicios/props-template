import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  function apresentaGaragem (){
    alert('Bem-vinde à Garagem da Thamiris')
  }
  return (
    <div>
      <Garagem nome={"Thamiris"} mensagemApresentacao = {apresentaGaragem}/>
    </div>
  );
}
