import axios from "axios";

const GET_HOME_LIST = "GET_HOME_LIST";

const initState = {
  name: "",
  list: []
};

export const getHomeList = () => {
  return dispatch => {
    return axios.get("/home-list.json")
      .then(res => {
        if (!res.data) return;
        return dispatch({
          type: GET_HOME_LIST,
          list: res.data.data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case GET_HOME_LIST:
      return {
        ...state,
        list:action.list
      }
    default:
      return state;
  }
};
