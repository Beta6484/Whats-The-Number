import Watcher from '../../services/watcher';
import Digits from '../digits';
import './style.scss';

export default class Display {
  constructor() {
    this.el = document.createElement('div');
    this.val = document.createElement('input');
    this.digits = new Digits();
    this.watcher = new Watcher();

    this.el.classList.add('display');
    this.val.setAttribute('type', 'hidden');
    this.val.value = 0;

    this.el.appendChild(this.digits.el);
    this.el.appendChild(this.val);
    
    this.watcher.update(this.val);

    this.val.onchange = (evt) => {
      this.digits.update(this.val.value);
    };
  }

  // Retornando o elemento
  el() {
    return this.el;
  }
}