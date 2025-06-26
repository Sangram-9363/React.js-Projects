import { useContext } from "react";
import { toDoItemContext } from "../store/toDo-Item-Store";
import styles from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  const {toDoItems} = useContext(toDoItemContext);

  return (
    toDoItems.length === 0 && (
      <h3 className={styles.display}>
        Enjoy your day ,there are no tasks to do...
      </h3>
    )
  );
};
export default WelcomeMsg;
