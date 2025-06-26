import { useContext } from "react";
import { toDoItemContext } from "../store/toDo-Item-Store";
import ToDoItems from "./To-Do-Items";
const ItemList = () => {
  const { toDoItems } = useContext(toDoItemContext);

  return (
    <div className="to-Do-items">
      {toDoItems.map((item) => (
        <ToDoItems
          key={item.name}
          itemName={item.name}
          date={item.dueDate}
        ></ToDoItems>
      ))}
    </div>
  );
};

export default ItemList;
