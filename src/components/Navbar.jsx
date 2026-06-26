
import "./Navbar.css";
function Navbar(props)
{
    return(
        <div className="nav">
        <h1>AUTHENTICATION SYSTEM</h1>
        <div className="buttoncontainer">
        <button  className="navbutton" onClick={()=>props.changePage("Login")}>Login</button>
        <button  className="navbutton" onClick={()=>props.changePage("Register")}>Register</button>
        </div>
        </div>
    );
}

export default Navbar;

// function Navbar() {
//   return (
//     <div>
//       <h1>AUTHENTICATION SYSTEM</h1>
//       <button>Button 1</button>
//       <button>Button 2</button>
//       <p>Navbar works</p>
//     </div>
//   );
// }

// export default Navbar;