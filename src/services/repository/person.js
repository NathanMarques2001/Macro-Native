import { db } from "../persistence/connection";

class PersonRepository {
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

  // async deletePerson(person) {
  //   return new Promise((resolve, reject) => {
  //     db.transaction((transact) => {
  //       transact.executeSql("DELETE FROM person WHERE id = ?", [person.id], () => {
  //         resolve("Person deleted successfully");
  //       }, () => {
  //         reject("Error deleted person");
  //       })
  //     });
  //   })
  // }
}

export const personRepository = new PersonRepository();