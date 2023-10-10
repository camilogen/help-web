import React from "react" ;
import Nav from "../../Nav" ;
import InfoAbout from "../../InfoAbout";
import Equipo from '../ImagenesPages/equipo.png' ;
import Informacion from '../ImagenesPages/informacion.png' ;
import Rompecabezas from '../ImagenesPages/rompecabezas.png' ;
import Seguridad from '../ImagenesPages/seguridad.png' ;

const About = () => {
  return (
    <div>
      <Nav />
      <div>
          <InfoAbout 
          img={Equipo}
          titulo='asd'
          texto='asdd' />
          <InfoAbout 
          img={Informacion}
          titulo='asd'
          texto='asdd' />
          <InfoAbout 
          img={Rompecabezas}
          titulo='asd'
          texto='asdd' />
          <InfoAbout 
          img={Seguridad}
          titulo='asd'
          texto='asdd' />
       
      </div>
    </div>
  )
}

export default About
