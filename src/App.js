import React, { Component } from 'react';
import {Carousel, Modal, Button} from "react-bootstrap" 
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
  
  handleClose = () => {
    this.setState({ show: false, user: {} });
  }

  handleClick = (user) =>{
    this.setState({ show: true, user: user })
  }

  handleSelect = (key, event) => {
    //console.log("estdd", key, event)    
    //'https://randomuser.me/api/?results=3'
    axios.get('https://randomuser.me/api/?results=3')
    .then( (response) => {
      // concat new user array to existing array
      this.setState({ users: response.data.results})
      //console.log(response.data.results[0], "hello");
      //console.log(this.state.users), "state ";
      return response.data.results
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    const { user, show, users } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TEst Welcome to React</h1>
        </header>
  <Carousel onSelect = {this.handleSelect}>
      <Carousel.Item>
      {users.map(user => 
      <div key={user.name.first} onClick={this.handleClick.bind(this,user)}>
        <img width={200} height={150} alt="900x500" src={user.picture.medium} />
          <h3>{user.name.first}</h3>
      </div>)}
      </Carousel.Item>
  </Carousel>;
  {user && show && 
  <Modal show={show} onHide={this.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{user.name.first}</Modal.Title>
    </Modal.Header>

    <Modal.Body>{Object.keys(user).map((key) => {
      const value = user[key]
      return <div key={key}>`${key}: ${JSON.stringify(value)}`</div>
      })
    }
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={this.handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>}
      </div>
    );
  }
}




export default App;
