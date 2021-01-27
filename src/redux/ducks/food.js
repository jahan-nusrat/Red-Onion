import Immutable from "seamless-immutable";

export const Types = {
  READ_FOOD_REQUEST: "@food/READ_FOOD_REQUEST",
  READ_FOOD_SUCCESS: "@food/READ_FOOD_SUCCESS",

  CREATE_FOOD_REQUEST: "@food/CREATE_FOOD_REQUEST",
  CREATE_FOOD_SUCCESS: "@food/CREATE_FOOD_SUCCESS",

  UPDATE_FOOD_REQUEST: "@food/UPDATE_FOOD_REQUEST",
  UPDATE_FOOD_SUCCESS: "@food/UPDATE_FOOD_SUCCESS",

  UPDATE_FOOD_IMAGE_REQUEST: "@food/UPDATE_FOOD_IMAGE_REQUEST",
  UPDATE_FOOD_IMAGE_SUCCESS: "@food/UPDATE_FOOD_IMAGE_SUCCESS",

  DELETE_FOOD_REQUEST: "@food/DELETE_FOOD_REQUEST",
  DELETE_FOOD_SUCCESS: "@food/DELETE_FOOD_SUCCESS",

  SHOW_MODAL_CREATE_FOOD: "@food/SHOW_MODAL_CREATE_FOOD",
  HIDE_MODAL_CREATE_FOOD: "@food/HIDE_MODAL_CREATE_FOOD",

  SHOW_MODAL_UPDATE_FOOD: "@food/SHOW_MODAL_UPDATE_FOOD",
  HIDE_MODAL_UPDATE_FOOD: "@food/HIDE_MODAL_UPDATE_FOOD",
};

const INITIAL_STATE = Immutable({
  foods: [],
  loading: false,

  create_food: false,
  update_food: false,
  update_categorie_date: {},
});

export default function foodsAction(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CREATE_FOOD:
      return {
        ...state,
        create_food: true,
      };

    case Types.HIDE_MODAL_CREATE_FOOD:
      return {
        ...state,
        create_food: false,
      };

    case Types.SHOW_MODAL_UPDATE_FOOD:
      return {
        ...state,
        update_food: true,
        update_categorie_date: action.payload.food,
      };

    case Types.HIDE_MODAL_UPDATE_FOOD:
      return {
        ...state,
        update_food: false,
      };

    case Types.READ_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.READ_FOOD_SUCCESS:
      return {
        ...state,
        foods: action.payload.foods,
        loading: false,
      };

    case Types.UPDATE_FOOD_SUCCESS:
      return {
        ...state,
        foods: updateState(state.foods, action.payload.food),
      };

    case Types.UPDATE_FOOD_IMAGE_SUCCESS:
      return {
        ...state,
        foods: updateState(state.foods, action.payload.food),
      };

    case Types.CREATE_FOOD_SUCCESS:
      return {
        ...state,
        foods: [...state.foods, action.payload.food],
        loading: false,
      };

    case Types.CREATE_FOOD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.DELETE_FOOD_SUCCESS:
      return {
        ...state,
        foods: [
          ...state.foods.filter((elem, idx) => {
            return elem.id !== action.payload.id;
          }),
        ],
      };

    default:
      return state;
  }
}

export const Creators = {
  showModalCreateFood: () => ({
    type: Types.SHOW_MODAL_CREATE_FOOD,
  }),

  hidevModalCreateFood: () => ({
    type: Types.HIDE_MODAL_CREATE_FOOD,
  }),

  showModalUpdateFood: (food) => ({
    type: Types.SHOW_MODAL_UPDATE_FOOD,
    payload: {
      food,
    },
  }),

  hideModalUpdateFood: () => ({
    type: Types.HIDE_MODAL_UPDATE_FOOD,
  }),

  readFoodRequest: () => ({
    type: Types.READ_FOOD_REQUEST,
  }),

  readFoodSuccess: (foods) => ({
    type: Types.READ_FOOD_SUCCESS,
    payload: { foods },
  }),

  createFoodRequest: (food) => ({
    type: Types.CREATE_FOOD_REQUEST,
    payload: { food },
  }),

  createFoodSuccess: (food) => ({
    type: Types.CREATE_FOOD_SUCCESS,
    payload: { food },
  }),

  updateFoodRequest: (food) => ({
    type: Types.UPDATE_FOOD_REQUEST,
    payload: { food },
  }),

  updateFoodSuccess: (food) => ({
    type: Types.UPDATE_FOOD_SUCCESS,
    payload: { food },
  }),

  updateFoodImageRequest: (food) => ({
    type: Types.UPDATE_FOOD_IMAGE_REQUEST,
    payload: { food },
  }),

  updateFoodImageSuccess: (food) => ({
    type: Types.UPDATE_FOOD_IMAGE_SUCCESS,
    payload: { food },
  }),

  deleteFoodRequest: (id) => ({
    type: Types.DELETE_FOOD_REQUEST,
    payload: { id },
  }),

  deleteFoodSuccess: (id) => ({
    type: Types.DELETE_FOOD_SUCCESS,
    payload: { id },
  }),
};

function updateState(items, account) {
  const index = items.findIndex((item) => item.id === account.id);
  return [...items.slice(0, index), { ...account }, ...items.slice(index + 1)];
}
