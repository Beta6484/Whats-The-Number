/*** Neste serviço simulamos uma resposta imediata para comunicação entre componentes utilizando o localStorage ***/

export default class Watcher {
  constructor() {
    window.localStorage.setItem('WTNVal', 0);
    window.localStorage.setItem('WTNDisable', 'false');
  }

  // Adicionando o valor ao localStorage
  set(val) {
    window.localStorage.setItem('WTNVal', val);
    window.dispatchEvent(new Event('storage'));
  }

  // Observando alterações no localStorage e atualizando o valor do elemento setado 
  update(val) {
    window.onstorage = () => {
      val.value = window.localStorage.getItem('WTNVal');
      val.dispatchEvent(new Event('change'));
    };
  }

  // Desabilitando as entradas do formulário
  setDisable(disable) {
    window.localStorage.setItem('WTNDisable', disable);
    window.dispatchEvent(new Event('storage'));
  }

  // Retornando se o form deve ser desabilitado 
  getDisable() {
    window.onstorage = () => {
      return window.localStorage.getItem('WTNDisable');
    };
  }
}