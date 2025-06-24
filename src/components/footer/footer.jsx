import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){
	return <div className='bg-[black]'>
		<footer className='px-[5%] md:px-[10%] py-[40px] text-[white] flex flex-col gap-[35px] md:flex-row'>
			<div className='flex flex-col gap-[20px] w-[100%]'>
				<b className='text-[22px]'>Exclusive</b>
				<p>Subscribe</p>
				<p>Get 10% off your first order</p>
				<div className='border-[white] border-1 py-[5px] px-[8px] flex items-center'>
					<input className='outline-0 w-[90%]' type="text" placeholder='Enter your email'/>
					<SendIcon/>
				</div>
			</div>
			<div className='flex flex-col gap-[20px] w-[100%]'>
				<b className='text-[22px]'>Support</b>
				<p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
				<p>exclusive@gmail.com</p>
				<p>+88015-88888-9999</p>
			</div>
			<div className='flex flex-col gap-[20px] w-[100%]'>
				<b className='text-[22px]'>Account</b>
				<p>My Account</p>
				<p>Cart</p>
				<p>Wishlist</p>
				<p>Shop</p>
			</div>
			<div className='flex flex-col gap-[20px] w-[100%]'>
				<b className='text-[22px]'>Quick Link</b>
				<p>Privacy Policy</p>
				<p>Terms Of Use</p>
				<p>FAQ</p>
				<p>Contact</p>
			</div>
			<div className='flex flex-col gap-[20px] w-[100%]'>
				<b className='text-[22px]'>Social </b>
				<div className='flex gap-[10px]'>
					<FacebookIcon/>
					<TwitterIcon/>
					<InstagramIcon/>
					<LinkedInIcon/>
				</div>
			</div>
		</footer>
		<div className='w-[100%] h-[1.5px] bg-[gray]'></div>
		<div className='bg-[black] py-[40px] text-center text-[gray] text-[16px]'>
			<b>Copyright Rimel 2022. <br className='md:hidden'/> All right reserved</b>
		</div>
	</div>
}