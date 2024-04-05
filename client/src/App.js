import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { Header } from "./component/ui/header";
import { MediaView } from "./component/media/mesiaWiew";
import { GeneroView } from "./component/genero/generoWiew";
import { ProductoraView } from "./component/productora/productoraWiew";
import { DirectorView } from "./component/director/DirectorView";
import { TipoView } from "./component/tipo/tipoWiew";

const App = ()=>{
  return(
      <Router>
        <Header />
        <Switch>
          <Router exact path='/' compoonent={MediaView} />
          <Router exact path='/genero' compoonent={GeneroView} />
          <Router exact path='/productora' compoonent={ProductoraView} />
          <Router exact path='/director' compoonent={DirectorView} />
          <Router exact path='/tipo' compoonent={TipoView} />
        </Switch>
      </Router>

      )

}

export {
  App
}