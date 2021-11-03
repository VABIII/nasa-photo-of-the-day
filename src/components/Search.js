import React, {useState} from "react";
import styled from "styled-components";

const Styled_button = styled.button`
  background-color: transparent;
  color: lightgray;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
  
  
  &:hover {
    font-size: 1.5rem;
    border: 1px lightgray solid;
    border-radius: 10%;
  } 
`

const Styled_input = styled.input`
  color: darkslategrey;  
`
const Styled_form = styled.form`
  padding: 15% 0 5%;
  display: flex;
  align-items: flex-end;
`

export default function Search(props) {
 const {onSubmit, onChange} = props;
    console.log(Styled_input)
    return (
        <div>
            <Styled_form>
                <Styled_button formAction="submit" onClick={onSubmit}>Search:&nbsp;</Styled_button>
                <Styled_input  type="date" onChange={onChange}  />
            </Styled_form>
        </div>
    )


}















































