import React, {useState} from "react";
import styled from "styled-components";

const Styled_button = styled.button`
  background-color: transparent;
  color: lightgray;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
  border: 1px red solid;
`

const Styled_input = styled.input`
  color: darkslategrey;
  border: 1px solid red;
`
const Styled_form = styled.form`
  border: 1px solid red;
  //display: flex;
`


export default function Search(props) {
 const {onSubmit, onChange} = props;
    console.log(Styled_input)
    return (
        <div>
            <Styled_form>
                <Styled_input  type="date" onChange={onChange}  />
                <Styled_button formAction="submit" onClick={onSubmit}>Search</Styled_button>
            </Styled_form>
        </div>
    )


}















































