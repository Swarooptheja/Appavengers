import React from 'react';
import "./Placeorder.css"

import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsFillCartFill} from "react-icons/bs"
import {CiMemoPad} from "react-icons/ci"
import {MdPayment} from "react-icons/md"
// import { Viewall } from './Applycoupon';
import {CiPercent} from "react-icons/ci"
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai"
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


import {
   Radio
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import { Change } from './Change';
function Placeorder(props) {
    // let localdata=JSON.parse(localStorage.getItem("alldata")) || []
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
    let [count,setcount]=useState(1)

    let handleincrease=()=>{
        setcount(count+1)
    }
    let handlereduce=()=>{
        setcount(count-1)
    }
   
    // let variant_compare_at_price=0
    // let variant_price=0
    // let arr=[]
    // localdata.forEach((el)=>{
    //     el.forEach((main)=>{
    //         arr.push(main)
    //         variant_compare_at_price+=+main.variant_compare_at_price
    //         variant_price+=+main.variant_price
    //     })

    // })
    let main=price-200
    let [viewall,setviewall]=useState(false)
    let handlestate=(state)=>{
        setviewall(true)
       
    }
    let [input,setinput]=useState("")
    let [inputdis,setinputdis]=useState(false)
    let handleclick=()=>{
        if(input=="masai1"){
            setinputdis(true)
            setinput("")
        }
        // alert("Invalid Coupon Code Please Enter Correct Coupon")
      
    }
    let address=JSON.parse(localStorage.getItem("address")) ||[]
    let add=address[address.length-1]
    console.log(add)
    let [radio,setradio]=useState(false)
    
    const navigate = useNavigate();
    let handlemakepayment=()=>{
        navigate("/payment")
    }

    useEffect(()=>{
        console.log("mianpagerender")
    },[address])
    return (
        <>
        <div id='placeordercontainer'>

            <div id='mainplaceorder'>
                <div>
                    <img src="https://www.bookswagon.com/images/checkout-step2.gif" alt="" />
                </div>
              
            </div>

       
           <h3 id='deliveryadd'>Select Delivery Address</h3>
            <div id="cartpagemain">
               <div id='cartpageleftmain'>
                {
                    address.length>0 ?
                <div>
                    <div className='houseno'>
                    <Radio value={radio} defaultChecked={true} >Address</Radio>
                        
                    </div>
                    <div>
                      <h4 className='houseno'>{address[address.length-1].name},</h4>
                      <p className='houseno'>{address[address.length-1].houseno},</p>
                      {/* <p className='houseno'>{address[address.length-1].floorno},</p> */}
                      <p className='houseno'>{address[address.length-1].apartmentno},</p>
                      <p className='houseno'>{address[address.length-1].landmark},</p>
                      <p className='houseno'>{address[address.length-1].city},</p>
                      <p className='houseno'>{address[address.length-1].address},</p>
                      <p className='houseno'>{address[address.length-1].pin},</p>
                      <h4 className='houseno'>{address[address.length-1].phoneno}.</h4>
                    </div>

                  <div>
                    {
                        address.length>0? <button id='default'>Default Address</button>:""
                    }
                  </div>
                </div>:""
                }
                <div id='cartpageleftmainright'>
                    <div></div>
                   
                    <div></div>
                    <div>
                    <Change/>
                    </div>
                </div>
               </div>
                <div>
                    <div id='rightfirst'>
                        <div >
                        <BsFillCartFill  size={30} color="blue"/>
                        Cart
                        </div>
                        <div >
                        <CiMemoPad  size={30}/>
                        Order Summary
                        </div>
                        <div >
                        <MdPayment size={30}/>
                        Payment
                        </div>
                    </div>
                  <div></div>
                        <h2 id='payment'>Payment Details</h2>
                    <div id='rightbottom'>
                        <div className='details'>
                            <div>
                            <h4>MRP Total</h4>
                            </div>
                            <div>
                           <h4> ₹ {initialprice}/-</h4>
                            </div>
                            
                        </div>
                        <div className='details'>
                        <div>
                            <h4>Product Discount</h4>
                            </div>
                            <div>
                           <h4> ₹ {initialprice-price}/-</h4>
                            </div>
                        </div>
                        {
                            viewall?
                        <div className='details'>
                            <div>
                            <h4>Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {200}/-</h4>
                            </div>
                        </div>: ""
                        }

{
                            inputdis?
                        <div className='details'>
                            <div>
                            <h4>Favorite Coupon Discount</h4>
                            </div>
                           
                            <div>
                           <h4> ₹ {200}/-</h4>
                            </div>
                        </div>: ""
                        }
                        
                        <div className='details'>
                            <div>
                            <h4>Total Amount</h4>
                            </div>
                           
                            <div>
                           {
                            viewall || inputdis?
                            <h4>₹{main-200}/-</h4>:
                            <h4> ₹{price-200}/-</h4>
                           }
                            </div>
                        </div>
                    
                        
                       
                    </div>
                    <button id='placeorder'onClick={handlemakepayment} disabled={address.length==0 || addtocart.length==0} >Make Payment</button>
                </div>
            </div>
            </div>
        </>
    );
}

export default Placeorder;
