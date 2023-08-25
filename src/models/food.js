class Food {
  #name;
  #calories;
  #carbohydrate;
  #protein;
  #fiber;
  #sodium;
  #packageQuantity;
  #quantity;

  constructor(_name, _calories, _carbohydrate, _protein, _fiber, _sodium, _packageQuantity, _quantity) {
    this.#name = _name;
    this.#calories = _calories;
    this.#carbohydrate = _carbohydrate;
    this.#protein = _protein;
    this.#fiber = _fiber;
    this.#sodium = _sodium;
    this.#packageQuantity = _packageQuantity;
    this.#quantity = _quantity;
  }

  calculateNewMacros() {
    if (this.getCalories() > 0) {
      this.setCalories((this.getQuantity() * this.getCalories()) / this.getPackageQuantity());
    }
    if (this.getCarbohydrate() > 0) {
      this.setCarbohydrate((this.getQuantity() * this.getCarbohydrate()) / this.getPackageQuantity());
    }
    if (this.getProtein() > 0) {
      this.setProtein((this.getQuantity() * this.getProtein()) / this.getPackageQuantity());
    }
    if (this.getFiber() > 0) {
      this.setFiber((this.getQuantity() * this.getFiber()) / this.getPackageQuantity());
    }
    if (this.getSodium() > 0) {
      this.setSodium((this.getQuantity() * this.getSodium()) / this.getPackageQuantity());
    }
  }

  getName() {
    return this.#name;
  }

  setName(_newName) {
    this.#name = _newName;
  }

  getCalories() {
    return this.#calories;
  }

  setCalories(_newAmount) {
    this.#calories = _newAmount;
  }

  getCarbohydrate() {
    return this.#carbohydrate;
  }

  setCarbohydrate(_newAmount) {
    this.#carbohydrate = _newAmount;
  }

  getProtein() {
    return this.#protein;
  }

  setProtein(_newAmount) {
    this.#protein = _newAmount;
  }

  getFiber() {
    return this.#fiber;
  }

  setFiber(_newAmount) {
    this.#fiber = _newAmount;
  }

  getSodium() {
    return this.#sodium;
  }

  setSodium(_newAmount) {
    this.#sodium = _newAmount;
  }

  getPackageQuantity() {
    return this.#packageQuantity;
  }

  setPackageQuantity(_newAmount) {
    this.#packageQuantity = _newAmount;
  }

  getQuantity() {
    return this.#quantity;
  }

  setQuantity(_newAmount) {
    this.#quantity = _newAmount;
  }
}

module.exports = Food;