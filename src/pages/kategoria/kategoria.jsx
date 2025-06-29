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
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import {
	brandById,
	categoriaById,
	getProduct,
	minPriceMaxPrice,
} from '../../store/product/reducer'
import { useDispatch, useSelector } from 'react-redux'
import api from '../../utils/utils'
import { getKate } from '../../store/kategoria/reducer'
import { get } from '../../store/categoria/reducer'
import { AddCart } from '../../store/cart/reducer'
import SuperModal from '../../components/modal/modal'

export default function Kategoria() {
	const wish = JSON.parse(localStorage.getItem('wish'))
	const { kategoria } = useSelector(state => state.kategoria)
	const { data } = useSelector(state => state.categoria)
	const dispatch = useDispatch()
	const { product } = useSelector(state => state.product)
	const [value, setValue] = useState([0, 1000])
	const [value1, setValue1] = useState([1, 1000])
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

	const handleRangeChange = (index, val) => {
		const newVal = [...value]
		newVal[index] = Number(val)
		setValue(newVal)
	}
	const handleRangeChange1 = (index, val) => {
		const newVal = [...value1]
		newVal[index] = Number(val)
		setValue1(newVal)
	}

	const handleApply = () => {
		dispatch(
			minPriceMaxPrice({
				min: value[0],
				max: value1[1],
			})
		)
	}

	const handleInputChange = (index, val) => {
		const newVal = [...value]
		newVal[index] = Number(val)
		setValue(newVal)
	}
	const handleInputChange1 = (index, val) => {
		const newVal = [...value1]
		newVal[index] = Number(val)
		setValue(newVal)
	}

	useEffect(() => {
		dispatch(getProduct())
		dispatch(getKate())
		dispatch(get())
	}, [])

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
				<aside className='md:w-[25%]'>
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
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component='span'>Category</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {data?.map(el => (
        <label
          key={el.id}
          className='flex gap-[5px] items-center cursor-pointer hover:text-red-500 transition-all'
        >
          <input
            type='checkbox'
            className='accent-[#DB4444] cursor-pointer'
            onChange={() => dispatch(categoriaById(el?.id))}
          />
          <p>{el?.categoryName}</p>
        </label>
      ))}
    </AccordionDetails>
    <AccordionDetails>
      <b
        onClick={() => dispatch(getProduct())}
        className='text-[#DB4444] cursor-pointer hover:underline transition-all flex items-center gap-1'
      >
        See All <span>→</span>
      </b>
    </AccordionDetails>
  </Accordion>

  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component='span'>Brands</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {kategoria?.map(el => (
        <label
          key={el.id}
          className='flex gap-[10px] items-center cursor-pointer hover:text-red-500 transition-all'
        >
          <input
            type='checkbox'
            className='accent-[#DB4444] w-[17px] h-[25px] cursor-pointer'
            onChange={() => dispatch(brandById(el?.id))}
          />
          <p>{el?.brandName}</p>
        </label>
      ))}
    </AccordionDetails>
    <AccordionDetails>
      <b
        onClick={() => dispatch(getProduct())}
        className='text-[#DB4444] cursor-pointer hover:underline transition-all flex items-center gap-1'
      >
        See All <span>→</span>
      </b>
    </AccordionDetails>
  </Accordion>

  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component='span'>Features</Typography>
    </AccordionSummary>
    {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature, i) => (
      <AccordionDetails key={i}>
        <label className='flex gap-[10px] items-center cursor-pointer hover:text-red-500 transition-all'>
          <input
            type='checkbox'
            className='accent-[#DB4444] w-[17px] h-[25px] cursor-pointer'
          />
          <p>{feature}</p>
        </label>
      </AccordionDetails>
    ))}
    <AccordionDetails className='text-[#DB4444] cursor-pointer hover:underline'>See all</AccordionDetails>
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
          className='accent-red-500 w-[50%] cursor-pointer'
        />
        <input
          type='range'
          min='0'
          max='999999'
          value={value1[1]}
          onChange={e => handleRangeChange1(1, e.target.value)}
          className='accent-red-500 w-[50%] cursor-pointer'
        />
      </div>
      <div className='flex gap-[10px] mb-[16px]'>
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
          value={value1[1]}
          onChange={e => handleInputChange1(1, e.target.value)}
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
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component='span'>Condition</Typography>
    </AccordionSummary>
    {['Any', 'Refurbished', 'Brand new', 'Old items'].map((cond, i) => (
      <AccordionDetails key={i}>
        <label className='flex gap-[10px] items-center cursor-pointer hover:text-red-500 transition-all'>
          <input
            type='radio'
            name='radio'
            className='accent-[#DB4444] w-[17px] h-[25px] cursor-pointer'
          />
          <p>{cond}</p>
        </label>
      </AccordionDetails>
    ))}
  </Accordion>

  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography component='span'>Ratings</Typography>
    </AccordionSummary>
    {[five, four, tree, two].map((imgSrc, i) => (
      <AccordionDetails key={i}>
        <label className='flex gap-[10px] items-center cursor-pointer hover:text-red-500 transition-all'>
          <input
            type='checkbox'
            className='accent-[#DB4444] w-[17px] h-[25px] cursor-pointer'
          />
          <img src={imgSrc} alt='' />
        </label>
      </AccordionDetails>
    ))}
  </Accordion>
</div>

				</aside>
				<aside className='flex flex-col gap-[40px] md:w-[75%]'>
	<div className='w-full flex flex-wrap gap-[20px]'>
		{product?.map(el => {
        const wish = JSON.parse(localStorage.getItem('wish')) || []
        const isInWish = wish.some(item => item.id === el.id)
        return (
            <div className='flex flex-col gap-[10px] w-[100%] md:w-[32%]'>
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
	</div>

	<div className='flex justify-center mt-[20px]'>
		<button className='px-[25px] bg-[#DB4444] py-[10px] rounded-[7px] text-white font-semibold shadow-md hover:bg-[#b83636] transition duration-300 hover:scale-105'>
			All Products
		</button>
	</div>
</aside>

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
