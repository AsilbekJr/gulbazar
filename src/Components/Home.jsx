import React from 'react'
import Banner from './Banner'
import BestSeller from './BestSeller'
import Decorate from './Decorate'
import Looks from './Looks'
import Outdoor from './Outdoor'
import Why from './Why'

const Home = () => {
  return (
    <>
       <Banner />
       <Why/>
       <Decorate />
       <Looks/>
       <Outdoor/>
       <BestSeller />

    </>
  )
}

export default Home