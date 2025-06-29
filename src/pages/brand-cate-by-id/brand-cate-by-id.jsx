import { Link, useParams } from 'react-router'
import { categoriaById, getProduct, subCategoriaById } from '../../store/product/reducer'
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
import { AddCart } from '../../store/cart/reducer'
import SuperModal from '../../components/modal/modal'

export default function BrandCategoriaById() {
	const { id } = useParams()
	const wish = JSON.parse(localStorage.getItem('wish'))
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.categoria)
	const { product } = useSelector(state => state.product)
	const token = localStorage.getItem('token')
	const [modal, setModal] = useState(false)
	const { brandAndCate } = useSelector(state => state.brand)
		const [wishUpdated, setWishUpdated] = useState(false)

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
							<p className='bg-[#F5F5F5] border-2 border-[#F5F5F5] py-[7px] px-[10px] rounded-[7px] cursor-pointer' onClick={() => dispatch(subCategoriaById(el.id))}>
								{el.subCategoryName}
							</p>
						</div>
					))}
					<button className='px-[20px] py-[7px] text-[#DB4444] hover:text-[white] hover:bg-[#DB4444] rounded-[7px] border-2 border-[#DB4444]' onClick={() => dispatch(categoriaById(id))}>See All</button>
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
					)}
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
