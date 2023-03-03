
import React, { useEffect, useState } from 'react'
function App() {
 const [phonenumber,setphonenumber]=useState("");
 const[classSection,setclassSection]=useState("");
 const [firstName,setfirstname]=useState("");
 const [lastName,setLastName]=useState("");
 const [employeeid,setemployeeid]=useState("");
 const [ subjectname,setsubjectname]=useState("");

function saveData()
{
  let data={phonenumber,firstName,lastName,employeeid,subjectname,classSection}
// console.warn(data);
  fetch(" http://localhost:9003/teacher", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>Save Teacher</h1> 

      <h1> firstName</h1>
      <input type="text" name="name" value={firstName} onChange={(e)=>{setfirstname(e.target.value)}}  /> <br /> <br />
       
       <h1> lastName </h1>
      <input type="text" name="lastName"  value={lastName} onChange={(e)=>{setLastName(e.target.value)}} /> <br /> <br />
       
       <h1> Phonenumber </h1>
      <input type="number" name="phonenumber"  value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}/> <br /> <br />

      <h1> Employeeid</h1>
      <input type="number" name="Employeeid"  value={employeeid} onChange={(e)=>{setemployeeid(e.target.value)}}/> <br /> <br />
      
      <h1> Classsection</h1>
      <input type="text" name="classection"  value={classSection} onChange={(e)=>{setclassSection(e.target.value)}}/> <br /> <br />
        
      <h1> Subject</h1>
      <input type="text" name="Subject"  value={subjectname} onChange={(e)=>{setsubjectname(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save Teacher</button>
    </div>
  );
}
export default App;