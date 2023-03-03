import React, { useEffect, useState } from 'react'
function App() {
    const [users, setUser] = useState([])
  const [employeeid, setemployeeid] = useState(null)
  const [subjectname, setsubjectname] = useState();
 
  const [classSection, setclassSection] = useState("");
  const [firstName,setfirstName]=useState("");
  const [lastName,setlastName]=useState("");
  const [phonenumber,setphonenumber]=useState("");

  useEffect(() => {
    getUsers();
  }, [])
  
  function getUsers() {
    fetch("http://localhost:9003/getallteachers").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setemployeeid(resp[0].employeeid)
        setsubjectname(resp[0].subjectname)
        setclassSection(resp[0].classSection)
        setfirstName(resp[0].firstName)
        setlastName(resp[0].lastName)
        
        
        setphonenumber(resp[0].phonenumber)
        
      })
    })
  }
  function updateUser()
  {
    let item={employeeid,subjectname,classSection,firstName,lastName,phonenumber}
    console.warn("item",item)
    fetch(`http://localhost:9003/teacher/${employeeid}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function updateUser()
  {
    let item={employeeid,subjectname,classSection,firstName,lastName,phonenumber}
    console.warn("item",item)
    fetch(`http://localhost:9003/teacher/${employeeid}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div className="App">
      <h1>Update Your Teacher Profile</h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>employeeid</td>
            <td>subjectname</td>
            <td>classSection </td>
            <td>firstName</td>
            <td>lastName</td>
            <td>phonenumber</td>
           
            
            
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.employeeid}</td>
                <td>{item.subjectname}</td>
                <td>{item.classSection}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phonenumber}</td>
                

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
        
      <input type="long" value={employeeid} onChange={(e)=>{setemployeeid(e.target.value)}} /> <br /><br />
      
        <input type="text" value={subjectname} onChange={(e)=>{setsubjectname(e.target.value)}} /> <br /><br />
         
        <input type="text" value={ classSection}  onChange={(e)=>{setclassSection(e.target.value)}} /> <br /><br />
    
        <input type="text" value={firstName}  onChange={(e)=>{setfirstName(e.target.value)}} /> <br /><br />
        
        <input type="text" value={lastName}  onChange={(e)=>{setlastName(e.target.value)}} /> <br /><br />
        <input type="number" value={phonenumber}  onChange={(e)=>{setphonenumber(e.target.value)}} /> <br></br>
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default App;
 

