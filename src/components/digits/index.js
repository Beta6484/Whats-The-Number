import './style.scss';

export default class Digits {
  constructor() {
    this.ns = 'http://www.w3.org/2000/svg';
    this.el = document.createElement('div');

    this.el.classList.add('digits');
    this.createSVG(this.el);
  }

  // Retornando o elemento
  el() {
    return this.el;
  }

  // Atualizando a classe do digito
  update(val) {
    let keys = Array.from(String(val));
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

    if(val) {
      for(let i = 0; i < keys.length; i++) {
        this.el.querySelector(`#Digit_${i}`).removeAttribute('class');
        this.el.querySelector(`#Digit_${i}`).classList.add('digits__digit');
        this.el.querySelector(`#Digit_${i}`).classList.add(convert[keys[i]]);
      }
    } else {
      for(let i = 0; i < 3; i++) {
        this.el.querySelector(`#Digit_${i}`).removeAttribute('class');
        this.el.querySelector(`#Digit_${i}`).classList.add('digits__digit');

        i > 0 && this.el.querySelector(`#Digit_${i}`).classList.add('none');
      }
    }

    switch (true) {
      case (keys.length <= 1):
        this.el.querySelector('#Digit_1, #Digit_2').classList.add('none');
      break;
      case (keys.length === 2):
        this.el.querySelector('#Digit_2').classList.add('none');
      break;
    }
  }

  // Criando os digitos svg
  createSVG(target) {
    for(let i = 0; i < 3; i++) {
      let el = document.createElementNS(this.ns, 'svg');
      
      el.setAttribute('id', `Digit_${i}`);
      el.classList.add('digits__digit');
      i > 0 && el.classList.add('none');
      el.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      el.setAttribute('viewBox', '0 0 100 180');
      this.createPaths(el);
      target.appendChild(el);
    }
  }

  // Criando paths no svg
  createPaths(target) {
    const paths = [
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

    paths.forEach(path => {
      let el = document.createElementNS(this.ns, 'path');

      el.classList.add(path.class);
      el.setAttribute('d', path.d);
      target.appendChild(el);
    })
  }
}