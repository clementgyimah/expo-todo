import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        value: [{ID: '12345', Title: 'A test title', Content: 'This is what I will do today'}]
    },
    reducers: {
        addTodoReducer: (state, action) => {
            state.value.push(action.payload);
        },
        removeTodoReducer: (state, action) => {
            state.value.map((currObj, index) => {
                if (currObj.ID === action.payload.todoID){
                    return state.value.splice(index, 1);
                } 
            });
            
        }
    }
})

export const { addTodoReducer, removeTodoReducer } = todoSlice.actions;

export default todoSlice.reducer;