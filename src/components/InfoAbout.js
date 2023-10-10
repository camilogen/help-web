import React from "react";

function InfoAbout (props) {
    return (
        <div className="container-img">
          <div>
            <img  className="help-img"
                  src={props.img} />
            </div>
          <div>
            <p>{props.titulo}</p>
            <p>{props.texto}</p>
          </div>

        </div>
    )
}

export default InfoAbout;