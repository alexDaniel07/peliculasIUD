// https://medium.com/@anshmunjal/how-to-create-get-and-post-endpoints-in-nodejs-using-expressjs-77fd3953ec38
// post desde el cliente
// https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
// https://drive.google.com/file/d/1U3CuAYskGiI-u03HHIvQllNcbETufV6h/view minuto 1:11:23
// https://drive.google.com/file/d/1AVTz6cYMVVi2DGnOfjnLXo7Ma0z_og0Y/view

import React from 'react';
import {crearDirector, getDirector, updateDirector, getDirectores, deleteDirector} from "../../services/directorServices";
import {NewDirectorForm} from "./newDirectorForm";

export const DirectorView = (props) => {


  return (
      <div>
        <h1>Director</h1>
        <div className="card" style={{width: "18rem"}}>
          <img src=" " className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">text here</p>
          </div>
          {/*<ul className="list-group list-group-flush">
            {error && <li>{error}</li>}z
            {loading && <li>Loading...</li>}
            {data && data.map(user => <li key={user.id}>{user.nombre}</li>)}
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul> */}
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>

        <NewDirectorForm/>
      </div>
  );

}

