import React from 'react'

export default function Tareas({
    Tarea,
    onEliminar,
    estaCompletada,
    onTareaCompletada})
    {
    
    return (
        <div className="container">
         <span>{Tarea}</span>
         <div class="input-group-text">
        <input type="checkbox" 
        className="form-check-input mt-0"
        checked={estaCompletada}
        onChange={onTareaCompletada} />
        </div>
        <button className="btn btn-outline-primary" type="button" onClick={onEliminar}>X</button>
            
        </div>
    )
}
