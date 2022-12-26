import { configureStore } from '@reduxjs/toolkit';
import reducer from '../store/slice/formSlice';
export const store = configureStore({
	reducer: {
		form: reducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
