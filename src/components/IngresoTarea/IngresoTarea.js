import React from 'react'
import "./IngresoTarea.css"


export default function IngresoTarea({ onAdd }) {
  const [Tarea, setTarea] = React.useState('')

  function handleAdd(Tarea) {

    if (!Tarea) return;
    onAdd(Tarea);
    setTarea("");
  }

  return (
    <div className="container-nuevo">
    <div className="container">
      <input
        className="form-control"
        placeholder="Ingrese su tarea"
        type="text"
        value={Tarea}
        onChange={(e) => setTarea(e.target.value)} />
      <button
        className="btn btn-outline-primary"
        onClick={() => handleAdd(Tarea)}>

        Agregar
      </button>
    </div>
    </div>
  )
}
