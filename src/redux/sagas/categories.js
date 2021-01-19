import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as CategoriesAction } from "../ducks/categories";

export function* readCategories() {
  try {
    const { data } = yield call(api.get, "categories");
    yield put(CategoriesAction.readCategoriesSuccess(data));
  } catch (err) {}
}

export function* createCategorie({ payload }) {
  try {
    const { data } = yield call(api.post, "categories", payload.categorie);
    yield put(CategoriesAction.createCategoriesSuccess(data));
  } catch (err) {}
}

export function* updateCategorie({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(
      api.put,
      `categories/${payload.categorie.id}`,
      payload.categorie
    );

    yield put(CategoriesAction.updateCategoriesSuccess(payload.categorie));
  } catch (err) {}
}

export function* deleteCategorie({ payload }) {
  console.log(payload);
  try {
    yield call(api.delete, `categories/${payload.id}`);
    yield put(CategoriesAction.deleteCategoriesSuccess(payload.id));
  } catch (err) {}
}
