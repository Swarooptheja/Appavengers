import { allbooksget, bestfail, bestget, bestreq, internationalget, newarrival } from "./actiontype"

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
let Allbooks=(payload)=>{
    return{
        type:allbooksget,
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

 let Allbooksdata=(payload,main)=>(dispatch)=>{
    console.log(payload,main)
    if(payload && main){
        axios.get(`https://long-gray-oyster-boot.cyclic.app/${main}?orderBy=${payload}`)
        .then((res)=>{
            dispatch(Allbooks(res.data))
        })

    }
    else if(main){
        axios.get(`https://long-gray-oyster-boot.cyclic.app/${main}`)
        .then((res)=>{
            dispatch(Allbooks(res.data))
        })
    }
    else if(payload){
        axios.get(`https://long-gray-oyster-boot.cyclic.app/allbooks?orderBy=${payload}`)
        .then((res)=>{
            dispatch(Allbooks(res.data))
        })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/allbooks")
        .then((res)=>{
            dispatch(Allbooks(res.data))
        })

    }
 }

export {GetBest,Newarrivaldata,Internationaldata,Allbooksdata}