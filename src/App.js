import React, { Component } from 'react';
import ParallaxPage from './components/ParallaxPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';

import Logo from './img/reallogo.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="#0C2F19" text="#F9F871" hovercolor="#56D9DB" logo={Logo}/>
        <ParallaxPage background="#0C2F19" text="#F9F871" hovercolor="#56D9DB" />
        <Footer background="#0C2F19" text="#F9F871" hovercolor="#56D9DB"/>
      </div>
    );
  }
}

export default App;
