import React from 'react'
import './hero.scss'
import { animate } from 'framer-motion'
import { motion } from 'framer-motion'

const textVariants ={
    initial: {
        opacity: 0,
        x: -500,
    },
    animate:{
        opacity: 1,
        x:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration:2,
            repeat: Infinity
        }
    }
}

const sliderVariants ={
    initial: {
      
        x: 0,
    },
    animate:{
       
        x:"-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            
        }
    },
    
}

function Hero() {
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>SANKALP TIWARI</motion.h2>
            <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
                <motion.button variants={textVariants}>See the latest work</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/images/scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" initial="initial" animate="animate" variants={sliderVariants}>
            Developer  Designer  Programmer
        </motion.div>
      <div className="imageContainer">
        {/* <img src="/hero.png" alt="" /> */}
      </div>
    </div>
  )
}

export default Hero
