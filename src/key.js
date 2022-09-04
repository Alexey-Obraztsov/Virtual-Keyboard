export default class Key {
    constructor(lang, code, eng, rus) {
      this.capsIsOn = false;
      this.language = lang;
      this.codeName = code;
      this.layout = {
        eng: {
          Low: eng.Low,
          Up: eng.Up,
          caps: eng.caps,
          shiftCaps: eng.shiftCaps,
        },
        rus: {
          Low: rus.Low,
          Up: rus.Up,
          caps: rus.caps,
          shiftCaps: rus.shiftCaps,
        },
      };
  
      this.current = this.layout[this.language].Low;
    }
  
    createButton() {
      this.btn = document.createElement('button');
      this.btn.classList.add('button');
      this.btn.classList.add(this.codeName);
      this.btn.textContent = this.current;
      return this.btn;
    }
  
    toggleShift() {
      if (this.capsIsOn) {
        if (this.current === this.layout[this.language].caps) {
          this.current = this.layout[this.language].shiftCaps;
        } else if (this.current === this.layout[this.language].shiftCaps) {
          this.current = this.layout[this.language].caps;
        }
      } else if (!this.capsIsOn) {
        if (this.current === this.layout[this.language].Low) {
          this.current = this.layout[this.language].Up;
        } else if (this.current === this.layout[this.language].Up) {
          this.current = this.layout[this.language].Low;
        }
      }
      this.btn.textContent = this.current;
    }
  
    toggleCaps() {
      this.capsIsOn = !this.capsIsOn;
      if (this.capsIsOn) {
        this.current = this.layout[this.language].caps;
      } else {
        this.current = this.layout[this.language].Low;
      }
      this.btn.textContent = this.current;
    }
  
    addPressed() {
      this.btn.classList.add('pressed');
    }
  
    removePressed() {
      this.btn.classList.remove('pressed');
    }
  
    changeLanguage(l) {
      this.language = l;
      if (this.capsIsOn) {
        this.current = this.layout[this.language].caps;
      } else {
        this.current = this.layout[this.language].Low;
      }
      this.btn.textContent = this.current;
    }
  }
  