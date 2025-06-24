import img from '../../assets/wishlist.svg'
import img1 from '../../assets/wishlist1.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import starIcon from '../../assets/Five star (1).svg'
import info from '../../assets/info.svg'
import { Link } from 'react-router'

export default function Wishlist() {
	const wishlistItems = [
		{ id: 1, title: 'Gucci duffle bag', price: '$960' },
		{ id: 2, title: 'Gucci duffle bag', price: '$960' },
		{ id: 3, title: 'Gucci duffle bag', price: '$960' },
		{ id: 4, title: 'Gucci duffle bag', price: '$960' },
		{ id: 5, title: 'Gucci duffle bag', price: '$960' },
		{ id: 6, title: 'Gucci duffle bag', price: '$960' },
		{ id: 7, title: 'Gucci duffle bag', price: '$960' },
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
			{ breakpoint: 1024, settings: { slidesToShow: 3 } },
			{ breakpoint: 1280, settings: { slidesToShow: 4 } },
			{ breakpoint: 1580, settings: { slidesToShow: 4 } },
		],
	}

	return (
		<section className='w-[90%] md:py-[60px] md:pb-[120px] m-auto md:w-[80%] py-[30px] flex flex-col gap-[50px]'>
			<div className='flex justify-between items-center'>
				<p className='text-[22px]'>Wishlist ({wishlistItems.length})</p>
				<button className='px-[25px] py-[10px] border border-gray-400 rounded-[7px]'>
					Move All To Bag
				</button>
			</div>
			<Slider {...settings}>
				{wishlistItems.map(item => (
					<div key={item.id} className='px-2'>
						<div className='flex flex-col gap-[10px]'>
							<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
								<img src={img} alt='' />
								<img
									src={img1}
									className='absolute top-[10px] right-[10px]'
									alt=''
								/>
								<button className='bg-black text-white w-full py-[10px]'>
									<ShoppingCartIcon /> Add To Cart
								</button>
							</div>
							<b className='text-[23px]'>{item.title}</b>
							<p className='text-[#DB4444] text-[20px]'>{item.price}</p>
						</div>
					</div>
				))}
			</Slider>
			<div className='flex justify-between items-center md:mt-[50px]'>
				<div className='flex gap-[10px] items-center'>
					<div className='h-[60px] w-[40px] rounded-[15px] bg-[#DB4444]'></div>
					<b className='text-[28px]'>Just For You</b>
				</div>
				<button className='px-[25px] py-[10px] border border-gray-400 rounded-[7px]'>
					See All
				</button>
			</div>

			<Slider {...settings}>
				{wishlistItems.map(item => (
					<div key={item.id} className='px-2'>
						<div className='flex flex-col gap-[10px]'>
							<div className='bg-[#F5F5F5] flex flex-col gap-[20px] items-center pt-[20px] relative'>
								<img src={img} alt='' />
								<Link to={'/product'}><img 
									src={info}
									className='absolute top-[10px] right-[10px]'
									alt=''
								/></Link>
								<button className='bg-black text-white w-full py-[10px]'>
									<ShoppingCartIcon /> Add To Cart
								</button>
							</div>
							<b className='text-[23px]'>{item.title}</b>
							<p className='text-[#DB4444] text-[20px]'>{item.price}</p>
							<img className='w-[30%]' src={starIcon} alt='' />
						</div>
					</div>
				))}
			</Slider>
		</section>
	)
}
