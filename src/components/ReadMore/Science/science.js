import React, {useEffect} from 'react'
import Footer from '../../Footer'
import { Navbar } from '../../navbar'
import vetenskap from "../../../images/vetenskap.jpeg"
import nature from "../../../images/nature.jpg"
import "./science.css"
import { Navbar3 } from '../../navbar/navbar3'
import AOS from "aos";
import "aos/dist/aos.css";

export const Science = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  
  }, [])

  return (
    <>
    <Navbar3/>
    <div className='Sciencecontainerinside'>
     <img className='ChronosIMG' src={vetenskap} data-aos="fade-down" data-aos-delay="100"></img> 
    </div>
    <div className='TextContainer'>
      <h1 data-aos="flip-right" data-aos-delay="100">
        Vetenskap
      </h1>
      <p data-aos="flip-left" data-aos-delay="100">
      NAD + (nikotinamidadeninnukleotid) är en viktig faktor för flera funktioner i människokroppen
        såsom ämnesomsättningen och reparation av arvsmassan och har visats sjunka i kroppen när vi
        åldras (1) . Detta forskningsfält är relativt nytt och vi lär oss mer om NAD + roll i åldrande och
        hälsolängden ju mer studier som görs. Nedan följer en sammanfattning av vad vetenskapen
        hittills säger om NAD + samt om hur detta system möjligtvis kan hackas med hjälp av
        kosttillskott.</p>
      <p data-aos="flip-right" data-aos-delay="300">Människokroppen utvinner energi från fett, kolhydrater och protein med hjälp av flera olika
        enzymatiska reaktioner. Denna process kallas för metabolism eller ämnesomsättning. Enzym i
        ämnesomsättningen använder sig bland annat av NAD + för att utvinna energin från
        näringsämnen. Den lagrade energin transporteras till mitokondrierna som kan utvinna denna
        energi via elektrontransportkedjan. NAD + är inte enbart involverad i att reglera enzym i
        ämnesomsättningen utan även enzym som lagar arvsmassan eller styr uttrycket av gener via en
        process som kallas för epigenetik. Den breda rollen NAD + har i människoceller gör att den
        kopplar ihop biologiska funktioner i kroppen såsom ämnesomsättningen och genuttrycket (2) .
      </p>
      <p data-aos="flip-left" data-aos-delay="400">
      Det kronologiska åldrandet är idag omöjligt att bromsa, men kan vi på något sätt höja de
        sjunkande NAD + nivåerna som åldrandet medför? Ett sätt är att äta mindre, något som kallas för
        kalorirestriktion. På så sätt kommer enzymen i ämnesomsättningen inte behöva lika mycket
        NAD + och nivåerna kommer att bibehållas. En alternativ metod är genom tillskott av ämnen som
        omsätts till NAD + i kroppen såsom niacin (vitamin B3) och NMN (nikotinamidmononukleotid).
        NMN tillskott har visats förlänga hälsospannet (friskare liv) hos möss (3, 4) . Färre studier har
        gjorts på människa men de som finns har visat att NMN tillskott (250 mg/dag=1 BioWTR flaska)
        ökar insulinkänsligheten efter 10 veckor hos kvinnor med övervikt och ett förstudie till diabetes
        (5) samt ökar syreupptagningsförmågan i samband med löpträning hos unga friska individer vid
        ett intag av 600-1200 mg/dag (6) (3-4 flaskor BioWTR).
      </p>
    </div>
   
    
    <Footer/>
    </>
  )
}
