import React from "react";
import Index from "./components/Index";
import InfoLaLiga from "./components/InfoLaLiga";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DataState from "./context/DataState";

function App() {
  return (
    <DataState>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/info" component={InfoLaLiga} />
        </Switch>
      </BrowserRouter>
    </DataState>
  );
}

export default App;
