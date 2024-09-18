import React from 'react'
import './parallax.scss'
import { motion ,useScroll ,useTransform} from 'framer-motion'
import { useRef } from 'react'

function Parallax({type}) {

  const ref = useRef()

  const{scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div className='parallax' ref = {ref}
     style={{
        background:
        type==="services"
         ? "linear-gradient(180deg, #0c0c1d , #111132)"
         : "linear-gradient(180deg, #111132 , #505064)"
         }}>
      <motion.h1 style={{y: yText}}>{type === "services" ? "What I Do" : "What I've Done"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg}} className="planets"></motion.div>
      <motion.div style={{x: xStars}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax;
