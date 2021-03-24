import './style.scss';

export default class Digits {
  constructor() {
    this.ns = 'http://www.w3.org/2000/svg';
    this.el = document.createElement('div');
    this.svg = document.createElementNS(this.ns, 'svg');
    this.paths = [
      {
        class: 'digit__top',
        d: 'M23.19,19.77h54.1L96,2.13A10.24,10.24,0,0,0,89.74,0H10.26A10.27,10.27,0,0,0,4,2.1Z'
      },
      {
        class: 'digit__topLeft',
        d: 'M2.3,3.75A10.16,10.16,0,0,0,0,10.18V79.23A10.18,10.18,0,0,0,5.6,88.3L21.27,76.64V21.26Z'
      },
      {
        class: 'digit__topRight',
        d: 'M78.73,21.7V76.64L94.4,88.3a10.18,10.18,0,0,0,5.6-9.07V10.18a10.11,10.11,0,0,0-2.28-6.39Z'
      },
      {
        class: 'digit__middle',
        d: 'M77.15,79.2H22.85L8.39,89.78l14.46,10.58h54.3L91.61,89.78Z'
      },
      {
        class: 'digit__bottomLeft',
        d: 'M2.3,176.24A10.11,10.11,0,0,1,0,169.82v-69A10.18,10.18,0,0,1,5.6,91.7l15.67,11.66v55.38Z'
      },
      {
        class: 'digit__bottomRight',
        d: 'M78.73,158.3V103.36L94.4,91.7a10.18,10.18,0,0,1,5.6,9.07v69.05a10.11,10.11,0,0,1-2.28,6.39Z'
      },
      {
        class: 'digit__bottom',
        d: 'M23.19,160.23h54.1L96,177.87A10.24,10.24,0,0,1,89.74,180H10.26A10.27,10.27,0,0,1,4,177.9Z'
      }
    ];

    this.svg.classList.add('digits__digit');
    this.svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svg.setAttribute('viewBox', '0 0 100 180');

    console.log(this.svg);

    this.el.appendChild(this.svg);

    this.createPaths();
  }

  // Retornando o elemento
  el() {
    return this.el;
  }

  // Atualizando a classe do digito
  update(val) {
    let key = val.toString();
    let convert = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    }

    this.svg.removeAttribute('class');
    this.svg.classList.add('digits__digit');
    this.svg.classList.add(convert[key]);
  }

  // Criando paths no svg
  createPaths() {
    this.paths.forEach(path => {
      let el = document.createElementNS(this.ns, 'path');

      el.classList.add(path.class);
      el.setAttribute('d', path.d);
      this.svg.appendChild(el);
    })
  }
}