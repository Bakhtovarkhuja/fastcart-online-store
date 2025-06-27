import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../utils/utils'

export const getKate = createAsyncThunk('kate/getKate',
	async () => {
		try {
			const { data } = await axios.get(api + 'Brand/get-brands', {
				headers: {
					'Authorization' : `Bearer ${localStorage.getItem('token')}`
				}
			})
			return data.data
		} catch (error) {
			console.error(error);
		}
	}
)

export const kategoriaSlice = createSlice({
	name: 'kate',
	initialState: {
		kategoria: []
	},
	reducers: {},
	extraReducers: builder => {
		builder
		.addCase(getKate.fulfilled, (state, action) => {
			state.kategoria = action.payload
		})
	}
})

export default kategoriaSlice.reducer