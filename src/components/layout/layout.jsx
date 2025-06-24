import { Outlet } from 'react-router'
import Footer from '../footer/footer'
import Header from '../header/header'

export default function Layout(){
	return<>
		<Header></Header>
		<Outlet></Outlet>
		<Footer></Footer>
	</>
}