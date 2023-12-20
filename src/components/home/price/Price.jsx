import React from 'react'
import Heading from '../../common/Heading'
import PriceCard from './PriceCard'
import "./Price.css"

const Price = () => {
  return (
    <>
    <section className='price padding'>
        <div className="container">
            <Heading title='Select Your Package' subtitle='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'></Heading>
        </div>
        <PriceCard/>
    </section>
    </>
  )
}

export default Price