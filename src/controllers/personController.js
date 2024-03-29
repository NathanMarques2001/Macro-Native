import { db } from "../services/connection";

class PersonController {
  async createPerson(person) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("INSERT INTO person (name, birthDate, gender, weight, height) VALUES (?, ?,?, ?, ?)", [person.getName(), person.getBirthDate(), person.getGender(), person.getWeight(), person.getHeight()], () => {
          resolve("Person created successfully");
        }, () => {
          reject("Error creating person");
        })
      });
    })
  }

  async getPerson() {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("SELECT * FROM person", [], (transact, result) => {
          resolve(result.rows._array);
        }, () => {
          reject("Error getting person");
        })
      });
    })
  }

  async updatePerson(person) {
    return new Promise((resolve, reject) => {
      db.transaction((transact) => {
        transact.executeSql("UPDATE person SET name = ?, birthDate = ?, gender = ?, weight = ?, height = ?", [person.getName(), person.getBirthDate(), person.getGender(), person.getWeight(), person.getHeight()], () => {
          resolve("Person updated successfully");
        }, () => {
          reject("Error updating person");
        })
      });
    })
  }
}

export const PersonController = new PersonController();