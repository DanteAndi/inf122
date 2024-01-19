import React from "react";

function Formulario(){
    const click =(x)=>{
        console.log(x);
    }

    return(
    <div>
        <div className="Usuario">
        <p>Usuraio</p>
        <input type="text" id="usuario"/>
        <p>Contraseña</p>
        <input type="text" id="contraseña"/>
        </div>
        <div className="boton">
            <button funClick={()=>click("Registrar")}text="Registrar">Registrar</button>
            <button funClick={()=>click("Ingresar")}text="Ingresar">Ingresar</button>
        </div>
    </div>
    )
}
export default Formulario;