import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { toastr } from "react-redux-toastr";

import AuthActions from "../ducks/auth";
import api from "../../service/api";

export function* signIn({ email, password }) {
  try {
    console.log(email);
    console.log(password);

    const { data } = yield call(api.post, "auth", { email, password });

    localStorage.setItem("@Omni:token", data.token);

    yield put(AuthActions.signInSuccess(data.token));

    yield put(push("/dashboard"));
  } catch (err) {
    toastr.error(
      "Falha no login",
      "Email/senha errados, entre em contato com a empresa responsavel ou com o administrador."
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@Omni:token");
  localStorage.removeItem("@Omni:team");
  yield put(push("/login"));
}
