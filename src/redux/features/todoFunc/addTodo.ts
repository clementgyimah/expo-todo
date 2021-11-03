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
            state.value.map((currObj:flatListItems, index) => {
                if (currObj.ID === action.payload.todoID){
                    return state.value.splice(index, 1);
                } 
            });
            
        },
        initializeTodo: (state, action) => {
            state.value = action.payload.theArray;
        }
    }
});

export const { addTodoReducer, removeTodoReducer, initializeTodo } = todoSlice.actions;

export default todoSlice.reducer;