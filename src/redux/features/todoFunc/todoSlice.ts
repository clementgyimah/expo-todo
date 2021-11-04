import { createSlice } from '@reduxjs/toolkit';
import { flatListItems } from '../../../types/TsTypes';

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        value: []
    },
    reducers: {
        addTodoReducer: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodoReducer: (state, action) => {
            state.value.map((currObj: flatListItems, index) => {
                if (currObj.ID === action.payload.todoID) {
                    return state.value.splice(index, 1);
                }
            });
        },
        initializeTodo: (state, action) => {
            state.value = action.payload.theArray;
        },
        editTodoReducer: (state, action) => {
            state.value.map((currObj: flatListItems) => {
                if (currObj.ID === action.payload.todoID) {
                    currObj.Title = action.payload.newTodoTitle;
                    currObj.Content = action.payload.newTodoContent;
                    // return state.value.splice(index, 1);
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