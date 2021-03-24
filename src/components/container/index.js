import Display from '../display';
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
    this.display = new Display();
    this.form = new Form();

    this.container.appendChild(this.appTitle.el);
    this.container.appendChild(this.display.el);
    this.container.appendChild(this.form.el);
  }
}