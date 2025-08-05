import React from 'react'
import Navv from './Navv'
import Streaming from '../assets/pro1.jpeg'
import { LuGithub } from "react-icons/lu";
import jatin from '../assets/king1.jpg'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

const Projects = () => {

	const content = [
		{
			img: Streaming,
			h: "Streaming Platform",
			p: "It's a Streaming Platform in which user can see the all movies and web-series trailer and get all information about cast"
		},

	]

	const tags = [
		{
			text: "React.js"
		},
		{
			text: "Tailwind css"
		},
		{
			text: "Redux"
		}
	]

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
		<div className='w-full h-screen bg-black text-white overflow-y-auto'>

			<div>
				<Navv />
			</div>
			{/* mb-9 my-10 */}
			<div className='max-w-[85%] h-[650px] bg-amber-3 m-auto  p-6 my-[3%]  '>

				<div className='bg-amber-60 max-w-[100%] p-6 m-auto mb-6'>
					<h1 className='text-center  sm:text-5xl lg:text-6xl text-2xl font-semibold text-yellow-400'>Featured Projects</h1>
				</div>

				<div
					className='bg-[#18181B]  m-auto max-w-[100%]   max-h-[500px]  overflow-y-scroll grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 place-items-center p-3 gap-6	'>

					{content.map((data, idx) => (
						<div key={idx}
							className='w-[300px] h-[450px] flex flex-col items-center gap-2 bg-neutral-800 rounded-xl mx-auto my-4 max-[450px]:w-full overflow-auto'>
							<img src={data.img} alt="" className='rounded-xl' />

							<div className='flex flex-col items-center gap-2 p-2 pro-div' >
								<h1 className='font-medium text-lg bg-neutral-900 p-1 px-2 rounded-md'>{data.h}</h1>
								<p className='text-center font-light text-gray-400'>{data.p}</p>
							</div>

							<div className='flex m bg-amber-10 flex-wrap font-thin justify-center div-tags'>
								{
									tags.map((data, idx) => (
										<h1 className='bg-purple-600 rounded-xl px-4 text-sm m-2 text-white' key={idx}>{data.text}</h1>
									))
								}
							</div>

							<div className='flex justify-center items-center gap-10 mt-2 mn-btn'>
								<div className='bg-gradient-to-r from-red-600 to-pink-600 rounded-md  '>
									<a
										href='https://flick-screen.vercel.app/'
										target='_blank'
										rel="noopener noreferrer"
										className='inline-block  bg-cyan-60  w-25 py-1 card-btn'>
										<div className='flex justify-center items-center gap-2'>
											<LuGithub size={17} />
											<h1>View</h1>
										</div>
									</a>
								</div>

								<div className='bg-gradient-to-r from-red-600 to-pink-600 rounded-md div-button '>
									<a
										href='https://github.com/JatinShakyawar555/FlickScreen'
										target='_blank'
										rel="noopener noreferrer"
										className='inline-block bg-cyan-60  w-25 py-1 card-btn '>
										<div className='flex justify-center items-center gap-2'>
											<LuGithub size={17} />
											<h1>Code</h1>
										</div>
									</a>
								</div>
							</div>

						</div>

					))}
				</div>

			</div>

			<div className='pb-8 pt-6'>
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

export default Projects