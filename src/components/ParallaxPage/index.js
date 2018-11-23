import React, { Component } from 'react';
import './styles.css';
import Contact from '../Contact';
import About from '../About';
import Home from '../Home';
import Listen from '../Listen';
import Schedule from '../Schedule';

class ParallaxPage extends Component {
  render(){
    return(
      <div className="ParallaxPage" style={{color: this.props.text,
        backgroundColor: this.props.background}}>
        <style>
          {`
            .ParallaxPage a:hover {
              text-decoration: none;
              color: ` + this.props.hovercolor + `!important;
            }
          `}
        </style>
        <div className="bgimg1" id="Home">
          <div className="captionline">
            <span className="captionbox">The Restless Anglers</span>
          </div>
        </div>
        <div className="textbox">
          <Home/>
        </div>
        <div className="bgimg3" backgroundColor="rgb(0, 0, 0)" id="Listen">
          <div className="captionline">
            <span className="captionbox">Listen</span>
          </div>
        </div>
        <div className="textbox">
          <Listen/>
        </div>
        <div className="bgimg2" id="Schedule">
          <div className="captionline">
            <span className="captionbox">Schedule</span>
          </div>
        </div>
        <div className="textbox">
          <Schedule/>
        </div>
        <div className="bgimg4" backgroundColor="rgb(270, 270, 270)" id="Contact">
          <div className="captionline">
            <span className="captionbox">Contact</span>
          </div>
        </div>
        <div className="textbox">
          <Contact/>
        </div>
      </div>
    )
  }
}

ParallaxPage.defaultProps = {
  text: "white",
  background: "black",
  hovercolor: "grey",
}

export default ParallaxPage;
