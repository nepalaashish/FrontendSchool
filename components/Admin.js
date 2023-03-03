import React, { useRef } from "react";
import Student from "./Student";

import './Login.css';
function LoginWithLocalStorage(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
   
    return(
        <div className="form">
            {
                getEmail&&getPassword?
                <Student/>:
            <form onSubmit={handleSubmit}>
                
                <div>
                <h1> Email  </h1>
                    <input type="text" ref={email} />
                </div>
                 <h1>  Password</h1>
                <div>
                    <input type="password" ref={password} />
                </div>
                
                  <div className="button">
                <button>Login</button>
                </div>
            </form>
            }
        </div>
    );
}
export default LoginWithLocalStorage;