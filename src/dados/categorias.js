export default class Categorias {
  constructor() {
    this.itens = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.itens));
  }

  adicionarCategoria(novaCategoria) {
    this.itens.push(novaCategoria);
    this.notificar();
  }
}
