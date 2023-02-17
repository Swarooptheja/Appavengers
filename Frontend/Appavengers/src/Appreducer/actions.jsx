import { bestfail, bestget, bestreq, internationalget, newarrival } from "./actiontype"

import axios from "axios"

let BestGet=(payload)=>{
    // console.log(payload,"inside action")
    return{
        type:bestget,
        payload
    }
}



let BestFail=()=>{
    return{
        type:bestfail,
        
    }
}




let BestReq=()=>{
    return{
        type:bestreq,
        
    }
}

let Newarrival=(payload)=>{
    return{
        type:newarrival,
        payload
    }
}
let International=(payload)=>{
    return{
        type:internationalget,
        payload
    }
}

let GetBest=()=>(dispatch)=>{
    axios.get("https://long-gray-oyster-boot.cyclic.app/bestsellerbooks")
    .then((res)=>{
        dispatch(BestGet(res.data))
    })
}

let Newarrivaldata=()=>(dispatch)=>{
    axios.get("https://long-gray-oyster-boot.cyclic.app/recentbooks")
    .then((res)=>{
        dispatch(Newarrival(res.data))
    })
}
 let Internationaldata=()=>(dispatch)=>{
    axios.get("https://long-gray-oyster-boot.cyclic.app/frenchbooks")
    .then((res)=>{
        dispatch(International(res.data))
    })
 }

export {GetBest,Newarrivaldata,Internationaldata}