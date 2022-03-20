import React from 'react'
import IngresoTarea from '../IngresoTarea/IngresoTarea';
import Tareas from '../Tareas/Tareas';
import './Contenedor.css';


export default function Contenedor() {


  const [listaTareas, setListaTareas] = React.useState([]);

  function queHacerAlAgregarTarea(tarea) {

    const esTareaDuplicada = Boolean(listaTareas.filter((t) => t.tarea === tarea).length,);


    if (esTareaDuplicada) {
      alert('La tarea ya existe');

      return
    }
    setListaTareas([...listaTareas, { tarea: tarea.toLowerCase(), estaCompletada: false }
    ]);
  }

  function onEliminar(tarea) {
    setListaTareas(listaTareas.filter((t) => t.tarea !== tarea));
  }

  function onTareaCompletada(tarea) {
    const tareaActual = listaTareas.find((t) => t.tarea === tarea);

    const otrasTareas = listaTareas.filter((t) => t.tarea !== tarea);

    setListaTareas([
      ...otrasTareas,
      { tarea: tareaActual.tarea, estaCompletada: !tareaActual.estaCompletada }
    ]);
  }

  return (

    <div className="Contenedor">
      <IngresoTarea onAdd={queHacerAlAgregarTarea} />
      <ul>

        {listaTareas.map((tarea) => (
          <Tareas

            key={tarea.tarea}
            nombreTarea={tarea.tarea}
            onTareaCompletada={() => onTareaCompletada(tarea.tarea)}
            onEliminar={() => onEliminar(tarea.tarea)}
            estaCompletada={tarea.estaCompletada}
          />
        ))}
      </ul>
    </div>
  );
}
