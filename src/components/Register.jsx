
import "./form-container.css";

function Register(){
    return(
        <div className="form-container">
        <input type="text" placeholder=" enter name"></input>
        <input type="text" placeholder=" enter email"></input>
        <input type="password" placeholder="enter password"></input>
        <button>Register</button>
        </div>
    );
}

export default Register;