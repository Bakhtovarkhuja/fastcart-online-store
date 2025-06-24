import { useNavigate } from 'react-router'

export default function Error(){
	const navigate = useNavigate()

	return <>
		<section className='flex flex-col gap-[25px] justify-center text-center items-center h-[80vh]'>
			<h1 className='md:text-[125px] text-[45px]'>404 Not Found</h1>
			<b className='text-[19px]'>Your visited page not found. You may go home page.</b>
			<button className='bg-[#DB4444] text-[white] px-[35px] py-[10px] rounded-[7px]' onClick={() => navigate(-1)}>Back to home page</button>
		</section>
	</>
}