export default function init(store) {
  document.querySelector('[camera]').addEventListener('componentchanged', (evt) => {
    if (evt.detail.name === 'rotation') {
      const { x, y, z } = evt.detail.newData;
      store.dispatch({ type: 'CAMERA_ROTATION', x, y, z });
    }
  });
}
