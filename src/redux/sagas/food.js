import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as ActionsFood } from "../ducks/food";

import fakeFood from "../../fakeData/data";

export function* readFood() {
  try {
    const { data } = yield call(api.get, "products");
    yield put(ActionsFood.readFoodSuccess(data));
  } catch (err) {}
}

export function* createFood({ payload }) {
  try {
    const { food } = payload;

    const product = {
      name: food.name,
      title: food.title,
      description: food.info,
      price: food.price,
      category_id: food.categoria,
      disponible: food.disponivel,
    };

    const { data } = yield call(api.post, "products", product);

    console.log(data.id);

    for (var key of food.image.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const response = yield call(
      api.post,
      `/products/image?product_id=${data.id}`,
      food.image,
      {
        headers: {
          "content-type": "multipart/form-data",
        },
      }
    );

    console.log(response);

    yield put(ActionsFood.createFoodSuccess(product));
  } catch (err) {}
}

export function* updateFood({ payload }) {
  const { food } = payload;
  try {
    yield put(ActionsFood.updateFoodSuccess(food));
  } catch (err) {}
}

export function* deleteFood({ payload }) {
  console.log("entrou");
  try {
    yield put(ActionsFood.deleteFoodSuccess(fakeFood));
  } catch (err) {}
}
