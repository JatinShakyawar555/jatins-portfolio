import React, { useEffect } from 'react'
import Navv from './Navv'
import jatin from '../assets/king1.jpg'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

const About = () => {

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
		<div className='w-full h-screen bg-black text-white overflow-y-auto' >
			<div>
				<Navv />
			</div>

			<div className='flex gap-6 justify-center mt-[6rem] w-full h-auto items-center con-div '>
				<div className='flex w-[20rem] ml-3 bg-amber-40 items-center justify-center p-3 rounded-3xl div-img   shadow-[0_0_10px_#9a1af0]'>
					<img src={jatin} alt="" className='w-[18rem] ' />
				</div>

				{/* <div className=''> */}
					<div className='bg-pink-30 w-[600px] h-[380px]  flex flex-col gap-3 p-10  overflow-hidden rounded-3xl div-box'>
						<h1 className='text-5xl font-semibold text-yellow-400'>About Me</h1>
						<h1 className='text-xl font-light text-gray-400'>Bit about me</h1>

						<p className='overflow-y-auto'>👋 Hi, I’m Jatin Shakyawar a passionate and self-driven Full Stack Developer. I love building scalable web applications with clean code, strong logic, and impactful UI designs. My tech stack includes Java, React.js, Node.js, Express, Tailwind CSS, and MongoDB. I believe in continuous learning, teamwork, and solving real-world problems through technology. Currently, I’m working on projects that enhance my backend architecture skills and frontend creativity. I aim to contribute to high-performing teams and create products that people love to use.

.
						</p>
					</div>
				{/* </div> */}
			</div>

			<div className='mt-40 flex-col justify-center items-center bg-amber-40 bot-div mb-10'>
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

export default About