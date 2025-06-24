import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../utils/utils'

export const getProduct = createAsyncThunk('ProductSlice/getProduct', 
	async () => {
		try {
			const { data } = await axios.get(api + 'Product/get-products')
			return data.data.products
		} catch (error) {
			console.error(error);
		}
	}
)

export const ProductSlice = createSlice({
	name: 'ProductSlice',
	initialState: {
		product: []
	},
	reducers: {},
	extraReducers: builder => {
		builder 
		.addCase(getProduct.fulfilled, (state, action) => {
			state.product = action.payload
		})
	}
})

export default ProductSlice.reducer