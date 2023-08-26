class Diet {

  #person;
  #bmr;
  #activityFactor;
  #dietType;
  #dailyCalories;
  #dailyCarbohydrate;
  #dailyProtein;
  #dailyFat;

  constructor(_person, _activityFactor, _dietType) {
    this.#person = _person;
    this.#activityFactor = _activityFactor;
    this.#bmr = Math.round(this.calculateBMRWithActivity());
    this.#dietType = _dietType;
    this.#dailyCalories = this.calculateDailyCalories().toFixed(0);
    this.#dailyProtein = this.calculateDailyProtein().toFixed(0);
    this.#dailyCarbohydrate = this.calculateDailyCarbohydrate().toFixed(0);
    this.#dailyFat = this.calculateDailyFat().toFixed(0);
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

    if (this.#dietType === 'Gain weight') {
      // Weight gain
      calories = this.#bmr + 300;
    } else if (this.#dietType === 'Lose weight') {
      // Weight loss
      calories = this.#bmr - 300;
    } else if (this.#dietType === 'Maintain weight') {
      // Weight maintenance
      calories = this.#bmr;
    }

    return calories;
  }

  calculateDailyCarbohydrate() {
    // 1g carb = 4 cal
    if (this.#dietType === 'Gain weight') {
      return ((this.#dailyCalories * 0.65) / 4);
    }
    else if (this.#dietType === 'Maintain weight') {
      return ((this.#dailyCalories * 0.55) / 4);
    }
    else if (this.#dietType === 'Lose weight') {
      return ((this.#dailyCalories * 0.45) / 4);
    }
  }

  calculateDailyProtein() {
    // 1g protein = 4 cal
    if (this.#dietType === 'Gain weight') {
      return (this.#person.getWeight() * 2.0);
    }
    else if (this.#dietType === 'Maintain weight') {
      return (this.#person.getWeight() * 1.6);
    }
    else if (this.#dietType === 'Lose weight') {
      return (this.#person.getWeight() * 1.2);
    }
  }

  calculateDailyFat() {
    // 1g fat = 9 cal
    if (this.#dietType === 'Gain weight') {
      return ((this.#dailyCalories * 0.30) / 9);
    }
    else if (this.#dietType === 'Maintain weight') {
      return ((this.#dailyCalories * 0.25) / 9);
    }
    else if (this.#dietType === 'Lose weight') {
      return ((this.#dailyCalories * 0.20) / 9);
    }
  }

  getCalories() {
    return this.#dailyCalories;
  }

  getCarbohydrate() {
    return this.#dailyCarbohydrate;
  }

  getProtein() {
    return this.#dailyProtein;
  }

  getFat() {
    return this.#dailyFat;
  }

}

module.exports = Diet;
