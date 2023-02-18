import { allbooksget, bestfail, bestget, bestreq, computerget, geographyget, internationalget, lawget, lifestylebooksget, mathematicsget, medicineget, newarrival, singleget } from "./actiontype"

import axios from "axios"

let BestGet = (payload) => {
    // console.log(payload,"inside action")
    return {
        type: bestget,
        payload
    }
}


let Newarrival = (payload) => {
    return {
        type: newarrival,
        payload
    }
}
let International = (payload) => {
    return {
        type: internationalget,
        payload
    }
}
let Allbooks = (payload) => {
    return {
        type: allbooksget,
        payload
    }
}
let Lifestyle = (payload) => {
    return {
        type: lifestylebooksget,
        payload
    }
}

let Law=(payload)=>{
    return{
        type:lawget,
        payload
    }
}
 
let Mathematics=(payload)=>{
    return{
        type:mathematicsget,
        payload
    }
}

let Medicine=(payload)=>{
    return{
        type:medicineget,
        payload
    }
}
let Computer=(payload)=>{
    return{
        type:computerget,
        payload
    }
}
let Geography=(payload)=>{
    return{
        type:geographyget,
        payload
    }
}

let Single=(payload)=>{
    return{
        type:singleget,
        payload
    }
}

let Singledata=(payload,id)=>(dispatch)=>{
    // console.log(payload,id,"insie singeldata")
    if(payload&&id){
        axios.get(`https://long-gray-oyster-boot.cyclic.app/${payload}/singleproduct/${id}`)
        .then((res)=>{
            dispatch(Single(res.data))
        })
    }
    else{
        axios.get(`https://long-gray-oyster-boot.cyclic.app/allbooks/singleproduct/${id}`)
        .then((res)=>{
            dispatch(Single(res.data))
        })
    }
}

let Geographydata=(payload)=>(dispatch)=>{
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/geographybooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Geography(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/geographybooks")
            .then((res) => {
                dispatch(Geography(res.data))
            })
    }
}

let Computerdata=(payload)=>(dispatch)=>{
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/computerbooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Computer(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/computerbooks")
            .then((res) => {
                dispatch(Computer(res.data))
            })
    }
}



let Medicinedata=(payload)=>(dispatch)=>{
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/medicinebooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Medicine(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/medicinebooks")
            .then((res) => {
                dispatch(Medicine(res.data))
            })
    }
}

let Mathematicsdata=(payload)=>(dispatch)=>{
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/mathematicsbooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Mathematics(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/mathematicsbooks")
            .then((res) => {
                dispatch(Mathematics(res.data))
            })
    }
}

let Lawdata=(payload)=>(dispatch)=>{
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/lawbooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Law(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/lawbooks")
            .then((res) => {
                dispatch(Law(res.data))
            })
    }
}

let Lifestyledata = (payload) => (dispatch) => {
    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/lifestylebooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Lifestyle(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/lifestylebooks")
            .then((res) => {
                dispatch(Lifestyle(res.data))
            })
    }
}


let GetBest = (payload) => (dispatch) => {

    if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/bestsellerbooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(BestGet(res.data))
            })
    }
    else{
        axios.get("https://long-gray-oyster-boot.cyclic.app/bestsellerbooks")
            .then((res) => {
                dispatch(BestGet(res.data))
            })
    }
   
}

let Newarrivaldata = () => (dispatch) => {
    axios.get("https://long-gray-oyster-boot.cyclic.app/recentbooks")
        .then((res) => {
            dispatch(Newarrival(res.data))
        })
}
let Internationaldata = () => (dispatch) => {
    axios.get("https://long-gray-oyster-boot.cyclic.app/frenchbooks")
        .then((res) => {
            dispatch(International(res.data))
        })
}


let Allbooksdata = (payload, main) => (dispatch) => {
    console.log(payload, main)
    if (payload && main) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/${main}?orderBy=${payload}`)
            .then((res) => {
                dispatch(Allbooks(res.data))
            })

    }
    else if (main) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/${main}`)
            .then((res) => {
                dispatch(Allbooks(res.data))
            })
    }
    else if (payload) {
        axios.get(`https://long-gray-oyster-boot.cyclic.app/allbooks?orderBy=${payload}`)
            .then((res) => {
                dispatch(Allbooks(res.data))
            })
    }
    else {
        axios.get("https://long-gray-oyster-boot.cyclic.app/allbooks")
            .then((res) => {
                dispatch(Allbooks(res.data))
            })

    }
}

export { Singledata,Geographydata,Computerdata,GetBest,Medicinedata, Newarrivaldata, Internationaldata, Allbooksdata, Lifestyledata,Lawdata,Mathematicsdata }