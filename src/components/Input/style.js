import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  

  color: rgb(250, 250, 250);

  input {
    width: 100%;
    height: 90px;
    background-color: rgb(0,0 ,0 );
    border: none;
    padding: 0 10px;
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    color: rgb(250, 250, 250);
    text-align: right;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;

    &:focus {
      border: none;
      outline: none;  
      box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);
    }
  }
`