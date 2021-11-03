import React from "react";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
  color: lightgray;
  padding: 2%;
  display: flex;
  justify-content: space-around;
  transition: color 2s;  
  transition-timing-function: ease-out;
`
const Styled_a = styled.a`
  text-decoration: none;
  color: lightgray;
  
  &:hover {
    color: grey;
    font-size: 1.15rem;
    transition: font-size 1s;
    transition-timing-function: ease-out;
    
  }  
`

export default function Footer(props) {
    const {data} = props;

    return(
        <Styled_div>
            <p>{data.copyright}&nbsp;&#169;</p>
            <Styled_a href={data.hdurl}>Link to HD Image</Styled_a>
        </Styled_div>

    )
}











































