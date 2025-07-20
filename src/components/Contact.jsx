import React from 'react'
import Navv from './Navv'
import jatin from '../assets/king1.jpg'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

const Contact = () => {


	const links = [
		{
			href: "https://www.linkedin.com/in/jatin-shakyawar-761654256/",
			src: linkedin
		},
		{
			href: "https://github.com/JatinShakyawar555",
			src: github
		},
		{
			href: "https://www.instagram.com/_jatins222/",
			src: instagram
		}
	]

	return (
		<div className='w-full bg-black h-screen overflow-y-auto text-white'>

			<div>
				<Navv />
			</div>

			<div className='bg-purple-60 max-w-[80%] h-100vh m-auto my-9 p-10 text-black'>

				<div className='bg-amber-90 m-auto w-full h-full flex flex-col items-center mb-6 p-5 man-head text-center text-white'>
					<h1 className='text-6xl m-auto font-bold text-yellow-400' >Connect With Me</h1>
				</div>

				<div className='bg-[#18181B] m-auto w-full h-full flex flex-col items-center gap-2 flex-wrap p-6 man-head2 text-white'>
					<h1 className='text-4xl m-auto font-semibold'>jatinstech555@gmail.com</h1>
					<h2 className='text-xl m-auto font-medium text-gray-400'>Feel free to contact me any time</h2>
				</div>

				<div className='bg-[#18181B] w-full h-full flex flex-col p-5'>
					<form action="https://api.web3forms.com/submit" method="POST" >

						<input type="hidden" name="access_key" value="2dd79996-b5ce-4f95-a1fd-7d01b5ea22da"></input>

						<div className='flex  gap-10 w-full bg-amber-90 form-inp'>

							<input
								className=' text-white border-b-2 border-b-emerald-300 w-full h-15  outline-none text-[1rem]'
								type="text"
								name="name"
								placeholder='Name' />

							<input
							className=' text-white border-b-2 border-b-emerald-300 w-full h-15 outline-none text-[1rem]'
								type="text"
								name="email"
								placeholder='Email' />
						</div>

						<div>
							<textarea className='w-full  mt-6 h-30 outline-none sm:text-xl text-lg bg-transparent border-b-2 border-b-emerald-300 text-white'
								name="message"
								placeholder='Message '>
							</textarea>
						</div>

						<button type='submit' 
						className='px-7 py-4 rounded-2xl mt-6 text-black font-medium text-lg bg-yellow-400 div-btn'
						>Submit</button>

					</form>
				</div>
			</div>

			<div className='pb-10 bot-con'>
				<div>
					<div className='flex justify-center items-center gap-3 '>
						<img src={jatin} alt="" className='w-10 rounded-3xl' />
						<h1 className='text-xl font-semibold'>Jatin Shakyawar</h1>
					</div>
				</div>


				<div className=''>
					<div className='flex justify-center  gap-4 mt-3 '>
						{links.map((data, idx) => (
							<div className=' w-6 rounded intro-icons' key={idx}>
								<a href={data.href}><img src={data.src} alt="" /></a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact