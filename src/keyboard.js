import Key from './key';
import buttonsList from './list';
import Storage from './storage';

export default class Keyboard {
  constructor(language = 'eng') {
    this.shiftIsPressed = false;
    this.language = language;
    this.keys = [];
    this.layoutsKeys = { alt: false, ctrl: false };
    this.textarea = document.querySelector('.textarea');
  }

  generateButtons() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('body--keyboard keyboard');
    this.keyboard.id.add('keyboard');
    for (let i = 0; i < buttonsList.length; i += 1) {
      const current = buttonsList[i];
      const key = new Key(this.language, current.codeName, current.eng, current.rus);
      this.keyboard.append(key.createButton());
      this.keys.push(key);
    }
    return this.keyboard;
  }

  pressKey(key) {
    const k = key.codeName;
    if (k === 'ShiftLeft' || k === 'ShiftRight') {
      this.addShift();
    } else if (k === 'CapsLock') {
      this.addCaps();
    } else if (k === 'ControlLeft' || k === 'ControlRight') {
      this.layoutsKeys.ctrl = true;
      if (this.layoutsKeys.ctrl && this.layoutsKeys.alt) {
        this.toggleLanguage();
      }
    } else if (k === 'AltLeft' || k === 'AltRight') {
      this.layoutsKeys.alt = true;
      if (this.layoutsKeys.ctrl && this.layoutsKeys.alt) {
        this.toggleLanguage();
      }
    } else if (k === 'Enter') {
      this.sendToTextArea('\n');
    } else if (k === 'Tab') {
      this.sendToTextArea('\t');
    } else if (k === 'Backspace') {
      this.start = this.textarea.selectionStart;
      this.end = this.textarea.selectionEnd;
      if (this.textarea.selectionStart === this.textarea.selectionEnd) {
        if (this.start - 1 <= 0) {
          this.start = 0;
        } else {
          this.start -= 1;
        }
      }
      this.textarea.setRangeText('', this.start, this.end);
      this.textarea.selectionStart = this.start;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    } else if (k === 'Delete') {
      this.start = this.textarea.selectionStart;
      this.end = this.textarea.selectionEnd;
      if (this.textarea.selectionStart === this.textarea.selectionEnd) {
        this.end += 1;
      }
      this.textarea.setRangeText('', this.start, this.end);
      this.textarea.selectionStart = this.start;
      this.textarea.selectionEnd = this.textarea.selectionStart;
    } else {
      if (k === 'MetaLeft') {
        return;
      }
      this.sendToTextArea(key.current);
    }
  }

  cancelLayout(k) {
    if (k === 'ControlLeft' || k === 'ControlRight') {
      this.layoutsKeys.ctrl = false;
    } else if (k === 'AltLeft' || k === 'AltRight') {
      this.layoutsKeys.alt = false;
    }
  }

  toggleLanguage() {
    if (this.language === 'rus') {
      this.language = 'eng';
    } else {
      this.language = 'rus';
    }
    this.keys.forEach((el) => el.changeLanguage(this.language));
    Storage.setLanguage(this.language);
  }

  addCaps() {
    this.keys.forEach((el) => el.toggleCaps());
    document.querySelector('.CapsLock').classList.toggle('caps-is-on');
  }

  addShift() {
    if (this.shiftIsPressed) {
      return;
    }
    this.keys.forEach((el) => el.toggleShift());
    this.shiftIsPressed = true;
  }

  disableShift(k) {
    if (!this.shiftIsPressed) {
      return;
    }
    if (k === 'ShiftLeft' || k === 'ShiftRight') {
      this.removeShift();
    }
  }

  removeShift() {
    this.shiftIsPressed = false;
    this.keys.forEach((el) => el.toggleShift());
  }

  sendToTextArea(c) {
    this.start = this.textarea.selectionStart;
    this.end = this.textarea.selectionEnd;
    this.textarea.setRangeText(c);
    this.textarea.selectionStart = this.start + c.length;
    this.textarea.selectionEnd = this.textarea.selectionStart;
    this.textarea.scrollTop = this.textarea.scrollHeight;
    this.textarea.focus();
  }
}
