class Person {
  #name;
  #birthDate;
  #age;
  #gender;
  #weight;
  #height;

  constructor(_name, _birthDate, _gender, _weight, _height) {
    this.#name = _name;
    this.#birthDate = _birthDate;
    this.#gender = _gender;
    this.#weight = _weight;
    this.#height = _height;
    this.#age = this.calculateAge();
  }

  calculateAge() {
    const currentDate = new Date();
    const birthDate = new Date(this.#birthDate);

    const currentYear = currentDate.getFullYear();
    const birthYear = birthDate.getFullYear();

    let age = currentYear - birthYear;

    // Check if birthday hasn't occurred yet this year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDate.getDate())) {
      age--;
    }

    return age;
  }

  getName() {
    return this.#name;
  }

  getGender() {
    return this.#gender;
  }

  getWeight() {
    return this.#weight;
  }

  getHeight() {
    return this.#height;
  }

  getAge() {
    return this.#age;
  }
}

module.exports = Person;
