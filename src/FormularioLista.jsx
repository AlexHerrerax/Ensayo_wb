import React from 'react'
import { useState } from 'react'


const FormularioLista = () => {


const [tarea, setTarea] = useState("");
const [lista, setLista] = useState([]);
const [contador, setContador] =useState(0);
const [estadoEditar, setestadoEditar] = useState(false);
const [idUnico, setIdUnico] = useState("");
const [error, setError] = useState(null);




const enviarDatos = (e) =>{
    
e.preventDefault();
if (!tarea.trim()){
        console.log("Ingrese dato");
        setError("Ingrese tarea")
        return;
    }

setContador(contador+1);
setLista([...lista,{id:contador, nombreTarea:tarea}])
setTarea("");
setError(null)
}


const eliminar = (id) =>{
const filtrado = lista.filter(item => item.id !==id);
setLista(filtrado);
}

const editar =(item) =>{
    setestadoEditar(true)
    setTarea(item.nombreTarea)
    console.log(item.nombreTarea);
    setIdUnico(item.id)
    
    
}

const cambio =(e) =>{
    e.preventDefault();
if (!tarea.trim()){
        console.log("Ingrese dato");
        setError("Ingrese tarea")
        return;
    }

    
   const recorrido = lista.map(item =>(
       item.id === idUnico ? {id:idUnico, nombreTarea:tarea} : item
   ))    
setLista(recorrido);
setestadoEditar(false);
setTarea("");
setError(null)

}
    


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-7 ">
                        <h2 className="text-center mb-4">Lista de tareas</h2>
                        <ul className="list-group">

                            {/* COMIENZA LISTA DE TAREAS */}

                             {
                                 lista.length===0
                                 ?
                                 <span className="lead border p-1">No hay tareas</span>
                                :

                                 lista.map((item) => (
                                    
                             <li className="list-group-item" key={item.id}>
                             <span className="lead">{item.nombreTarea}</span>

                             <button className="btn btn-warning float-end mx-3" onClick={()=>editar(item)}>Editar</button>

                             <button className="btn btn-danger float-end" onClick={()=>eliminar(item.id)}>Eliminar</button>
                             </li>

                                ))

                             }                       

                            

                             {/* FINALIZA LISTA DE TAREAS */}
                        </ul>
                    </div>

                    <div className="col-5 ">

                       {/*  COMIENZA INGRESO DE TAREA */}
                        <h2 className="text-center mb-4">Agregar tarea</h2>
                        {error && <span className="text-danger">{error}</span> }
                        <form onSubmit={enviarDatos}>
                            <input  onChange={(e) =>  setTarea(e.target.value)} value={tarea}  type="text" className="form-control mb-3" />

                            {estadoEditar ?
                            
                             <button type="submit" className="btn btn-info" onClick={(e) =>cambio(e)}>Editar</button>

                            : 
                            <button type="submit" className="btn btn-primary">Agregar</button>
}
                        </form>
                        {/*  FINALIZA INGRESO DE TAREA */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormularioLista
