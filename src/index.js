import Keyboard from './keyboard';
import Dom from './dom';
import Storage from './storage';

let defaultLanguage = 'eng';

const page = new Dom();
page.createPage();

if (!Storage.getLanguage()) {
  Storage.setLanguage(defaultLanguage);
} else {
  defaultLanguage = Storage.getLanguage();
}

const keyboard = new Keyboard(defaultLanguage);
const buttons = keyboard.generateButtons();
page.addKeyboard(buttons);

buttons.childNodes.forEach((b) => {
  b.addEventListener('mousedown', (e) => {
    e.preventDefault();
    const codeClass = e.target.classList[1];
    const item = keyboard.keys.find((el) => el.codeName === codeClass);
    if (!item) {
      return;
    }
    keyboard.pressKey(item);
    item.addPressed();
  });
  b.addEventListener('mouseup', (e) => {
    e.preventDefault();
    const codeClass = e.target.classList[1];
    const item = keyboard.keys.find((el) => el.codeName === codeClass);
    if (!item) {
      return;
    }
    if (codeClass === 'ControlLeft' || codeClass === 'ControlRight'
    || codeClass === 'AltLeft' || codeClass === 'AltRight') {
      keyboard.cancelLayout(item.codeName);
    }
    keyboard.disableShift(item.codeName);
    item.removePressed();
  });
});

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  const item = keyboard.keys.find((el) => el.codeName === e.code);
  if (!item) {
    return;
  }
  keyboard.pressKey(item);
  item.addPressed();
});

window.addEventListener('keyup', (e) => {
  e.preventDefault();
  const item = keyboard.keys.find((el) => el.codeName === e.code);
  if (!item) {
    return;
  }
  if (e.code === 'ControlLeft' || e.code === 'ControlRight'
    || e.code === 'AltLeft' || e.code === 'AltRight') {
    keyboard.cancelLayout(e.code);
  }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    keyboard.disableShift(e.code);
  }
  item.removePressed();
});