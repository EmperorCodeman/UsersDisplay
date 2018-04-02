import React, { Component } from 'react';
import {Carousel, Modal, Button, Image} from "react-bootstrap" 
import logo from './logo.svg';
import './App.css';
import initialUsers from './static/users.json'
const axios = require("axios")

class App extends Component {
  constructor(props, context) {
  super(props, context);
    console.log(initialUsers)
    this.state = {
      users: initialUsers,
      usersPointer : 4
    };
  }
  
  handleClose = () => {
    this.setState({ show: false, user: {} });
  }

  handleClick = (user) =>{
    this.setState({ show: true, user: user })
  }

  handleSelect = (key, event) => {
    //progress through database 3 at a time and display those 3 in Carousel
    this.setState({usersPointer: (this.state.usersPointer + 3)})
    console.log("Calling node.js at: ", 'http://localhost:3000/users/'.concat(String(this.state.usersPointer)))
    axios.get('http://localhost:3000/users/'.concat(String(this.state.usersPointer)))
    .then( (response) => {
      this.setState({ users: response.data.results})
      return response.data.results
  })
  .catch(function (error) {
    console.log(error);
  });
  }
  render() {
    const { user, show, users} = this.state
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Users Carousel</h1>
      </header>
      <Carousel onSelect = {this.handleSelect}>
          <Carousel.Item style={{paddingTop:"30px"}}>
          {users.map(user => 
          <div key={user.name.first} onClick={this.handleClick.bind(this,user)}>
            <Image rounded width={200} height={150} alt="User Picture" src={user.picture.medium}/>
              <h3>{user.name.first}</h3>
          </div>)
          }
          </Carousel.Item>
      </Carousel>
      {user && show && 
      <Modal show={show} onHide={this.handleClose}>
        <Modal.Header style={{display: 'flex', justifyContent: 'center'}}>
          <Image circle src={user.picture.large}/>
        </Modal.Header>
        <Modal.Body>{Object.keys(user).map((key) => {
          if (key === "picture") return 
          if (key === "login"){
          const login = user[key]
          return <div>
              <div>
              username: {login.username} password: {login.password} salt: {login.salt}
              </div>
              <div>
              md5": {login.md5} sha1: {login.sha1} sha256: {login.sha256}
              </div> 
            </div>}  
          const value = user[key]
          return <div key={key}>{key}: {JSON.stringify(value)}</div>
          })
        }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      }
      
    </div>
    );
  }
}

export default App;
