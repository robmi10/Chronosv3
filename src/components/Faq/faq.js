import React, {useEffect} from 'react'
import "./faq.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
      <div id="faq">
            <div className='FaqContainer'>
                <div className='FaqConatinerText'>
                    <h1>FAQ</h1>
                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Vad är NMN och niacin?
                    </h3>
                    <p data-aos="flip-right" data-aos-delay="300">
                        Både NMN och niacin är naturligt förekommande ämnen som kan omsättas till NAD + i kroppen.
                        Läs mer om detta här.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Kan jag få i mig NMN via kosten?
                    </h3>
                    <p data-aos="flip-left" data-aos-delay="300">
                    Ja, NMN finns i nästan allt vi äter och nivåerna är höga i grönsaker och frukter såsom broccoli,
                    avokado och tomat. Dock är de naturligt förekommande nivåerna runt 10mg NMN/kg föda,
                    d.v.s. du behöver äta ca 25 Kg broccoli för att få i dig lika mycket NMN som i en BioWTR-
                    flaska.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Kommer jag leva ett friskare liv om jag dricker 1 flaska BioWTR om dagen?
                    </h3>
                    <p data-aos="flip-right" data-aos-delay="300">
                    Vi kan inte säga hur BioWTR kommer påverka dig. Vi kan endast hänvisa till de vetenskapliga
                    studier som gjorts och förmedla vad som de har visat. Läs mer om vetenskapen bakom BioWTR
                    här.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Kan BioWTR höja mina idrottsprestationer
                    </h3>
                    <p data-aos="flip-left" data-aos-delay="300">
                    Vi kan inte säga hur BioWTR kommer påverka dig. Vi kan endast hänvisa till den vetenskapliga
                    litteraturen där det finns en randomiserad kontroll studie där NMN-tillskott visats höja
                    syreupptagningsförmågan hos friska individer som löptränar. Läs mer om vetenskapen bakom
                    BioWTR här.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Är NMN ett stabilt ämne?
                    </h3>
                    <p data-aos="flip-right" data-aos-delay="300">
                    NMN är stabilt i rumstemperatur i pulverform. Vi vet dock inte hur stabilt NMN är i vatten men
                    vi planerar att göra tester på BioWTR i samband med att vi växer som bolag.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Kan det vara farligt att dricka för mycket BioWTR
                    </h3>
                    <p data-aos="flip-left" data-aos-delay="300">
                    I kliniska studier som gjorts har 250–1600 mg/dag använts vilket motsvarar ca 1–6 flaskor
                    BioWTR. Intag inom detta spann har inte visats orsaka bieffekter. Vi vet dock inte om högre
                    doser är säkert att förtära. Niacin kan däremot orsaka hudrodnad vid intag mellan 30-1000 mg.
                    mer info om niacin finns här (Niacin (livsmedelsverket.se). Vi rekommenderar därför konsumenten
                    att vara uppmärksam för bieffekter vid intag av mer än 1 flaska om dagen.
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Varför innehåller BioWTR både NMN och niacin
                    </h3>
                    <p  data-aos="flip-right" data-aos-delay="300">
                    Det finns flera ämnen som i kroppen omsätts till NAD + . Genom att berika med flera
                    komponenter ökar vi sannolikheten till att höja nivåerna av NAD + .
                    </p>

                    <h3 data-aos="fade-right" data-aos-delay="200">
                    Varför sjunker NAD + -nivåerna i kroppen när vi åldras?
                    </h3>
                    <p data-aos="flip-left" data-aos-delay="300">
                    Det vet vi inte riktigt ännu men i en studie (NAD+ flux is maintained in aged mice despite lower
                    tissue concentrations - ScienceDirect) presenteras resultat som föreslår att det är kroppens
                    användning av NAD + som ökar och inte själva produktionen. Detta kan bero på en sekundär
                    effekt som orsakas av andra processer som kräver NAD + såsom reparation av ett skadat DNA.
                    </p>


                </div>
            </div>
    </div>
  )
}

export default Faq