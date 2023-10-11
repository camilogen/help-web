import React from "react" ;
import Nav from "../../Nav" ;
import InfoAbout from "../../InfoAbout";
import Equipo from "../../../assets/images/equipo.png"
import Informacion from "../../../assets/images/informacion.png"
import Rompecabezas from "../../../assets/images/rompecabezas.png"
import Seguridad from "../../../assets/images/seguridad.png"
import '../About/About.css'

const About = () => {
  return (
    <div>
      <Nav />
      <div className="infoabout-layout">
        <InfoAbout img={Equipo} titulo="¿Dudas sobre el trabajo en equipo?" texto="En nuestro blog te brindaremos toda la informacion que necesitas para poder abordar un proyecto con un equipo de trabajo." />
        <InfoAbout img={Informacion} titulo="¿Necesitas data?" texto="Gracias a nuestro gran equipo de trabajo, hoy, podemos llegar a los clientes con las ultimas actualizaciones en cuanto a informacion del mercado." />
        <InfoAbout img={Rompecabezas} titulo="¿Dificultad para saber encarar cuestiones?" texto="Tranquilo! No siempre la solucion es tirar todo por la borda. Sigue insistiendo en eso que te apasiona. Nosotros podemos darte una mano!" />
        <InfoAbout img={Seguridad} titulo="¿Miedo de guardar tus datos en dispositivos electronicos?" texto="Nuestro equipo cuenta con los mejores ingenieros de seguridad del mercado, encargados de proteger y ocultar informaciones relevantes para el usuario." />
      </div>
    </div>
  )
}

export default About
