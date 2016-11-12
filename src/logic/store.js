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

const cameraInitialState = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

function updateCamera(camera = cameraInitialState, action) {
  // console.log(camera, action);
  switch (action.type) {
    case 'CAMERA_MOVE':
      return {
        ...camera,
        position: {
          x: camera.position.x + action.x,
          y: camera.position.y + action.y,
          z: camera.position.z + action.z,
        },
      };
    case 'CAMERA_ROTATION':
      return {
        ...camera,
        rotation: {
          x: action.x,
          y: action.y,
          z: action.z,
        },
      };
    default:
      return camera;
  }
}

function updateEnnemies(ennemies = [], action) {
  switch (action.type) {
    case 'ENNEMI_POP':
      return [...ennemies, {}];
    default:
      return ennemies;
  }
}

Store.prototype.reduce = function (state, action) {
  return {
    ennemies: updateEnnemies(state.ennemies, action),
    camera: updateCamera(state.camera, action),
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
