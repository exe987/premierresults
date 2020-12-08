import { TEAMS_LALIGA, LAST_RESULTS, LAST_NEWS, READ_NOTICE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case TEAMS_LALIGA:
      return {
        ...state,
        teams: action.payload,
      };

    case LAST_RESULTS:
      return {
        ...state,
        last_results: action.payload.filter(
          (data) => data.competition_name === "Primera División"
        ),
      };

    case LAST_NEWS:
      return {
        ...state,
        news: action.payload,
      };

    case READ_NOTICE:
      return {
        ...state,
        notice: state.news[action.payload],
      };
    default:
      return state;
  }
};
