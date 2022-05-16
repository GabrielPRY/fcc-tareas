import React, { useState } from "react";
import "../css/tareaform.css";
import { v4 as uuidv4 } from "uuid";

export default function TareaForm(props) {
  const [input, setInput] = useState("");

  ///maneja el cambio con el onchange, maneja un cambio en el texto del input
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  ///maneja el envio con el onsubmit y luego se envia como prop
  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Inserta tu tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button type="submit" className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  );
}
