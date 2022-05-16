import React, { Fragment, useState } from "react";
import TareaForm from "./TareaForm";
import "../css/listatareas.css";
import Tarea from "./Tarea";

export default function ListaTareas() {
  //hook
  const [tareas, setTareas] = useState([]);

  //agrega tarea creando un array nuevo con esos tres puntos
  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  ///elimina por filter
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  ///en un mapeo remapea el de la id seleccionada
  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <Fragment>
      <TareaForm onSubmit={agregarTarea}></TareaForm>
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </Fragment>
  );
}
