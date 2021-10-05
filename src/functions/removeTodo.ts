import * as SQLite from 'expo-sqlite';
import { SQLError } from 'expo-sqlite';
import { userData } from '../types/TsTypes';
import dbError from './error/dbError';
import txnSuccess from './success/txnSuccess';

const removeTodoFunc = (tx: SQLite.SQLTransaction, props: userData) => {
    
    tx.executeSql(
        'DELETE FROM users WHERE ID=?',
        [props.todoID],
        () => {
            txnSuccess('Todo removed successfully from database')
            return props.reloadTodoList();
        },
        (err) => dbError('Error in removing todo data from database', err)
    );
}

export const removeTodo = ({...props}) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction(
        (p) => removeTodoFunc(p, props),
        (err) => dbError('Transaction Error in removing Todo data from database', err),
        () => txnSuccess('Transaction for removing Todo data from database started successfully...')
    );
}