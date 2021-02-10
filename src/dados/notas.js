export default class ArrayDeNotas {
  constructor() {
    this.itens = [];
    this._inscritos = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.itens.push(novaNota);
    this.notificar();
  }

  apagarNotas(indice) {
    this.itens.splice(indice, 1);
    this.notificar();
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
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
