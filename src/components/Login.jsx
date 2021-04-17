import { Button} from '@material-ui/core';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import {Link} from "react-router-dom";


function Login(props) {
let [student,setStudent] = useState("");
// let [exam,setExam] = useState("");

async function handleChange(event){
let name = event.target.value;
 setStudent(name);
 
props.setStu(student);
}

// function handleExam(value){
//   let exam = value;
//   setExam(value);
//   }


    return (
    <div>
<Header />
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Register For Exam</label> <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                  <div className="login-space">
                    <div className="login">
                      <div className="group"> <label htmlFor="user" className="label">Student Name</label> <input onChange={event =>handleChange(event)} id="user" type="text" className="input" name="name" value={student} placeholder="Enter your name" /> </div>
                      {/* <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" /> </div> */}
                      <div className="group">
                      <h5 className="label">Select Exam : </h5>
        <select name="lang-sel" id="lang-sel-dropdown" >
          <option  value="HTML" name="exam">HTML</option>
          
        </select>
      </div>
                      {/* <div className="group"> <input id="check" type="checkbox" className="check" defaultChecked /> <label htmlFor="check"><span className="icon" /> Keep me Signed in</label> </div> */}
                      <div className="group"><Link to="/test"> <Button variant="contained" color="primary">Start Exam</Button></Link> </div>
                      <div className="hr" />
                      {/* <div className="foot"> <a href="#">Forgot Password?</a> </div> */}
                    </div>
                    {/* <div className="sign-up-form">
                      <div className="group"> <label htmlFor="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Create your Username" /> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" /> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" /> </div>
                      <div className="group"> <label htmlFor="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder="Enter your email address" /> </div>
                      <div className="group"> <input type="submit" className="button" defaultValue="Sign Up" /> </div>
                      <div className="hr" />
                      <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        </div>
      );
}

export default Login;
