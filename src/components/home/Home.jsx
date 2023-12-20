import React from 'react'
import Awards from './awards/Awards'
import Featured from './featured/Featured'
import Hero from './Hero/Hero'
import "./Home.css"
import Recent from './recent/Recent'
import Location from './location/Location'
import Team from './team/Team'
import Price from './price/Price'

const Home = () => {
  return (
    <>
    <Hero/>
    <Featured/>
    <Recent/>
    <Awards/>
    <Location/>
    <Team/>
    <Price/>
    </>
  )
}

export default Home