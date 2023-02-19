import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularProgress, Progress } from '@chakra-ui/react'
import "./Paymentsuccess.css"
import { Otp } from './Otp'
// import Timer from './Timer'
export const Paymentsuccess = () => {
    let addtocart = JSON.parse(localStorage.getItem("addedtocart")) || []
    let price=0;
    let initialprice=0
    addtocart.forEach((el)=>{
        let str=el.price;
        let str1=el.initialprice;
        let num=parseFloat(str.replace(/[^\d,]|(Rs\.)/g, '').replace(',',''))
        price+=num;
        let num1=parseFloat(str1.replace(/[^\d,]|(Rs\.)/g, '').replace(',',''))
        initialprice+=num1
    })
    let[count,setcount]=useState(300)
    let timeid=useRef(null)
    let m=-Math.floor(count/60)
    let fromattime=(time)=>{
        console.log(time)
        let min=Math.floor(time/60)
        let sec=Math.floor(time-min *60)
        // if(min<=10) {
        //     min -"0"+min}
        // if(sec<=10) sec - "0"+sec;
        return min +  "     :          "     +sec
    }
    let navigate=useNavigate()
    useEffect(()=>{
      timeid.current=setInterval(() => {
        setcount((count)=>count-1)
       
      }, 1000);
      return ()=>clearInterval(timeid.current)
    },[count])

    useEffect(()=>{
        if(count==290){
            navigate("/otp")
            
        }
        if(count<=0){
            clearInterval(timeid.current)
        alert("Time completed please try again")    
        
    }
    },[count])
   
  return (
    <>
   
    
    <div id='p1p2'>

    <div id='paymentsuccessmain'>
      <div id='dlfj'>

        <img src="https://secure.ccavenue.com/transaction/images/ccavenue-logo-100x15.png" alt="" />
      </div>
        <div id='payingto'>
            <div>
            <p>Paying to</p>
            <h4>CCAvenue</h4>
            </div>
            <div>
                <p>Amount</p>
                <h4>INR {price-200}.00</h4>
            </div>
           
        </div>
        <hr />
        <div>
            <p style={{fontSize:"18px"}}>Please authorize payment of <b style={{color:"blue"}}>INR {price-200}.00</b>
             on your UPI mobile app within</p>
        </div>
        <div>
          <div id='dlasfjldfj'>
            <h4>{fromattime(count)}  Sec</h4>
          </div>
          <div>
           
          </div>
        </div>
        <div id='theja'>
            <img src="https://secure.ccavenue.com/transaction/images/powered-by-upi-logo.png" alt="" />
        </div>
    </div>
    <div id='porewdvy'>
        powered By 
        <img src="https://secure.ccavenue.com/transaction/images/ccavenue-logo-100x15.png" alt="" />
    </div>
    </div>

    </>
  )
}