import React from "react"
import {Link} from "react-router-dom"
import {Img} from "./thumbStyles"

const Thumb = props => (
    <div>
        {props.cliclable ? (
            <Link to={`/${props.movieId}`}>
                <Img src={props.image} alt="Movie Image" expand={true}/>
            </Link>
        ):(
            <Img src={props.image} alt="Movie"/>
        )}
    </div>
);

export default Thumb;