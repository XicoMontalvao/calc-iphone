import { Container, Content, Row } from "./components/styles";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";

export const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operator, setOperator] = useState(null);
  const [resetInput, setResetInput] = useState(false);

  const handleAddNumber = (number) => {
    if (resetInput) {
      setCurrentNumber(number);
      setResetInput(false);
      return;
    }

    if (number === "=") {
      handleCalculate();
      return;
    }

    if (number === "+" || number === "-" || number === "X" || number === "÷") {
      handleOperation(number);
      return;
    }

    if (number === "+/-") {
      setCurrentNumber((prev) =>
        parseFloat(prev) >= 0 ? "-" + prev : prev.slice(1)
      );
      return;
    }

    if (number === "%") {
      handlePercent();
      return;
    }

    // Tratar a entrada da vírgula de maneira especial para números decimais
    if (number === ",") {
      // Se o número atual já contém uma vírgula, não faça nada
      if (!currentNumber.includes(".")) {
        setCurrentNumber((prev) => prev + ".");
      }
      return;
    }

    setCurrentNumber((prev) => prev === "0" ? number : prev + number);
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperator(null);
    setResetInput(false);
  };

  const handleOperation = (op) => {
    if (operator) {
      handleCalculate();
    }
    setFirstNumber(currentNumber);
    setOperator(op);
    setResetInput(true);
  };

  const handleCalculate = () => {
    let num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setCurrentNumber("Error");
      setFirstNumber("0");
      setOperator(null);
      setResetInput(true);
      return;
    }

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "X":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
      default:
        return;
    }

    const formattedResult = result.toFixed(2); // Limita para no máximo 4 casas decimais
    setCurrentNumber(formattedResult);
    setFirstNumber(formattedResult);
    setOperator(null);
    setResetInput(true);
  };

  const handlePercent = () => {
    if (operator === "X") {
      const percentage = parseFloat(firstNumber) * (parseFloat(currentNumber) / 100);
      const formattedPercentage = (percentage).toFixed(4); // Limita para no máximo 4 casas decimais
      setCurrentNumber(formattedPercentage);
    } else {
      const percentage = (parseFloat(currentNumber) / 100);
      const formattedPercentage = (parseFloat(firstNumber) * percentage).toFixed(4); // Limita para no máximo 4 casas decimais
      setCurrentNumber(formattedPercentage);
    }
    setResetInput(true);
  };
  

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"AC"} onClick={handleClear} />
          <Button label={"+/-"} onClick={() => handleAddNumber("+/-")} />
          <Button label={"%"} onClick={() => handleAddNumber("%")} />
          <Button label={"÷"} onClick={() => handleOperation("÷")} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber("7")} />
          <Button label={"8"} onClick={() => handleAddNumber("8")} />
          <Button label={"9"} onClick={() => handleAddNumber("9")} />
          <Button label={"X"} onClick={() => handleOperation("X")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber("4")} />
          <Button label={"5"} onClick={() => handleAddNumber("5")} />
          <Button label={"6"} onClick={() => handleAddNumber("6")} />
          <Button label={"-"} onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber("1")} />
          <Button label={"2"} onClick={() => handleAddNumber("2")} />
          <Button label={"3"} onClick={() => handleAddNumber("3")} />
          <Button label={"+"} onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber("0")} />
          <Button label={","} onClick={() => handleAddNumber(",")} />
          <Button label={"="} onClick={() => handleCalculate()} />
        </Row>
      </Content>
    </Container>
  );
};
