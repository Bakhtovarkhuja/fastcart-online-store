import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../utils/utils'

export const getBrandAndCategoria = createAsyncThunk('brandAndCateById/getBrandAndCategoria', 
	async (id) => {
		try {
			const { data } = await axios.get(api + 'Category/get-category-by-id?id=' + id)
			return data.data
		} catch (error) {
			console.error(error);
		}
	}
)

export const brandCateById = createSlice({
	name: 'brandAndCateById',
	initialState: {
		brandAndCate: []
	},
	reducers: {},
	extraReducers: builder => {
		builder
		.addCase(getBrandAndCategoria.fulfilled, (state, action) => {
			state.brandAndCate = action.payload
		})
	}
})

export default brandCateById.reducer