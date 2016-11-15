export default function gameStateReducer(gameState = {}, action) {
  switch (action.type) {
    case 'START_GAME':
      return { ...gameState, begin: new Date().getTime() };
    case 'END_GAME':
      if (gameState.end) {
        return gameState;
      }
      return { ...gameState, end: new Date().getTime() };
    default:
      return gameState;
  }
}
