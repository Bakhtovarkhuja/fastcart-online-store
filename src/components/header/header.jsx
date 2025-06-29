import logo from '../../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import { useEffect, useRef, useState } from 'react'
import FilterFramesIcon from '@mui/icons-material/FilterFrames'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchByName } from '../../store/product/reducer'

export default function Header() {
	const dispatch = useDispatch()
	const [wishlist, setWishlist] = useState(
		() => JSON.parse(localStorage.getItem('wish')) || []
	)
	const { cart } = useSelector(state => state.cart)
	const [modal, setModal] = useState(false)
	const [modalMenu, setModalMenu] = useState(false)
	const modalRef = useRef(null)
	const menuRef = useRef(null)
	const token = localStorage.getItem('token')
	const navigate = useNavigate()
	const [search, setSearch] = useState('')
	const location = useLocation()

	function handleSearch(e) {
		setSearch(e)
		dispatch(searchByName(e))
	}

	useEffect(() => {
		const handleClickOutside = event => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setModal(false)
			}
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setModalMenu(false)
			}
		}

		if (modal || modalMenu) {
			document.addEventListener('click', handleClickOutside)
		}

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [modal, modalMenu])

	useEffect(() => {
		const interval = setInterval(() => {
			const storedWishlist = JSON.parse(localStorage.getItem('wish')) || []
			setWishlist(prev => {
				if (JSON.stringify(prev) !== JSON.stringify(storedWishlist)) {
					return storedWishlist
				}
				return prev
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	useEffect(() => {
		if (!localStorage.getItem('wish')) {
			localStorage.setItem('wish', JSON.stringify([]))
		}
	}, [])

	useEffect(() => {
		dispatch(searchByName())
	}, [])

	function handleDelLocalStorage() {
		localStorage.removeItem('token')
		localStorage.removeItem('userInfo')
		setModal(false)
		navigate('/')
	}

	function handleUserClick(e) {
		e.stopPropagation()
		if (token) {
			setModal(true)
		} else {
			navigate('/registration')
		}
	}

	return (
		<header className='fixed top-0 left-0 right-0 bg-white/90 shadow-md z-50 py-[20px] md:px-[10%] px-[5%] flex items-center justify-between'>
			<Link to={'/'}>
				<img src={logo} alt='Logo' className='hidden md:block' />
			</Link>

			<div className='flex items-center gap-[10px] md:hidden absolute left-[5%]'>
				<ViewWeekIcon
					onClick={e => {
						e.stopPropagation()
						setModalMenu(true)
					}}
					className='cursor-pointer z-50'
				/>
				<Link to={'/'}>
					<h1 className='text-[25px] font-bold'>Exclusive</h1>
				</Link>
			</div>

			<nav className='hidden md:flex md:gap-[25px]'>
				<Link to={'/'}>
					<p className='cursor-pointer hover:text-indigo-600 transition'>
						Home
					</p>
				</Link>
				<Link to={'/contact'}>
					<p className='cursor-pointer hover:text-indigo-600 transition'>
						Contact
					</p>
				</Link>
				<Link to={'/about'}>
					<p className='cursor-pointer hover:text-indigo-600 transition'>
						About
					</p>
				</Link>
				<Link to={'/registration'}>
					<p className='cursor-pointer hover:text-indigo-600 transition'>
						Sign Up
					</p>
				</Link>
			</nav>

			<div className='flex items-center gap-[25px] relative z-50'>
				{location.pathname.startsWith('/kategoria') && (
					<div className='hidden md:flex items-center gap-2 bg-[#F5F5F5] px-[15px] py-[7px] rounded-[12px] w-[300px]'>
						<input
							value={search}
							onChange={e => handleSearch(e.target.value)}
							type='text'
							className='w-full outline-none bg-transparent'
							placeholder='What are you looking for?'
						/>
						<SearchIcon className='text-gray-500 cursor-pointer' />
					</div>
				)}
				<div className='relative cursor-pointer'>
					{wishlist.length > 0 && (
						<div className='absolute top-[-5px] right-[-5px] text-[12px] w-[18px] h-[18px] bg-red-600 text-white rounded-full flex items-center justify-center font-semibold'>
							{wishlist.length}
						</div>
					)}
					<Link to={'/wishlist'}>
						<FavoriteBorderIcon className='text-gray-700 hover:text-indigo-600 transition' />
					</Link>
				</div>
				{token && (
					<div className='flex items-center gap-[15px]'>
						<div className='relative cursor-pointer'>
							{cart[0]?.totalProducts > 0 && (
								<div className='absolute top-[-5px] right-[-5px] text-[12px] w-[18px] h-[18px] bg-red-600 text-white rounded-full flex items-center justify-center font-semibold'>
									{cart[0]?.totalProducts}
								</div>
							)}
							<Link to={'/cart'}>
								<ShoppingCartIcon className='text-gray-700 hover:text-indigo-600 transition' />
							</Link>
						</div>

						<PersonIcon
							onClick={handleUserClick}
							className='text-gray-700 hover:text-indigo-600 transition cursor-pointer'
						/>
					</div>
				)}
			</div>

			{modal && (
				<div
					ref={modalRef}
					className='bg-[#000000c8] text-white p-4 rounded-lg absolute top-[60px] right-[30px] md:top-[70px] md:right-[160px] z-50 flex flex-col gap-2 min-w-[150px]'
				>
					<Link
						to={'/myAccount'}
						className='flex items-center gap-2 hover:text-indigo-300 transition cursor-pointer'
					>
						<PersonIcon />
						<span>Account</span>
					</Link>
					<Link
						to={'/cart'}
						className='flex items-center gap-2 hover:text-indigo-300 transition cursor-pointer'
					>
						<FilterFramesIcon />
						<span>My Orders</span>
					</Link>
					<div
						className='flex items-center gap-2 cursor-pointer hover:text-indigo-300 transition'
						onClick={handleDelLocalStorage}
					>
						<LogoutIcon />
						<span>Logout</span>
					</div>
				</div>
			)}

			{modalMenu && (
				<div
					ref={menuRef}
					className='bg-[#000000c8] text-white p-4 rounded-lg absolute top-[60px] left-[20px] z-50 flex flex-col gap-2 min-w-[120px]'
				>
					<Link
						to={'/'}
						className='hover:text-indigo-300 transition cursor-pointer'
					>
						Home
					</Link>
					<Link
						to={'/about'}
						className='hover:text-indigo-300 transition cursor-pointer'
					>
						About
					</Link>
					<Link
						to={'/contact'}
						className='hover:text-indigo-300 transition cursor-pointer'
					>
						Contact
					</Link>
					<Link
						to={'/registration'}
						className='hover:text-indigo-300 transition cursor-pointer'
					>
						Sign Up
					</Link>
				</div>
			)}
		</header>
	)
}
