import React from "react";
import TableroD from './TableroD';
import { useState } from "react";
function Juego(){
    const [cuadros ,setCuadros]= useState(AuseState(Array(9).fill(null)));    
    const [jugador, setJugador] = useState("O");
    const click = (i) => {
    console.log("por:"+i);
    console.log("turno:", jugador);
    const cuadrosTemp = [...cuadros];
    cuadrosTemp[i] = jugador;

    if(cuadrosTemp[i]===null){
        cuadrosTemp[i]= jugador;
        console.log("array",cuadrosTemp)
        setCuadros(cuadrosTemp)
        setJugador(jugador ==="X"?"O":"X");
        }
    function alHacerClic(i) {
        const nuevoHistorial = historial.slice(0, numeroPaso + 1);
        const actual = nuevoHistorial[nuevoHistorial.length - 1];
        const cuadros = actual.cuadros.slice();
        if (calcularGanador(cuadros) ||
        cuadros[i]) {
            return;
        }
        cuadros[i] = esTurnoDeX ? "X" : "O";
        setHistorial(nuevoHistorial.concat([{ cuadros }]));
        setNumeroPaso(nuevoHistorial.length);
        setEsTurnoDeX(!esTurnoDeX);
    }
        
    }
    return <TableroD cuadros={cuadros} onClick={click}/>
}