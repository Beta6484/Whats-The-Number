import './style.scss';

export default class Title {
  constructor() {
    this.el = document.createElement('h1');
    this.el.classList.add('title');
    this.el.innerHTML = 'Qual é o número?';
  }

  // Retornando o elemento
  el() {
    return this.el;
  }
}