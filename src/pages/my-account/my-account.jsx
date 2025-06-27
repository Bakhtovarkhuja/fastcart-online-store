import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import api from '../../utils/utils'
import { useEffect, useState } from 'react'

export default function MyAccount() {
	const [data, setData] = useState([])

	async function Profill() {
		try {
			const token = await jwtDecode(localStorage.getItem('token'))

			const { data } = await axios.get(
				api + 'UserProfile/get-user-profile-by-id?id=' + token.sid,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				}
			)
			setData(data.data)
		} catch (error) {
			console.error(error)
		}
	}
	// console.log(data);
	

	useEffect(() => {
		Profill()
	}, [])

	return (
		<>
			<section className='w-[90%] md:w-[80%] flex flex-col gap-[20px] m-auto py-[30px] md:py-[60px] md:gap-[30px] md:pb-[220px]'>
				<div>
					<p className='text-[gray]'>
						Home / <span className='font-bold text-[black]'>My Account</span>
					</p>
				</div>
				<div className='flex flex-col gap-[30px] md:flex-row md:justify-between'>
					<aside className='flex flex-col gap-[10px] text-[20px]'>
						<b>Manage My Account</b>
						<ul className='ml-[10px] text-[gray]'>
							<li className='text-[#DB4444]'>My Profile</li>
							<li>Address Book</li>
							<li>My Payment Options</li>
						</ul>
						<b>My Orders</b>
						<ul className='ml-[10px] text-[gray]'>
							<li>My Returns</li>
							<li>My Cancellations</li>
						</ul>
						<b>My WishList</b>
					</aside>
					<aside className='p-[15px] rounded-[7px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] flex flex-col gap-[15px] md:w-[70%]'>
						<div>
							<b className='text-[28px] text-[#DB4444]'>Profile</b>
							<div className='flex flex-col gap-[10px] md:flex-row'>
								<div className='flex flex-col gap-[10px] md:w-[100%]'>
									<input
										type='text'
										className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px]'
										value={data?.userName}
									/>
									<input
										type='email'
										className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px]'
										value={data?.email}
									/>
								</div>
								<div className='flex flex-col gap-[10px] md:w-[100%]'>
									<input
										type='number'
										className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px]'
										value={data?.phoneNumber}
									/>
									<input
										type='email'
										className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px]'
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-[10px] mt-[20px]'>
							<b className='text-[28px]'>Password Changes</b>
							<input
								type='password'
								className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px]'
								placeholder='Current passwod'
							/>
							<div className='flex flex-col gap-[10px] md:flex-row'>
								<input
									type='text'
									className='border-1 border-[gray] rounded-[7px] px-[15px] md:w-[100%] py-[7px]'
									placeholder='New passwod'
								/>
								<input
									type='text'
									className='border-1 border-[gray] rounded-[7px] px-[15px] py-[7px] md:w-[100%]'
									placeholder='Confirm new passwod'
								/>
							</div>
						</div>
						<div className='flex gap-[10px] md:self-end flex-col-reverse md:flex-row'>
							<button>Cancel</button>
							<button className='px-[25px] py-[7px] rounded-[7px] bg-[#DB4444] text-[white]'>
								Save Changes
							</button>
						</div>
					</aside>
				</div>
			</section>
		</>
	)
}
