import React from 'react'
import PageSection from './PageSection'
import {FaRocket,FaSatellite,FaRobot,FaMicrochip} from 'react-icons/fa'

const Products = () => {

  const products=[
    {
      id:1,
      icon:<FaRocket size={50} className='text-white'/>,
      title:'rocket manufacturing',
      subtitle:"A rocket (from Italian: rocchetto, lit. ''bobbin/spool'', and so named for its shape)[nb 1][1] is a vehicle that uses jet propulsion to accelerate without using any surrounding air.",
    },
    {
      id:2,
      icon:<FaMicrochip size={50} className='text-white'/>,
      title:'advanced electronics',
      subtitle:"A microchip isn't the same as a GPS device, and it can't be used to track your pet's whereabouts. It's simply a unique identifier (think of it as your pet's social security number) that is implanted so it can't be lost ",
    },
    {
      id:3,
      icon:<FaRobot size={50} className='text-white'/>,
      title:'robotics',
      subtitle:"robotics, design, construction, and use of machines (robots) to perform tasks done traditionally by human beings. Robots are widely used in such industries as automobile manufacture to perform simple repetitive tasks",
    },
    {
      id:4,
      icon:<FaSatellite size={50} className='text-white'/>,
      title:'payload to orbit',
      subtitle:"A satellite is an object that moves around a larger object. Earth is a satellite because it moves around the sun. The moon is a satellite because it moves around Earth. Earth and the moon are called “natural” satellites.",
    },
  ]
  return (
  <PageSection name="products" title="products" subtitle="Space Products Sdn Bhd is a young and dynamic manufacturing company for metal building products. Our main office is in Bandar Puncak Alam, Selangor, Malaysia. We provide a stylish range of metal louvers, sunshades">
    <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-20 gap-12 text-black'>
      {
        products.map((item,index)=>(
          <div key={index} className='group bg-gradient-to-r from-thOrange to-thBlue rounded-xl flex flex-col justify-center items-center text-center p-3 '>
            <div className='flex items-center justify-center duration-300 group-hover:scale-110 '>
              <div className='bg-black rounded-full p-5 m-4'>{item.icon}</div>
            </div>
            <h1 className='text-3xl lg:text-5xl my-8 capitalize '>{item.title}</h1>
            <p className='text-lg'>{item.subtitle}</p>
          </div>
        ))
      }

    </div>
  </PageSection>
  )
}

export default Products
