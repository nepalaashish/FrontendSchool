import React, { useState, useEffect } from "react";
import './Teacher.css';
import './Add.css';

const Doctors = () => {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:4003/Getallstudent").then((result)=>{
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
           <h1> Student Message   </h1> 
          </div>
    <table border="1">
       <tbody>
       <tr>
          <td>Name</td>
          <td>Id</td>
          <td>message for teacher</td>
          <td>Classsection</td>
          <td> phonenumber</td>
          <td>leave</td>
          
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.name}</td>
          <td>{item.id}</td>
            <td>{item.message_for_teacher}</td>
            <td>{item.classSection}</td>
            <td>{item.phonenumber}</td>
            <td>{item.leave}</td>


          </tr>
          )
        }
       </tbody>
      </table>
    </div>
    
  );

    
};

export default Doctors;