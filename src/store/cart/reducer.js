import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../utils/utils'

export const getCart = createAsyncThunk('CartSlice/getCart',
	async () => {
		try {
			const { data } = await axios.get(api + 'Cart/get-products-from-cart', {
				headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			})
			return data.data
		} catch (error) {
			console.error(error);
		}
	}
)

export const AddCart = createAsyncThunk('CartSlice/AddCart', 
	async (id, {dispatch}) => {
		try {
			const { data } = await axios.post(api + 'Cart/add-product-to-cart?id=' + id, {}, {
				headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			})
			console.log(data.status);
			console.log(data.data);
			dispatch(getCart())
			return data.status
			
		} catch (error) {
			console.error(error);
		}
	}
)
export const delCart = createAsyncThunk('CartSlice/delCart', 
	async (id, {dispatch}) => {
		try {
			await axios.delete(api + 'Cart/delete-product-from-cart?id=' + id, {
				headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			})
			dispatch(getCart())
		} catch (error) {
			console.error(error);
		}
	}
)
export const removeCart = createAsyncThunk('CartSlice/removeCart', 
	async (_,{dispatch}) => {
		try {
			await axios.delete(api + 'Cart/clear-cart', {
				headers: {
				"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			})
			dispatch(getCart())			
		} catch (error) {
			console.error(error);
		}
	}
)


export const CartSlice = createSlice({
	name: "CartSlice",
	initialState: {
		cart: [],
		error: null
	},
	reducers: {},
	extraReducers: builder => {
		builder
		.addCase(getCart.fulfilled, (state, action) => {
			state.cart = action.payload
		})
		.addCase(AddCart.rejected, (state, action) => {
			state.error = action.payload
		})
		.addCase(AddCart.fulfilled, (state, action) => {
			state.error = null
		})
	}
})

export default CartSlice.reducer