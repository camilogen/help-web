import React from "react";
import '../sheets-styles/InfoAbout.css';

function InfoAbout (props) {
    return (
      <div className="container-infoabout">
        <div>
          <img className="help-img" src={props.img} alt="img" />
        </div>
        <div>
          <p className="title-">{props.titulo}</p>
          <p className="text-">{props.texto}</p>
        </div>
      </div>
    )
}

export default InfoAbout;