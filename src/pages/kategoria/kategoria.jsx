import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import starIcon from '../../assets/Five star.svg'
import info from '../../assets/info.svg'
import { Link } from 'react-router'
import heart from '../../assets/heart small.svg'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import five from '../../assets/Five star.svg'
import four from '../../assets/rating4.svg'
import tree from '../../assets/rating3.svg'
import two from '../../assets/rating copy.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getProduct } from '../../store/product/reducer'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../utils/utils'

export default function Kategoria() {
		const dispatch = useDispatch()
	const {product} = useSelector(state => state.product)
	const [value, setValue] = useState([0, 1000])

  const handleRangeChange = (index, val) => {
    const newVal = [...value];
    newVal[index] = Number(val);
    setValue(newVal);
  };

  const handleApply = () => {
    console.log("Price range applied:", value);
  };

	const handleInputChange = (index, val) => {
		const newVal = [...value]
		newVal[index] = Number(val)
		setValue(newVal)
	}

	useEffect(() => {
			dispatch(getProduct())
		},[])

	return (
		

		<>
			<div className='w-[90%] m-auto md:w-[80%] py-[30px] md:pt-[60px] flex justify-between items-center'>
				<p className='text-[gray]'>
					Home /{' '}
					<span className='text-[black] font-bold'>Explore Our Products</span>
				</p>
				<select className='border-1 md:block hidden border-[gray] rounded-[7px] px-[20px] py-[10px]'>
					<option>Populary</option>
					<option>Populary</option>
					<option>Populary</option>
				</select>
			</div>
			<section className='w-[90%] m-auto md:w-[80%] flex flex-col gap-[15px] py-[30px] md:py-[60px] md:flex-row'>
				<aside className='md:w-[20%]'>
					<div className='flex flex-col gap-[15px] md:hidden'>
						<div className='md:bg-[#F5F5F5] md:px-[15px] md:py-[7px] md:rounded-[12px] md:w-[300px] md:hidden border-1 border-[gray] px-[15px] py-[10px] rounded-[7px]'>
							<input
								type='text'
								className='w-[90%] outline-0'
								placeholder='Search'
							/>
							<SearchIcon />
						</div>
						<div className='flex gap-[15px]'>
							<select className='border-1 w-[50%] md:hidden border-[gray] rounded-[7px] px-[20px] py-[10px]'>
								<option>Populary</option>
								<option>Populary</option>
								<option>Populary</option>
							</select>
							<select className='border-1 w-[50%] md:hidden border-[gray] rounded-[7px] px-[20px] py-[10px]'>
								<option>Populary</option>
								<option>Populary</option>
								<option>Populary</option>
							</select>
						</div>
					</div>
					<div className='md:block hidden md:w-[100%]'>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>Category</Typography>
							</AccordionSummary>
							<AccordionDetails className='text-[#DB4444]'>
								All products
							</AccordionDetails>
							<AccordionDetails>Electronics</AccordionDetails>
							<AccordionDetails>Home & Lifestyle</AccordionDetails>
							<AccordionDetails>Medicine</AccordionDetails>
							<AccordionDetails>Sports & Outdoor</AccordionDetails>
							<AccordionDetails className='text-[#DB4444]'>
								See all
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>Brands</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Samsung</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Apple</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Huawei</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Pocco</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Lenovo</p>
								</div>
							</AccordionDetails>
							<AccordionDetails className='text-[#DB4444]'>
								See all
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>Features</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Metallic</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Plastic cover</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>8GB Ram</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Super power</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Large Memory</p>
								</div>
							</AccordionDetails>
							<AccordionDetails className='text-[#DB4444]'>
								See all
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary>
								<Typography>Price range</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className='flex mt-[-15px] mb-[15px]'>

								<input
									type='range'
									min='0'
									max='999999'
									value={value[0]}
									onChange={e => handleRangeChange(0, e.target.value)}
									className='accent-red-500 w-[50%]'
								/>
								<input
									type='range'
									min='0'
									max='999999'
									value={value[1]}
									onChange={e => handleRangeChange(1, e.target.value)}
									className='accent-red-500 w-[50%]'
								/>
								</div>
								<div
									style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}
								>
									<TextField
										label='Min'
										type='number'
										value={value[0]}
										onChange={e => handleInputChange(0, e.target.value)}
										size='small'
										fullWidth
									/>
									<TextField
										label='Max'
										type='number'
										value={value[1]}
										onChange={e => handleInputChange(1, e.target.value)}
										size='small'
										fullWidth
									/>
								</div>
								<Button
									variant='outlined'
									fullWidth
									sx={{ borderColor: 'red', color: 'red' }}
									onClick={handleApply}
								>
									Apply
								</Button>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>Condition</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='radio'
										name='redio'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>
										Any
									</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='radio'
										name='redio'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Refurbished</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='radio'
										name='redio'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Brand new</p>
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='radio'
										name='redio'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<p>Old items</p>
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1-content'
								id='panel1-header'
							>
								<Typography component='span'>Ratings</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<img src={five} alt="" />
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<img src={four} alt="" />
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<img src={tree} alt="" />
								</div>
							</AccordionDetails>
							<AccordionDetails>
								<div className='flex gap-[10px]'>
									<input
										type='checkbox'
										className='accent-[#DB4444] w-[17px] h-[25px]'
									/>
									<img src={two} alt="" />
								</div>
							</AccordionDetails>
						</Accordion>
					</div>
				</aside>
				<aside className='flex flex-col gap-[40px] md:w-[80%]'>
					<div className="w-full px-4">
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						breakpoints={{
							768: {
								slidesPerView: 3, 
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
					<div className='flex justify-center mt-[20px]'>
						<button className='px-[25px] bg-[#DB4444] py-[10px] rounded-[7px] text-[white]'>
							All Products
						</button>
					</div>
				</aside>
			</section>
		</>
	)
}
