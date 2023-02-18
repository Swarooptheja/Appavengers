import axios from "axios"
import { Loginget, Signupget } from "./actiontypes"


let Signup=(payload)=>{
    return{
        type:Signupget,
        payload
    }
}

let Login=(payload)=>{
    return{
        type:Loginget,
        payload
    }
}

let Logindata=(payload)=>(dispatch)=>{
    return fetch(`https://long-gray-oyster-boot.cyclic.app/login`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json' 
          },
        
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
        return dispatch(Login(res))
    })
    .catch((err)=>{
        alert("Invalid login credentials")
    })

}




let Signupdata=(payload)=>(dispatch)=>{
    return fetch(`https://long-gray-oyster-boot.cyclic.app/register`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json' 
          },
        
    })
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
        return dispatch(Signup(res))
    })
    .catch((err)=>{
        alert("Invalid login credentials")
    })

}

export {Signupdata,Logindata}

