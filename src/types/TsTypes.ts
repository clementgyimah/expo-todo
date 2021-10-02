export interface flatListItems {
    title: string,
    content: number
}

export interface userData {
    [key: string]: any,
}

export interface transactionFunctions {
    executeSql: Function
}

/*
export interface sqlResults {
    insertId: number;
    rowsAffected: number;
    rows: {
        length: number;
        item(index: number): any;
        _array: Array<flatListItems>
    }
}
*/