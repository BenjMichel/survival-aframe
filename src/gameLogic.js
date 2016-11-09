let position = { x: 0, y: 0, z: 0 };
let rotation = { x: 0, y: 0, z: 0 };

const COEFF = 100;

export default function init(newPositionCallback) {
  function draw() {
    requestAnimationFrame(draw);
    const [pitch, yaw] = [(rotation.x * Math.PI) / 180, (rotation.y * Math.PI) / 180];
    const xzLen = Math.cos(pitch);
    const y = -xzLen * Math.cos(yaw);
    const z = Math.sin(pitch);
    const x = xzLen * Math.sin(-yaw);
    const newVector = { x, y, z };
    newPositionCallback({
      x: position.x + (newVector.x / COEFF),
      y: position.y + (newVector.z / COEFF),
      z: position.z + (newVector.y / COEFF),
    });
  }


  draw();
  const elem = document.querySelector('.scene-container');
  elem.addEventListener('camera', (e) => {
    if (e.detail.name === 'position') {
      position = e.detail.newData;
    } else if (e.detail.name === 'rotation') {
      rotation = e.detail.newData;
    }
  }, false);
}
