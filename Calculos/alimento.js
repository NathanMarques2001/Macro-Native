class Alimento {
  #nome;
  #calorias;
  #carboidrato;
  #proteina;
  #fibra;
  #sodio;
  #quantidadePacote;
  #quantidade;

  constructor(_nome, _calorias, _carboidrato, _proteina, _fibra, _sodio, _quantidadePacote, _quantidade) {
    this.#nome = _nome;
    this.#calorias = _calorias;
    this.#carboidrato = _carboidrato;
    this.#proteina = _proteina;
    this.#fibra = _fibra;
    this.#sodio = _sodio;
    this.#quantidadePacote = _quantidadePacote;
    this.#quantidade = _quantidade;
  }

  calculaNovoMacro() {
    if (this.getCalorias() > 0) {
      this.setCalorias((this.getQuantidade() * this.getCalorias()) / this.getQuantidadePacote());
    }
    if (this.getCarboidrato() > 0) {
      this.setCarboidrato((this.getQuantidade() * this.getCarboidrato()) / this.getQuantidadePacote());
    }
    if (this.getProteina() > 0) {
      this.setProteina((this.getQuantidade() * this.getProteina()) / this.getQuantidadePacote());
    }
    if (this.getFibra() > 0) {
      this.setFibra((this.getQuantidade() * this.getFibra()) / this.getQuantidadePacote());
    }
    if (this.getSodio() > 0) {
      this.setSodio((this.getQuantidade() * this.getSodio()) / this.getQuantidadePacote());
    }
  }

  getNome() {
    return this.#nome;
  }

  setNome(_novoNome) {
    this.#nome = _novoNome;
  }

  getCalorias() {
    return this.#calorias;
  }

  setCalorias(_novaQuantidade) {
    this.#calorias = _novaQuantidade;
  }

  getCarboidrato() {
    return this.#carboidrato;
  }

  setCarboidrato(_novaQuantidade) {
    this.#carboidrato = _novaQuantidade;
  }

  getProteina() {
    return this.#proteina;
  }

  setProteina(_novaQuantidade) {
    this.#proteina = _novaQuantidade;
  }

  getFibra() {
    return this.#fibra;
  }

  setFibra(_novaQuantidade) {
    this.#fibra = _novaQuantidade;
  }

  getSodio() {
    return this.#sodio;
  }

  setSodio(_novaQuantidade) {
    this.#sodio = _novaQuantidade;
  }

  getQuantidadePacote() {
    return this.#quantidadePacote;
  }

  setQuantidadePacote(_novaQuantidade) {
    this.#quantidadePacote = _novaQuantidade;
  }

  getQuantidade() {
    return this.#quantidade;
  }

  setQuantidade(_novaQuantidade) {
    this.#quantidade = _novaQuantidade;
  }
}

module.exports = Alimento;