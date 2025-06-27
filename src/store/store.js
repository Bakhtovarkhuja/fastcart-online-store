import { configureStore } from '@reduxjs/toolkit'
import CategoriaReducer from './categoria/reducer'
import ProductReducer from './product/reducer'
import CartReducer from './cart/reducer'
import AuthReducer from './auth/reducer'
import kategoriaReducer from './kategoria/reducer'

export const store = configureStore({
	reducer:{
		categoria: CategoriaReducer,
		product: ProductReducer,
		cart: CartReducer,
		auth: AuthReducer,
		kategoria: kategoriaReducer
	}
})

export default store