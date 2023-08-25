import { db } from "../persistence/connection";

class FoodRepository {

  async createFood(food) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("INSERT INTO food (name, calories, carbohydrates, proteins, fiber, sodium, package_quantity, quantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [food.getName(), food.getCalories(), food.getCarbohydrate(), food.getProtein(), food.getFiber(), food.getSodium(), food.getPackageQuantity(), food.getQuantity()], () => {
          resolve("Food created successfully");
        }, () => {
          reject("Error creating food");
        })
      })
    });
  }

  async getAllFoods() {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("SELECT * FROM food", [], (transact, result) => {
          resolve(result.rows._array);
        }, () => {
          reject("Error getting foods");
        })
      })
    });
  }

  async updateFood(food) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("UPDATE food SET name = ?, calories = ?, carbohydrates = ?, proteins = ?, fiber = ?, sodium = ?, package_quantity = ?, quantity = ? WHERE id = ?", [food.getName(), food.getCalories(), food.getCarbohydrate(), food.getProtein(), food.getFiber(), food.getSodium(), food.getPackageQuantity(), food.getQuantity(), food.getId()], () => {
          resolve("Food updated successfully");
        }, () => {
          reject("Error updating food");
        })
      })
    });
  }

  async deleteFood(food) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("DELETE FROM food WHERE id = ?", [food.getId()], () => {
          resolve("Food deleted successfully");
        }, () => {
          reject("Error deleted food");
        })
      })
    });
  }
}

export const foodRepository = new FoodRepository();