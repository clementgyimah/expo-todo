import * as SQLite from 'expo-sqlite';
import { SQLError } from 'expo-sqlite';
import {userData} from '../types/TsTypes';

const getAllTodosCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(`INSERT INTO users VALUES('${props.name}', '${props.text}')`)
}

const errorHandler = (err:SQLError) => console.log('Adding new user error: ', err);
const successHandler = () => console.log('All Todos gotten successfully');

export const getAllTodos = ({...props}) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => getAllTodosCallback(p, props), (e) => errorHandler(e), () => successHandler())
}

// "postinstall": "node_modules/.bin/rn-nodeify --install fs,os,events,util,stream,path --hack"