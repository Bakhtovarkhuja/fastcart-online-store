import SearchIcon from '@mui/icons-material/Search'
import apple from '../../assets/apple.svg'
import iphone from '../../assets/iphone.svg'
import clock from '../../assets/clock.svg'
import img from '../../assets/wishlist.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import starIcon from '../../assets/Five star (1).svg'
import info from '../../assets/info.svg'
import { Link } from 'react-router-dom'
import heart from '../../assets/heart small.svg'
import jbl from '../../assets/jbl.svg'
import ps5 from '../../assets/ps5.svg'
import woomen from '../../assets/woomen.svg'
import kalonka from '../../assets/kalonka.svg'
import dukhi from '../../assets/dukhi.svg'
import image5 from '../../assets/contactArticle5.svg'
import image6 from '../../assets/contactArticle6.svg'
import image7 from '../../assets/contactArticle7.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get } from '../../store/categoria/reducer'
import api from '../../utils/utils'
import { getProduct } from '../../store/product/reducer'
import { AddCart } from '../../store/cart/reducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function Home() {
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.categoria)
	const { product } = useSelector(state => state.product)
	const { error } = useSelector(state => state.cart)
	console.log(error);
	

	useEffect(() => {
		dispatch(get())
		dispatch(getProduct())
	}, [])

	useEffect(() => {
		if (error === 401) {
		toast.error('С перво зарегистрировайся!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		})
	}
	},[error])

	return (
		<>
		<ToastContainer/>
			<section className=' py-[30px] md:py-[60px] md:w-[80%] md:m-auto'>
				<div className='flex flex-col gap-[20px] md:flex-row '>
					<div className=' border-1 border-[gray] w-[90%] m-auto py-[10px] px-[15px] rounded-[7px] md:hidden'>
						<input
							type='text'
							className='w-[90%] outline-0'
							placeholder='Search'
						/>
						<SearchIcon />
					</div>
					<aside className='w-[90%] m-auto flex flex-wrap gap-[10px] md:flex-col md:w-[21%] md:border-r-1 md:border-[gray]'>
						{data?.map(el => (
							<div key={el.id}>
								<p className='bg-[#F5F5F5] md:bg-[white] py-[7px] px-[10px] rounded-[7px]'>
									{el.categoryName}
								</p>
							</div>
						))}
					</aside>
					<aside className='text-[white] w-[100%] md:w-[80%] flex flex-col md:flex-row px-[20px] md:items-center py-[30px] bg-[black] gap-[50px]'>
						<div className='flex flex-col gap-[20px] md:w-[45%]'>
							<div className='flex gap-[15px] items-center'>
								<img src={apple} alt='' />
								<p className='text-[22px]'>iPhone 14 Series</p>
							</div>
							<b className='text-[55px] md:text-[50px]'>
								Up to 10% <br className='md:hidden' /> off{' '}
								<br className='hidden md:block' /> Voucher
							</b>
							<p className='text-[19px]'>Shop Now &nbsp; -> </p>
						</div>
						<div className='md:w-[55%]'>
							<Swiper
								spaceBetween={50}
								slidesPerView={1}
								onSlideChange={() => console.log('slide change')}
								onSwiper={swiper => console.log(swiper)}
							>
								<SwiperSlide>
									<div className='w-[100%]'>
										<img src={iphone} alt='' className='w-[100%] h-[100%]' />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='w-[100%]'>
										<img src={iphone} alt='' className='w-[100%] h-[100%]' />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className='w-[100%]'>
										<img src={iphone} alt='' className='w-[100%] h-[100%]' />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</aside>
				</div>
				<section className='w-[90%] md:w-[100%] m-auto py-[30px] flex flex-col gap-[40px]'>
					<div className='flex gap-[15px] items-center'>
						<div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
						<b className='text-[#DB4444] text-[25px]'>Today’s</b>
					</div>
					<div className='flex flex-col gap-[10px] md:flex-row md:gap-[30px]'>
						<b className='text-[28px]'>Flash Sales</b>
						<img src={clock} alt='' />
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
							{product?.map(el => (
								<SwiperSlide key={el.id} className='px-2'>
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
										<p className='text-[#DB4444] text-[20px]'>
											{'$ ' + el.price}
										</p>
										<img className='w-[30%]' src={starIcon} alt='' />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<Link to={'/kategoria'}>
						<button className='bg-[#DB4444] w-[220px] mt-[20px] m-auto px-[25px] py-[10px] rounded-[7px] text-[white]'>
							View All Products
						</button>
					</Link>
					<div className='flex gap-[15px] items-center'>
						<div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
						<b className='text-[#DB4444] text-[25px]'>Categories</b>
					</div>
					<b className='text-[30px]'>Browse By Category</b>
					<div className='w-full'>
						<Swiper
							spaceBetween={10}
							slidesPerView={2}
							breakpoints={{
								768: {
									slidesPerView: 6,
									spaceBetween: 20,
								},
							}}
						>
							{data?.map(el => (
								<SwiperSlide key={el.id}>
									<div className=' border-1 text-center border-[gray] rounded-[7px] flex flex-col gap-[10px] items-center p-[15px] hover:bg-[#DB4444] hover:text-[white]'>
										<img
											src={api + 'images/' + el.categoryImage}
											alt=''
											className='m-auto'
										/>
										<p>{el.categoryName}</p>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className='flex gap-[15px] items-center'>
						<div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
						<b className='text-[#DB4444] text-[25px]'>This Month</b>
					</div>
					<div className='flex flex-col gap-[15px] md:justify-between md:flex-row'>
						<b className='text-[25px]'>Best Selling Products</b>
						<Link to={'/kategoria'}>
							<button className='text-[white] bg-[#DB4444] rounded-[7px] px-[25px] py-[10px]'>
								View All
							</button>
						</Link>
					</div>
					<div className='w-full px-4'>
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
			</section>
			<section className='md:w-[80%] m-auto p-[25px] flex flex-col gap-[30px] bg-[black] text-[white] md:flex-row md:items-center md:px-[60px] mb-[30px]'>
				<div className='flex flex-col items-start gap-[15px]'>
					<b className='text-[20px] text-[#00FF66]'>Categories</b>
					<b className='text-[40px]'>Enhance Your Music Experience</b>
					<div className='flex gap-[25px]'>
						<div className='p-[25px] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center text-[black] bg-[white] flex-col'>
							<b>23</b>
							<p>Hours</p>
						</div>
						<div className='p-[25px] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center text-[black] bg-[white] flex-col'>
							<b>23</b>
							<p>Hours</p>
						</div>
						<div className='p-[25px] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center text-[black] bg-[white] flex-col'>
							<b>23</b>
							<p>Hours</p>
						</div>
						<div className='p-[25px] rounded-[50%] w-[60px] h-[60px] flex justify-center items-center text-[black] bg-[white] flex-col'>
							<b>23</b>
							<p>Hours</p>
						</div>
					</div>
					<button className='text-[black] bg-[#00FF66] rounded-[7px] px-[25px] py-[10px]'>
						Buy Now!
					</button>
				</div>
				<img src={jbl} alt='' />
			</section>
			<section className='w-[90%] m-auto flex flex-col gap-[20px] py-[30px] md:w-[80%]'>
				<div className='flex gap-[15px] items-center'>
					<div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
					<b className='text-[#DB4444] text-[25px]'>Our Products</b>
				</div>
				<b className='text-[30px] pb-[20px]'>Explore Our Products</b>
				<section className='flex flex-col md:flex-row md:flex-wrap'>
					{product?.map(el => (
						<div key={el.id} className='px-2 md:w-[24%] w-[100%]'>
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
								<p className='text-[#DB4444] text-[20px]'>{'$ ' + el.price}</p>
								<img className='w-[30%]' src={starIcon} alt='' />
							</div>
						</div>
					))}
				</section>
				<Link to={'/kategoria'}>
					<button className='bg-[#DB4444] w-[220px] mt-[20px] m-auto px-[25px] py-[10px] rounded-[7px] text-[white]'>
						View All Products
					</button>
				</Link>
			</section>
			<section className='w-[90%] m-auto md:w-[80%] py-[30px] flex gap-[20px] flex-col'>
				<div className='flex gap-[15px] items-center'>
					<div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
					<b className='text-[#DB4444] text-[25px]'>Featured</b>
				</div>
				<b className='text-[30px]'>New Arrival</b>
				<div className='flex flex-col gap-[15px] md:flex-row'>
					<article className='bg-[black] text-[white] relative'>
						<img src={ps5} alt='' />
						<div className='absolute bottom-[10px] md:bottom-[25px] md:left-[25px] left-[10px] w-[70%]'>
							<b className='text-[25px]'>PlayStation 5</b>
							<p>Black and White version of the PS5 coming out on sale.</p>
							<b className='text-[19px]'>Shop Now</b>
						</div>
					</article>
					<div className='flex flex-col gap-[15px] md:w-[60%]'>
						<article className='bg-[black]  text-[white] relative flex justify-end'>
							<img src={woomen} alt='' />
							<div className='absolute md:bottom-[25px] md:left-[25px] bottom-[10px] left-[10px] w-[70%]'>
								<b className='text-[25px]'>Women’s Collections</b>
								<p>Featured woman collections that give you another vibe.</p>
								<b className='text-[19px]'>Shop Now</b>
							</div>
						</article>
						<div className='flex flex-col gap-[15px] md:flex-row md:justify-between'>
							<article className='bg-[black] text-[white] md:w-[50%] relative flex justify-end'>
								<img src={kalonka} alt='' />
								<div className='absolute md:bottom-[25px] md:left-[25px] bottom-[10px] left-[10px] w-[70%]'>
									<b className='text-[25px]'>Speakers</b>
									<p>Amazon wireless speakers</p>
									<b className='text-[19px]'>Shop Now</b>
								</div>
							</article>
							<article className='bg-[black] md:w-[50%] text-[white] relative flex justify-end'>
								<img src={dukhi} alt='' />
								<div className='absolute md:bottom-[25px] md:left-[25px] bottom-[10px] left-[10px] w-[70%]'>
									<b className='text-[25px]'>Perfume</b>
									<p>GUCCI INTENSE OUD EDP</p>
									<b className='text-[19px]'>Shop Now</b>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			<section className='w-[90%] md:w-[80%] m-auto py-[30px] flex flex-col gap-[30px] md:flex-row md:justify-between md:py-[120px]'>
				<div className='flex flex-col items-center gap-[5px] md:w-[31%]'>
					<img src={image5} alt='' />
					<b className='text-[23px]'>FREE AND FAST DELIVERY</b>
					<p className='text-[18px]'>Free delivery for all orders over $140</p>
				</div>
				<div className='flex flex-col items-center gap-[5px] md:w-[31%]'>
					<img src={image6} alt='' />
					<b className='text-[23px]'>24/7 CUSTOMER SERVICE</b>
					<p className='text-[18px]'>Friendly 24/7 customer support $140</p>
				</div>
				<div className='flex flex-col items-center gap-[5px] md:w-[31%]'>
					<img src={image7} alt='' />
					<b className='text-[23px]'>MONEY BACK GUARANTEE</b>
					<p className='text-[18px]'>We reurn money within 30 days $140</p>
				</div>
			</section>
		</>
	)
}
