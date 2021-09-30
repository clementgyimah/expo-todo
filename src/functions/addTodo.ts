import * as SQLite from 'expo-sqlite';
import {userData} from '../types/TsTypes';


const insertSuccess = (response: SQLite.SQLTransaction) => {
    console.log('User added successfully: ', response);
}

const insertError = (err: SQLite.SQLTransaction) => {
    console.log('Adding new user error: ', err);
}

const addUserCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(
        `INSERT INTO users VALUES('${props.name}', '${props.text}')`,
         [], 
         (res) => insertSuccess(res), 
         (e) => insertError(e))
}

const errorHandler = (err:SQLite.SQLError) => console.log(': ', err);
const successHandler = () => console.log('Transaction started successfully...');

export const addTodo = ({...props}) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => addUserCallback(p, props), (e) => errorHandler(e), () => successHandler())
}

// "postinstall": "node_modules/.bin/rn-nodeify --install fs,os,events,util,stream,path --hack"