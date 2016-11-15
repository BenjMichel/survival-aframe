const PLAYER_SPEED = 0.1;
const DISTANCE_DEATH_THRESHOLD = 2;

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

const checkEndGame = (store) => {
  const state = store.getState();
  const ennemies = state.ennemies;
  const camera = state.camera.position;
  const isClose = ennemy =>
    ((camera.x - ennemy.x) ** 2) +
    ((camera.y - ennemy.y) ** 2) +
    ((camera.z - ennemy.z) ** 2) < DISTANCE_DEATH_THRESHOLD ** 2;
  if (ennemies.filter(ennemy => isClose(ennemy)).length > 0) {
    console.log('END_GAME');
    store.dispatch({ type: 'END_GAME' });
  }
};

export default function init(store) {
  function draw() {
    store.dispatch({ type: 'CAMERA_MOVE', ...newPlayerPosition(store) });
    store.dispatch({ type: 'ENNEMI_MOVE', target: store.getState().camera.position });
    checkEndGame(store);
    if (!store.getState().gameState.end) {
      requestAnimationFrame(draw);
    }
  }

  function ennemyPop() {
    store.dispatch({ type: 'ENNEMI_POP' });
    setTimeout(() => ennemyPop(), 20000);
  }

  ennemyPop();
  draw();
}
