import React from "react";
import { useHistory } from 'react-router-dom';
import Teacherlgv from './Teacherlgv';
import './logout.css';

function student() {
    
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>   
        <Teacherlgv></Teacherlgv>
            
               <div className="out">
               <button onClick={handleClick}>Logout</button>
               </div>
                
            
        </>
    )
}       
export default student;