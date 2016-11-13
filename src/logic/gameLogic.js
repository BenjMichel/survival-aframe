const PLAYER_SPEED = 0.1;

const newPlayerPosition = (store) => {
  const rotation = store.getState().camera.rotation;
  const [pitch, yaw] = [(rotation.x * Math.PI) / 180, (rotation.y * Math.PI) / 180];
  const xzLen = Math.cos(pitch);
  const y = -xzLen * Math.cos(yaw);
  const z = Math.sin(pitch);
  const x = xzLen * Math.sin(-yaw);
  return {
    x: x * PLAYER_SPEED,
    y: z * PLAYER_SPEED,
    z: y * PLAYER_SPEED,
  };
};

export default function init(store) {
  function draw() {
    store.dispatch({ type: 'CAMERA_MOVE', ...newPlayerPosition(store) });
    store.dispatch({ type: 'ENNEMI_MOVE', target: store.getState().camera.position });
    requestAnimationFrame(draw);
  }

  function ennemyPop() {
    store.dispatch({ type: 'ENNEMI_POP' });
    setTimeout(() => ennemyPop(), 1000);
  }

  ennemyPop();
  draw();
}
