import Form from '../form';
import Title from '../title';
import './style.scss';

export default class Container {
  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('container');
    document.body.appendChild(this.container);

    this.appTitle;
    this.display;
    this.form;

    this.initialize();
  }

  // Montagem da view
  initialize() {
    this.appTitle = new Title();
    this.form = new Form();

    this.appendChild(this.appTitle.el);
    this.appendChild(this.form.el);
  }

  // Adicionando elementos a view
  appendChild(element) {
    this.container.appendChild(element);
  }
}