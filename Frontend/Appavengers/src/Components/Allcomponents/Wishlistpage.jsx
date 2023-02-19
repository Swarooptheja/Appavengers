import React, { useEffect, useState } from 'react'
import "./Wishlistpage.css";
import { AiFillStar } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
export const Wishlistpage = () => {
    let local = JSON.parse(localStorage.getItem("wishlistdata")) || []
    let [update,setupdate]=useState(0)
    let navigate=useNavigate()
    let addtowishlist = (index) => {
        local.splice(index,1)
        localStorage.setItem("wishlistdata",JSON.stringify(local))
        setupdate(()=>update+1)
        alert("Delete the product from wishlist succssfully")
        if(local.length==0){
            navigate("/allbooks")
        }
    }
    let addtocart=JSON.parse(localStorage.getItem("addedtocart")) || []
    let handleaddtocart=(el)=>{
        el.items=1
        addtocart.push(el)
        localStorage.setItem("addedtocart",JSON.stringify(addtocart))
        alert('product added to the cart page successfull')
    }
    useEffect(()=>{

    },[update])
    return (
        <div id='wishlistpagecontainer'>
            {
                local.length > 0 && local.map((el,index) => {
                    return (
                        <div id='wistlistinside'>
                            <div>
                                <img src={el.image} alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 style={{ display: 'inline', fontSize: "23px", fontStyle: 'italic', color: "red", textAlign: "left" }}>{el.title}</h1>
                                    <p style={{ display: 'inline' }}>(Wall Chart) | Released:01 Jan 2018   </p>
                                    
                                </div>
                                <hr style={{ border: "0.5px solid gray" }} />

                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>

                                <div>
                                    <h2 style={{ color: "red", textAlign: "left" }}>{el.price}</h2>
                                </div>

                                <div>
                                    <h3 style={{ color: "gray", textDecoration: "line-through", textAlign: "left" }}>{el.initialprice}</h3>
                                </div>
                                </div>
                                <div>
                                    <p style={{ color: 'green', textAlign: "left" }}>In Stock</p>
                                </div>
                                <div>
                                    <p style={{ color: 'black', textAlign: "left", fontSize: "18px" }}>Ships within <b> 4-6 Business Days</b> </p>
                                </div>

                                <div>
                                    <p style={{ color: 'black', textAlign: "left" }}>₹39 shipping in India per item and low cost Worldwide.</p>
                                </div>
                                <div id='allbuttons'>
                                    <div>
                                        <button className='firstbtn' onClick={()=>handleaddtocart(el)}>Add to cart</button>
                                    </div>
                                    <div>
                                        <button className='secondbtn' onClick={()=>addtowishlist(index)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}
