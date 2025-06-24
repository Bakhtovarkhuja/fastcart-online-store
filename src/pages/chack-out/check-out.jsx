import joistick from '../../assets/joistick.svg'
import monitor from '../../assets/monitor.svg'
import cards from '../../assets/cards.svg'

export default function CheckOut() {
	return (
		<>
			<section className='w-[90%] md:w-[80%] m-auto py-[30px] flex flex-col  gap-[20px] md:py-[60px] md:pb-[140px]'>
				<div>
					<p className='text-[gray] text-[20px]'>
						Home / View Cart /{' '}
						<span className='font-bold text-[black]'>ChackOut</span>
					</p>
				</div>
				<div className='flex flex-col gap-[35px] md:flex-row md:justify-between'>
					<aside className='p-[15px] rounded-[7px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] flex flex-col gap-[10px] '>
						<b className='text-[30px]'>Billing Details</b>
						<input
							type='text'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='First name'
						/>
						<input
							type='text'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Last name'
						/>
						<input
							type='text'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Street address'
						/>
						<input
							type='text'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Apartment, floor, etc. (optional)'
						/>
						<input
							type='text'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Town/City'
						/>
						<input
							type='number'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Phone number'
						/>
						<input
							type='email'
							className='border-1 border-[gray] w-[100%] rounded-[7px]  px-[15px] py-[7px] outline-0'
							placeholder='Email address'
						/>
						<div className='flex gap-[5px] items-start'>
							<input
								type='checkbox'
								className='accent-[#DB4444] w-[40px] h-[20px]'
							/>
							<b>Save this information for faster check-out next time</b>
						</div>
					</aside>
					<aside className='flex flex-col gap-[10px] md:w-[35%]'>
						<div className='flex justify-between'>
							<div className='flex gap-[10px] items-center'>
								<img src={joistick} alt='' />
								<p className='text-[19px]'>H1 Gamepad</p>
							</div>
							<b>$650</b>
						</div>
						<div className='flex justify-between'>
							<div className='flex gap-[10px] items-center'>
								<img src={monitor} alt='' />
								<p className='text-[19px]'>LCD Monitor</p>
							</div>
							<b>$1100</b>
						</div>
						<div className='flex justify-between'>
							<p className='text-[21px]'>Subtotal:</p>
							<b>$1750</b>
						</div>
						<div className='flex justify-between'>
							<p className='text-[21px]'>Shipping:</p>
							<b>Free</b>
						</div>
						<div className='h-[1px] bg-[gray]'></div>
						<div className='flex justify-between'>
							<b className='text-[25px]'>Total:</b>
							<b className='text-[20px]'>$1750</b>
						</div>
						<div className='flex justify-between'>
							<div className='flex gap-[10px]'>
								<input
									name='radio'
									type='radio'
									className='accent-[black] h-[25px] w-[25px]'
								/>
								<p className='text-[19px] items-center'>Bank</p>
							</div>
							<img src={cards} alt='' />
						</div>
						<div className='flex gap-[10px]'>
							<input
								name='radio'
								type='radio'
								className='accent-[black] h-[25px] w-[25px]'
							/>
							<p className='text-[19px] items-center'>Cash on delivery</p>
						</div>
						<div className='p-[15px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[7px] flex flex-col gap-[10px] items-start md:flex-row'>
							<input
								type='text'
								className='w-[100%] rounded-[7px] border-1 border-[gray] px-[15px] py-[7px]'
								placeholder='Coupon Code'
							/>
							<button className='border-1 border-[#DB4444] text-[#DB4444] px-[25px] py-[7px] rounded-[7px]'>
								Apply
							</button>
						</div>
						<button className='bg-[#DB4444] text-[white] py-[10px] rounded-[7px]'>Place Order</button>
					</aside>
				</div>
			</section>
		</>
	)
}