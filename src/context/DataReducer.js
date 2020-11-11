import { LIVE_SCORES, TEAMS_LALIGA, LAST_RESULTS } from "../types";

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

    default:
      return state;
  }
};
