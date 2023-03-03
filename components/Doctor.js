import React, { useState, useEffect } from "react";
import './Teacher.css';

import './Add.css';

const Doctors = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:9003/getallteachers").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    
    
    <div className="Table">
    <div className="Heading">
           <h1> Teacher List  </h1> 
          </div>
    <table border="1">
       <tbody>
       <tr>
          <td>firstname</td>
          <td>lastname</td>
          <td>subjectname</td>
          <td>employeeid</td>
          <td>phonenumber </td>
          <td>classsection</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.subjectname}</td>
            <td>{item.employeeid}</td>
            <td>{item.phonenumber}</td>
            <td>{item.classSection}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
    
  );

    
};

export default Doctors;
