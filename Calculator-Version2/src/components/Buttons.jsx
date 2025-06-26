import { useContext } from "react";
import styles from "./Buttons.module.css";
import { CalculatorContext } from "../store/Calculator-Context";
const Buttons = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const { SetCalVal, calval } = useContext(CalculatorContext);
  const handleOnClick = (buttonName) => {
    if (buttonName === "C") {
      SetCalVal("");
    } else if (buttonName === "=") {
      let result = eval(calval);
      SetCalVal(result);
    } else {
      let newDisplayValue = calval + buttonName;
      SetCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => handleOnClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
