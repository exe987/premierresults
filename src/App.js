import React from "react";
import Header from "./components/Header";
import LastResults from "./components/LastResults";
import DataState from "./context/DataState";
import InfoLaLiga from "./components/InfoLaLiga";

function App() {
  return (
    <DataState>
      <Header />
      <LastResults />
      <div className="columns">
        <InfoLaLiga />
      </div>
    </DataState>
  );
}

export default App;
