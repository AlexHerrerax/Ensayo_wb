
import { useState } from 'react';
import './App.css';

function App() {



  const objeto = [

    {id: 1, texto: "tarea 1"},
    {id: 2, texto: "tarea 2"},
    {id: 3, texto: "tarea 3"}

  ]

  const arreglo = [1,2,3,4,5]

  const [nuevoObjeto, setObjeto] = useState(objeto)

const agregar = () =>{

  setObjeto([...nuevoObjeto, {id:2, texto:"adsf"}])

}

  return (
    <>

    <button onClick={agregar}>Agregar tarea</button>

   {
     nuevoObjeto.map((item, index) => <h4 key={index}>{item.texto}</h4>)
   }



    </>
  );
}

export default App;
