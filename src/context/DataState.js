import React, { useReducer } from "react";
import DataReducer from "./DataReducer";
import DataContext from "./DataContext";
import axios from "axios";
import { LAST_RESULTS, LIVE_SCORES, TEAMS_LALIGA } from "../types";

const DataState = (props) => {
  const api_key = "6622923f7f86949c6dbcc705b5ab226d";

  //INITIAL STATE
  const initialState = {
    teams: [],
    last_results: [],
    positions: [],
  };

  //REDUCER
  const [state, dispatch] = useReducer(DataReducer, initialState);

  //GET DATA TEAMS
  const getTeams = async () => {
    try {
      const respuesta = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://apiclient.besoccerapps.com/scripts/api/api.php?key=${api_key}&tz=Europe/Madrid&format=json&req=tables&league=1&group=1`
      );
      dispatch({
        type: TEAMS_LALIGA,
        payload: respuesta.data.table,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //GET LAST MATCH RESULTS
  const getLastResults = async () => {
    let date = new Date();
    let dateToday = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    try {
      const respuesta = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://apiclient.besoccerapps.com/scripts/api/api.php?key=${api_key}&tz=Europe/Madrid&format=json&req=matchsday&date=${year}-${month}-8`
      );
    
      dispatch({
        type: LAST_RESULTS,
        payload: respuesta.data.matches,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider
      value={{
        teams: state.teams,
        last_results: state.last_results,
        positions: state.positions,
        getTeams,
        getLastResults,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
