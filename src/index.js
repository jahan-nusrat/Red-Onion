import "fontsource-roboto";

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import Global from "././components/styles/global";

import ReduxToastr from "react-redux-toastr";

import Routes from "././routes";
import Portal from "./portal";

const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(
  <Providers store={store}>
    <Fragment>
      <Routes />
      <Global />
    </Fragment>
  </Providers>,
  document.getElementById("root")
);

ReactDOM.render(
  <Providers>
    <Portal />
  </Providers>,
  document.getElementById("portal")
);
