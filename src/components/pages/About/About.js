import React from "react" ;
import Nav from "../../Nav" ;
import InfoAbout from "../../InfoAbout";
import Equipo from "../../../assets/images/equipo.png"
import Informacion from "../../../assets/images/informacion.png"
import Rompecabezas from "../../../assets/images/rompecabezas.png"
import Seguridad from "../../../assets/images/seguridad.png"

const About = () => {
  return (
    <div>
      <Nav />
      <div>
        <InfoAbout img={Equipo} titulo="asd" texto="asdd" />
        <InfoAbout img={Informacion} titulo="asd" texto="asdd" />
        <InfoAbout img={Rompecabezas} titulo="asd" texto="asdd" />
        <InfoAbout img={Seguridad} titulo="asd" texto="asdd" />
      </div>
    </div>
  )
}

export default About
