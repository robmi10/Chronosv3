import React,{useContext, useEffect } from 'react'
import { Context } from '../Context/Context';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements'
import { HashLink } from 'react-router-hash-link';

export default function Sidebar2({isOpen, toggle}){

    const { toogle_navbar, setToogle_navbar } = useContext(Context);

    const { toogle_isOpen, setToogle_isOpen } = useContext(Context);

    console.log("isOpen sidebar second one  here!!", isOpen)

    useEffect(() => {
        console.log("isOpen sidebar", isOpen)
    }, [toogle_navbar])

    return (
        <SidebarContainer isOpen= {isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    smooth to="/#about"
                    onClick={toggle}
                    >
                        Om-oss
                    </SidebarLink>

                    <SidebarLink 
                    smooth to="/#services"
                    onClick={toggle}
                    >
                        Vetenskap
                    </SidebarLink>

                    <SidebarLink 
                    smooth to="/#shop"
                    onClick={toggle}
                    >
                        Shop
                    </SidebarLink>

                    <SidebarLink 
                    smooth to="/#faq"
                    onClick={toggle}
                    >
                        FAQ
                    </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute style={{background: "#6C63FF", color: "#fff"}} 
                    smooth to="/#home"
                    onClick={toggle}
                    >Hem</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
            
            
        </SidebarContainer>
    )
}
