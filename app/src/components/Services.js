import React, { useEffect, useState, useRef } from "react";
import { TweenLite, Power3 } from "gsap";
import image1 from "../images/Home.png";
import image2 from "../images/Doctot List.png";
import image3 from "../images/Service.png";
import "../css/devices.css";
import "../css/_services.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const testimonials = [`${image1}`, `${image2}`, `${image3}`];

let imageWidth = -1;
if (window.innerHeight < 800) {
  imageWidth = 337;
}
else {
  imageWidth = 337;
}

const Services = () => {

    const phoneSection = useRef(null);

    const word1 = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);
    const wordSection = useRef(null);

    const [state, setState] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false
    });


    const [word2Called, setW2C] = useState(false);
    const [word3Called, setW3C] = useState(false);


    let imageList = useRef(null);

    //Image transition
    const slideLeft = (index, duration, multiplied = 1) => {
        if (imageList != null) {
            TweenLite.to(imageList.children[index], duration, {
                x: -imageWidth * multiplied,
                ease: Power3.easeOut
                });
        }
    };

    const slideRight = (index, duration, multiplied = 1) => {
        if (imageList != null) {
            TweenLite.to(imageList.children[index], duration, {
                x: imageWidth * multiplied,
                ease: Power3.easeOut
                });
        }
    };

    const scale = (index, duration) => {
        if (imageList != null) {
            TweenLite.from(imageList.children[index], duration, {
                scale: 1.2,
                ease: Power3.easeOut
                });
        }
    };

    const nextSlide = (num) => {

        if (imageList != null) {
            console.log(imageList.children);
            let vv = imageList.children;
            if (vv[0].classList.contains("active")) {
            setState({ isActive1: false, isActive2: true });
            //Image transition
            slideLeft(0, 1);
            slideLeft(1, 1);
            scale(1, 1);
            slideLeft(2, 1);
            slideLeft(2, 0);
            } else if (imageList.children[1].classList.contains("active")) {
            setState({ isActive2: false, isActive3: true });
            //Image transition
            slideRight(0, 1);
            slideLeft(1, 1, 2);
            slideLeft(2, 1, 2);
            scale(2, 1);
            } else if (imageList.children[2].classList.contains("active")) {
            setState({ isActive1: true, isActive3: false });
            //Image transition
            slideLeft(2, 1, 3);
            slideLeft(0, 1, 0);
            slideLeft(1, 0, 0);
            scale(0, 1);
            }

            if (num === 2) {
                setW2C(true);
            }
            else {
                setW3C(true);
            }

            
        }
    };
  
    useEffect(() => {

        gsap.to(phoneSection.current, {
            scrollTrigger: {
                trigger: phoneSection.current,
                pin: true,
                scrub: true
            }
        });

        if (word2Called === false) {
            ScrollTrigger.create({
                trigger: word2.current,
                start: 'top bottom',
                end: 'top top',
                endTrigger: 'word2.current',
                onEnter: () => {nextSlide(2)},
                once: true,
            });
        }

        if (word3Called === false) {
            ScrollTrigger.create({
                trigger: word3.current,
                start: 'top bottom',
                end: 'top top',
                endTrigger: 'word3.current',
                onEnter: () => {nextSlide(3)},
                once: true,
            });
        }

    });


    return (
            <>

            <div className="services-body" >

                <div className="services-title">Our Services</div>


                <div className="services-container">


                    <div className="phone-container" ref={phoneSection}>
                        
                        <div className="image-slider-phone marvel-device iphone-x">
                            <div className="notch">
                                <div className="camera"></div>
                                <div className="speaker"></div>
                            </div>
                            <div className="top-bar"></div>
                            <div className="sleep"></div>
                            <div className="bottom-bar"></div>
                            <div className="volume"></div>
                            <div className="overflow">
                                <div className="shadow shadow--tr"></div>
                                <div className="shadow shadow--tl"></div>
                                <div className="shadow shadow--br"></div>
                                <div className="shadow shadow--bl"></div>
                            </div>
                            <div className="inner-shadow"></div>
                            <div className="screen">
                                <div className="inner">
                                        <div className="t-image">
                                            <ul ref={el => (imageList = el)}>
                                                <li className={state.isActive1 ? "active" : ""}>
                                                    <img src={testimonials[0]} alt={testimonials[0].name} />
                                                </li>
                                                <li className={state.isActive2 ? "active" : ""}>
                                                    <img src={testimonials[1]} alt={testimonials[0].name} />
                                                </li>
                                                <li className={state.isActive3 ? "active" : ""}>
                                                    <img src={testimonials[2]} alt={testimonials[0].name} />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </div>

                    <div className="words-container">
                        <div className="words" ref={wordSection}>
                            <div className="caption" ref={word1}>
                                <h1>Meet Dava</h1>
                                <h2>Dava connects you with doctors, health news, and keeps track of all your health needs</h2>
                            </div>

                            <div id="word2" className="caption" ref={word2}>
                                <h1>Talk with Doctors from Anywhere</h1>
                                <h2>Dava only hosts the highest rated medical professionals</h2>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="words-2">
                    <div className="caption" ref={word3}>
                        <h1>Get the Best Care</h1>
                        <h2>Find a doctor near you today</h2>
                    </div>
                </div>

                <div className="spacer" />



            </div>
        </>
    );
};

export default Services;
