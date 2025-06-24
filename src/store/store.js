import { configureStore } from '@reduxjs/toolkit'
import CategoriaReducer from './categoria/reducer'
import ProductReducer from './product/reducer'
import CartReducer from './cart/reducer'

export const store = configureStore({
	reducer:{
		categoria: CategoriaReducer,
		product: ProductReducer,
		cart: CartReducer
	}
})

export default store