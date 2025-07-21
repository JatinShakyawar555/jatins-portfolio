import React, { useState } from 'react'
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router';
import { useLocation } from 'react-router';


const Navv = () => {
	const [showMenu, setShowMenu] = useState(false)


	const smallNavLinks = [
		{
			name: "Home",
			path: "/"
		},
		{
			name: "About",
			path: "/about"
		},
		{
			name: "Skills",
			path: "/skills"
		},
		{
			name: "Projects",
			path: "/projects"
		},
		{
			name: "Contact",
			path: "/contact"
		},
	]

	const path = useLocation()
	// console.log(path)

	return (
		<div className='relative top-0 left-0 '>
			{/* Navbar  #1f2937  #3f0071*/}
			<div className='bg-zinc-900 flex justify-between w-100%  h-[50px] text-white ' >

				<div className='nam ml-3 flex sm:items-center'>
					<h1 class="p-1  text-teal-400 transition duration-200 cursor-pointer  hover:shadow-[0_0_10px_#00FFFF] shadow-fuchsia-600">Jatin Shakyawar</h1>
				</div>

				<div className='flex gap-8 ff items-center'>
					{path.pathname !== '/' && path.pathname !== '/home' ? <Link to={'/home'} className='hover:shadow-[0_0_10px_#00FFFF] p-1 rounded-[6px]'>Home</Link> : ''}
					<Link to={'/about'} className='hover:shadow-[0_0_10px_#00FFFF] p-1 rounded-[6px]'>About</Link>
					<Link to={'/skills'} className='hover:shadow-[0_0_10px_#00FFFF] p-1 rounded-[6px]'>Skills</Link>
					<Link to={'/projects'} className='hover:shadow-[0_0_10px_#00FFFF] p-1 rounded-[6px]'>Projects</Link>
					<Link to={'/contact'} className='hover:shadow-[0_0_10px_#00FFFF] p-1 rounded-[6px]'>Contact</Link>
				</div>

				<div className='ff flex items-center '>
					<Link className='bg-gradient-to-r from-red-600 to-pink-600 w-[100px] mr-4  rounded-xl hover:cursor-pointer text-center' to='/projects' >Connect</Link>
				</div>

				<div className='ham flex' >
					<button onClick={() => setShowMenu(true)}
						className='pr-7 text-xl' ><FaHamburger /></button>
				</div>

			</div>


			{/* small screen menu */}
			<div className='flex justify-center relative text-white'>
				{showMenu && (
					<div className='bg-neutral-800  w-[20rem] h-auto mt-9 absolute z-[100] '>

						<div className='flex justify-center items-center  gap-20 px-[1.5rem] py-[1rem] ' >
							<h1 className='text-xl'>Jatin Shakyawar </h1>
							<h2 onClick={() => setShowMenu(false)}><IoClose size={"24px"} className='ml-6' /></h2>
						</div>

						<div className='h-[2px] bg-gray-200 '></div>

						<div className='flex flex-col gap-6 justify-center items-center h-[300px]  ' >

							{smallNavLinks.map((data, idx) => (

								<div key={idx} className='bg-amber-400 w-[80px] flex justify-center p-1 text-black font-semibold'>
									<Link to={data.path}>
										{data.name}
									</Link>
								</div>
							))}

						</div>

					</div>
				)}

			</div>

		</div>
	)
}

export default Navv