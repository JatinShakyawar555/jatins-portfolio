import React from 'react'
import Navv from './Navv'
import js from '../assets/js.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import nodejs from '../assets/nodejs.png'
import react from '../assets/react.png'
import python from '../assets/python.png'
import talwaind from '../assets/tailwind.png'



const Skills = () => {

	const images = [
		{
			src: java,
			imgName: "Java"
		},
		{
			src: js,
			imgName: "JavaScript"
		},
		{
			src: nodejs,
			imgName: "Nodejs"
		},
		{
			src: react,
			imgName: "React"
		},
		{
			src: python,
			imgName: "Python"
		},
		{
			src: talwaind,
			imgName: "Tailwind CSS"
		},
		{
			src: html,
			imgName: "Html"
		},
		{
			src: github,
			imgName: "Github"
		},
	]
// bg-[#332034] bg-zinc-900
	return (
		<div className='w-full h-screen bg-black text-white overflow-y-scroll '>

			<div>
				<Navv />
			</div>
   {/* #113438  #18191F  */}
			<div className='max-w-[90%]  bg-black m-auto mt-9 mb-9 p-6 overflow-hidden'>

				<div className='max-w-[85%] max-h-[400px] bg-amber-70 m-auto p-5 flex flex-col justify-center items-center gap-6'>
					<h1 className='text-6xl font-semibold text-yellow-400'>What I do</h1>
					<p className='text-xl font-light text-gray-400'>I believe in mastering technologies that empower me to build impactful solutions. Here are the tools and languages I use to turn ideas into reality
					</p>
				</div>

				<div
					className='max-w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 bg-blue- mt-6 m-auto p-6 max-h-[450px] overflow-y-auto gap-6'>

					{images.map((data, idx) => 
						(
							<div className='w-[200px] h-[240px] bg-red-5 p-5 flex flex-col items-center m-auto' key={idx}>
							<img src={data.src} alt="" className='w-fit  rounded-2xl' />
							<h1 className='mt-4'>{data.imgName}</h1>
						</div>
						)
					)}

				</div>
			</div>
		</div>
		// </div>
	)
}

export default Skills


// red box ki width auto karni hai aur content column jab page skrink ho