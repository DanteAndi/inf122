"use client"
import Image from "next/image";
import style from "./foto.module.css";
import { useEffect, useState } from "react";

function foto(){
    const[perrito,setPerrito]=useState("/vercel.svg");
    const[estado, setEstado]=useState("esperando")
    const url="https://pokeapi.co/api/v2/pokemon/raichu";
    useEffect(()=>{
        fetch(url).then(res=>res.json())
        .then(data=>{
            setPerrito(data.sprites.front_default)}); 

    },[]);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito}alt="dog" width={500} height={500}/>
        </div>
    )
}

export default foto;