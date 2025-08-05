import { Canvas } from '@react-three/fiber';
import {
  Center,
  Text3D,
  Environment,
  OrbitControls,
  MeshTransmissionMaterial,
  Float,
  Stars
} from '@react-three/drei'
import { Sparkles } from '@react-three/drei'
import { backgroundBlurriness, transmission } from 'three/tsl';
import Image from './Image';
import Intro from './Intro';

import { Suspense, useState } from 'react'
import { Preload } from '@react-three/drei'


const Heading = () => {

  return (
    <>
      <div className='relative'>

        <div id='canvas-container' className='relative flex flex-col items-center  sm:block overflow-hidden'>
          {/* <Intro /> */}
          <CanvasFunc />
          <Image />
        </div>
      </div>
    </>
  )
}

export default Heading;

function CanvasFunc() {

  //   const isMobile = window.innerWidth < 750;
  // const xPos = isMobile ? -1.5 : -3; // adjust -1.5 to center better on small screen

  const { ...config } = {
    // we can see a backside of a text
    backside: true,
    backsideThickness: .1,
    transmission: 1,
    thickness: .1,
    chromaticAbberation: 5,
    ior: 3,// GLOSSY
    color: 'gray',
  }

  return (
    // IN THIS CANVAS OUR WHOLE SEEN WHILE LIE #0f172a
    <Canvas camera={{ position: [0, 0, 4] }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000');
      }}
    >
      {/* FOR MOVEMENT */}
      <Float speed={1} rotationIntensity={1}>
        {/* // -3 */}
        <Suspense fallback={null}>
          <Text config={config} position={[-2, -2, 0]}
            >

            Hi There, I'm{'\n'}
            JATIN SHAKYAWAR{'\n'}
            I Am Into Devlopment!
          </Text>



          {/* SPEED OF BLINK */}
          <Stars count={400} speed={2} saturation={0} />
          {/* <Sparkles count={400} scale={[20, 20, 20]} size={2} speed={1} /> */}

          <Environment preset='warehouse' blur={2} />
          {/* <axesHelper args={[50]} /> */}
          {/* CONRTOL MOVEMENT */}
          <OrbitControls />
        </Suspense>
        <Preload all />
      </Float>





    </Canvas>
  )
}

function Text({ children, config, font = '/font_Regular.json', ...props }) {
  return (
    <>
      {/* hold a 3D elements */}
      <group>
        <Center scale={[0.2, 0.3, 0.4]} front top {...props}>

          <Text3D
            font={font} scale={2} letterSpacing={-.1} height={0.14} bevelEnabled
            bevelSize={.04} bevelSegments={6} curveSegments={12} bevelThickness={0.01}>

            {children}

            <MeshTransmissionMaterial {...config} />
          </Text3D>

        </Center>
      </group>
    </>
  )
}
