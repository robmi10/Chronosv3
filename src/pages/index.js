import React, {useState, useContext, useEffect} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { Navbar } from '../components/navbar/index';
import Sidebar from '../components/SideBar';
import { dataobject1, dataobject2, dataobject3, dataobject4} from '../components/InfoSection/data';
import Footer from '../components/Footer';
import Shop from '../components/Shop/Shop';
import Data from '../components/Data';
import { Context } from '../components/Context/Context';
import Faq from '../components/Faq/faq';
import Sidebar2 from '../components/SideBar2';

export default function Home() {
    const [isOpen, setisOpen] = useState(false)

    const [isOpen2, setisOpen2] = useState(false)
    
    const { toogle_navbar, setToogle_navbar } = useContext(Context);

    useEffect(() => {
        console.log("toogle_navbar inside all pages -->", toogle_navbar)
    }, [toogle_navbar])
    
    console.log("toogle_navbar inside home ->", toogle_navbar)

    const toggle = () =>{
        setisOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        
        <Sidebar2 isOpen = {toogle_navbar} toggle = {toogle_navbar}/>

        {/* { toogle_navbar ? <Sidebar2 isOpen = {toogle_navbar} /> : console.log("toogle navbar error!")} */}
        <Navbar toggle = {toggle}/>
        <HeroSection ></HeroSection>
        <InfoSection {...dataobject1}/>
        <InfoSection {...dataobject2}/>
        <Shop {...dataobject3}/>
        <Faq />
        <Footer/>
        </>
    )
}

