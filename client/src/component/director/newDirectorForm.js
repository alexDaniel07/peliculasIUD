import React, {useEffect} from "react";

export const NewDirectorForm = (props) => {
  let [nombre, setNombre] = React.useState();
  let [estado, setEstado] = React.useState();
  let [fechaCreacion, setfechaCreacion] = React.useState();
  let [fechaActualizacion, setfechaActualizacion] = React.useState();
  let [error, setError] = React.useState();





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let director = new FormData();
      director.append('nobre', nombre);
      director.append('estado', estado);
      director.append('fechaCreacion', fechaCreacion);
      director.append('fechaActualizacion', fechaActualizacion);

      const request =  {
        method: "POST",
        body: JSON.stringify({director}),
        headers: {"Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Origin": "*", "http://localhost:5101": "*", "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Access-Control-Allow-Credentials": "true",},
      };
      const data = await request.json();
      console.log(data);
      await fetch('http://localhost:5101/users/creaDirector', data)
          .then(response => response.json())
          .then(json => console.log(json))
          .catch(err => console.log(err))
          .finally()
    }
    catch (error)
    {
      setError(error.message);
    }
  };



  return (
      <div>

        <h1>Formulario de Creacion de Directores</h1>

          <form onSubmit={handleSubmit}>
            {console.log(handleSubmit)}
            <div className="mb-3">
              <label htmlFor=" " className="form-label"></label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  aria-describedby="nombre"
                  onChange={(e) => setNombre(e.target.value)}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor=" " className="form-label"></label>
              <input
                  type="text"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="estado"
                  onChange={(e) => setEstado(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=" " className="form-label"></label>
              <input
                  type="date"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="Fecha de Creacion"
                  onChange={(e) => setfechaCreacion(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="" className="form-label"></label>
              <input
                  type="date"
                  className="form-control"
                  aria-describedby="estado"
                  placeholder="Fecha de Creacion"
                  onChange={(e) => setfechaActualizacion(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>


  )
      ;
}

