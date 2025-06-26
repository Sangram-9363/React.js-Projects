import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import Post_List from "./Components/Post_List";
import { useState } from "react";
import Create_Post from "./Components/Create_Post";
import PostListProvider from "./Store/Social_Media_Store";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-Container">
        <SideBar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></SideBar>
        <div className="heroSection">
          <Header></Header>
          {selectedTab === "Home" ? (
            <Post_List></Post_List>
          ) : (
            <Create_Post></Create_Post>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
