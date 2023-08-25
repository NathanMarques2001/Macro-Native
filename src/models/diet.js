class Diet {

  #person;
  #bmr;
  #activityFactor;
  #dietType;
  #dailyCalories;
  #dailyCarbohydrate;
  #dailyProtein;
  #dailyGordura;

  constructor(_person, _activityFactor, _dietType) {
    this.#person = _person;
    this.#activityFactor = _activityFactor;
    this.#bmr = Math.round(this.calculateBMRWithActivity());
    this.#dietType = _dietType;
    this.#dailyCalories = this.calculateDailyCalories();
  }

  calculateBMR() {
    let weight = 0, height = 0, age = 0, bmr = 0;

    if (this.#person.getGender() === 'M') {
      // BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
      bmr = 88.362;
      weight = 13.397;
      height = 4.799;
      age = 5.677;
    } else if (this.#person.getGender() === 'F') {
      // BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
      bmr = 447.593;
      weight = 9.247;
      height = 3.098;
      age = 4.330;
    }

    return (bmr + (weight * this.#person.getWeight()) + (height * this.#person.getHeight()) - (age * this.#person.getAge()));
  }

  calculateBMRWithActivity() {
    let factor = 0;

    if (this.#activityFactor === 'Sedentary') {
      // Little to no exercise
      factor = 1.2;
    } else if (this.#activityFactor === 'Lightly active') {
      // Light exercise 1-3 days a week
      factor = 1.375;
    } else if (this.#activityFactor === 'Moderately active') {
      // Moderate exercise 3-5 days a week
      factor = 1.55;
    } else if (this.#activityFactor === 'Active') {
      // Intense exercise 6-7 days a week
      factor = 1.725;
    } else if (this.#activityFactor === 'Very active') {
      // Very intense exercise daily or strenuous physical work
      factor = 1.9;
    }

    return (this.calculateBMR() * factor);
  }

  calculateDailyCalories() {
    let calories = 0;

    if (this.#dietType === 'bulking') {
      // Weight gain
      calories = this.#bmr + 300;
    } else if (this.#dietType === 'cutting') {
      // Weight loss
      calories = this.#bmr - 300;
    }

    return calories;
  }

  calculateDailyCarbohydrate() {

  }

  calculateDailyProtein() {

  }

  calculateDailyGordura() {

  }
}

module.exports = Diet;
