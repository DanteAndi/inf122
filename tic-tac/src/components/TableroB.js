import React from 'react';
import '../style/Tablero.css';
import CuadroB from './CuadroB';
import { useState } from 'react';

function TableroB() {
    const [ valor, setValor] = useState("X");
    const click = () => {
        if(valor=="X"){
            setValor("O");
        }else{
            setValor("X")
        }
    }
    return (
        <div className="tablero">
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
            <CuadroB valor={valor} funcion={click} />
        </div>

    );
}
export default TableroB;