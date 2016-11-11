export default function init() {
  document.querySelector('[camera]').addEventListener('componentchanged', function (evt) {
    const elem = document.querySelector('.scene-container');
    const event = new CustomEvent('camera', { detail: evt.detail });
    elem.dispatchEvent(event);
  });
}
