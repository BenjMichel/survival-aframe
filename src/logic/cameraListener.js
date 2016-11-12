export default function init(mainElement) {
  document.querySelector('[camera]').addEventListener('componentchanged', (evt) => {
    const event = new CustomEvent('camera', { detail: evt.detail });
    mainElement.dispatchEvent(event);
  });
}
