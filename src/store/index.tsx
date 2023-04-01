import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
	addUser,
	deleteUser,
	fetchUsers,
	updateUser,
	userReducer,
} from './slice/userSlice';

const store = configureStore({
	reducer: {
		users: userReducer,
	},
});

export { addUser, deleteUser, fetchUsers, store, updateUser };
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
