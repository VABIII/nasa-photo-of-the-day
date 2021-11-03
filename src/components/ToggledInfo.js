import React from "react";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
  color: lightgray;
    
`

const Styled_div_2 = styled.div`
  color: lightgray;
  font-weight: bold;
  
  
  
`


export default function ToggledInfo(props) {
    const {data, toggleInfo} = props;

    return(
        <Styled_div>
            <h3>
                <Styled_div_2 onClick={toggleInfo}>{data.title}</Styled_div_2>
            </h3>
            <p>{data.explanation}</p>
        </Styled_div>
    )

}














































