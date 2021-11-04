import React from "react";
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
  color: lightgray;  
  background-color: darkslategrey;  
`

const Styled_form = styled.form`
  padding: 15% 0 5%;
`

export default function Search(props) {
 const {initialValues, onSubmit, onChange} = props;

    return (
        <div>
            <Styled_form>
                <Styled_button type="primary" formAction="submit" onClick={onSubmit}>Search:&nbsp;</Styled_button>
                <Styled_input  type="date" max={initialValues} onChange={onChange}  />
            </Styled_form>
        </div>
    )
}















































