import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  border-top: 2px solid #D3D3D3;
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  height: 60px;
  width: 80%;
  font-size: 1.2em;
  :focus{
    outline: none;
  }
`;

export const SendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;