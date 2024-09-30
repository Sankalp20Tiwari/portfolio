import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        opacity: 0,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

function Hero() {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SANKALP TIWARI</motion.h2>
                    <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
                    <motion.p variants={textVariants} className="description">
                        Crafting interactive web experiences with passion and precision.
                    </motion.p>
                </motion.div>
                <motion.div className="skillsContainer" variants={textVariants} initial="initial" animate="animate">
                    {/* <div className="skill">
                        <img src="/images/html5.png" alt="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="skill">
                        <img src="/images/css3.png" alt="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="skill">
                        <img src="/images/javascript.png" alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src="/images/react.png" alt="React" />
                        <span>React</span>
                    </div> */}
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" initial="initial" animate="animate" variants={sliderVariants}>
                Developer  Designer  Programmer
            </motion.div>
        </div>
    );
}

export default Hero;

