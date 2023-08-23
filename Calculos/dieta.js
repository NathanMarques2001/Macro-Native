class Dieta {

  #pessoa;
  #tmb;
  #fatorAtividade;
  #dieta;
  #caloriasDiarias;

  constructor(_pessoa, _fatorAtividade, _dieta) {
    this.#pessoa = _pessoa;
    this.#fatorAtividade = _fatorAtividade;
    this.#tmb = Math.round(this.calculaCaloriasDiariasAtividade());
    this.#dieta = _dieta;
    this.#caloriasDiarias = this.calculaDieta();
  }

  calculaTMB() {
    let peso = 0, altura = 0, idade = 0, tmb = 0;

    if (this.#pessoa.getSexo() === 'M') {
      //TMB = 88,362 + (13,397 × peso em kg) + (4,799 × altura em cm) - (5,677 × idade em anos)
      tmb = 88.362;
      peso = 13.397;
      altura = 4.799;
      idade = 5.677;
    } else if (this.#pessoa.getSexo() === 'F') {
      //TMB = 447,593 + (9,247 × peso em kg) + (3,098 × altura em cm) - (4,330 × idade em anos)
      tmb = 447.593;
      peso = 9.247;
      altura = 3.098;
      idade = 4.330;
    }

    return (tmb + (peso * this.#pessoa.getPeso()) + (altura * this.#pessoa.getAltura()) - (idade * this.#pessoa.getIdade()));
  }

  calculaCaloriasDiariasAtividade() {
    let fator = 0;

    if (this.#fatorAtividade === 'Sedentário') {
      // Pouco ou nenhum exercício
      fator = 1.2;
    } else if (this.#fatorAtividade === 'Levemente ativo') {
      // Exercício leve de 1-3 dias por semana
      fator = 1.375;
    } else if (this.#fatorAtividade === 'Moderadamente ativo') {
      // Exercício moderado de 3-5 dias por semana
      fator = 1.55;
    } else if (this.#fatorAtividade === 'Ativo') {
      // Exercício intenso de 6-7 dias por semana
      fator = 1.725;
    } else if (this.#fatorAtividade === 'Muito ativo') {
      // Exercício intenso diariamente ou exercício físico pesado e trabalho físico
      fator = 1.9;
    }

    return (this.calculaTMB() * fator);
  }

  calculaDieta() {
    let calorias = 0;

    if (this.#dieta === 'bulking') {
      // Ganho de peso
      calorias = this.#tmb + 300;
    } else if (this.#dieta === 'cutting') {
      // Perda de peso
      calorias = this.#tmb - 300;
    }

    return calorias;
  }
}

module.exports = Dieta;