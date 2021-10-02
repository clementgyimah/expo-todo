import * as SQLite from 'expo-sqlite';

export default function dbError(description:string, err:SQLite.SQLError | SQLite.SQLTransaction) {
    return console.log('Error on ', description + ': ', err);
}