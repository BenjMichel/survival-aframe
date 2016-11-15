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
      ennemies: [],
    };
    this.store = new Store();
    this.store.subscribe(state => this.setState({
      camera: state.camera.position,
      begin: state.gameState.begin,
      end: state.gameState.end,
      ennemies: state.ennemies,
    }));
  }

  componentDidMount() {
    gameLogic(this.store);
    cameraListener(this.store);
    this.store.dispatch({ type: 'START_GAME' });
  }

  render() {
    return (
      <div className="App">
        <VRScene camera={this.state.camera} ennemies={this.state.ennemies} />
        <div className={this.state.end ? 'end-timer' : 'timer'}>
          <Timer begin={this.state.begin} end={this.state.end} />
        </div>
      </div>
    );
  }
}

export default App;
