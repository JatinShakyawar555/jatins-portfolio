import React, { useEffect, useState } from 'react'
import Heading from './Heading';
import Navv from './Navv';
import Home_sm from './Home_sm';

const Home = () => {
 
  

  const [showHome, setShowHome] = useState(window.innerWidth <= 700)

  useEffect(() => {
    const handleResize = () => {
      setShowHome(window.innerWidth <= 700);
    };


    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
 

  return (
    <div className=''>



      <div className=''>
        <Navv />
      </div>

      <div>
        {showHome ? <Home_sm /> : <Heading />}
      </div>



      {/* HEADING */}

      {/* <div className=''>
       
      </div> */}

    </div>

  )
}

export default Home


// npm i @react-three/drei
// npm install three @types/three @react-three/fiber