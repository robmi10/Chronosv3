import React, {useEffect} from 'react'
import Footer from '../../Footer'
import { Navbar } from '../../navbar'
import h20 from "../../../images/h20.jpg"
import nature from "../../../images/nature.jpg"
import "./chronos.css"
import { Navbar3 } from '../../navbar/navbar3'
import AOS from "aos";
import "aos/dist/aos.css";
export const Chronos = () => {

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  
  }, [])

  return (
    <>
    <Navbar3/>
    <div className='Chronoscontainerinside'>
     <img className='ChronosIMG' src={h20} data-aos="fade-down" data-aos-delay="100"></img> 
    </div>
    <div className='TextContainer'> 
      <h1 data-aos="flip-right" data-aos-delay="100">
        Chronos
      </h1>
      <p data-aos="flip-left" data-aos-delay="100">
      Ett kolsyrat vatten innehållandes tillskott med ett tydligt syfte, det är vår vision. Existerande
      vitmanidrycker innehåller ofta inte bara vitaminer utan även många andra ämnen såsom
      sötningsmedel. Dessutom tyckte vi inte att det var tydligt vad syftet med kombinationen av
      tillskott i existerande drycker på marknaden var.</p>
      <p data-aos="flip-right" data-aos-delay="300">Därför valde vi att skapa ett vanligt kolsyrat
      vatten innehållandes tillskott med en tydlig anledning. Slutresultatet blev BioWTR, ett kolsyrat
      vatten med niacin (vitamin B3) och NMN (nikotinamidmononukleotid).
      </p>
      <p data-aos="flip-left" data-aos-delay="500">
       Den gemensamma
      nämnaren för niacin och NMN är att båda kan omsättas till NAD + (nikotinamidadeninnukleotid).
      Läs mer om NAD + och vetenskapen bakom BioWTR här.
      BioWTR med niacin och NMN är vår första produkt, men vår vision är att hela tiden hålla oss i
      framkant med nya produkter med tydliga syften baserade på den exponentiellt snabbt växande
      vetenskapen inom nutrition.
      </p>
    </div>
   
    
    <Footer/>
    </>
  )
}
