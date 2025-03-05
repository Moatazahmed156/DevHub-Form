import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Footer from "./components/Footer";
import List from "./components/List";
import DevHub from "./assets/Dev-Hub.jpg";
import { useState } from "react";
function App() {
  let courses = ["C++", "OOP", "Flutter", "DS & Algorithm", "UI/UX"];
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
      <Hero
        background={DevHub}
        title="DevHub'25"
        slogan="THE DEVHUB'25 EVENT IS UNDER THE WAY!"
      />
      <Form Courses={courses} />
      <Footer />
    </div>
  );
}

export default App;
