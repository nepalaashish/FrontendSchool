
import React, { useEffect, useState } from 'react'
function App() {
 
 const [name,setname]=useState("");
 const [id,setid]=useState("");
 const [ message_for_teacher,setmassage_for_teacher]=useState("");
 const [classSection,setclassSection]=useState("");
 const [phonenumber,setphonenumber]=useState("");
 const [leave,setleave]=useState("");
function saveData()
{
  let data={name,id,message_for_teacher,classSection,phonenumber,leave}
// console.warn(data);
  fetch("http://localhost:4003/Student", {
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
      <h1>Save Student</h1> 

      <h1> Name </h1>
      <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}  /> <br /> <br />
       
       <h1>  id</h1>
      <input type="number" name="email"  value={id} onChange={(e)=>{setid(e.target.value)}} /> <br /> <br />
       
      <h1> Message for teacher</h1>
      <input type="text" name="message_for_teacher"  value={message_for_teacher} onChange={(e)=>{setmassage_for_teacher(e.target.value)}} /> <br /> <br />

      <h1> Phonenumber</h1>
      <input type="number" name="number"  value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}/> <br /> <br />
        
      <h1>  ClassSection</h1>
      <input type="text" name="classSection"  value={classSection} onChange={(e)=>{setclassSection(e.target.value)}} /> <br /> <br />
       
      <h1>Leave</h1>
      <input type="leave" name="leave"  value={leave} onChange={(e)=>{setleave(e.target.value)}} /> <br /> <br />
      <button type="button" onClick={saveData} >Save Student</button>
    </div>
  );
}
export default App;