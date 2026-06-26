
import "./App.css";
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
    <div className="container">
      <div className="formcard">
      <Navbar changePage={changePage}></Navbar>
      {(currentPage==="Login")?<Login />:<Register />}
      </div>
    </div>
  );
}

export default App;