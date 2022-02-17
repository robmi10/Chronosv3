import React from 'react'
import {FootContainer, FootWrapper, FootLinksItem, FootLink, 
    FootLinksContainer, 
    FootLinksWrapper, 
    FootLinksTitle, Social, SocialIcon, SocialWrap, SocialLogo, DomainRight,SocialLink} from "./FooterElement"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, Falinkeding } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <FootContainer id ="footer">
            <FootWrapper> 
                <FootLinksContainer>
                    <FootLinksWrapper>
                        <FootLinksItem>
                            <FootLinksTitle> Om oss</FootLinksTitle>
                                <FootLink to =""> Email</FootLink>
                                <FootLink to =""> Chronos</FootLink>
                                <FootLink to =""> Vetenskap</FootLink>
                                <FootLink to =""> FAQ</FootLink>
                        </FootLinksItem>

                        <FootLinksItem>
                            <FootLinksTitle> Social Media</FootLinksTitle>
                                <FootLink to =""> Twitter</FootLink>
                                <FootLink to =""> Linkedin</FootLink>
                                <FootLink to =""> Facebook</FootLink>
                                <FootLink to =""> Instagram</FootLink>
                        </FootLinksItem>
                    </FootLinksWrapper>

                   
                </FootLinksContainer>
                <Social>
                        <SocialWrap>
                            <SocialLogo to="">
                                Chronos Nutrition
                            </SocialLogo>

                            <DomainRight>Chronos © {new Date().getFullYear()} All rights reserved.</DomainRight>

                            <SocialIcon>
                                <SocialLink href="/" target="_blank"
                                aria-label="Facebook"
                                >
                                    <FaFacebook/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Twitter"
                                >
                                    <FaTwitter/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Youtube"
                                >
                                    <FaYoutube/>
                                </SocialLink>

                                <SocialLink href="/" target="_blank"
                                aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </SocialLink>
                            </SocialIcon>
                        </SocialWrap>
                    </Social>
            </FootWrapper>

                    
        </FootContainer> 
        </>
    )
}

export default Footer
