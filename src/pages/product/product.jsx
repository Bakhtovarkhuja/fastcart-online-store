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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProductPage() {
	const dispatch = useDispatch()
	const {product} = useSelector(state => state.product)
	const { id } = useParams()
	const [cnt, setCnt] = useState(0)
	const [data, setData] = useState([])

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
	},[])

	return (
		<>
			<section className='w-[90%] m-auto md:w-[80%] py-[30px] md:py-[60px] flex gap-[20px] flex-col'>
				<div>
					<p className='text-[gray] '>
						Home / Gaming /{' '}
						<span className='text-[black] font-bold'>{data?.productName}</span>
					</p>
				</div>
				<div className='md:flex'>
					<aside className='flex md:w-[70%] flex-col-reverse gap-1 md:flex-row'>
						<div>
							{data?.images?.[0] && (
								<img
									src={api + 'images/' + data.images[0]?.images}
									alt=''
									className='w-[100%] md:w-[600px] md:h-[100%]'
								/>
							)}
						</div>
					</aside>
					<aside className='flex flex-col gap-[15px] md:w-[50%]'>
						<p className='text-[25px]'>{data?.productName}</p>
						<img className='w-[35%]' src={star} alt='' />
						<b className='text-[25px]'>$ {data?.price}</b>
						<p className='text-[20px]'>{data?.description}
						</p>
						<div class='flex gap-10'>
							<p className='text-[22px]'>Colors:</p>
							<div class='flex gap-4'>
								<label>
									<input
										type='radio'
										name='color'
										value='blue'
										class='peer hidden'
									/>
									<div class='w-6 h-6 rounded-full bg-sky-400 border-2 border-transparent peer-checked:border-black cursor-pointer'></div>
								</label>

								<label>
									<input
										type='radio'
										name='color'
										value='red'
										class='peer hidden'
									/>
									<div class='w-6 h-6 rounded-full bg-red-500 border-2 border-transparent peer-checked:border-black cursor-pointer'></div>
								</label>
							</div>
						</div>
						<div className='flex gap-8 items-center'>
							<p className='text-[22px]'>Size:</p>
							<div>
								<button className='rounded-[7px] border-1 border-[gray] px-[20px] py-[10px]'>
									XS
								</button>
								<button className='rounded-[7px] border-1 border-[gray] px-[20px] py-[10px]'>
									S
								</button>
								<button className='rounded-[7px] border-1 border-[gray] px-[20px] py-[10px]'>
									M
								</button>
								<button className='rounded-[7px] border-1 border-[gray] px-[20px] py-[10px]'>
									L
								</button>
								<button className='rounded-[7px] border-1 border-[gray] px-[20px] py-[10px]'>
									XL
								</button>
							</div>
						</div>
						<div className='flex gap-[10px]'>
							<div className='flex'>
								<button
									className='border-1 rounded-l-[7px] border-[gray] px-[25px] py-[10px]'
									onClick={minus}
								>
									-
								</button>
								<div className='border-1 border-[gray] px-[25px] py-[10px]'>
									{cnt}
								</div>
								<button
									className='border-1 border-[gray] rounded-r-[7px] px-[25px] py-[10px]'
									onClick={plus}
								>
									+
								</button>
							</div>
							<button className='bg-[#DB4444] text-[white] rounded-[7px] w-[100%]'>
								Buy Now
							</button>
						</div>
						<div className='border-1 border-[gray] rounded-[7px] flex flex-col gap-[10px]'>
							<div className='flex gap-[10px] p-[15px] items-center'>
								<img src={pro5} alt='' />
								<div className='mt-[-10px]'>
									<b className='text-[20px]'>Free Delivery</b>
									<p className='text-[19px]'>
										Enter your postal code for Delivery Availability
									</p>
								</div>
							</div>
							<div className='border-1 border-[gray] w-[100%] h-[1px]'></div>
							<div className='flex gap-[10px] p-[15px] items-center'>
								<img src={pro6} alt='' />
								<div className='mt-[-10px]'>
									<b className='text-[20px]'>Return Delivery</b>
									<p className='text-[19px]'>
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
				<div className="w-full px-4">
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
						{product?.map((el) => (
							<SwiperSlide key={el.id}>
								<div className='flex flex-col gap-[10px]'>
									<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
										<img
											src={api + 'images/' + el.image}
											alt=''
											className='md:h-[180px]'
										/>
										<div className='absolute flex justify-center items-center top-[10px] right-[10px] bg-[white] rounded-[50%] w-[35px] h-[35px]'>
											<img src={heart} className='' alt='' />
										</div>
										<Link to={`/product/${el.id}`}>
											<img
											   onClick={getInfo()}
												src={info}
												className='absolute top-[50px] right-[10px]'
												alt=''
											/>
										</Link>
										<button className='bg-black text-white w-full py-[10px]'>
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
			</section>
		</>
	)
}
