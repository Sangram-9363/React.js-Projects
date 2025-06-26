import { useContext } from "react";
import styles from "./InputData.module.css";
import { CalculatorContext } from "../store/Calculator-Context";
const InputData = ({ displayValue }) => {
  const { calval } = useContext(CalculatorContext);
  return (
    <input className={styles.display} type="text" value={calval} readOnly />
  );
};
export default InputData;
