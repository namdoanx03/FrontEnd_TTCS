import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
}
const slideImages = [
    {
        url: 'https://bacsiducniengrang.com/wp-content/uploads/2022/09/banner-pc-ito5d.jpg',
        // caption: 'Slide 1'
    },
    {
        url: 'https://bacsiducniengrang.com/wp-content/uploads/2022/09/bs-duc-black-diamond.jpg',
        // caption: 'Slide 2'
    },
    {
        url: 'https://bacsiducniengrang.com/wp-content/uploads/2021/03/nht01846.jpg',
        // caption: 'Slide 3'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}


export default Slideshow