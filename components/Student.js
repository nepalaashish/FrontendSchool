import React from "react";
import { useHistory } from 'react-router-dom';
import Getstudent from './Getstudent';
import './logout.css';

function student() {
    
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>   
        <Getstudent></Getstudent>
            
               <div className="out">
               <button onClick={handleClick}>Logout</button>
               </div>
                
            
        </>
    )
}       
export default student;