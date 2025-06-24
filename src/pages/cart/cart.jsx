import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { delCart, getCart, removeCart } from '../../store/cart/reducer'
import api from '../../utils/utils'

export default function Cart() {
	const dispatch = useDispatch()
	const { cart } = useSelector(state => state.cart)
	console.log(cart, cart.productsInCart)

	useEffect(() => {
		dispatch(getCart())
	}, [])

	return (
		<div className='md:py-[80px] py-[20px]'>
			<section className='w-[90%] md:w-[80%] m-auto my-[50px] flex flex-col gap-[20px]'>
				<p className='text-[gray]'>
					Home / <span className='text-[black] font-bold'>Cart</span>
				</p>
				<div className='md:h-[70px] md:flex md:items-center md:justify-between md:rounded-[15px] md:shadow-[0_8px_8px_rgba(0,0,0,0.25)] hidden md:block'>
					<b className='text-start px-[20px]'>Product</b>
					<b className='text-start'>Price</b>
					<b>Quantity</b>
					<b className='px-[20px]'>Subtotal</b>
				</div>
				<div>
					{/* <div className='md:h-[70px] md:justify-between md:items-center rounded-[15px] shadow-[0_8px_8px_rgba(0,0,0,0.25)] flex justify-between px-[20px] py-[10px]'>
						<div className='flex flex-col md:flex-row md:w-[44%] md:justify-between'>
							<div className='flex gap-[10px] flex-col md:flex-row items-start'>
								<img src={google} alt='' />
								<b>LCD Monitor</b>
							</div>
							<b className='mr-[100px]'>$650</b>
						</div>
						<div className='flex flex-col items-center justify-between md:flex-row md:w-[39%]'>
							<div>
								<input type="number" className='border-1 border-black py-[7px] px-[15px] rounded-[7px] w-[70px]'/>
							</div>
							<b className='justify-center flex gap-[10px] px-[20px]'>
								$650 <button>🗑️</button>
							</b>
						</div>
					</div> */}
					{cart[0]?.productsInCart?.map(el => (
						<div
							className='md:h-[70px] md:justify-between md:items-center rounded-[15px] shadow-[0_8px_8px_rgba(0,0,0,0.25)] flex justify-between px-[20px] py-[10px]'
							key={el.id}
						>
							<div className='flex flex-col md:flex-row md:w-[44%] md:justify-between md:items-center'>
								<div className='flex gap-[10px] flex-col md:flex-row items-start md:items-center'>
									<img
										src={`${api}images/${el.product.image}`}
										alt=''
										className='w-[80px] h-[60px]'
									/>
									<b>{el.product.productName}</b>
								</div>
								<b className='mr-[100px]'>$ {el.product.price}</b>
							</div>
							<div className='flex flex-col items-center justify-between md:flex-row md:w-[39%]'>
								<div>
									<input
										type='number'
										className='border-1 border-black py-[7px] px-[15px] rounded-[7px] w-[70px]'
										value={el.product.quantity}
									/>
								</div>
								<b className='justify-center flex gap-[10px] px-[20px]'>
									$ {+el.product.price * +el.product.quantity}{' '}
									<button onClick={() => dispatch(delCart(el.id))}>🗑️</button>
								</b>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className='w-[90%] md:w-[80%] m-auto flex justify-between mb-[40px] items-center'>
				<button className='border-2 border-black rounded-[7px] py-[10px] px-[25px]'>
					Return To Shop
				</button>
				<div className='hidden md:block'>
					<div className='md:flex md:gap-[20px]'>
						<button className='border-2 rounded-[7px] border-black py-[10px] px-[25px]'>
							Update Cart
						</button>
						<button
							className='text-[#DB4444] rounded-[7px] border-[#DB4444] border-2 py-[10px] px-[25px]'
							onClick={() => dispatch(removeCart())}
						>
							Remove all
						</button>
					</div>
				</div>
				<div className='flex gap-[20px] md:hidden text-[25px]'>
					<RotateLeftIcon
						sx={{ width: '40px', height: '40px' }} 
					></RotateLeftIcon>
					<b onClick={() => dispatch(removeCart())}>🗑️</b>
				</div>
			</section>
			<section className='w-[90%] md:w-[80%] m-auto flex md:flex-row flex-col justify-between items-start gap-[20px]'>
				<div className='flex gap-[20px]'>
					<input
						type='text'
						placeholder='Coupon Code'
						className='py-[10px] px-[25px] border-2 rounded-[7px] border-gray'
					/>
					<button className='text-[#DB4444] rounded-[7px] border-[#DB4444] border-2 py-[10px] px-[25px]'>
						Apply
					</button>
				</div>
				<div className='border-2 border-black p-[15px] rounded-[7px] md:w-[380px] flex flex-col gap-[15px] w-[100%]'>
					<b>Cart Total</b>
					<div className='flex justify-between items-center'>
						<b>Subtotal:</b>
						<p>$1750</p>
					</div>
					<div className='flex justify-between items-center'>
						<b>Shipping:</b>
						<p>free</p>
					</div>
					<div className='w-[100%] h-[1px] bg-black'></div>
					<div className='flex justify-between items-center'>
						<b>Total:</b>
						<b>$1750</b>
					</div>
					<Link to={'/checkOut'}>
						<button className='ml-[22%] text-[#DB4444] rounded-[7px] border-[#DB4444] border-2 py-[10px] px-[25px]'>
							Procees to checkout
						</button>
					</Link>
				</div>
			</section>
		</div>
	)
}
