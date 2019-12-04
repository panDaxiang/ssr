import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { clientStore } from "../store";
const store = clientStore()

import routes from "../router";

const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes.map(route => (
          <Route {...route}></Route>
        ))}
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<Router />, root);
