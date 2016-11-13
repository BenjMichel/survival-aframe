const SPEED = 20;

export default function ennemiesReducer(ennemies = [], action) {
  switch (action.type) {
    case 'ENNEMI_POP':
      return [...ennemies, {
        color: `#${((1 << 24) * Math.random() | 0).toString(16)}`, // eslint-disable-line no-bitwise
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        z: (Math.random() - 0.5) * 100,
      }];
    case 'ENNEMI_MOVE': {
      const { target } = action;
      return ennemies.map((ennemy) => {
        const x = target.x - ennemy.x;
        const y = target.y - ennemy.y;
        const z = target.z - ennemy.z;
        const vectorLength = Math.sqrt((x * x) + (y * y) + (z * z));
        const normalizedVector = {
          x: x / vectorLength,
          y: y / vectorLength,
          z: z / vectorLength,
        };
        return {
          ...ennemy,
          x: ennemy.x + (normalizedVector.x * SPEED),
          y: ennemy.y + (normalizedVector.y * SPEED),
          z: ennemy.z + (normalizedVector.z * SPEED),
        };
      });
    }
    default:
      return ennemies;
  }
}
