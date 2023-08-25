import { db } from "../persistence/connection";

class DietRepository {

  async createDiet(diet) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("INSERT INTO diet (bmr, activity_factor, diet_type, daily_calories) VALUES (?, ?, ?, ?)", [diet.getBmr(), diet.getActivityFactor(), diet.getDietType(), diet.getDailyCalories()], () => {
          resolve("Diet created successfully");
        }, () => {
          reject("Error creating diet");
        })
      })
    });
  }

  async getDiet() {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("SELECT * FROM diet", [], (transact, result) => {
          resolve(result.rows._array);
        }, () => {
          reject("Error getting diet");
        })
      })
    });
  }

  async updateDiet(diet) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("UPDATE diet SET bmr = ?, activity_factor = ?, diet_type = ?, daily_calories = ?", [diet.getBmr(), diet.getActivityFactor(), diet.getDietType(), diet.getDailyCalories()], () => {
          resolve("Diet updated successfully");
        }, () => {
          reject("Error updating diet");
        })
      })
    });
  }
}

export const dietRepository = new DietRepository();