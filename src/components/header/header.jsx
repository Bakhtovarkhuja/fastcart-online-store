import logo from '../../assets/logo.svg'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from '@mui/icons-material/Person'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import { useEffect, useRef, useState } from 'react'
import FilterFramesIcon from '@mui/icons-material/FilterFrames'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router'

export default function Header() {
	const [modal, setModal] = useState(false)
	const [modalMenu, setModalMenu] = useState(false)
	const modalRef = useRef(null)
	const menuRef = useRef(null)

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

	return (
		<div className='flex items-center justify-between py-[20px] md:px-[10%] px-[5%] shadow-lg relative'>
			<img src={logo} alt='' className='hidden md:block' />
			<div className='flex items-center gap-[10px] md:hidden'>
				<ViewWeekIcon
					onClick={e => {
						e.stopPropagation()
						setModalMenu(true)
					}}
					className='cursor-pointer z-50'
				/>
				<h1 className='text-[25px]'>Exclusive</h1>
			</div>
			<div className='md:flex md:gap-[25px] hidden md:block'>
				<Link to={'/'}>
					<p>Home</p>
				</Link>
				<Link to={'/contact'}>
					<p>Contact</p>
				</Link>
				<Link to={'/about'}>
					<p>About</p>
				</Link>
				<Link to={'/logIn'}>
					<p>Sign Up</p>
				</Link>
			</div>
			<div className='flex gap-[25px] items-center'>
				<div className='md:bg-[#F5F5F5] md:px-[15px] md:py-[7px] md:rounded-[12px] md:w-[300px] hidden md:block'>
					<input
						type='text'
						className='w-[90%] outline-0'
						placeholder='What are you looking for?'
					/>
					<SearchIcon />
				</div>
				<Link to={'/wishlist'}>
					<FavoriteBorderIcon />
				</Link>
				<div className='hidden md:block'>

				<Link to={'/cart'}>
					<ShoppingCartIcon />
				</Link>
				</div>
				<PersonIcon
					onClick={e => {
						e.stopPropagation()
						setModal(true)
					}}
					className='cursor-pointer z-50'
				/>
			</div>

			{modal && (
				<div
					ref={modalRef}
					className='bg-[#000000c8] text-white p-4 rounded-lg absolute top-[60px] right-[30px] md:top-[70px] md:right-[160px] z-50 flex flex-col gap-2'
				>
					<div className='flex items-center gap-2'>
						<Link to={'/myAccount'}>
							<PersonIcon />
							<span>Account</span>
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<Link to={'/cart'}>
							<FilterFramesIcon />
							<span>My Orders</span>
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<Link to={'/registration'}>
							<LogoutIcon />
							<span>Logout</span>
						</Link>
					</div>
				</div>
			)}
			{modalMenu && (
				<div
					ref={menuRef}
					className='bg-[#000000c8] text-white p-4 rounded-lg absolute top-[60px] left-[20px] z-50 flex flex-col gap-2'
				>
					<div className='flex items-center gap-2'>
						<Link to={'/'}>
							<span>Home</span>
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<Link to={'/about'}>
							<span>About</span>
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<Link to={'/contact'}>
							<span>Contact</span>
						</Link>
					</div>
					<div className='flex items-center gap-2'>
						<Link to={'logIn'}>
							<span>Sign Up</span>
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}
