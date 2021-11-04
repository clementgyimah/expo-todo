import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoFunc/todoSlice';

/**
 * redux store configuration
 */
export default configureStore({
    reducer: {
        todo: todoReducer,
    }
});
