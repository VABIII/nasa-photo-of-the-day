import React, {useState} from "react";
import ToggledInfo from "./ToggledInfo";
import styled from "styled-components";

const Styled_div = styled.div`
  background-color: darkslategrey;
  color: lightgray;
  font-size: 1.5rem;
  padding: 1% 0 2.5%;
`

const Styled_div_2 = styled.div`
  background-color: transparent;
  color: lightgray;
  border: none;
  font-weight: bold;
  text-decoration: underline;
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
               isToggled ? <Styled_div_2 onClick={toggleInfo}>{data.title}</Styled_div_2> :
                   <ToggledInfo data={data} toggleInfo={toggleInfo} />
            }
        </Styled_div>
    )
}














































