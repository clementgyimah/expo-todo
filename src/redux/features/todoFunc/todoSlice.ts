import { createSlice } from '@reduxjs/toolkit';
import { flatListItems } from '../../../types/TsTypes';

/**
 * todo redux slice function
 */
export const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        value: []
    },
    reducers: {
        addTodoReducer: (state: any, action) => {
            //add the new todo object to the old todo array
            state.value.push(action.payload);
        },
        removeTodoReducer: (state, action) => {
            //search for the todo to be removed and remove it.
            state.value.map((currObj: flatListItems, index) => {
                if (currObj.ID === action.payload.todoID) {
                    // remove the todo
                    return state.value.splice(index, 1);
                }
            });
        },
        initializeTodo: (state, action) => {
            // set the initial value of the todo array
            state.value = action.payload.theArray;
        },
        editTodoReducer: (state, action) => {
            //search for the todo to be edited and edit it.
            state.value.map((currObj: flatListItems) => {
                if (currObj.ID === action.payload.todoID) {
                    currObj.Title = action.payload.newTodoTitle;
                    return currObj.Content = action.payload.newTodoContent;
                }
            });
        }
    }
});

export const {
    addTodoReducer,
    removeTodoReducer,
    initializeTodo,
    editTodoReducer,
} = todoSlice.actions;

export default todoSlice.reducer;
