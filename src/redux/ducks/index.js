import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { reducer as auth } from "./auth";
import { reducer as routes } from "./location";

import food from "./food";
import categorie from "./categories";

export default (history) =>
  combineReducers({
    auth,
    food,
    categorie,
    routes,
    router: connectRouter(history),
  });
