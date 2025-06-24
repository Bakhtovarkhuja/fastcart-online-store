import phone from '../../assets/contactImagePhone.svg'
import img from '../../assets/contactImage.svg'
import img1 from '../../assets/contactImage1.svg'
import img2 from '../../assets/contactImage2.svg'
import img3 from '../../assets/contactImage3.svg'
import image1 from '../../assets/contactArticle1.svg'
import image2 from '../../assets/contactArticle2.svg'
import image3 from '../../assets/contactArticle3.svg'
import image4 from '../../assets/contactArticle4.svg'
import image5 from '../../assets/contactArticle5.svg'
import image6 from '../../assets/contactArticle6.svg'
import image7 from '../../assets/contactArticle7.svg'
import bottom from '../../assets/contactBottomImage.svg'
import swipper from '../../assets/contactSwipperButton.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function About() {
	return (
		<>
			<section className='w-[90%] md:w-[80%] m-auto py-[60px] flex flex-col gap-[20px]'>
				<div>
					<p className='text-[gray]'>
						Home / <span className='font-bold text-[black]'>About</span>
					</p>
				</div>
				<div className='md:flex gap-[120px]'>
					<div className='flex flex-col gap-[15px]'>
						<b className='text-[38px] md:text-[50px]'>Our Story</b>
						<p className='md:text-[19px]'>
							Launced in 2015, Exclusive is South Asia’s premier online shopping
							makterplace with an active presense in Bangladesh. Supported by
							wide range of tailored marketing, data and service solutions,
							Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
							customers across the region.{' '}
						</p>
						<p className='md:text-[19px]'>
							Exclusive has more than 1 Million products to offer, growing at a
							very fast. Exclusive offers a diverse assotment in categories
							ranging from consumer.
						</p>
					</div>
					<img src={img} className='hidden md:block' alt='' />
				</div>
			</section>
			<section className='w-[100%] pb-[20px] md:hidden'>
				<img src={phone} alt='' className='w-[100%]' />
			</section>
			<section className='flex flex-col gap-[15px] w-[90%] md:w-[80%] m-auto md:mb-[60px] mb-[20px] md:flex-row md:justify-between'>
				<div className='border-1 md:w-[23%] border-[gray] rounded-[7px] p-[15px] flex flex-col items-center gap-[7px]'>
					<img src={image1} alt='' />
					<b className='text-[25px]'>10.5K</b>
					<p className='text-[18px]'>Sallers active our site</p>
				</div>
				<div className='border-1 md:w-[23%] border-[#DB4444] rounded-[7px] p-[15px] flex flex-col items-center gap-[7px] bg-[#DB4444] text-[white]'>
					<img src={image2} alt='' />
					<b className='text-[25px]'>10.5K</b>
					<p className='text-[18px]'>Sallers active our site</p>
				</div>
				<div className='border-1 md:w-[23%] border-[gray] rounded-[7px] p-[15px] flex flex-col items-center gap-[7px]'>
					<img src={image3} alt='' />
					<b className='text-[25px]'>10.5K</b>
					<p className='text-[18px]'>Sallers active our site</p>
				</div>
				<div className='border-1 md:w-[23%] border-[gray] rounded-[7px] p-[15px] flex flex-col items-center gap-[7px]'>
					<img src={image4} alt='' />
					<b className='text-[25px]'>10.5K</b>
					<p className='text-[18px]'>Sallers active our site</p>
				</div>
			</section>
			<section className='w-[90%] md:w-[80%] mb-[20px] m-auto md:hidden'>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img1} alt='' />
							<b className='text-[38px]'>Tom Cruise</b>
							<p className='text-[18px]'>Founder & Chairman</p>
							<img src={bottom} alt='' className='w-[40%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img2} alt='' />
							<b className='text-[38px]'>Emma Watson</b>
							<p className='text-[18px]'>Managing Director</p>
							<img src={bottom} alt='' className='w-[40%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img3} alt='' />
							<b className='text-[38px]'>Will Smith</b>
							<p className='text-[18px]'>Product Designer</p>
							<img src={bottom} alt='' className='w-[40%]' />
						</div>
					</SwiperSlide>
				</Swiper>
				<img className='w-[30%] py-[20px] m-auto' src={swipper} alt="" />
			</section>
			<section className='w-[90%] md:w-[80%] mb-[20px] m-auto hidden md:block'>
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img1} alt='' />
							<b className='text-[32px]'>Tom Cruise</b>
							<p className='text-[18px]'>Founder & Chairman</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img2} alt='' />
							<b className='text-[32px]'>Emma Watson</b>
							<p className='text-[18px]'>Managing Director</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img3} alt='' />
							<b className='text-[32px]'>Will Smith</b>
							<p className='text-[18px]'>Product Designer</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img1} alt='' />
							<b className='text-[32px]'>Tom Cruise</b>
							<p className='text-[18px]'>Founder & Chairman</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img2} alt='' />
							<b className='text-[32px]'>Emma Watson</b>
							<p className='text-[18px]'>Managing Director</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='flex flex-col gap-[7px]'>
							<img src={img3} alt='' />
							<b className='text-[32px]'>Will Smith</b>
							<p className='text-[18px]'>Product Designer</p>
							<img src={bottom} alt='' className='w-[30%]' />
						</div>
					</SwiperSlide>
				</Swiper>
				<img className='w-[10%] pt-[40px] m-auto' src={swipper} alt="" />
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
