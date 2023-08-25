import * as SQLite from 'expo-sqlite';

class Connection {
  conn() {
    const database = SQLite.openDatabase('db.db');
    return database;
  }

}

export const db = new Connection().conn();