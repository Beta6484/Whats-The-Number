import Title from '../title';
import './style.scss';

export default class Container {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
    document.body.appendChild(this.container);

    this.appTitle;

    this.initialize();
  }

  initialize() {
    this.appTitle = new Title();

    this.appendChild(this.appTitle.el);
  }

  appendChild(element) {
    this.container.appendChild(element);
  }

  removeChild(element) {
    this.container.removeChild(element);
  }
}