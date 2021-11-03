import React from "react";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
  color: lightgray;
    
`

const Styled_button = styled.button`
  background-color: transparent;
  color: lightgray;
  border: none;
  font-weight: bold;
  
`


export default function ToggledInfo(props) {
    const {data, toggleInfo} = props;

    return(
        <Styled_div>
            <h3>
                <Styled_button onClick={toggleInfo}>{data.title}</Styled_button>
            </h3>
            <p>{data.explanation}</p>
        </Styled_div>
    )

}














































