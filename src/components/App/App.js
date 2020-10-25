import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';





class App extends Component {

  state = {
    galleryItems: []
    }
  
  //GET request
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

  //appends to the DOM
  componentDidMount = () => {
    this.getImages();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Loves of my Life</h1>
        </header>
        <br/>
        {/* sends information to GalleryList component */}
        <GalleryList galleryItems={this.state.galleryItems} getImages={this.getImages}/>
      </div>
    );
  }
}

export default App;
