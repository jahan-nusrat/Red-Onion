import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as ActionsFood } from "../ducks/food";

export function* readFood() {
  try {
    const { data } = yield call(api.get, "products");
    yield put(ActionsFood.readFoodSuccess(data));
  } catch (err) {}
}

export function* createFood({ payload }) {
  try {
    const { food, image } = payload.food;

    const fData = new FormData();
    fData.append("image", image, image.name, image.type);

    const product = {
      name: food.name,
      title: food.title,
      description: food.info,
      price: food.price,
      category_id: food.categoria,
      disponible: food.disponivel,
    };

    const { data } = yield call(api.post, "products", product);

    const response = yield call(
      api.post,
      `/products/image?product_id=${data.id}`,
      fData
    );

    const obj = {
      category_id: data.category_id,
      description: data.description,
      disponible: data.disponible,
      price: data.price,
      title: data.title,
      image: response.data,
    };

    yield put(ActionsFood.createFoodSuccess(obj));
  } catch (err) {}
}

export function* updateFood({ payload }) {
  try {
    const { food } = payload;

    const product = {
      id: food.id,
      name: food.name,
      title: food.title,
      description: food.info,
      price: food.price,
      category_id: food.categoria,
      disponible: food.disponivel,
      image: food.imagem,
    };

    yield call(api.put, `products/${product.id}`, product);

    yield put(ActionsFood.updateFoodSuccess(product));
  } catch (err) {}
}

export function* updateFoodImage({ payload }) {
  try {
    const { food, image } = payload.food;

    const fData = new FormData();

    fData.append("image", image, image.name, image.type);

    const product = {
      name: food.name,
      title: food.title,
      description: food.info,
      price: food.price,
      category_id: food.categoria,
      disponible: food.disponivel,
    };

    yield call(api.put, `products/${food.id}`, product);

    yield call(api.delete, `/products/image/${food.id}`);

    const response = yield call(
      api.post,
      `/products/image?product_id=${food.id}`,
      fData
    );

    const obj = {
      id: food.id,
      category_id: product.category_id,
      description: product.description,
      disponible: product.disponible,
      price: product.price,
      name: product.name,
      title: product.title,
      image: response.data,
    };

    yield put(ActionsFood.updateFoodSuccess(obj));
  } catch (err) {}
}

export function* deleteFood({ payload }) {
  try {
    yield call(api.delete, `/products/${payload.id}`);

    yield put(ActionsFood.deleteFoodSuccess(payload.id));
  } catch (err) {}
}

/*
const response = yield call(
      api.post,
      `/products/image?product_id=${data.id}`,
      image,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "content-type":
            "multipart/form-data; boundary=---011000010111000001101001",
        },
      }
    );
    */
