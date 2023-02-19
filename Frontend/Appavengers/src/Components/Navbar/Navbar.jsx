import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { RxAvatar } from "react-icons/rx";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import {FaHeart} from "react-icons/fa"
import {BsFillCartFill} from "react-icons/bs"
// import circuitlogo from "./logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const local = JSON.parse(localStorage.getItem("passwordtoken")) || "";

//   console.log(local.firstname,"local")
//   const { isAuth } = useSelector((ele) => ele.Authreducer);
   
  const [classes, setclasses] = useState("donotshownavbar");
  const Navi = useNavigate();

//   useEffect(()=>{
//     console.log(isAuth,"inside")
//   },[isAuth])

  let handlesignup=()=>{
    Navi("/signup")
  }
  let handlelogin=()=>{
    Navi("/login")
  }
  let handleimg=()=>{
    Navi("/")
  }
let handleheart=()=>{
  Navi("/wishlistpage")
}

let handlecart=()=>{
  Navi("/addtocard")
}
  return (
    <>
      <div className="Navbar_container">
        <div>

        <nav>
          <div>
          <img onClick={handleimg} src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" alt="circuitlogo" />
          </div>
          <div id="navlink">
            <div>
              <a href="/lifestylebooks">
                <p>Life Style</p>
              </a>
            </div>
            <div>
              <a href="/bestsellersbooks"><p>Best Sellers</p></a>
            </div>
            <div>
              <a href="/Lawbooks">
                <p>Law</p>
              </a>
            </div>
            <div>
              <a href="/Mathematicsbooks"><p>Science</p></a>
            </div>
            <div>
              <a href="/Medicinebooks">
                <p>Medicine</p>
              </a>
            </div>
            <div>
              <a href="/computerbooks"><p>Computer</p></a>
            </div>
            <div>
                <a href="/geographybooks">Geography</a>
            </div>
          </div>
          <ul className={classes}>
            {/* ************************************************ */}

            {local ? (
              <>
                <h1>Welcome {local.firstname + local.lastname}</h1>
              </>
            ) : (
              <li>
                <a onClick={() => setclasses("donotshownavbar")}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<AiOutlineDown />}
                      height="3.3rem"
                      className={"Loginandsign"}
                      border="none"
                      backgroundColor={"white"}
                    >
                      <p>
                        <RxAvatar className="Avatar" /> Login & SignUp
                      </p>
                    </MenuButton>
                    <MenuList marginTop={"1"}>
                      <MenuItem
                        fontSize={"1.2rem"}
                        width="16rem"
                        border={"none"}
                        onClick={handlelogin}
                      >
                        Login
                      </MenuItem>
                      <MenuItem
                        fontSize={"1.2rem"}
                        width="16rem"
                        border={"none"}
                        onClick={handlesignup}
                      >
                        SignUp
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </a>
              </li>
            )}
            {/* *********************************************************** */}

            <ImCross
              className="crossicon commonIcon"
              onClick={() => {
                setclasses("donotshownavbar");
              }}
            />
          </ul>
          <ImMenu
            className="Menuicon commonIcon"
            onClick={() => {
              setclasses("shownavbar");
            }}
          />
        </nav>
        </div>
        <div id="secondnav">
         <div>
         <FaHeart onClick={handleheart} size={40} color="red"  cursor={"pointer"}/>
         </div>
         <div>
          <BsFillCartFill size={40} color="black" cursor={"pointer"} onClick={handlecart} />
          
         </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;