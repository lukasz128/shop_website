import React, { Component } from 'react';
import Information from "./components/Information";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import "./style/main.scss";

class App extends Component {
  render() {
    return (
      <>
        <Information />
        <Header />
        <Showcase />
      </>
    );
  }
}

export default App;
