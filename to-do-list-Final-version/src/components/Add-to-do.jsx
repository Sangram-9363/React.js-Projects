import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { toDoItemContext } from "../store/toDo-Item-Store";

function AddToDo() {
  const { addNewItem } = useContext(toDoItemContext);
  const toDoNameElement = useRef();
  const toDoDateElement = useRef();

  const handleAddButton = () => {
    const taskName = toDoNameElement.current.value;
    const dueDate = toDoDateElement.current.value;
    toDoNameElement.current.value = "";
    toDoDateElement.current.value = "";
    addNewItem(taskName, dueDate);
  };
  return (
    <div className="row kg-row kg-row">
      <div className="col-6">
        <input
          ref={toDoNameElement}
          type="text"
          placeholder="Enter Todo Here"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={toDoDateElement} />
      </div>
      <div className="col-1">
        <button
          type="button"
          className="btn btn-success kg-button "
          onClick={handleAddButton}
        >
          Add
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
