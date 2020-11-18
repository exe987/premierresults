import React from "react";
import Header from "./components/Header";
import LastResults from "./components/LastResults";
import DataState from "./context/DataState";
import InfoLaLiga from "./components/InfoLaLiga";
import News from './components/News'


function App() {
  return (
    <DataState>
      <Header />
      <LastResults />
      <div className="columns">
        <InfoLaLiga />
      </div>
      <News/>
    </DataState>
  );
}

export default App;
