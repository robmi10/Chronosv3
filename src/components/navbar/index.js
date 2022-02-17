import React, {useContext} from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavItemContainer, NavLinksnew, NavLinks3, NavMenu2,NavMenu2new,
    NavLinks2, NavItem, NavLinks, NavMenu, NavMenunew, NavBtn, NavBtnLink} from './NavbarElements'
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
export const Navbar = ({toggle}) => {
    const { productcart, setProductcart } = useContext(Context);

    const { id_ } = useContext(Context);

    const { SideBarOpen, setSideBarOpen } = useContext(Context);

    const OpenSideBar = () =>{
        setSideBarOpen(true)
    }

    console.log("current page id -->",  id_)

    console.log("current cart length -->", productcart)
    return (
        <>
            <Nav>
            <NavLinks2
                       className='navbarhashlink2'
                       to="home"
                        > 
                        {/* <HomeIcon style={{height: "40px"}}/> */}
                        
                        <img className="navimg" src={chronos}></img>        
            </NavLinks2>

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

                    <NavLogo to="/">
                   
                        <MobileIcon onClick={toggle}> 
                            <FaBars color = "black"/>
                         </MobileIcon>
                        <NavMenunew>

                        <NavLinks2 
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        exact= {true}
                        > 
                        Om-oss
                        </NavLinks2 >

                        <NavLinks
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        exact= {true}
                    > 
                                Vetenskap   
                        </NavLinks>

                        <NavLinks
                        to="shop"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        exact= {true}
                        >      
                            Handla              
                        </NavLinks>

                        </NavMenunew>

                        <NavMenu2new>
                        <NavLinksnew
                        to="faq"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        exact= {true}
                        > 
                                Faq
                        </NavLinksnew>
                        

                        
                        {productcart.total_items > 0 ? 
                        <Links
                        to="/cart"
                    > 
                        <NavBtn > 
                                   
                           
                        <Badge badgeContent={productcart.total_items} color="primary">

                        <ShoppingCartIcon/> 
                        </Badge>
                    
                        </NavBtn>
                        
                        </Links>
                        :
                        <Links
                        to=""
                        >
                        <NavBtn > 
                                                        
                                                
                        <Badge badgeContent={productcart.total_items} color="primary">

                        <ShoppingCartIcon/> 
                        </Badge>

                        </NavBtn>
                        </Links>
                        }
                        


                        </NavMenu2new>
                    </NavLogo>
                </NavbarContainer>
            </Nav>
            
        </>
    )
}
