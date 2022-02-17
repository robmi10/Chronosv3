import React, {useContext, useEffect} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks3R,
    NavItemContainer, NavLinksnew, NavLinks3,NavLinksnewR, NavLinksR,
    NavLinks2, NavItem, NavLinks, NavMenu,NavMenu2, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, animateScroll as scroll } from "react-scroll";
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from 'react-router-dom'
import "./navbar.css"
import chronos from "../../images/chronos.svg"
import { commerce } from '../Commerce/commerce';
import { Context } from '../Context/Context';
import Badge from '@mui/material/Badge';
import { Link as Links } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Sidebar2 from '../SideBar2';

export const Navbar3 = ({toggle}) => {
    const { productcart, setProductcart } = useContext(Context);

    const { toogle_navbar, setToogle_navbar } = useContext(Context);

    const { id_ } = useContext(Context);

    const { SideBarOpen, setSideBarOpen } = useContext(Context);

    const {delete_cart, setDelete_cart} = useContext(Context);

    const OpenSideBar = () =>{
        setSideBarOpen(true)
    }

    useEffect(() => {
    }, [toogle_navbar, delete_cart])
    

    console.log("current page id -->",  id_)

    console.log("current cart length -->", productcart)
    return (
        <>
        
            <Nav>
            <HashLink smooth to="/#" className='navbarhashlink2'>
                        {/* <HomeIcon style={{height: "40px"}}/> */}
                        
                        <img className="navimg" src={chronos}></img>        
            </HashLink>

                <NavbarContainer>
                    <div className="shopppingdiv"> 
                            <Links
                                    to="cart"
                                >     
                                <Badge badgeContent={productcart.total_items} color="primary">

                                <ShoppingCartIcon/> 
                                </Badge>
                            
                        </Links>
                    </div>

                    <MobileIcon onClick={toggle}> 
                        <FaBars color = "black"/>
                    </MobileIcon>

                    <NavLogo to="/">
                   
                        
                        <NavMenu>

                        <HashLink smooth to="/#about" className='navbarhashlink3'>
                        Om-oss
                        </HashLink >

                        <HashLink smooth to="/#services" className='navbarhashlink'>
                                Vetenskap   
                        </HashLink>

                        <HashLink smooth to="/#shop" className='navbarhashlink'>
                            Handla                 
                        </HashLink>

                        </NavMenu>

                        <NavMenu2>
                        <HashLink smooth to="/#faq" className='navbarhashlinknew'>
                                Faq
                        </HashLink>

                        <Links
                                    to="/cart"
                                > 
                        <NavBtn > 
                                <Badge badgeContent={productcart.total_items} color="primary">

                                <ShoppingCartIcon/> 
                                </Badge>
                            
                        </NavBtn>

                        </Links>
                        </NavMenu2>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
            
            
        </>
    )
}
