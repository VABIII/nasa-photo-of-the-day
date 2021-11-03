import React, {useState} from "react";
import ToggledInfo from "./ToggledInfo";
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

export default function Photo_Info(props) {
    const [isToggled, setIsToggled] = useState(true);
    const {data} = props;

    const toggleInfo = () => {
        !isToggled ? setIsToggled(true) : setIsToggled(false)
    };

    return(
        <Styled_div>
            {
               isToggled ? <Styled_button onClick={toggleInfo}>{data.title}</Styled_button> :
                   <ToggledInfo data={data} toggleInfo={toggleInfo} />
            }
        </Styled_div>
    )
}














































