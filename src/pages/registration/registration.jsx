import { useState } from 'react'
import google from '../../assets/google.svg'
import { Link } from 'react-router'

export default function Registration(){
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [password, setPassword] = useState(null)
	const [password1, setPassword1] = useState(null)

	return <>
		<section className='flex items-center justify-center h-[90vh]'>
			<div className='w-[400px] flex flex-col gap-[15px] px-[10%] md:w-[50%]'>
				<b className='md:text-[45px] text-[35px]'>Create an account</b>
				<p className='mt-[-10px] md:text-[20px] text-[18px]'>Enter your details below</p>
				<input className='rounded-[7px] border-1 border-[gray] py-[7px] px-[15px] outline-0' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
				<input className='rounded-[7px] border-1 border-[gray] py-[7px] px-[15px] outline-0' type="number" placeholder='Name' value={number} onChange={(e) => setNumber(e.target.value)}/>
				<input className='rounded-[7px] outline-0 border-1 border-[gray] py-[7px] px-[15px]' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
				<input className='rounded-[7px] outline-0 py-[7px] px-[15px] border-1 border-[gray]' type="password" placeholder='Password' value={password} onChage={(e) => setPassword(e.target.value)}/>
				<input className='rounded-[7px] outline-0 py-[7px] px-[15px] border-1 border-[gray]' type="password1" placeholder='Password' value={password} onChage={(e) => setPassword1(e.target.value)}/>
				<button className='bg-[#DB4444] rounded-[7px] text-[white] py-[10px]'>Create Account</button>
				<button className='py-[10px] border-1 border-[gray] rounded-[7px] flex items-center justify-center gap-[10px]'> <img src={google} alt="" /> Sign up with Google</button>
				<p className='text-center'>Already have account? <Link to={'/logIn'}> <span className='font-bold'> Log in</span></Link></p>
			</div>
		</section>
	</>
}