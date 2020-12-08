import React, { useReducer } from "react";
import DataReducer from "./DataReducer";
import DataContext from "./DataContext";
import axios from "axios";
import { LAST_RESULTS, TEAMS_LALIGA, LAST_NEWS, READ_NOTICE } from "../types";

const DataState = (props) => {
  //INITIAL STATE
  const initialState = {
    teams: [],
    last_results: [],
    news: [],
    notice: [],
  };
  //REDUCER
  const [state, dispatch] = useReducer(DataReducer, initialState);
  //GET DATA TEAMS
  const getTeams = async () => {
    const api_key = "6622923f7f86949c6dbcc705b5ab226d";
    try {
      const respuesta = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://apiclient.besoccerapps.com/scripts/api/api.php?key=${api_key}&tz=Europe/Madrid&format=json&req=tables&league=1&group=1`
      );

      if (respuesta) {
        dispatch({
          type: TEAMS_LALIGA,
          payload: respuesta.data.table,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //GET LAST MATCH RESULTS
  const getLastResults = async () => {
    const api_key = "6622923f7f86949c6dbcc705b5ab226d";
    let date = new Date();
    let dateToday = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    try {
      const respuesta = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://apiclient.besoccerapps.com/scripts/api/api.php?key=${api_key}&tz=Europe/Madrid&format=json&req=matchsday&date=${year}-${month}-${dateToday}`
      );
      if (respuesta.data.matches.length > 0) {
        dispatch({
          type: LAST_RESULTS,
          payload: respuesta.data.matches,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //GET NEWS
  const getNews = async () => {
    let date = new Date();
    let dateToday = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    try {
      const respuesta = await axios.get(
        `http://newsapi.org/v2/everything?q=españa&from=${year}-${month}-${dateToday}&sortBy=publishedAt&apiKey=7e93fe1edf43447eb16013e24bb46f62`
      );
      if (respuesta) {
        dispatch({
          type: LAST_NEWS,
          payload: respuesta.data.articles,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //FIND NOTICE BY ID
  const readNotice = (id) => {
    dispatch({
      type: READ_NOTICE,
      payload: id,
    });
  };

  return (
    <DataContext.Provider
      value={{
        teams: state.teams,
        last_results: state.last_results,
        news: state.news,
        notice: state.notice,
        getTeams,
        getLastResults,
        getNews,
        readNotice,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
