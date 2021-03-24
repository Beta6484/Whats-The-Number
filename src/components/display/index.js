import { connect } from '../../services/connect';
import Watcher from '../../services/watcher';
import Digits from '../digits';
import './style.scss';

export default class Display {
  constructor() {
    this.el = document.createElement('div');
    this.val = document.createElement('input');
    this.message = document.createElement('div');
    this.reset = document.createElement('button');
    this.icon = document.createElement('i');
    this.digits = new Digits();
    this.watcher = new Watcher();
    this.apiVal;

    this.el.classList.add('display');
    this.val.setAttribute('type', 'hidden');
    this.val.value = 0;
    this.message.classList.add('display__message');
    this.reset.classList.add('display__reset');
    this.reset.classList.add('none');
    this.reset.setAttribute('type', 'button');
    this.reset.innerHTML = 'Nova Partida';
    this.icon.classList.add('uis');
    this.icon.classList.add('uis-redo');

    this.reset.prepend(this.icon);
    this.el.appendChild(this.message);
    this.el.appendChild(this.digits.el);
    this.el.appendChild(this.reset);
    this.el.appendChild(this.val);
    
    this.watcher.update(this.val);

    this.val.onchange = () => {
      this.digits.update(this.val.value);
      this.compare();
    };

    this.reset.onclick = () => {
      this.resetDisplay();
    }

    this.connect();
  }

  // Retornando o elemento
  el() {
    return this.el;
  }

  // Connectando com a api de retorno de valor
  connect() {
    connect().then(res => {
      if('value' in res) {
        this.apiVal = res.value;
      } else if('Error' in res) {
        this.digits.update(res.StatusCode);
        this.message.innerHTML = 'Erro';
        this.el.removeAttribute('class');
        this.el.classList.add('display');
        this.el.classList.add('error');
      }
    });
  }

  // Comparando o valor inputado com o retornado da API
  compare() {
    switch (true) {
      case (this.val.value < this.apiVal):
        this.message.innerHTML = 'É maior';
      break;
      case (this.val.value > this.apiVal):
        this.message.innerHTML = 'É menor';
      break;
      case (this.val.value == this.apiVal):
        this.message.innerHTML = 'Você acertou!!!';
        this.el.classList.add('success');
        this.reset.classList.remove('none');
      break;
    }
  }

  // Resetando o estado do jogo e atualizando o valor da api
  resetDisplay() {
    this.el.removeAttribute('class');
    this.el.classList.add('display');
    this.message.innerHTML = '';
    this.reset.classList.add('none');
    this.digits.update();
    this.connect();
  }
}