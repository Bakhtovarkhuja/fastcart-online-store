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
import { useEffect, useState } from 'react'
import { get } from '../../store/categoria/reducer'
import api from '../../utils/utils'
import { getProduct } from '../../store/product/reducer'
import { AddCart } from '../../store/cart/reducer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import SuperModal from '../../components/modal/modal'

export default function Home() {
	const wish = JSON.parse(localStorage.getItem('wish')) || []
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.categoria)
	const { product } = useSelector(state => state.product)
	const { error } = useSelector(state => state.cart)
	const token = localStorage.getItem('token')
	const [modal, setModal] = useState(false)
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
	}, [error])

	return (
		<>
			<ToastContainer />
			<section className=' py-[30px] md:py-[60px] md:w-[80%] md:m-auto'>
				<div className='flex flex-col gap-[20px] md:flex-row'>
	{/* Поисковая строка на мобильных */}
	<div className='border border-gray-300 w-[90%] m-auto py-[10px] px-[15px] rounded-[7px] md:hidden flex items-center gap-2 hover:shadow-md transition duration-300'>
		<input
			type='text'
			className='w-[90%] outline-0'
			placeholder='Search'
		/>
		<SearchIcon className='text-gray-600 hover:text-black transition duration-300 cursor-pointer' />
	</div>

	{/* Сайдбар с категориями */}
	<aside className='w-[90%] m-auto flex flex-wrap gap-[10px] md:flex-col md:w-[21%] md:border-r md:border-gray-300'>
		{data?.map(el => (
			<div key={el.id}>
				<Link to={`/brandCategoriaById/${el.id}`}>
					<p className='bg-[#F5F5F5] md:bg-white py-[7px] px-[10px] rounded-[7px] cursor-pointer hover:bg-[#e2e2e2] transition duration-300 shadow-sm hover:shadow-md'>
						{el.categoryName}
					</p>
				</Link>
			</div>
		))}
	</aside>

	{/* Блок баннера с телефоном */}
	<aside className='text-white w-full md:w-[80%] flex flex-col md:flex-row px-[20px] md:items-center py-[30px] bg-black gap-[50px] rounded-xl shadow-lg transition duration-300 hover:scale-[1.01]'>
		{/* Левая часть с текстом */}
		<div className='flex flex-col gap-[20px] md:w-[45%]'>
			<div className='flex gap-[15px] items-center'>
				<img src={apple} alt='Apple' className='w-[30px] h-[30px] animate-pulse' />
				<p className='text-[22px] font-semibold'>iPhone 14 Series</p>
			</div>
			<b className='text-[55px] md:text-[50px] leading-[1.1]'>
				Up to 10% <br className='md:hidden' /> off{' '}
				<br className='hidden md:block' /> Voucher
			</b>
			<p className='text-[19px] hover:underline cursor-pointer w-fit'>
				Shop Now &nbsp; →
			</p>
		</div>

		{/* Правая часть с каруселью */}
		<div className='md:w-[55%] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500'>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				className='rounded-xl'
			>
				{[iphone, iphone, iphone].map((img, idx) => (
					<SwiperSlide key={idx}>
						<div className='w-full'>
							<img
								src={img}
								alt={`iPhone Slide ${idx + 1}`}
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</aside>
</div>

				<section className='w-[90%] md:w-[100%] m-auto py-[30px] flex flex-col gap-[40px]'>
  <div className='flex gap-[15px] items-center'>
    <div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
    <b className='text-[#DB4444] text-[25px]'>Today’s</b>
  </div>

  <div className='flex flex-col gap-[10px] md:flex-row md:gap-[30px] items-center'>
    <b className='text-[28px]'>Flash Sales</b>
    <img src={clock} alt='' />
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

  <Link to={'/kategoria'}>
    <button className='bg-[#DB4444] w-[220px] mt-[20px] m-auto px-[25px] py-[10px] rounded-[7px] text-white cursor-pointer transition duration-300 ease-in-out hover:bg-[#c73737] hover:scale-[1.05] shadow-md hover:shadow-lg'>
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
        768: { slidesPerView: 6, spaceBetween: 20 },
      }}
    >
      {data?.map(el => (
        <SwiperSlide key={el.id}>
          <Link to={`/brandCategoriaById/${el.id}`}>
            <div className='border border-gray-300 text-center rounded-[7px] flex flex-col gap-[10px] items-center p-[15px] hover:bg-[#DB4444] hover:text-white cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05] shadow-sm hover:shadow-lg'>
              <img
                src={api + 'images/' + el.categoryImage}
                alt=''
                className='m-auto object-contain'
              />
              <p>{el.categoryName}</p>
            </div>
          </Link>
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
      <button className='text-white bg-[#DB4444] rounded-[7px] px-[25px] py-[10px] cursor-pointer transition duration-300 ease-in-out hover:bg-[#c73737] hover:scale-[1.05] shadow-md hover:shadow-lg'>
        View All
      </button>
    </Link>
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

			</section>
			<section className='md:w-[80%] m-auto p-[25px] flex flex-col gap-[30px] bg-black text-white md:flex-row md:items-center md:px-[60px] mb-[30px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out'>
  <div className='flex flex-col items-start gap-[15px]'>
    <b className='text-[20px] text-[#00FF66] uppercase tracking-wide'>Categories</b>
    <b className='text-[40px] font-semibold leading-tight'>Enhance Your Music Experience</b>

    <div className='flex gap-[25px]'>
      {['23', '59', '59', '99'].map((val, i) => (
        <div
          key={i}
          className='p-[15px] w-[70px] h-[70px] rounded-full flex flex-col items-center justify-center text-black bg-white font-bold text-sm shadow-md hover:scale-105 transition-transform duration-300'
        >
          <b className='text-[18px]'>{val}</b>
          <p className='text-[12px]'>{['Hours', 'Minutes', 'Seconds', 'MS'][i]}</p>
        </div>
      ))}
    </div>

    <button className='text-black bg-[#00FF66] rounded-[7px] px-[25px] py-[10px] mt-4 font-medium hover:bg-[#00e65c] hover:scale-105 transition duration-300 shadow-md hover:shadow-xl'>
      Buy Now!
    </button>
  </div>

  <img src={jbl} alt='Promo' className='w-full md:w-[50%] object-contain transition-transform duration-500 hover:scale-105' />
</section>

<section className='w-[90%] m-auto flex flex-col gap-[20px] py-[30px] md:w-[80%]'>
  <div className='flex gap-[15px] items-center'>
    <div className='h-[60px] w-[40px] rounded-[10px] bg-[#DB4444]'></div>
    <b className='text-[#DB4444] text-[25px]'>Our Products</b>
  </div>
  <b className='text-[30px] pb-[20px]'>Explore Our Products</b>

  <section className='flex flex-col md:flex-row md:flex-wrap gap-[20px]'>
    {product?.map(el => {
        const wish = JSON.parse(localStorage.getItem('wish')) || []
        const isInWish = wish.some(item => item.id === el.id)
        return (
            <div className='flex flex-col gap-[10px] w-[23.5%]'>
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
        )
      })}
  </section>

  <Link to={'/kategoria'}>
    <button className='bg-[#DB4444] w-[220px] mt-[20px] m-auto px-[25px] py-[10px] rounded-[7px] text-white font-semibold shadow-md hover:bg-[#c73737] hover:scale-[1.05] transition-all duration-300 cursor-pointer'>
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
