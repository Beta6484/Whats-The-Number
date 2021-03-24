import Watcher from '../../services/watcher';
import './style.scss';

export default class Form {
  constructor() {
    this.el = document.createElement('form');
    this.fields = document.createElement('div');
    this.input = document.createElement('input');
    this.button = document.createElement('button');
    this.error = document.createElement('span');
    this.val = '';

    this.el.classList.add('form');
    this.fields.classList.add('form__fields');
    this.input.classList.add('form__input');
    this.input.setAttribute('type', 'number');
    this.input.setAttribute('placeholder', 'Digite o palpite');
    this.button.classList.add('form__button');
    this.button.setAttribute('type', 'submit');
    this.button.innerHTML = 'Enviar';
    this.error.classList.add('form__error');

    this.fields.appendChild(this.input);
    this.fields.appendChild(this.button);
    this.el.appendChild(this.fields);

    this.el.addEventListener('submit', evt => {
      evt.preventDefault();
      this.submit();
    });

    this.watcher = new Watcher();
  }

  // Retornando o elemento
  el() {
    return this.el;
  }

  // Retornando o valor do input
  val() {
    return this.val;
  }

  // Validando o valor do input
  validate() {
    if(this.input.value === '' | this.input.value === null | this.input.value === undefined) {
      this.showError('Por favor preencha o campo com o número desejado');
      return false;
    } else if(this.input.value < 0 | this.input.value > 300) {
      this.showError('O número digitado precisa estar entre 1 e 300');
      return false;
    } else {
      this.showError();
      this.val = this.input.value;
      return true;
    }
  }

  // Mostrando mensagem de erro
  showError(message) {
    if(message) {
      this.error.innerHTML = message;
      this.el.insertBefore(this.error, this.fields);
      this.el.reset();
    } else {
      if(this.el.querySelector('.form__error')) {
        this.el.removeChild(this.error);
      }
    }
  }

  // Enviando o valor
  submit() {
    if(this.validate()) {
      this.watcher.set(this.val);
      this.el.reset();
    }
  }
}