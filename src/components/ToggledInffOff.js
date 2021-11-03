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



export default function ToggledInfOff(props) {
    const {data} = props;

    return (
        <Styled_div>
            {/*<h3>{data.title}</h3>*/}
        </Styled_div>
    )

}














































