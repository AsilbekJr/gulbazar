import React from 'react'
import Banner from './Banner'
import BestSeller from './BestSeller'
import Decorate from './Decorate'
import Looks from './Looks'
import Outdoor from './Outdoor'
import Why from './Why'
import { motion } from "framer-motion/dist/framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration:0.1} }}
    >
       <Banner />
       <Why/>
       <Decorate />
       <Looks/>
       <Outdoor/>
       <BestSeller />

    </motion.div>
  )
}

export default Home