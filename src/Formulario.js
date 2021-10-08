import React from 'react'
import { useState } from 'react'

const Formulario = () => {

    const[fruta, setFruta] = useState("") 
    const[Descripcion, setDescripcion] = useState("");

    const guardarDatos = (e) =>{
        e.preventDefault();
        console.log("Enviando datos");

        if(!fruta.trim){
            console.log("Ingrese dato en fruta");
        }
    }

  


    return (
        <div className="container">

            <h2>Formulario</h2>

            <form onSubmit={guardarDatos}>

            <input onChange={(e) => setFruta(e.target.value)} type="text" className="form-control mb-2" placeholder="Ingrese fruta" />
            <input onChange={(e) => setDescripcion(e.target.value)} type="text" className="form-control mb-2" placeholder="Ingrese Descripcion" />

            <button type="submit" className="btn btn-primary btn-block">Agregar</button>



            </form>
            
        </div>
    )
}

export default Formulario
