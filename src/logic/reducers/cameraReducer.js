const cameraInitialState = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

export default function cameraReducer(camera = cameraInitialState, action) {
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
