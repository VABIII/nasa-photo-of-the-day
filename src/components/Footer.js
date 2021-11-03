import React from "react";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
    color: lightgray;
`

export default function Footer(props) {
    const {data} = props;

    return(
        <Styled_div>
            <p>CopyRight:&nbsp; {data.copyright}&nbsp;&#169;</p>
            <p></p>
            {/*<br/>*/}

            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}

        </Styled_div>

    )

}











































