import React from 'react'
import './project.scss'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'
import { useRef } from 'react'


const items = [
    {
        id:1,
        title:"BLOG",
        desc:"This React project is a user-friendly web application that allows users to upload images and write blogs seamlessly. With an intuitive interface, users can easily create and format their blog posts using a rich text editor, while also uploading images for a more engaging presentation. The platform includes secure user authentication, enabling registered users to manage their content, view real-time previews of their posts, and organize their blogs with tags and categories. Fully responsive, this application ensures a smooth experience across all devices, making it an ideal solution for aspiring bloggers looking to share their stories and experiences online.",
        img:"https://images.pexels.com/photos/28375938/pexels-photo-28375938/free-photo-of-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:2,
        title:"Portfolio",
        desc:"This portfolio project showcases my skills and creativity, built using React, SCSS, and Framer Motion for a dynamic user experience. The application features a fully responsive design that adapts seamlessly to various screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices. Utilizing SCSS allows for modular and maintainable styling, resulting in a clean and modern aesthetic. Framer Motion enhances the interface with smooth animations and transitions, adding an engaging layer of interactivity as users navigate through my projects and experiences. This portfolio not only highlights my work but also reflects my commitment to delivering visually appealing and user-friendly web applications.",
        img:"https://images.pexels.com/photos/28410256/pexels-photo-28410256/free-photo-of-ordu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:3,
        title:"Video_Backend",
        desc:"This project is a backend platform designed to support a video-sharing application similar to YouTube, built using JavaScript, Mongoose, and MongoDB. The application features a robust API that handles user authentication, video uploads, and management of user-generated content. Leveraging Mongoose for object data modeling (ODM) simplifies interactions with the MongoDB database, enabling efficient storage and retrieval of video metadata, user profiles, and comments. The backend supports essential functionalities, including video streaming, search capabilities, and playlist management, ensuring a seamless experience for users. With a focus on scalability and performance, this backend architecture is designed to accommodate a growing user base and handle high volumes of video data, laying the groundwork for a fully-fledged video-sharing platform.",
        img:"https://images.pexels.com/photos/13044799/pexels-photo-13044799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:4,
        title:"Aora",
        desc:"This React Native app provides a platform for users to upload and share AI-generated videos, fostering a vibrant community of content creators. Leveraging Appwrite for backend functionality, the app ensures secure user authentication and efficient management of video uploads. Users can seamlessly upload their creations, with real-time previews and easy categorization. The app features a user-friendly interface that allows users to browse and discover videos uploaded by other creators, complete with options for liking, commenting, and sharing. With a focus on responsiveness and performance, this application creates an engaging environment for users to showcase their AI-generated content while connecting with fellow creators.",
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

