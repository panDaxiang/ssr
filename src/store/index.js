import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

export default () => createStore(reducer, applyMiddleware(thunk));

// 给客服端页面初始化store,防止页面抖动
export const clientStore = () => {
  const client = window.context.state;
  return createStore(reducer, client, applyMiddleware(thunk));
};
