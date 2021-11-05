import React from 'react'

export default function Tareas(
    Tarea,
    onEliminar,
    estaCompletada,
    onTareaCompletada) {
    
    return (
        <div>
         <span>{Tarea}</span>
        <input type="checkbox" 
        checked={estaCompletada}
        onChange={onTareaCompletada} />
        <button type="button" onClick={onEliminar}>X</button>
            
        </div>
    )
}
