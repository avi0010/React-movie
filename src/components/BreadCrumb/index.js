import React from "react";
//Router
import {Link} from "react-router-dom";
// Components
import {Wrapper, Content} from "./BreadCrumb.styles";

const BreadCrumb = (props) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{props.movieTitle}</span>
        </Content>
    </Wrapper>
)

export default BreadCrumb;