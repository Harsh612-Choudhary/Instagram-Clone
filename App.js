import React from "react";
import  Login  from "./components/Login";
import "./styles/app.css"
import Register from "./components/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Home/> */}
      <div style = {{heigth:"100vh" , display:'flex',alignItem:'center'}}>
      <Register/>
      {/* <Login/> */}
      </div> 

    </div>
  );
}

export default App;
