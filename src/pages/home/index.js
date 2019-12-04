import React, { Component } from "react";
import Header from "@components/Header";
import { connect } from "react-redux";

import { getHomeList } from "@store/homeReducer";

@connect(
  state => ({
    ...state.home
  }),
  {
    getHomeList
  }
)
class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <Header></Header>
        <ul>
          {list.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Home.loadData = store => {
  return store.dispatch(getHomeList());
};

export default Home;
