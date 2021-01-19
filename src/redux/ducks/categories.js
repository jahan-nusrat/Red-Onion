import Immutable from "seamless-immutable";

export const Types = {
  SHOW_MODAL_CREATE_CATEGORIE: "@categorie/SHOW_MODAL_CREATE_CATEGORIE",
  HIDE_MODAL_CREATE_CATEGORIE: "@categorie/HIDE_MODAL_CREATE_CATEGORIE",

  SHOW_MODAL_UPDATE_CATEGORIE: "@categorie/SHOW_MODAL_UPDATE_CATEGORIE",
  HIDE_MODAL_UPDATE_CATEGORIE: "@categorie/HIDE_MODAL_UPDATE_CATEGORIE",

  READ_CATEGORIE_REQUEST: "@categorie/READ_CATEGORIE_REQUEST",
  READ_CATEGORIE_SUCCESS: "@categorie/READ_CATEGORIE_SUCCESS",

  CREATE_CATEGORIE_REQUEST: "@categorie/CREATE_CATEGORIE_REQUEST",
  CREATE_CATEGORIE_SUCCESS: "@categorie/CREATE_CATEGORIE_SUCCESS",

  UPDATE_CATEGORIE_REQUEST: "@categorie/UPDATE_CATEGORIE_REQUEST",
  UPDATE_CATEGORIE_SUCCESS: "@categorie/UPDATE_CATEGORIE_SUCCESS",

  DELETE_CATEGORIE_REQUEST: "@categorie/DELETE_CATEGORIE_REQUEST",
  DELETE_CATEGORIE_SUCCESS: "@categorie/DELETE_CATEGORIE_SUCCESS",
};

const INITIAL_STATE = Immutable({
  categories: [],
  loading: false,

  create_categorie: false,
  update_categorie: false,
  update_categorie_date: {},
});

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_CATEGORIE:
      return {
        ...state,
        create_categorie: true,
      };

    case Types.HIDE_MODAL_CREATE_CATEGORIE:
      return {
        ...state,
        create_categorie: false,
      };

    case Types.SHOW_MODAL_UPDATE_CATEGORIE:
      return {
        ...state,
        update_categorie: true,
        update_categorie_data: action.payload.data,
      };

    case Types.HIDE_MODAL_UPDATE_CATEGORIE:
      return {
        ...state,
        update_categorie: false,
      };

    case Types.READ_CATEGORIE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.READ_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };

    case Types.CREATE_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload.categorie],
      };

    case Types.UPDATE_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: updateState(state.categories, action.payload.categorie),
      };

    case Types.DELETE_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: [
          ...state.categories.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalCreateCategorie: () => ({
    type: Types.SHOW_MODAL_CREATE_CATEGORIE,
  }),

  hideModalCreateCategorie: () => ({
    type: Types.HIDE_MODAL_CREATE_CATEGORIE,
  }),

  showModalUpdateCategorie: (data) => ({
    type: Types.SHOW_MODAL_UPDATE_CATEGORIE,
    payload: { data },
  }),

  hideModalUpdateCategorie: () => ({
    type: Types.HIDE_MODAL_UPDATE_CATEGORIE,
  }),

  readCategoriesRequest: () => ({
    type: Types.READ_CATEGORIE_REQUEST,
  }),

  readCategoriesSuccess: (categories) => ({
    type: Types.READ_CATEGORIE_SUCCESS,
    payload: { categories },
  }),

  createCategoriesRequest: (categorie) => ({
    type: Types.CREATE_CATEGORIE_REQUEST,
    payload: { categorie },
  }),

  createCategoriesSuccess: (categorie) => ({
    type: Types.CREATE_CATEGORIE_SUCCESS,
    payload: { categorie },
  }),

  updateCategoriesRequest: (categorie) => ({
    type: Types.UPDATE_CATEGORIE_REQUEST,
    payload: { categorie },
  }),

  updateCategoriesSuccess: (categorie) => ({
    type: Types.UPDATE_CATEGORIE_SUCCESS,
    payload: { categorie },
  }),

  deleteCategoriesRequest: (id) => ({
    type: Types.DELETE_CATEGORIE_REQUEST,
    payload: { id },
  }),

  deleteCategoriesSuccess: (id) => ({
    type: Types.DELETE_CATEGORIE_SUCCESS,
    payload: { id },
  }),
};

function updateState(items, account) {
  const index = items.findIndex((item) => item.id === account.id);
  return [...items.slice(0, index), { ...account }, ...items.slice(index + 1)];
}
