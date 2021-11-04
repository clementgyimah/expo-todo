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
const editUserCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    // console.log('The ID: ', props.IDValue);
    // console.log('The title: ', props.titleValue);
    // console.log('The Content: ', props.contentValue);
    tx.executeSql(
        `UPDATE users SET Title="${props.titleValue}", Content="${props.contentValue}" WHERE ID="${props.IDValue}"`,
        [],
        () => {
            txnSuccess('Todo Edited successfully');
            return props.editTodoDispatch();
        },
        (err) => dbError('Error in editing data from database', err)
    );
}

/**
 * function to edit todo from database
 * @param props props from the caller function
 */
export const editTodo = ({ ...props }) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => editUserCallback(p, props),
        (err) => dbError('Transaction Error in editing data from database', err),
        () => {
            return txnSuccess('Transaction for editing data from database started successfully...');
        }
    );
}
