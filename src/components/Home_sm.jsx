import React from 'react'
import Image from './Image'
import Navv from './Navv'

const Home_sm = () => {
	return (
		<div className='bg-black w-100% h-screen flex flex-col '>

			{/* <div className='w-full '>
			<Navv className=""/>
		</div>
		 */}
			<div className='text-white flex flex-col items-center   my-6 w-auto'>
				<div className='text-center p-6'>
					<h1 className='text-3xl p-1'>Hi there I'am </h1>
					<h1 className='text-3xl p-1 text-lime-400'>Jatin Shakyawar</h1>
					<h1 className='text-3xl p-1'>I am into Devlopment</h1>
				</div>
			</div>

			<div className='img'>
				<Image />
			</div>

		</div>
	)
}

export default Home_sm