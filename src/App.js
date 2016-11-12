import React, { Component } from 'react';
import './App.css';
import VRScene from './vrScene';
import gameLogic from './logic/gameLogic';
import cameraListener from './logic/cameraListener';
import Timer from './components/Timer';
import Store from './logic/store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      camera: { x: 0, y: 0, z: 0 },
    };
    this.store = new Store();
    this.store.subscribe(state => this.setState({ camera: state.camera }));
  }

  componentDidMount() {
    const eventElement = document.querySelector('.scene-container');
    gameLogic(eventElement);
    cameraListener(eventElement);
  }

  render() {
    return (
      <div className="App">
        <VRScene camera={this.state.camera} />
        <div className="timer">
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
