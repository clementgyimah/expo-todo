import * as SQLite from 'expo-sqlite';
import { userData } from '../types/TsTypes';
import dbError from './error/dbError';
import txnSuccess from './success/txnSuccess';

/**
 * function returned after the sql query is runned successfully
 * @param transaction transaction object returned from sqlite
 * @param results returned results from the sql query
 * @param props props from the caller function
 */
const getDataSuccess = (transaction: SQLite.SQLTransaction, results: any, props: userData) => {
    //NB: results type is set to 'any' because the type 'SQLite.SQLResultSet' 
    // does not have property '_array' on it's 'rows' property 
    props.setTheDataArray(results.rows._array);
}

/**
 * function that is called by the 'getAllTodos' function to run the sql query
 * @param tx sql transaction object
 * @param props props from the caller function
 */
const getAllTodosCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(
        `SELECT * FROM users`,
        // `DROP TABLE users`,
        [],
        (tran, res) => getDataSuccess(tran, res, props),
        (err) => dbError('Error in getting all data from database', err)
    );
}

/**
 * function to get all todo from the database
 * @param props props from the caller function
 */
export function getAllTodos({ ...props }) {
    const db = SQLite.openDatabase('todoList');
    db.transaction(
        (p) => getAllTodosCallback(p, props),
        (err) => dbError('Transaction Error in getting all data from database', err),
        () => txnSuccess('Transaction for getting all database data started successfully...')
    );
}
