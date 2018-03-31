import React, { Component } from 'react';
import {Carousel} from "react-bootstrap" 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TEst Welcome to React</h1>
        </header>
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://randomuser.me/api/portraits/med/men/33.jpg" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://randomuser.me/api/portraits/med/men/33.jpg" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://randomuser.me/api/portraits/med/men/33.jpg" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
</Carousel>;

      </div>
    );
  }
}




export default App;
