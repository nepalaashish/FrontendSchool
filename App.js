import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Addteacher from './components/Addteacher';
import Studentlogin from './components/Studentlogin';
import Applyleave from './components/Applyleave';
import Updateprofile from './components/Updateprofile';
import StudentMsg from './components/StudentMsg';


import Doctors from './components/Doctor';

import Login from './components/Login';
// import getteacher from './login/getteacher';
import Getteacher from './components/Getteacher'


import Admin from './components/Admin'
import Addstudent from './components/Addstudent';
import Studentlist from './components/Studentlist'
import Teacherlogin from './components/Teacherlogin';
import UpdateTeacher from './components/UpdateTeacher';



function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      
      <Route path='/teacher' element={<Doctors></Doctors>}></Route>
      
      <Route path='/login' element={<Login></Login>}></Route>
      
      <Route path='/Admin' element={<Admin ></Admin>}></Route>

      <Route path='/Studentlogin' element={<Studentlogin></Studentlogin>}></Route>

      

      <Route path='/Getteacher' element={<Getteacher></Getteacher>}></Route>

      <Route path='/Addteacher' element={<Addteacher></Addteacher>}></Route>

      <Route path='/Addstudent' element={<Addstudent></Addstudent>}></Route>

      <Route path='/Studentlist' element={<Studentlist></Studentlist>}></Route>

      <Route path='/Applyleave' element={<Applyleave></Applyleave>}></Route>

      <Route path='/updateprofile' element={<Updateprofile></Updateprofile>}></Route>
         
      <Route path='/Teacherlogin' element={<Teacherlogin></Teacherlogin>}></Route>


      <Route path='/StudentMsg' element={<StudentMsg></StudentMsg>}></Route>

      <Route path='/UpdateTeacher' element={<UpdateTeacher></UpdateTeacher>}></Route>

    </Routes>
    </div>
  );
}

export default App;

