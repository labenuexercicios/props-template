import Carro from "./Carro";

function Garagem() {
  return (
    <div>
      <h1>Garagem de Indio</h1>
      <Carro nome='Gol' cor='azul' ano = '2006' flex='não'/>
      <Carro nome='fusca' cor='amarelo' ano = '1999' flex='não'/>
      <Carro nome='Kombi' cor='branco' ano = '2010' flex='não'/>
      <Carro nome='Fit' cor='prata' ano = '2019' flex='sim'/>
    </div>
  );
}

export default Garagem;
