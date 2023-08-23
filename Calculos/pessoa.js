class Pessoa {
  #nome;
  #dataNascimento;
  #idade;
  #sexo;
  #peso;
  #altura;

  constructor(_nome, _dataNascimento, _sexo, _peso, _altura) {
    this.#nome = _nome;
    this.#dataNascimento = _dataNascimento;
    this.#sexo = _sexo;
    this.#peso = _peso;
    this.#altura = _altura;
    this.#idade = this.calculaIdade();
  }

  calculaIdade() {
    const dataAtual = new Date();
    const dataNascimento = new Date(this.#dataNascimento);

    const anoAtual = dataAtual.getFullYear();
    const anoNascimento = dataNascimento.getFullYear();

    const idade = anoAtual - anoNascimento;

    // Verificar se o aniversário ainda não ocorreu este ano
    const mesAtual = dataAtual.getMonth();
    const mesNascimento = dataNascimento.getMonth();

    if (mesNascimento > mesAtual || (mesNascimento === mesAtual && dataNascimento.getDate() > dataAtual.getDate())) {
      return idade - 1;
    } else {
      return idade;
    }
  }

  getNome() {
    return this.#nome;
  }

  getSexo() {
    return this.#sexo;
  }

  getPeso() {
    return this.#peso;
  }

  getAltura() {
    return this.#altura;
  }

  getIdade() {
    return this.#idade;
  }
}

module.exports = Pessoa;