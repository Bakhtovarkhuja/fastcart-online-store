import { configureStore } from '@reduxjs/toolkit'
import CategoriaReducer from './categoria/reducer'
import ProductReducer from './product/reducer'

export const store = configureStore({
	reducer:{
		categoria: CategoriaReducer,
		product: ProductReducer
	}
})

export default store