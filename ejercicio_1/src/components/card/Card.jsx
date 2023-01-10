import React from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import "./Card.css"

function Card(){
    return(
        <div className="card">
            <TextBox/>
            <Button/>
        </div>
    )
}

export default Card