import React from 'react'

export default function Tareas({
    nombreTarea,
    onEliminar,
    estaCompletada,
    onTareaCompletada }) {

    return (
        
        <div className="container">
            <span className="form-control" form-control >{nombreTarea}</span>
            <div class="input-group-text">
                <input type="checkbox"
                    className="form-check-input mt-0"
                    checked={estaCompletada}
                    onChange={onTareaCompletada} />
            </div>
            <button className="btn btn-outline-danger" type="button" onClick={onEliminar}>X</button>
        </div>
    )
}
