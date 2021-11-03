import React from 'react';
import * as SQLite from 'expo-sqlite';
import { userData } from '../types/TsTypes';
import dbError from './error/dbError';
import txnSuccess from './success/txnSuccess';

/**
 * function that is called by the 'addTodo' function to run the sql query
 * @param tx sql transaction object
 * @param props props from the caller function
 */
const addUserCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(
        `INSERT INTO users VALUES("${props.id}", "${props.title}", "${props.content}")`,
        [],
        () => {
            txnSuccess('User added successfully');
            return props.addTodoDispatch();
        },
        (err) => dbError('Error in inserting data into database', err)
    );
}

/**
 * function to add todo to database
 * @param props props from the caller function
 */
export const addTodo = ({ ...props }) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => addUserCallback(p, props),
        (err) => dbError('Transaction Error in inserting data into database', err),
        () => {
            return txnSuccess('Transaction for inserting data into database started successfully...');
        }
    );
}
