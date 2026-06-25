
function Navbar(props)
{
    return(
        <>
        <h1>AUTHENTICATION SYSTEM</h1>
        <button onClick={()=>props.changePage("Login")}>Login</button>
        <button onClick={()=>props.changePage("Register")}>Register</button>
        console.log(props);
        </>
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