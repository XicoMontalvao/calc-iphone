import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0;
  width: ${props => (props.label ==="0" ? '140px' : '70px')};
  height: 70px;
  border-radius: ${props => (props.label === "0" ? '38px 38px' : '50%')};
  background-color: ${props =>
    props.label === "AC" || props.label === "+/-" || props.label === "%"
      ? "rgb(148, 148, 148)"
      : props.label === "÷" || props.label === "X" || props.label === "-" || props.label === "+" || props.label === "="
      ? "rgb(255, 165, 0)"
  
      : "rgb(38, 38, 38)"};

  font-size: 28px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  color: rgb(252, 252, 252);

  &:hover {
    background-color: ${props =>
    props.label === "AC" || props.label === "+/-" || props.label === "%"
      ? "rgb(208, 208, 208)"
      : props.label === "÷" || props.label === "X" || props.label === "-" || props.label === "+" || props.label === "="
      ? "rgb(249, 187, 123)"
  
      : "rgb(96, 96, 96)"};
  }



  &:active {
    background-color: ${props =>
     props.label === "÷" || props.label === "X" || props.label === "-" || props.label === "+" || props.label === "="
      ? "rgb(255, 255, 255)": "rgb(96, 96, 96)"};
  }
`;
