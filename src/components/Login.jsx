
import "./form-container.css";
import { useState } from "react";



function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(false);

    function handleUsername(event){
        setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(username===""||password.length<6)
        {
            setError("Error:enter both usernameand password. password length should atleast be 6")
        }
        else{
            

            
            setIsLoading(true);
            setError("");
            setTimeout(()=>{setIsLoading(false);
                            setUsername("");
                            setPassword("");
            },2000);
        console.log("Username:", username); 
        console.log("Password:", password);
        const response=await fetch("http://localhost:5000/login",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        });
        const data=await response.json();
        console.log(data);
        
        
        
            setError(data.message);
        
        
    }}

    return(
        <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder=" enter username" onChange={handleUsername} value={username}></input>
        <input type="password" placeholder="enter password"  onChange={handlePassword} value={password}></input>
        <p>{error}</p>
        {(isLoading===true)?<button type="submit" disabled>Logging in...</button>:<button type="submit" >Login</button>}
        </form>
    );
}

export default Login;