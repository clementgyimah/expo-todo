import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todoFunc/addTodo';

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
    }
})