import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../interfaces/Users';
import { querySearchType } from '../../types/querySearchType';

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async ({ page, limit }: querySearchType) => {
		const response = await axios.get(
			`https://fsg-tss.onrender.com/users?_page=${page}&_limit=${limit}`
		);
		return response.data;
	}
);

const userSlice = createSlice({
	name: 'users',
	initialState: [] as User[],
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			// state.push(action.payload);
		},
		updateUser: (state, action: PayloadAction<User>) => {
			// const { id, name, email } = action.payload;
			// const user = state.find((user) => user.id == id);
			// if (user) {
			// 	user.name = name;
			// 	user.email = email;
			// }
		},
		deleteUser: (state, action: PayloadAction<string>) => {
			// const { id } = action.payload;
			// const user = state.find((user) => user.id == id);
			// if (user) {
			// 	return state.filter((user) => user.id != id);
			// }
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state, action) => {})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {});
	},
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
