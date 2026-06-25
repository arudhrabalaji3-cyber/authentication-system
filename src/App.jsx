
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import {useState} from "react";

function App(){
  const [currentPage,setCurrentPage]=useState("Login");

  function changePage(pageName){
    setCurrentPage(pageName);
  }
  return(
    <>
      <Navbar changePage={changePage}></Navbar>
      {(currentPage==="Login")?<Login />:<Register />}
      </>
  );
}

export default App;