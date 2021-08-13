import React from "react"
import {Img} from "./thumbStyles"

const Thumb = props => (
    <div>
        <Img src={props.image} alt="movie-thumb"/>
    </div>
);

export default Thumb;