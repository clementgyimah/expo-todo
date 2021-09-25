import * as SQLite from 'expo-sqlite';
import { SQLError } from 'expo-sqlite';

interface transactionFunctions {
    executeSql: Function
}

const verifyTheDb = (tx: transactionFunctions) => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS users (Name VARCHAR(100) PRIMARY KEY NOT NULL, Age INT(100))`);
}

const errorHandler = (err:SQLError) => console.log('Tables verification error: ', err);
const successHandler = () => console.log('Tables verified successfully');

export const verifyDb = () => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => verifyTheDb(p), (e) => errorHandler(e), () => successHandler())
}