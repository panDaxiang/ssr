import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { matchRoutes } from "react-router-config";

import getStore from "../store";

const express = require("express");
const server = express();

import routes from "../router";

const app = (req, res) => {
  const store = getStore();
  // 处理routes数组,返回一个对于路由的数组信息
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    // 将页面渲染成字符串
    const ssrDom = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          {routes.map(route => (
            <Route {...route}></Route>
          ))}
        </StaticRouter>
      </Provider>
    );

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <body>
      <div id='root'>${ssrDom}</div>
      <script>
        // 注入数据,给客服端渲染做初始数据,防止页面抖动
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>  
      <script src="/index.js"></script>
    </body>
    </html>
  `);
  });
};

// 服务端获取静态文件
server.use(express.static("./public"));

server.get("*", (req, res) => {
  app(req, res);
});

// 监听服务
server.listen(80, () => {
  console.log("server start at port 80");
});
