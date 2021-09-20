import React, { Component } from 'react'
import Body from '../components/body/Body';
import Header from "../components/header/Header";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body/>
      </div>
    );
  }
}

export default Home;

