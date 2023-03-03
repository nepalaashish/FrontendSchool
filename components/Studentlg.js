import React from "react";
import { useHistory } from 'react-router-dom';
import Studentlgv from './Studentlgv';
import './logout.css';

function student() {
    
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>   
        <Studentlgv></Studentlgv>
            
               <div className="out">
               <button onClick={handleClick}>Logout</button>
               </div>
                
            
        </>
    )
}       
export default student;