import AppName from "./components/App-Name";
import AddToDo from "./components/Add-to-do";
import WelcomeMsg from "./components/WelcomeMsg";
import ItemList from "./components/Item-List";
import ToDoContextProvider from "./store/toDo-Item-Store";
import "./app.css";

function App() {
  return (
    <ToDoContextProvider>
      <center>
        <div className="container">
          <AppName></AppName>
          <AddToDo></AddToDo>
          <WelcomeMsg></WelcomeMsg>
          <ItemList></ItemList>
        </div>
      </center>
    </ToDoContextProvider>
  );
}

export default App;
