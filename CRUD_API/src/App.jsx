import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/View";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
