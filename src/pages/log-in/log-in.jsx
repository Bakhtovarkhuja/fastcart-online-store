import axios from 'axios'
import { useState } from 'react'
import api from '../../utils/utils'
import { useNavigate } from 'react-router'

export default function LogIn() {
	const navigate  =useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState(null)

	async function  handleCreateAccount() {
		const user = {
			userName: email,
			password: password
		}
		try {
			const { data } = await axios.post(api + 'Account/login', user)
			localStorage.setItem('token', data.data)
			navigate('/')
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section className='flex items-center justify-center h-[90vh]'>
				<div className='w-[400px] flex flex-col gap-[15px] px-[10%] md:w-[50%]'>
					<b className='md:text-[45px] text-[35px]'>Log in to Exclusive</b>
					<p className='mt-[-10px] md:text-[20px] text-[18px]'>Enter your details below</p>
					<input
						className='outline-0 border-1 border-[gray] py-[7px] px-[15px] rounded-[7px]'
						type='text'
						placeholder='Name'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						className='outline-0 py-[7px] px-[15px] border-1 border-[gray] rounded-[7px]'
						type='password'
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button className='text-center text-[#DB4444]'>
						Forget Password?
					</button>
					<button className='bg-[#DB4444] rounded-[7px] text-[white] py-[10px]' onClick={handleCreateAccount}>
						Create Account
					</button>
				</div>
			</section>
		</>
	)
}
