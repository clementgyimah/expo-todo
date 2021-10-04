export interface flatListItems {
    UUID: string,
    Title: string,
    Content: number
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