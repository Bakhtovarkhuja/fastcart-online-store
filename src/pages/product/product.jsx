import pro5 from '../../assets/pro5.svg'
import pro6 from '../../assets/pro6.svg'
import star from '../../assets/Five star (1).svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import starIcon from '../../assets/Five star (1).svg'
import info from '../../assets/info.svg'
import { Link, useParams } from 'react-router'
import heart from '../../assets/heart small.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/product/reducer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { AddCart } from '../../store/cart/reducer'
import SuperModal from '../../components/modal/modal'

export default function ProductPage() {
	const token = localStorage.getItem('token')
	const dispatch = useDispatch()
	const { product } = useSelector(state => state.product)
	const { id } = useParams()
	const [cnt, setCnt] = useState(0)
	const [data, setData] = useState([])
	const [wishUpdated, setWishUpdated] = useState(false)
	const [modal, setModal] = useState(false)

	function handleAddToWishlitst(el) {
		const wishlist = {
			id: el.id,
			image: el.image,
			name: el.productName,
			price: el.price,
		}

		const currentWish = JSON.parse(localStorage.getItem('wish')) || []

		const isExist = currentWish.some(item => item.id === wishlist.id)

		if (!isExist) {
			currentWish.push(wishlist)
			localStorage.setItem('wish', JSON.stringify(currentWish))
		} else {
			const filtered = currentWish.filter(item => item.id !== wishlist.id)
			localStorage.setItem('wish', JSON.stringify(filtered))
		}

		setWishUpdated(prev => !prev)
	}

	function handleAddToCart(id) {
		if (token) {
			dispatch(AddCart(id))
		} else {
			setModal(true)
		}
	}

	async function getInfo(id) {
		try {
			const { data } = await axios.get(
				api + 'Product/get-product-by-id?id=' + id
			)
			setData(data.data)
		} catch (error) {
			console.error(error)
		}
	}

	function minus() {
		setCnt(cnt - 1)
	}
	function plus() {
		setCnt(cnt + 1)
	}

	useEffect(() => {
		getInfo(id)
	}, [])

	useEffect(() => {
		dispatch(getProduct())
	}, [])
	const wish = JSON.parse(localStorage.getItem('wish')) || [];
const isInWish = data?.id && wish.some(item => item.id === data.id);

	return (
		<>
			<section className='w-[90%] m-auto md:w-[80%] py-[30px] md:py-[60px] flex gap-[20px] flex-col'>
				<div>
					<p className='text-[gray] '>
						Home / Gaming /{' '}
						<span className='text-[black] font-bold'>{data?.productName}</span>
					</p>
				</div>
				<div className='md:flex gap-6'>
					<aside className='flex md:w-[70%] flex-col-reverse gap-1 md:flex-row'>
						<div className='rounded-lg overflow-hidden shadow-md md:w-[90%] md:h-[600px]'>
							{data?.images?.[0] && (
								<div className='relative'>
									{/* Кнопка "в избранное" */}
									<div
										className={`absolute top-[10px] right-[10px] w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:scale-110 ${
											isInWish ? 'bg-red-500' : 'bg-white'
										}`}
										onClick={() => handleAddToWishlitst(data)}
										title={
											isInWish
												? 'Удалить из избранного'
												: 'Добавить в избранное'
										}
									>
										<img src={heart} alt='wishlist' className='w-[18px]' />
									</div>

									{/* Основное изображение товара */}
									<img
										src={api + 'images/' + data.images[0]?.images}
										alt='product'
										className='w-full md:w-[100%] md:h-[75vh]'
									/>
								</div>
							)}
						</div>
					</aside>

					<aside className='flex flex-col gap-[20px] md:w-[50%]'>
						<p className='text-[28px] font-semibold'>{data?.productName}</p>
						<img className='w-[35%]' src={star} alt='rating' />
						<b className='text-[25px] text-[#DB4444]'>$ {data?.price}</b>

						<p className='text-[18px] text-gray-700'>{data?.description}</p>

						<div className='flex gap-6 items-center'>
							<p className='text-[20px] font-medium'>Colors:</p>
							<div className='flex gap-4'>
								{['blue', 'red'].map(color => (
									<label key={color} className='cursor-pointer'>
										<input
											type='radio'
											name='color'
											value={color}
											className='peer hidden'
										/>
										<div
											className={`w-6 h-6 rounded-full ${
												color === 'blue' ? 'bg-sky-400' : 'bg-red-500'
											} border-2 border-transparent peer-checked:border-black transition duration-200`}
										></div>
									</label>
								))}
							</div>
						</div>

						{/* Размеры */}
						<div className='flex gap-6 items-center'>
							<p className='text-[20px] font-medium'>Size:</p>
							<div className='flex gap-2'>
								{['XS', 'S', 'M', 'L', 'XL'].map(size => (
									<button
										key={size}
										className='rounded-[7px] border border-gray-400 px-[20px] py-[10px] hover:bg-black hover:text-white transition duration-200 cursor-pointer'
									>
										{size}
									</button>
								))}
							</div>
						</div>

						<div className='flex gap-[15px] items-center'>
							<div className='flex shadow-sm rounded-[7px] overflow-hidden border border-gray-300'>
								<button
									className='px-[20px] py-[10px] bg-gray-100 hover:bg-gray-200 transition cursor-pointer'
									onClick={minus}
								>
									-
								</button>
								<div className='px-[20px] py-[10px] bg-white text-center'>
									{cnt}
								</div>
								<button
									className='px-[20px] py-[10px] bg-gray-100 hover:bg-gray-200 transition cursor-pointer'
									onClick={plus}
								>
									+
								</button>
							</div>

							<button className='bg-[#DB4444] text-white font-semibold px-[30px] py-[10px] rounded-[7px] hover:bg-[#b23232] transition duration-300 shadow-md cursor-pointer' onClick={() => handleAddToCart(id)}>
								Add to cart
							</button>
						</div>

						<div className='border border-gray-300 rounded-[10px] flex flex-col gap-[10px] shadow-sm overflow-hidden'>
							<div className='flex gap-[10px] p-[15px] items-center hover:bg-gray-50 transition'>
								<img src={pro5} alt='Delivery' className='w-[40px]' />
								<div>
									<b className='text-[18px]'>Free Delivery</b>
									<p className='text-[16px] text-gray-600'>
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>

							<div className='h-[1px] w-full bg-gray-300'></div>

							<div className='flex gap-[10px] p-[15px] items-center hover:bg-gray-50 transition'>
								<img src={pro6} alt='Returns' className='w-[40px]' />
								<div>
									<b className='text-[18px]'>Return Delivery</b>
									<p className='text-[16px] text-gray-600'>
										Free 30 Days Delivery Returns. Details
									</p>
								</div>
							</div>
						</div>
					</aside>
				</div>

				<div className='flex items-center gap-[15px] mt-[25px]'>
					<div className='w-[40px] h-[60px] rounded-[10px] bg-[#DB4444]'></div>
					<b className='text-[#DB4444] text-[25px]'>Related Item</b>
				</div>
				<div className='w-full'>
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						breakpoints={{
							768: { slidesPerView: 4, spaceBetween: 20 },
						}}
					>
						{product?.map(el => {
							const wish = JSON.parse(localStorage.getItem('wish')) || []
							const isInWish = wish.some(item => item.id === el.id)
							return (
								<SwiperSlide key={el.id} className='px-2'>
									<div className='flex flex-col gap-[10px]'>
										<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative rounded-[10px] hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out'>
											<img
												src={api + 'images/' + el.image}
												alt=''
												className='md:h-[180px] object-contain transition-transform duration-500 hover:scale-105'
											/>
											<div
												className={`absolute top-[10px] right-[10px] w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md hover:scale-110 ${
													isInWish ? 'bg-red-500' : 'bg-white'
												}`}
												onClick={() => handleAddToWishlitst(el)}
											>
												<img src={heart} alt='' className='w-[18px]' />
											</div>
											<Link to={`/product/${el.id}`}>
												<img
													src={info}
													className='absolute top-[50px] right-[10px] hover:scale-110 transition-transform duration-300'
													alt=''
												/>
											</Link>
											<button
												onClick={() => handleAddToCart(el.id)}
												className='cursor-pointer bg-black text-white w-full py-[10px] hover:bg-[#2d2b2b] transition duration-300 ease-in-out hover:scale-[1.02]'
											>
												<ShoppingCartIcon /> Add To Cart
											</button>
										</div>
										<b className='text-[23px]'>{el.productName}</b>
										<p className='text-[#DB4444] text-[20px]'>$ {el.price}</p>
										<img className='w-[30%]' src={starIcon} alt='' />
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>
			{modal && (
							<>
								<SuperModal isOpen={modal} setIsOpen={setModal} />
							  <button onClick={() => setModal(true)} className='bg-black text-white px-4 py-2 rounded-md'>
					Открыть Модал
				 </button>
							</>
						)}
		</>
	)
}
