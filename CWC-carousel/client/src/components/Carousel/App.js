import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./img/sunrise-field.png";
import img2 from "./img/vineyard-misty-pond.png";
import img3 from "./img/sunset-field1.png";
import img4 from "./img/vineyard-mountains.png";
import img5 from "./img/vineyard-sunny1.png";
import img6 from "./img/vineyard-misty.png";
import Nav from "../Nav/index";
import Footer from "../Footer/index";

class App extends Component {
  state = {
    status: ""
  };

  render() {
    return (
      <div className="frame">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={10000}
          transitionTime={5000}
        >
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
        </Carousel>
        <div class="wrapper">
          <div id="CWClogo">
            <img src="./img/reverseLogo.png" />
          </div>

          <div className="scroll" id="container"></div>
        </div>
      </div>
    );
  }
}

export default App;

/// Nav

// Carousel
/// Footer
