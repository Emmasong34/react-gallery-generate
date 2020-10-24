import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  getImages = () => {
    console.log('in getImages');
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({
      galleryItems: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/bread.jpg"/>
      </div>
    );
  }
}

export default App;
