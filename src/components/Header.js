import React from "react";
import Search from "./Search";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
  color: lightgray;
  display: flex;
  justify-content: center ;
    
`
const Styled_h1 = styled.h1`

`
const Styled_div_2 = styled.div`
  background-color: darkslategrey;
  color: lightgray;
  display: flex;
  justify-content: center ;
`


export default function Header(props) {
    const {onSubmit, onChange, data} = props;

    return(
        <>
        <Styled_div>
            <Search onSubmit={onSubmit} onChange={onChange} />
        </Styled_div>
        <Styled_div_2>
            <Styled_h1>{data.date}</Styled_h1>
        </Styled_div_2>
        </>
    )

}
















































