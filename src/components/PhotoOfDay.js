import React from "react";
import styled from "styled-components";

export default function PhotoOfDay(props) {
    const { data } = props;

    const Styled_div = styled.div`
      background-color: darkslategrey;
      color: lightgray;
      max-width: 100%;
      padding: 2% 0 2%;
    `
    const Styled_img = styled.img`
      width: 40%;
    `

    return(
        <Styled_div>
            <Styled_img src={data.url} alt="Nasa Photo of the Day"/>
        </Styled_div>
    )
}
















































