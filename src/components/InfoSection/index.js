import React, {useContext, useEffect}from 'react'
import {Button} from "../ButtonElements"
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper,
     TopLine, Heading, 
     BtnWrap, Subtitle, Column1, Column2, ImgWrap, Img} from './InfoElements'
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = ({light, id, imgStart, firstline, lightTxt, 
    headline, darkTxt, description, 
    buttonLabel, imga, 
    alt, primary, dark, dark2, url}) => {
        const history = useNavigate();
        const { id_, setId } = useContext(Context);

        useEffect(() => {
            AOS.init();
            setId(id)
        }, [id_])
    return (
        <>
            <InfoContainer light ={light} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart = {imgStart}>
                        <Column1 data-aos="fade-right" data-aos-delay="200">
                            <TextWrapper>
                                <TopLine>
                                    {firstline}
                                </TopLine>
                                <Heading lightTxt = {!lightTxt}>
                                {headline}
                                </Heading>
                                <Subtitle  darkTxt = {darkTxt}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button primary = {primary} onClick={() =>{history(url)}}>Läs mer</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={imga} data-aos="fade-up" data-aos-delay="200"/> 
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
