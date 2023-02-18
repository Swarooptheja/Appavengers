import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
// import profile from "../Navbar/logo.png";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Signupdata } from "../../Authreducer/actions";

const Signup = () => {
  const toast = useToast();
  const disptach = useDispatch();
  const Navigate = useNavigate();
  const [AdminData, setAdminData] = useState({
    email: "",
    password: "",
    firstname: "",
    mobile: "",
    lastname:"",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...AdminData, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (AdminData.password.length < 7) {
      toast({
        title: `Please Enter Minimum 7 character`,
        position: "top",
        duration: 3000,
      });
    } else if (AdminData.mobile.length !== 10) {
      toast({
        title: `Please Enter Correct Number`,
        position: "top",
        duration: 3000,
      });
    } 
    else {
      console.log(AdminData);
      disptach(Signupdata(AdminData))
      .then((res)=>{
        console.log(res,"res")
        if(res.payload.status!="Fail"){
            toast({
                title: `Signup Successfull`,
                position: "top",
                duration: 2000,
              });
            Navigate("/login")
        
        }
        else{
            toast({
                title:`User already exist`,
                position:"top",
                duration:2000
            })
        }
       
      })
  
    }

    setAdminData({
      email: "",
      password: "",
      firstname: "",
      mobile: "",
      lastname:""
    });
  };

  return (
    <>
      <div className="mainLoginPage MainSignupPage">
        <div className="rightside signuprightside">
          <div className="Profileimg">
            <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png" alt="profile" />
          </div>
          <p style={{fontStyle:"italic",fontSize:"20px", fontWeight:"bolder",color:"red"}}>Signup</p>
          <div>
            <form onSubmit={HandleSubmit}>
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={AdminData.email}
                onChange={HandleChange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={AdminData.password}
                onChange={HandleChange}
                required
              />
              <h3>First Name</h3>
              <input
                type="text"
                name="firstname"
                value={AdminData.firstname}
                onChange={HandleChange}
                required
              />
              <h3>Last Name</h3>
              <input
                type="text"
                name="lastname"
                value={AdminData.lastname}
                onChange={HandleChange}
                required
              />
              <h3>Mobile No</h3>
              <input
                type="number"
                name="mobile"
                value={AdminData.mobile}
                onChange={HandleChange}
                required
              />

              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;