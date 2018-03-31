import React, { Component } from 'react';
import {Carousel} from "react-bootstrap" 
import logo from './logo.svg';
import './App.css';
import initialUsers from './static/users.json'
const axios = require("axios")


class App extends Component {
  constructor(props, context) {
  super(props, context);
    console.log(initialUsers)
    this.state = {
      users: initialUsers
    };
  }
  handleClick = () =>{
    console.log('hi')
  }
  handleSelect = (key, event) => {
    console.log("estdd", key, event)    
    axios.get('https://randomuser.me/api/?results=3')
    .then( (response) => {
      // concat new user array to existing array
      this.setState({ users: this.state.users.concat(response.data.results)})
    console.log(response.data.results[0]);
    return response.data.results
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TEst Welcome to React</h1>
        </header>
  <Carousel onSelect = {this.handleSelect}>
      {this.state.users.map(user => 
      <Carousel.Item onClick={this.handleClick}>
        <img width={900} height={500} alt="900x500" src={user.picture.medium} />
        <Carousel.Caption>
          <h3>{user.name.first}</h3>
        </Carousel.Caption>
      </Carousel.Item>)}
</Carousel>;

      </div>
    );
  }
}




export default App;
