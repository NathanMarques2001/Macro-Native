import { db } from "./connection";

class TableCreator {
  tablePerson() {
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS person (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthDate TEXT, gender TEXT, weight REAL, height REAL);")
    })
  }

  tableDiet() {
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS diet (id INTEGER PRIMARY KEY AUTOINCREMENT, bmr REAL, activityFactor TEXT, dietType TEXT, dailyCalories REAL);")
    })
  }

  tableFood() {
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, calories REAL, carbohydrate REAL, protein REAL, fiber REAL, sodium REAL, packageQuantity REAL, quantity REAL);")
    })
  }
}

export const TableCreator = new TableCreator();