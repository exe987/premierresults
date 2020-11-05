import React, { useReducer, useEffect } from "react";
import DataReducer from "./DataReducer";
import DataContext from "./newsContext";
import axios from "axios";
import { LIVE_SCORES } from "../../types";

const DataState = (props) => {
  //INITIAL STATE
  const initialState = {
    teams : []
  };

  //REDUCER
  const [state, dispatch] = useReducer(DataReducer, initialState);

  //GET TEAMS
  const geatTeams = async => {
     
  }
  

  return (
    <DataContext.Provider value={{
      teams: state.teams
    }}>{props.children}</DataContext.Provider>
  );
};

export default NewsState;