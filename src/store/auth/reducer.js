import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../utils/utils'
import axios from 'axios'

export const register = createAsyncThunk('auth/register', async user => {
	try {
		const { data } = await axios.post(api + 'Account/register', user)
		localStorage.setItem('userInfo', JSON.stringify(user))
		console.log('👀 Сохраняем user в localStorage:', user);
		console.log(data);
		return data.data
	} catch (error) {
		console.error(error)
	}
})
export const logIn = createAsyncThunk('auth/logIn', async user => {
	try {
			const { data } = await axios.post(api + 'Account/login', user)
			localStorage.setItem('token', data.data)
			return data.data
		} catch (error) {
			console.error(error);
		}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		error: null
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.rejected, (state, action) => {
			state.error = action.payload
		})
	},
})

export default authSlice.reducer
