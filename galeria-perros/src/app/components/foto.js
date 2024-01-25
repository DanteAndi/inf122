"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useEffect, useState } from "react";

function foto(){
    const[perrito,setPerrito]=useState("/vercel.svg");
    const[estado, setEstado]=useState("esperando")
    const[habilidad, setHabilidad]=useState("habilidad")
    const url="https://pokeapi.co/api/v2/pokemon/raichu";
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            setPerrito(data.sprites.front_default)
            setEstado(data.species.name)
            setHabilidad(data.abilities[0].ability.name)
        }); 

    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito}alt="dog" width={500} height={500}/>
            <h1>{habilidad}</h1>
        </div>
    )
}

export default foto;