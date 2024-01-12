import './App.css';
import Evento from'./components/Evento.js';

function App() {
  return (
    <div className="App">
      <Evento/>
      <EventoB title="Py Pizza 03-PyPuzzle"
      image="evento1"
      dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
      placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
      description="Participa en este Evento Presencial de la comunidad Python La Paz
      ¿Cuánto conoces de Python?
      Aprende a trabajar en equipo resolviendo increíbles acertijo
      ¡Anímate a ser parte de esta actividad!"/>
    </div>
  );
}

export default Evento;
