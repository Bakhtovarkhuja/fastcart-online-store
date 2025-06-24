import phone from '../../assets/phone.svg'
import mailIcon from '../../assets/mail.svg'

export default function Contact(){
	return <>
		<section className='w-[90%] md:w-[80%] m-auto py-[30px] flex flex-col gap-[20px] md:gap-[40px] md:py-[60px] md:pb-[150px]'>
			<div>
				<p className='text-[gray]'>Home / <span className='font-bold text-[black]'>Contact</span></p>
			</div>
			<div className='flex flex-col gap-[20px] md:flex-row'>
				<div className='p-[20px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[7px] md:flex md:flex-col md:justify-between bg-[white]'>
					<div className='flex flex-col gap-[10px]'>
						<div className='flex items-center gap-[10px]'>
							<img src={phone} alt="" />
							<b className='text-[25px] mt-[-7px]'>Call To Us</b>
						</div>
						<p>We are available 24/7, 7 days a week.</p>
						<p>Phone: +8801611112222</p>
					</div>
					<div className='my-[20px] h-[1px] bg-[gray] w-[100%]'></div>
					<div className='flex flex-col gap-[10px]'>
						<div className='flex items-center gap-[10px]'>
							<img src={mailIcon} alt="" />
							<b className='text-[25px] mt-[-7px]'>Write To US</b>
						</div>
						<p>Fill out our form and we will contact you within 24 hours.</p>
						<p>Emails: customer@exclusive.com</p>
						<p>Emails: support@exclusive.com</p>
					</div>
				</div>
				<div className='p-[20px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[7px] bg-[white] flex flex-col gap-[20px] md:w-[100%]'>
					<div className='flex flex-col gap-[20px] md:flex-row'>
						<input className='outline-0 border-1 border-[gray] px-[15px] py-[8px] rounded-[7px] w-[100%]' type="text" placeholder='Name'/>
						<input className='border-1 outline-0 border-[gray] px-[15px] py-[8px] rounded-[7px] w-[100%]' type="email" placeholder='Email'/>
						<input className='border-1 border-[gray] outline-0 px-[15px] py-[8px] rounded-[7px] w-[100%]' type="number" placeholder='Phone'/>
					</div>
					<textarea placeholder='Your Massage' className='max-w-[100%] outline-0 w-[100%] max-h-[120px] h-[200px] border-1 border-[gray] px-[15px] rounded-[7px] py-[7px] md:max-h-[200px]'></textarea>
					<button className='w-[55%] self-end py-[10px] rounded-[7px] text-[white] bg-[#DB4444]'>Send Massage</button>
				</div>
			</div>
		</section>
	</>
}