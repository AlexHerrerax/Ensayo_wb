import React from 'react'
import { useState } from 'react';
import './formulario.css';



const Formulario = () => {


    const [fruta, setFruta] = useState("");
    const [descripcion, setDescripcion] = useState("")

    const [lista, setLista] = useState([])

    const enviarDatos = (e) => {
        e.preventDefault();


        if (!fruta.trim()) {
            console.log("Falta fruta");
            return;
        }

        if (!descripcion.trim()) {
            console.log("Falta descripcion");
            return;
        }

        console.log("Enviando datos");

        setLista([...lista, { nombreFruta: fruta, nombreDescripcion: descripcion }])
        e.target.reset();
        setFruta("");
        setDescripcion("");




    }

    return (

        <>

            <div className="container">
                <div className="row">
                    <div className="col-5">

                        <h2>Formulario</h2>

                        <form onSubmit={enviarDatos}>
                            <input autoFocus className="form-control mb-2" type="text" placeholder="Ingrese fruta" onChange={e => setFruta(e.target.value)} />

                            <input className="form-control mb-2" type="text" placeholder="Ingrese fruta" onChange={e => setDescripcion(e.target.value)} />

                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </form>

                        <h3 className="mt-5">Lista de frutas</h3>




                    </div>

                    <div className="row">
                        <div className="col-12">
                            {
                                lista.map((item,index) =>(
                                    <h4 key={index}> - {item.nombreFruta} - {item.nombreDescripcion}</h4>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>


        </>



    )
}

export default Formulario

