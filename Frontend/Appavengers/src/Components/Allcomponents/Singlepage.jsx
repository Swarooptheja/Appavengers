import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Allbooksdata, Singledata } from '../../Appreducer/actions';
import {AiFillStar} from "react-icons/ai"
import "./Singlepage.css"
export const Singlepage = () => {
    let { id } = useParams()
    let {component }=useParams()

    console.log(id,component)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(Singledata(component,id))
    }, [id,component])
    // let [data,setdata]=useState([])
    let singledata=useSelector((state)=>{
        return state.Appreducer.singledata
    })
    // setdata([
    //     ...data,
    //     singledata
    // ])
    // console.log(singledata)
    let addtowishlist=()=>{
        let local=JSON.parse(localStorage.getItem("wishlistdata")) || []
        local.push(singledata)
        localStorage.setItem("wishlistdata",JSON.stringify(local))
        alert("Product added to the wishlist successful")
    }
    let handlebuynow=()=>{
        let addtocart=JSON.parse(localStorage.getItem("addedtocart")) || []
        addtocart.push(singledata)
        localStorage.setItem("addedtocart",JSON.stringify(addtocart))
        navigate("/placeorder")
    }

   
   
    return (
        <div id='singlepagecontainer'>
            <div>
                <img src={singledata.image} alt="" />
            </div>
            <div>
                <div>
                    <h1 style={{display:'inline' ,fontSize:"23px",fontStyle:'italic',color:"red",textAlign:"left"}}>{singledata.title}</h1>
                    <p style={{display:'inline'}}>(Wall Chart) | Released:01 Jan 2018   </p>
                    <div id='alldivstarts'>
                        <div >
                            <AiFillStar size={25} color={"gray"}/>
                        </div>
                        <div>
                            <AiFillStar size={25} color={"gray"}/>
                        </div>
                        <div>
                            <AiFillStar size={25} color={"gray"}/>
                        </div>
                        <div>
                            <AiFillStar size={25} color={"gray"}/>
                        </div>
                        <div>
                            <AiFillStar size={25} color={"gray"}/>
                        </div>
                    </div>
                </div>
                <hr style={{border:"0.5px solid gray"}}/>

                <div>
                    <h2 style={{color:"red",textAlign:"left"}}>{singledata.price}</h2>
                </div>

                <div>
                    <h3 style={{color:"gray",textDecoration:"line-through",textAlign:"left"}}>{singledata.initialprice}</h3>
                </div>
                <div>
                    <p style={{color:'green',textAlign:"left"}}>In Stock</p>
                </div>
                <div>
                    <p style={{color:'black',textAlign:"left",fontSize:"18px"}}>Ships within <b> 4-6 Business Days</b> </p>
                </div>

                <div>
                    <p style={{color:'black',textAlign:"left"}}>₹39 shipping in India per item and low cost Worldwide.</p>
                </div>
                <div id='allbuttons'>
                   <div>
                    <button className='firstbtn' onClick={handlebuynow} >Buy Now</button>
                   </div>
                   <div>
                    <button className='secondbtn' onClick={addtowishlist}>Add to Wishlist</button>
                   </div>
                </div>
            </div>
        </div>
    )
}
