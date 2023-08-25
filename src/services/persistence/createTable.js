import { db } from "./connection";

class CreateTable{
  tablePerson(){
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS person (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, birthDate TEXT, gender TEXT, weight REAL, height REAL);")
    })
  }

  tableDiet(){
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS diet (id INTEGER PRIMARY KEY AUTOINCREMENT, bmr REAL, activityFactor TEXT, dietType TEXT, dailyCalories REAL);")
    })
  }

  tableFood(){
    db.transaction((transact) => {
      transact.executeSql("CREATE TABLE IF NOT EXISTS food (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity REAL, packageQuantity REAL, calories REAL, carbohydrate REAL, protein REAL, fiber REAL, sodium REAL);")
    })
  }
}

export const createTable = new CreateTable();