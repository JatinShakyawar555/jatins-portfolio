import { div } from 'three/tsl';
import jatin from '../assets/king1.jpg'

import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'

const Image = () => {


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
     // ml-[950px] mt-[120px]

     return (
          <>
               <div className='absolute z-50 image-intro left-[70%] top-[20%]'>
                    {/* ml-[1000px] z-40 */}

                    {/* <div className='m-[200px] bg-amber-300  text-white flex'> */}
                    <div className='flex flex-col  w-[280px] h-[400px]  rounded-md intro-img '>
                         <div className='flex justify-center mb-4'>
                              <img src={jatin} alt="" className='' />
                         </div>

                         <div className='mt-3 flex justify-center mb-6 '>
                              <Link to='/about'
                                   className='font-semibold bg-gradient-to-r from-red-600 to-pink-600 px-5 py-1.5 rounded-3xl w-auto text-white'>
                                   About me</Link>

                         </div>

                         <div className='flex gap-4 justify-center '>
                              {links.map((data, idx) => (
                                   <div className=' flex w-8 rounded intro-icons' key={idx}>
                                        <a href={data.href}><img src={data.src} alt="" /></a>
                                   </div>
                              ))}
                         </div>

                    </div>



                    {/* </div> */}
               </div>
          </>
     )
}



export default Image;