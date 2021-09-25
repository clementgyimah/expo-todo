import * as SQLite from 'expo-sqlite';
import { SQLError } from 'expo-sqlite';

interface userData {
    [key: string]: any,
}

const addUserCallback = (tx: SQLite.SQLTransaction, props: userData) => {
    tx.executeSql(`INSERT INTO users VALUES(${props.name}, ${props.age})`)
}

const errorHandler = (err:SQLError) => console.log('Adding new user error: ', err);
const successHandler = () => console.log('User added successfully');

export const addTodo = ({...props}) => {
    const db = SQLite.openDatabase('todoList');
    db.transaction((p) => addUserCallback(p, props), (e) => errorHandler(e), () => successHandler())
}

// "postinstall": "node_modules/.bin/rn-nodeify --install fs,os,events,util,stream,path --hack"