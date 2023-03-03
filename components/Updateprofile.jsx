import React, { useEffect, useState } from 'react'
function App() {
    const [users, setUser] = useState([])
  const [name, setname] = useState([])
  const [id, setid] = useState(null);
  const [message_for_teacher, setmassage_for_teacher] = useState("");
  const [classSection, setclassSection] = useState("");
  const [phonenumber,setphonenumber]=useState("");
  const [leave,setleave]=useState("");

  useEffect(() => {
    getUsers();
  }, [])
  
  function getUsers() {
    fetch("http://localhost:4003/Getallstudent").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setname(resp[0].name)
        setphonenumber(resp[0].phonenumber)
        setclassSection(resp[0].classSection)
        setid(resp[0].id)
        setmassage_for_teacher(resp[0].message_for_teacher)
        setleave(resp[0].leave)
      })
    })
  }
  function updateUser()
  {
    let item={name,phonenumber,classSection,id,message_for_teacher,leave}
    console.warn("item",item)
    fetch(`http://localhost:4003/Student/${id}`, {
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
    let item={name,phonenumber,classSection,id,message_for_teacher,leave}
    console.warn("item",item)
    fetch(`http://localhost:4003/Student/${id}`, {
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
      <h1>Update Your Student Profile</h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>name</td>
            <td>id</td>
            <td>message_for_teacher</td>
            <td>phonenumber</td>
            <td>leave</td>
            <td>Classsection</td>
           
            
            
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.message_for_teacher}</td>
                <td>{item.phonenumber}</td>
                <td>{item.leave}</td>
                <td>{item.classSection}</td>
                

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
        
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /><br />
      
        <input type="number" value={id} onChange={(e)=>{setid(e.target.value)}} /> <br /><br />
         
        <input type="text" value={message_for_teacher}  onChange={(e)=>{setmassage_for_teacher(e.target.value)}} /> <br /><br />
    
        <input type="number" value={phonenumber}  onChange={(e)=>{setphonenumber(e.target.value)}} /> <br /><br />
        
        <input type="number" value={leave}  onChange={(e)=>{setleave(e.target.value)}} /> <br /><br />
        <input type="text" value={classSection}  onChange={(e)=>{setclassSection(e.target.value)}} /> <br></br>
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default App;
 

