
import{BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Header } from "./component/ui/header";
import { MediaView } from "./component/media/mesiaWiew";
import { GeneroView } from "./component/genero/generoWiew";
import { ProductoraView } from "./component/productora/productoraWiew";
import { DirectorView } from "./component/director/DirectorView";
import { TipoView } from "./component/tipo/tipoWiew";
import { UseFetch } from "./fetch/fetch";

import React from "react";

const App = ()=>{


  const {data, loading} = UseFetch(
      'http://localhost:3000/users/director'
      //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
      //var url = "https://example.com/profile";
      // var data = { username: "example" };
      //
      // fetch(url, {
      //   method: "POST", // or 'PUT'
      //   body: JSON.stringify(data), // data can be `string` or {object}!
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => res.json())
      //   .catch((error) => console.error("Error:", error))
      //   .then((response) => console.log("Success:", response));
  );

  return(
      <Router>
        <Header />
        <DirectorView />
        <Switch>
          <Router exact path='/' compoonent={< MediaView />} />
          <Router  path='/genero' compoonent={ <GeneroView/>} />
          <Router  path='/productora' compoonent={ <ProductoraView />} />
          <Router  path='/director' compoonent={ <DirectorView />} />
          <Route  path='/tipo' compoonent={ <TipoView />} />
        </Switch>
      </Router>

      )

}

export {
  App
}