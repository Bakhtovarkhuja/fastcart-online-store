import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../utils/utils'

export const get = createAsyncThunk('categoriaSlice/get', 
	async () => {
		try {
			const { data } = await axios.get(api + 'Category/get-categories')
			return data.data
		} catch (error) {
			console.error(error);
		}
	}
)
5
export const CategoriaSlice = createSlice({
	name: 'categoriaSlice',
	initialState: {
		data: []
	},
	reducers: {},
	extraReducers: builder => {
		builder
		.addCase(get.fulfilled, (state, action) => {
			state.data = action.payload
		})
	}
})

export default CategoriaSlice.reducer