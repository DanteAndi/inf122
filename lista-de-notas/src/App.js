import './App.css';
import Nota from './components/Nota';
function App() {
  const onDelete=() =>{
    console.log("Eliminar");
  }
  const onEdit=()=>{
    console.log("Editar");
  }
  return (
    <div className="App">
      <Nota nota="hola" onDelete="onDelete" onEdit="onEdit"/>
    </div>
  );
}

export default App;
