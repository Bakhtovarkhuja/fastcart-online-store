import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/layout/layout'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import LogIn from './pages/log-in/log-in'
import Registration from './pages/registration/registration'
import MyAccount from './pages/my-account/my-account'
import Error from './components/error/error'
import CheckOut from './pages/chack-out/check-out'
import Wishlist from './pages/wishlist/wishlist'
import ProductPage from './pages/product/product'
import Kategoria from './pages/kategoria/kategoria'
import BrandCategoriaById from './pages/brand-cate-by-id/brand-cate-by-id'

export default function App(){
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout></Layout>,
			children: [
				{
					index: true,
					element: <Home></Home>
				},
				{
					path: '*',
					element: <Error></Error>
				},
				{
					path: '/cart',
					element: <Cart></Cart>
				},
				{
					path: '/about',
					element: <About></About>
				},
				{
					path: '/contact',
					element: <Contact></Contact>
				},
				{
					path: '/logIn',
					element: <LogIn></LogIn>
				},
				{
					path: '/registration',
					element: <Registration></Registration>
				},
				{
					path: '/myAccount',
					element: <MyAccount></MyAccount>
				},
				{
					path: '/checkOut',
					element: <CheckOut></CheckOut>
				},
				{
					path: '/wishlist',
					element: <Wishlist></Wishlist>
				},
				{
					path: '/product/:id',
					element: <ProductPage></ProductPage>
				},
				{
					path: '/kategoria',
					element: <Kategoria></Kategoria>
				},
				{
					path: '/brandCategoriaById/:id',
					element: <BrandCategoriaById></BrandCategoriaById>
				}
			]
		}
	])

	return <RouterProvider router={router}></RouterProvider>
}