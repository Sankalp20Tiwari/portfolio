import React from 'react';
import './services.scss';

function Services() {
    return (
        <div className='services'>
            <div className="textContainer">
                <p className="mobile-hidden">I focus on helping your brand grow 
                    <br /> and move forward 
                </p>
                <hr />
            </div>
            <div className="titleContainer">
                <div className="title">
                    <img src="/images/people.webp" alt="" />
                    <h1>
                        <b>Unique</b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                </div>
            </div>
            <div className="listContainer">
                <div className="box">
                    <h2>Responsive Web Design</h2>
                    <p>Creating visually appealing and user-friendly designs that adapt to various screen sizes and devices.</p>
                    <div className="moreInfo">Learn more about my approach to responsive design!</div>
                </div>
                <div className="box">
                    <h2>JavaScript Development</h2>
                    <p>Implementing interactive features and functionalities using modern JavaScript frameworks and libraries.</p>
                    <div className="moreInfo">Explore my JavaScript projects!</div>
                </div>
                <div className="box">
                    <h2>Performance Optimization</h2>
                    <p>Enhancing website speed and performance for better user experience and SEO rankings.</p>
                    <div className="moreInfo">Check out my performance optimization strategies!</div>
                </div>
                <div className="box">
                    <h2>UI/UX Design</h2>
                    <p>Designing intuitive interfaces that improve user engagement and satisfaction.</p>
                    <div className="moreInfo">See my UI/UX design portfolio!</div>
                </div>
            </div>
        </div>
    );
}

export default Services;






