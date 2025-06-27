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
export const minPriceMaxPrice = createAsyncThunk('ProductSlice/minPriceMaxPrice', 
	async ({min, max}, {dispatch}) => {
		try {
			const { data } = await axios.get(`${api}Product/get-products?MinPrice=${min}&MaxPrice=${max}`, {
				headers: {
					'Authorization' : `Bearer ${localStorage.getItem('token')}`
				}
			})
			return data.data.products
		} catch (error) {
			console.error(error);
		}
	}
)
export const brandById = createAsyncThunk('ProductSlice/brandById',
	async (id) => {
		try {
			const { data } = await axios.get(api + 'Product/get-products?BrandId=' + id)
			return data.data.products
		} catch (error) {
			console.error(error);
		}
	}
)
export const categoriaById = createAsyncThunk('ProductSlice/categoriaById',
	async (id) => {
		try {
			const { data } = await axios.get(api + 'Product/get-products?CategoryId=' + id)
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
			state.product = []
			state.product = action.payload
		})
		.addCase(minPriceMaxPrice.fulfilled, (state, action) => {
			state.product = []
			state.product = action.payload
		})
		.addCase(brandById.fulfilled, (state, action) => {
			state.product = []
			state.product = action.payload
		})
		.addCase(categoriaById.fulfilled, (state, action) => {
			state.product = []
			state.product = action.payload
		})
	}
})

export default ProductSlice.reducer