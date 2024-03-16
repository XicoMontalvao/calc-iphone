// No arquivo Button.js

import { ButtonContainer } from "./styles";

export const Button = ({ label, onClick }) => {
  // console.log(label);
  return (
    <ButtonContainer label={label} onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

 