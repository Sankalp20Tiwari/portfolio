import React from 'react'
import './project.scss'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'
import { useRef } from 'react'


const items = [
    {
        id:1,
        title:"Project 1",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illo illum quis accusantium animi doloribus temporibus, voluptates cupiditate. Esse ipsa placeat iste voluptates quo dolorum modi nesciunt fuga id dicta.",
        img:"https://images.pexels.com/photos/28375938/pexels-photo-28375938/free-photo-of-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:2,
        title:"Project 2",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illo illum quis accusantium animi doloribus temporibus, voluptates cupiditate. Esse ipsa placeat iste voluptates quo dolorum modi nesciunt fuga id dicta.",
        img:"https://images.pexels.com/photos/28410256/pexels-photo-28410256/free-photo-of-ordu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:3,
        title:"Project 3",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illo illum quis accusantium animi doloribus temporibus, voluptates cupiditate. Esse ipsa placeat iste voluptates quo dolorum modi nesciunt fuga id dicta.",
        img:"https://images.pexels.com/photos/13044799/pexels-photo-13044799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:4,
        title:"Project 4",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illo illum quis accusantium animi doloribus temporibus, voluptates cupiditate. Esse ipsa placeat iste voluptates quo dolorum modi nesciunt fuga id dicta.",
        img:"https://images.pexels.com/photos/18449266/pexels-photo-18449266/free-photo-of-bell-tower-of-saint-nikolas-church-over-adriatic-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
]


const Single =({item})=>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref ,
        //  offset:["start start","end start"]
        })
   

    const y  = useTransform(scrollYProgress , [0,1],[-100,100])

   return(
    <section >
       <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img}  alt="" />
            </div>
      
        <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p >{item.desc}</p>
            <button>See Demo</button>
        </motion.div>
        </div>
        
       </div>
    </section>
   )
}
function Project() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref , offset:["end end","start start"]})

    const scaleX = useSpring(scrollYProgress , {
        stiffness:100,
        damping:30,
        
    })
  return (
    <div className='project' ref={ref}>
        <div className="progress">
            <h1>My Projects</h1>
            <motion.div className="progressBar" style={{scaleX}}>

            </motion.div>
        </div>
      {items.map((item)=> <Single item={item} key={item.id}/>) }
    </div>
  )
}

export default Project

