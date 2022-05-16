import React from "react";
import "../css/tarea.css";
import { BsXCircle } from "react-icons/bs";

export default function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div onClick={() => completarTarea(id)} className="tarea-texto">
        {texto}
      </div>

      <div className="tarea-icono-container" onClick={() => eliminarTarea(id)}>
        <BsXCircle className="tarea-icono" />
      </div>
    </div>
  );
}
