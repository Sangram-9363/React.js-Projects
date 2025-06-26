import { createContext, useReducer } from "react";

export const toDoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const toDoReducer = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;
  if (action.type === "ADD") {
    newToDoItems = [
      ...currToDoItems,
      {
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type === "REMOVE") {
    newToDoItems = currToDoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newToDoItems;
};

const ToDoContextProvider = ({ children }) => {
  const [toDoItems, toDoDispatch] = useReducer(toDoReducer, []);

  const addNewItem = (name, dueDate) => {
    if ((toDoItems.length === 0 && name === "") || dueDate === "") {
      alert("please enter task and date");
    } else {
      const toDoItems = {
        type: "ADD",
        payload: {
          name,
          dueDate,
        },
      };
      toDoDispatch(toDoItems);
    }
  };

  const deleteItem = (toDoName) => {
    const deleteAction = {
      type: "REMOVE",
      payload: {
        itemName: toDoName,
      },
    };
    toDoDispatch(deleteAction);
  };

  return (
    <toDoItemContext.Provider
      value={{
        toDoItems: toDoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </toDoItemContext.Provider>
  );
};

export default ToDoContextProvider;
