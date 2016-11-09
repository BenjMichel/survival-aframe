import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VRScene from './vrScene';
import gameLogic from './gameLogic';
import cameraListener from './cameraListener';

class App extends Component {
  constructor() {
    super();
    this.state = {
      camera: { x: 0, y: 0, z: 0 },
    };
  }

  componentDidMount() {
    gameLogic(newPosition => this.setState({ camera: newPosition }));
    cameraListener();
  }

  render() {
    return (
      <div className="App">
        <VRScene camera={this.state.camera} />
      </div>
    );
  }
}

export default App;
