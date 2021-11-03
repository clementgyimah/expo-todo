import * as SQLite from 'expo-sqlite';
import { SQLError } from 'expo-sqlite';
import { transactionFunctions } from '../types/TsTypes';
import dbError from './error/dbError';
import txnSuccess from './success/txnSuccess';

/**
 * function that is called by the 'verifyDb' function to run the sql query 
 * @param tx sql transaction object
 */
const verifyTheDb = (tx: transactionFunctions) => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS users (ID VARCHAR(50) PRIMARY KEY NOT NULL, Title VARCHAR(100), Content INT(100))`);
}

/**
 * function for verifying database and it's tables
 * creates new tables if some doesn't exist already
 */
export const verifyDb = () => {
    const db = SQLite.openDatabase('todoList');
    db.transaction(
        (p) => verifyTheDb(p),
        (e) => dbError('Tables verification error: ', e),
        () => txnSuccess('Tables verified successfully')
    )
}
