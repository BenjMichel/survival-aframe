import ennemiesReducer from './reducers/ennemiesReducer';
import cameraReducer from './reducers/cameraReducer';
import gameStateReducer from './reducers/gameStateReducer';

const subscribers = [];

function Store() {
  this.prevState = {};
  this.state = {};

  this.state = this.reduce(this.state, {});
}

Store.prototype.getState = function () {
  return this.state;
};

Store.prototype.getPrevState = function () {
  return this.prevState;
};

Store.prototype.dispatch = function (action) {
  this.prevState = this.state;
  this.state = this.reduce(this.state, action);

  this.notifySubscribers();

  return action;
};

Store.prototype.reduce = function (state, action) {
  return {
    ennemies: ennemiesReducer(state.ennemies, action),
    camera: cameraReducer(state.camera, action),
    gameState: gameStateReducer(state.gameState, action),
  };
};

Store.prototype.subscribe = function (fn) {
  subscribers.push(fn);
};

Store.prototype.notifySubscribers = function () {
  subscribers.forEach((subscriber) => {
    subscriber(this.prevState, this.state);
  });
};

export default Store;
