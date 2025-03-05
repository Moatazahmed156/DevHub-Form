import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";
import DevHub from "./assets/Dev-Hub.jpg";
import { useState } from "react";
function App() {
  const [openList, setOpenList] = useState(false);
  function changeList() {
    setOpenList((prev) => !prev);
  }

  return (
    <div>
      {openList ? (
        <List closeList={changeList} />
      ) : (
        <Navbar openList={changeList} />
      )}
      <Hero background={DevHub} title="DevHub'25" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
