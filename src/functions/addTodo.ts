import * as SQLite from 'expo-sqlite';
import { userData } from '../types/TsTypes';
import dbError from './error/dbError';
import txnSuccess from './success/txnSuccess';
import UUID from 'react-native-uuid';

const addUserCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(
        `INSERT INTO users VALUES('${UUID.v4()}', '${props.title}', '${props.content}')`,
        [],
        () => txnSuccess('User added successfully'),
        (err) => dbError('Error in inserting data into database', err)
    );
}

export const addTodo = ({ ...props }) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => addUserCallback(p, props),
        (err) => dbError('Transaction Error in inserting data into database', err),
        () => txnSuccess('Transaction for inserting data into database started successfully...')
    );
}
