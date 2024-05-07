import React from "react";
import Buttons from "./ButtonCount";
import imgWomen from "../../img/menina.png";
import "./style.css";

export default function Women({ count, setCount }) {
  return (
    <div className="counter">
      <div className="div">
        <h3>Mulheres</h3>
        <img className="imgPerson" src={imgWomen} alt="Women" />
        <div>
          <Buttons count={count} setCount={setCount} />
        </div>
      </div>
    </div>
  );
}
