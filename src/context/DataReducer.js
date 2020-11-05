import { LIVE_SCORES } from "../../types";

  
  export default (state, action) => {
    switch (action.type) {
      case LIVE_SCORES:
        return{
          ...state,
          title: action.payload.title,
          article: action.payload.abstract,
        }


      default:
        return state;
    }
  };
  