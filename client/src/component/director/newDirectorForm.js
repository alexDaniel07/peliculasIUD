import React from "react";

export const NewDirectorForm = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [fechaCreacion, setfechaCreacion] = React.useState("");
  const [fechaActualizacion, setfechaActualizacion] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const director = {
        nombre,
        estado,
        fechaCreacion,
        fechaActualizacion,
      };
      const response = await fetch("http://localhost:3000/users/creaDirector", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(director),
      });
      const data = await response.json();
      setData(data);
      setSuccess(true);
      setLoading(false);
      setNombre("");
      setEstado("");
      setfechaCreacion("");
      setfechaActualizacion("");
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
      setLoading(false);
    }
  };
  return (
      <div>

        <h1>Formulario de Creacion de Directores</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label"></label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-describedby="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label"></label>
              <input
                  type="text"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" className="form-label"></label>
              <input
                  type="date"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="Fecha de Creacion"
                  value={fechaCreacion}
                  onChange={(e) => setfechaCreacion(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="exampleInputPassword1" className="form-label"></label>
              <input
                  type="date"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="Fecha de Creacion"
                  value={fechaActualizacion}
                  onChange={(e) => setfechaActualizacion(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>


  )
      ;
}

