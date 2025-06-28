import img from '../../assets/wishlist.svg'
import img1 from '../../assets/wishlist1.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import starIcon from '../../assets/Five star (1).svg'
import info from '../../assets/info.svg'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import api from '../../utils/utils'
// import starIcon from '.'
import heart from '../../assets/heart small.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getProduct } from '../../store/product/reducer'
import { AddCart } from '../../store/cart/reducer'

export default function Wishlist() {
	const wish = JSON.parse(localStorage.getItem('wish'))
	const { product } = useSelector(state => state.product)
	const [wishlist, setWishlist] = useState([])
	const dispatch = useDispatch()

		function handleAddToWishlitst(el) {
		const newItem = {
			id: el.id,
			image: el.image,
			name: el.productName,
			price: el.price,
		}

		const exists = wishlist.some(item => item.id === newItem.id)

		let updatedWish
		if (!exists) {
			updatedWish = [...wishlist, newItem]
		} else {
			updatedWish = wishlist.filter(item => item.id !== newItem.id)
		}

		localStorage.setItem('wish', JSON.stringify(updatedWish))
		setWishlist(updatedWish)
	}


		function handleDelWishlist(id) {
		const updatedWish = wishlist.filter(el => el.id !== id)
		localStorage.setItem('wish', JSON.stringify(updatedWish))
		setWishlist(updatedWish) 
	}

	useEffect(() => {
		const storedWish = JSON.parse(localStorage.getItem('wish')) || []
		setWishlist(storedWish)
		dispatch(getProduct())
	}, [dispatch])

	return (
		<section className='w-[90%] md:py-[60px] md:pb-[120px] m-auto md:w-[80%] py-[30px] flex flex-col gap-[50px]'>
			<div className='flex justify-between items-center'>
				<p className='text-[22px]'>Wishlist ({wish?.length})</p>
				<button className='px-[25px] py-[10px] border border-gray-400 rounded-[7px]'>
					Move All To Bag
				</button>
			</div>
			<div className='w-full'>
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					breakpoints={{
						768: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>
					{wish?.map(el => (
						<SwiperSlide key={el.id} className='px-2'>
							<div className='flex flex-col gap-[10px]'>
								<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
									<img
										src={api + 'images/' + el.image}
										alt=''
										className='md:h-[180px]'
									/>
									<div
										className='absolute flex justify-center items-center top-[10px] right-[10px] bg-[white] rounded-[50%] w-[35px] h-[35px]'
									>
										<b onClick={() => handleDelWishlist(el.id)}>🗑️</b>
									</div>
									<Link to={`/product/${el.id}`}>
										<img
											src={info}
											className='absolute top-[50px] right-[10px]'
											alt=''
										/>
									</Link>
									<button
										onClick={() => dispatch(AddCart(el.id))}
										className='bg-black text-white w-full py-[10px]'
									>
										<ShoppingCartIcon /> Add To Cart
									</button>
								</div>
								<b className='text-[23px]'>{el.productName}</b>
								<p className='text-[#DB4444] text-[20px]'>{'$ ' + el.price}</p>
								<img className='w-[30%]' src={starIcon} alt='' />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='flex justify-between items-center md:mt-[50px]'>
				<div className='flex gap-[10px] items-center'>
					<div className='h-[60px] w-[40px] rounded-[15px] bg-[#DB4444]'></div>
					<b className='text-[28px]'>Just For You</b>
				</div>
				<Link to={'/kategoria'}>
				<button className='px-[25px] py-[10px] border border-gray-400 rounded-[7px]'>
					See All
				</button>
				</Link>
			</div>

			<div className='w-full'>
									<Swiper
										spaceBetween={10}
										slidesPerView={1}
										breakpoints={{
											768: {
												slidesPerView: 4,
												spaceBetween: 20,
											},
										}}
									>
										{product?.map(el => {
											const wish = JSON.parse(localStorage.getItem('wish')) || []
											const isInWish = wish.some(item => item.id === el.id)
											return (
												<SwiperSlide key={el.id} className='px-2'>
													<div className='flex flex-col gap-[10px]'>
														<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
															<img
																src={api + 'images/' + el.image}
																alt=''
																className='md:h-[180px]'
															/>
															<div
																className={`absolute flex justify-center items-center top-[10px] right-[10px] bg-[white] rounded-[50%] w-[35px] h-[35px] cursor-pointer ${
																	isInWish ? 'bg-red-500' : 'bg-[white]'
																}`}
																onClick={() => handleAddToWishlitst(el)}
															>
																<img src={heart} className='' alt='' />
															</div>
															<Link to={`/product/${el.id}`}>
																<img
																	src={info}
																	className='absolute top-[50px] right-[10px]'
																	alt=''
																/>
															</Link>
															<button
																onClick={() => handleAddToCart(el.id)}
																className='cursor-pointer bg-black text-white w-full py-[10px]'
															>
																<ShoppingCartIcon /> Add To Cart
															</button>
														</div>
														<b className='text-[23px]'>{el.productName}</b>
														<p className='text-[#DB4444] text-[20px]'>
															{'$ ' + el.price}
														</p>
														<img className='w-[30%]' src={starIcon} alt='' />
													</div>
												</SwiperSlide>
											)
										})}
									</Swiper>
								</div>
		</section>
	)
}
