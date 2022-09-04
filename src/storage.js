export default class Storage {
    static setLanguage(language) {
      localStorage.setItem('keyboard-language', language);
    }
  
    static getLanguage() {
      const result = localStorage.getItem('keyboard-language');
      return result;
    }
  }