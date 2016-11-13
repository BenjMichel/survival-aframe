export default function gameStateReducer(gameState = {}, action) {
  switch (action.type) {
    case 'START_GAME':
      return { ...gameState, begin: new Date().getTime() };
    default:
      return gameState;
  }
}
