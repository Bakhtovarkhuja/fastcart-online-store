import { Link, useParams } from 'react-router'
import { categoriaById, getProduct } from '../../store/product/reducer'
import { get } from '../../store/categoria/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import api from '../../utils/utils'
import heart from '../../assets/heart small.svg'
import info from '../../assets/info.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import starIcon from '../../assets/Five star (1).svg'
import { getBrandAndCategoria } from '../../store/brand-cate-by-id/reducer'

export default function BrandCategoriaById() {
	const { id } = useParams()
	const wish = JSON.parse(localStorage.getItem('wish'))
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.categoria)
	const { product } = useSelector(state => state.product)
	const token = localStorage.getItem('token')
	const [modal, setModal] = useState(false)
	const { brandAndCate } = useSelector(state => state.brand)
	// console.log(brandAndCate.subCategories[0].subCategoryName)

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
		}
	}

	function handleAddToCart(id) {
		if (token) {
			dispatch(AddCart(id))
		} else {
			setModal(true)
		}
	}

	useEffect(() => {
		dispatch(get())
		dispatch(getProduct())
		dispatch(getBrandAndCategoria(id))
		dispatch(categoriaById(id))
	}, [])

	return (
		<>
			<section className='w-[90%] m-auto md:w-[80%] py-[30px] md:py-[60px] flex flex-col gap-[20px]'>
				<div>
					<b className='text-[black]'>
						Home / <span className='text-[gray]'>Brand</span>
					</b>
				</div>
				<div>
					<b className='text-[30px]'>{brandAndCate?.categoryName}</b>
				</div>
				<aside className='flex flex-wrap gap-[10px]'>
					{brandAndCate?.subCategories?.map(el => (
						<div key={el.id}>
							<p className='bg-[#F5F5F5] py-[7px] px-[10px] rounded-[7px] cursor-pointer'>
								{el.subCategoryName}
							</p>
						</div>
					))}
				</aside>
				<div>
					{!product && (
						<b className='text-[red] w-[100%] flex justify-center py-[60px] md:text-[45px] text-[35px] text-center'>This Brand Has't Any Products</b>
					)}
					{product && (
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
								{product?.map(el => (
									<SwiperSlide key={el.id} className='px-2'>
										<div className='flex flex-col gap-[10px]'>
											<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
												<img
													src={api + 'images/' + el.image}
													alt=''
													className='md:h-[180px]'
												/>
												<div
													className='absolute flex justify-center items-center top-[10px] right-[10px] bg-[white] rounded-[50%] w-[35px] h-[35px] cursor-pointer'
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
								))}
							</Swiper>
						</div>
					)}
				</div>
			</section>

			{modal && (
				<div className='flex z-40 items-center justify-center bg-[#00000042] fixed top-0 left-0 w-[100%] h-[100vh]'>
					<div className='p-[20px] rounded-[12px] bg-[white] flex flex-col gap-[15px]'>
						<b>С перво зарегистрировайся</b>
						<div className='flex items-center gap-[5px]'>
							<Link to={'/registration'}>
								<button className='bg-[#4343c6] text-[white] rounded-[7px] px-[20px] py-[7px]'>
									Registration
								</button>
							</Link>
							<button
								className='bg-[#ce3737] text-[white] rounded-[7px] px-[20px] py-[7px]'
								onClick={() => setModal(false)}
							>
								cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
