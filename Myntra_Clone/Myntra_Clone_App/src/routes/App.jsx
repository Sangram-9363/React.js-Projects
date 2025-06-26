import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FeatchingStatus from "../Components/FeatchingItems";
import LoadingSpinner from "../../../../Social_Media_Application/src/Components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const featchingStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FeatchingStatus />
      {featchingStatus.currentlyFeatching ? <LoadingSpinner /> : <Outlet />}

      <Footer></Footer>
    </>
  );
}

export default App;
