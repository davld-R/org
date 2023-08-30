import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  // .map es un elemento que solo funciona en los arreglos
  // Método map -> arreglo.map( (equipo, index) => {
  //   return <option></option>
  // });

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        // La key es única. No se puede repetir
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
