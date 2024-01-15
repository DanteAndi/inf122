import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const[show, setshow]= useState(true);
  const mostrar=()=>{ setshow (!show);}
  const [nroClicks, setNumClicks] = useState(0);
  const clickMas3 = () => {
    setNumClicks(nroClicks + 3);
  }
  const clickMenos3 = () => {
    setNumClicks(nroClicks - 3);
  }
  const clickMas1 = () => {
    setNumClicks(nroClicks + 1);
  }
  const clickMenos1 = () => {
    setNumClicks(nroClicks - 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <div className='contendedor-botones-numeros'>
          <Boton texto="-3" esBotonClick={true} funcionClick={clickMenos3}/>
          <Boton texto="+3" esBotonClick={true} funcionClick={clickMas3}/>
          <Boton texto="-1" esBotonClick={true} funcionClick={clickMenos1}/>
          <Boton texto="+1" esBotonClick={true} funcionClick={clickMas1}/>
          </div>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
          <Boton texto="Mostrar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;