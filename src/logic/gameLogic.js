import Store from './store';

const store = new Store();
const COEFF = 100;

const newPlayerPosition = (rotation) => {
  const [pitch, yaw] = [(rotation.x * Math.PI) / 180, (rotation.y * Math.PI) / 180];
  const xzLen = Math.cos(pitch);
  const y = -xzLen * Math.cos(yaw);
  const z = Math.sin(pitch);
  const x = xzLen * Math.sin(-yaw);
  return {
    x: x / COEFF,
    y: z / COEFF,
    z: y / COEFF,
  };
};

export default function init(eventElement) {
  let rotation = { x: 0, y: 0, z: 0 };

  function initPositionRotation() {
    eventElement.addEventListener('camera', (e) => {
      if (e.detail.name === 'rotation') {
        rotation = e.detail.newData;
      }
    }, false);
  }

  function draw() {
    store.dispatch({ type: 'CAMERA_MOVE', ...newPlayerPosition(rotation) });
    requestAnimationFrame(draw);
  }

  initPositionRotation();
  draw();
}
