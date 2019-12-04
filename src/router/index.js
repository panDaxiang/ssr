import Home from "../pages/home";
import Login from "../pages/login";

export default [
  {
    key: "home",
    exact: true,
    component: Home,
    path: "/",
    loadData: Home.loadData
  },
  {
    key: "login",
    exact: true,
    component: Login,
    path: "/login",
    loadData: Login.loadData
  }
];
