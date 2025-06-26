import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { toDoItemContext } from "../store/toDo-Item-Store";
function ToDoItems({ itemName, date }) {
  const { deleteItem } = useContext(toDoItemContext);
  return (
    <div className="row kg-row">
      <div className="col-6">{itemName}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => {
            deleteItem(itemName);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItems;
