import React, {useState, useEffect} from 'react'
import Video2 from '../../videos/video3.mp4'
import { HeroContainer, HeroBg, 
    VideoBg, HeroContent, HeroH1, ImgBg,
    HeroP, HeroBtnWrapper, ArrowForwad, HeroBtn, ArrowRight, HeroTextContainer} from './HeroElements'
import {Button} from "../ButtonElements"
import { Link, animateScroll as scroll } from "react-scroll";
import h20 from "../../images/nature.jpg"
import AOS from "aos";
import "aos/dist/aos.css";


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    AOS.init();
    const onHover = () =>{
        setHover(!hover)
    }

    useEffect(() => {
        AOS.init();
    }, [])
    

    return (
        <HeroContainer id="home">
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src ={Video2} type="video/mp4" /> */}
                <ImgBg src={h20} />
            </HeroBg>
            <HeroContent>
                <HeroTextContainer data-aos="fade-down" data-aos-delay="400"> 
                <HeroH1>Chronos Nutrition</HeroH1>
                <HeroP>
                    Hälsosam dricka baserad på vetenskaplig undersökning.
                </HeroP>
                </HeroTextContainer>
                <Link
                        activeClass="active"
                        to="shop"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        onClick={()=>{console.log("button on")}}
                    > 
                    <HeroBtn data-aos="fade-right" data-aos-delay="500" onMouseEnter={onHover} onMouseLeave={onHover}> 
                        Handla{ 
                            hover  ? <ArrowForwad/> : <ArrowRight/>
                        }
                    </HeroBtn>

                </Link>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
