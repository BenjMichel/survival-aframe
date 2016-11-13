export default function ennemiesReducer(ennemies = [], action) {
  switch (action.type) {
    case 'ENNEMI_POP':
      return [...ennemies, {
        color: `#${((1 << 24) * Math.random() | 0).toString(16)}`, // eslint-disable-line no-bitwise
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        z: (Math.random() - 0.5) * 100,
      }];
    default:
      return ennemies;
  }
}
