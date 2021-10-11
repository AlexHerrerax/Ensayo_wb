import React from 'react'
import { useState } from 'react'

const FormularioLista = () => {

    const [tarea, setTarea] = useState("");
    const [lista, setlista] = useState([]);
    const [contador, setContador] = useState(0);
    const [editarLista, setEditarLista] = useState(false)

    


    const enviarDatos = (e) => {
        setContador(contador + 1)
        e.preventDefault();

        if (!tarea.trim()) {
            console.log("Falta");
            return;
        }



        setlista([...lista, { id: contador, nombreTarea: tarea }])

        //e.target.reset();
        setTarea("");

      
        }

  const eliminar = (id) =>{
      console.log(id);

      const filtrado = lista.filter(item => item.id !==id )
      console.log(filtrado);
      setlista(filtrado)
    }

    const editar = (item) =>{

        setEditarLista(true);
        console.log(item);
        setTarea(item.nombreTarea)
        
      
    }

    return (
        <>

            <div className="container">
                <h1 className="text-center mb-4">Crud Simple</h1>
                <div className="row">
                    <div className="col-7 border">
                        <h4 className="text-center mb-4">Lista de tareas</h4>

                        <ul className="list-group">


                            {
                                lista.length === 0
                                    ? <>  <span className="lead">No hay tareas</span> </>
                                    : (
                                        lista.map((item) => (

                                            <li className="list-group-item " key={item.id}>
                                                <span className="lead">{item.nombreTarea}</span>
                                                <button type="button" className="btn btn-danger float-end mx-2" onClick={()=>eliminar(item.id)}>Eliminar</button>
                                                <button type="button" className="btn btn-warning float-end" onClick={() => editar(item)}>Editar</button>

                                            </li>

                                        ))
                                    )


                            }



                        </ul>


                    </div>

                    <div className="col-5 border">


                        <h4 className="text-center">{editarLista ? "Editar tarea" : "Agregar tarea"}</h4>


                        <form onSubmit={enviarDatos}>
                            <input
                                type="text"
                                className="form-control mt-3 mb-2"
                                placeholder="Ingrese Tarea"
                                onChange={(e) => setTarea(e.target.value)}
                               value={tarea}
                            />
                           {
                               editarLista ? ( <button type="submit" className="btn btn-warning ">Editar</button>) :
                               ( <button type="submit" className="btn btn-primary ">Agregar</button>)
                           }
                            
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormularioLista
