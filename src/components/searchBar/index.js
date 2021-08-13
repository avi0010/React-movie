import React, {useState, useEffect, useRef} from "react";
import searchIcon from "../../images/search-icon.svg"
import {Wrapper, Content} from "./searchBarStyles";

const SearchBar = ({searchTerm}) => {
    const [state, setState] = useState("")

    useEffect(()=>{
        const timer = setTimeout(() => {
            searchTerm(state)
        }, 500)
        return () => clearTimeout(timer)
    }, [searchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-svg" />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
