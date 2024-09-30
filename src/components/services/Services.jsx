import React, { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

function Services() {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className='services'
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={variants}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow 
                    <br /> and move forward 
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/images/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Responsive Web Design</h2>
                    <p>Creating visually appealing and user-friendly designs that adapt to various screen sizes and devices.</p>
                    <div className="moreInfo">Learn more about my approach to responsive design!</div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>JavaScript Development</h2>
                    <p>Implementing interactive features and functionalities using modern JavaScript frameworks and libraries.</p>
                    <div className="moreInfo">Explore my JavaScript projects!</div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Performance Optimization</h2>
                    <p>Enhancing website speed and performance for better user experience and SEO rankings.</p>
                    <div className="moreInfo">Check out my performance optimization strategies!</div>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>UI/UX Design</h2>
                    <p>Designing intuitive interfaces that improve user engagement and satisfaction.</p>
                    <div className="moreInfo">See my UI/UX design portfolio!</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Services;

