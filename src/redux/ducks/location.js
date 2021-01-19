import { createReducer, createActions } from "reduxsauce";

import Immutable from "seamless-immutable";

/* Types & Action Creators */
const { Types, Creators } = createActions({
  changerPage: ["page"],
});

export const LocationTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  page: "default",
});

/* Reducers */

const changerPageLocation = (state, { page }) => {
  return { ...state, page };
};

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGER_PAGE]: changerPageLocation,
});
