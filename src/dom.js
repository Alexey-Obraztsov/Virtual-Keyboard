export default class Dom {
    constructor() {
      this.content = document.createElement('div');
    }
  
    createPage() {
      this.content.classList.add('centralizer');
      const h1 = document.createElement('h1');
      h1.textContent = 'Виртуальная клавиатура';
      h1.classList.add('title');
      this.content.append(h1);
      const textarea = document.createElement('textarea');
      textarea.classList.add('body--textarea textarea');
      this.content.append(textarea);
  
      const description = document.createElement('p');
      description.textContent = 'Клавиатура создана в операционной системе Windows';
      description.classList.add('description');
      this.content.append(description);
  
      const info = document.createElement('p');
      info.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
      info.classList.add('language');
      this.content.append(info);
      document.body.append(this.content);
    }
  
    addKeyboard(x) {
      this.textarea = document.querySelector('.textarea');
      this.textarea.insertAdjacentElement('afterend', x);
    }
  }
  