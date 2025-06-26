import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import InputData from "./components/InputData";
import Buttons from "./components/Buttons";
import { CalculatorContext } from "./store/Calculator-Context";

function App() {
  let [calval, SetCalVal] = useState("");

  return (
    <CalculatorContext.Provider value={{ calval, SetCalVal }}>
      <div className={styles.adjust}>
        <div className={styles.container}>
          <InputData></InputData>
          <Buttons></Buttons>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
