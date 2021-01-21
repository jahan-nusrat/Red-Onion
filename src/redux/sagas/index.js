// eslint-disable-next-line no-unused-vars
import { all, take, takeLatest } from "redux-saga/effects";

import { Types as foodTypes } from "../ducks/food";
import {
  readFood,
  createFood,
  deleteFood,
  updateFood,
  updateFoodImage,
} from "./food";

import { AuthTypes } from "../ducks/auth";
import { signIn, signOut } from "./auth";

import { Types as CategoriesTypes } from "../ducks/categories";
import {
  readCategories,
  createCategorie,
  deleteCategorie,
  updateCategorie,
} from "./categories";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),

    takeLatest(foodTypes.READ_FOOD_REQUEST, readFood),
    takeLatest(foodTypes.CREATE_FOOD_REQUEST, createFood),
    takeLatest(foodTypes.UPDATE_FOOD_REQUEST, updateFood),
    takeLatest(foodTypes.DELETE_FOOD_REQUEST, deleteFood),
    takeLatest(foodTypes.UPDATE_FOOD_IMAGE_REQUEST, updateFoodImage),
    takeLatest(foodTypes.DELETE_FOOD_REQUEST, deleteFood),

    takeLatest(CategoriesTypes.READ_CATEGORIE_REQUEST, readCategories),
    takeLatest(CategoriesTypes.CREATE_CATEGORIE_REQUEST, createCategorie),
    takeLatest(CategoriesTypes.UPDATE_CATEGORIE_REQUEST, updateCategorie),
    takeLatest(CategoriesTypes.DELETE_CATEGORIE_REQUEST, deleteCategorie),
  ]);
}
