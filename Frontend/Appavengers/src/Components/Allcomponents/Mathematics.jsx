import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Lawdata, Mathematicsdata } from '../../Appreducer/actions'
// import { Lifestyledata } from '../../Appreducer/actions'

export const Mathematics = () => {
   let mathematicsdata=useSelector((state)=>{
    return state.Appreducer.mathematicsdata
   })
   let dispatch=useDispatch()
   let [value,setvalue] =useState('')
   useEffect(()=>{
    dispatch(Mathematicsdata(+value))
   },[value])
   let navigate=useNavigate()
    let handlesinglepage=(id)=>{
        navigate(`singleproduct/${id}`)
    }
  return (
    <div>
         <div id='selectbtn'>
        <div>
            <h3 style={{fontStyle:"italic"}}>

            Sort By:
            </h3>
        </div>
        <div>

    <select name="" onChange={(e)=>setvalue(e.target.value)} id="">
        <option value="">Relevance</option>
        <option value="1">Low to High</option>
        <option value="-1">Hign to Low</option>
    </select>
        </div>

    </div>
        <div id='homebestcontainer'>
            {
                mathematicsdata.length>0 && mathematicsdata.map((el)=>{
                    return (
                        <div key={el._id} onClick={()=>handlesinglepage(el._id)}>
                            <img src={el.image} alt="" />
                            <h4 style={{color:'gray'}}>{el.title}</h4>
                            <div className='homebestcontainerinside'>
                                <h5 style={{fontWeight:"bold",fontSize:"20px"}}>₹ {el.initialprice}</h5>
                                <h5 style={{fontWeight:"bold",fontSize:"20px"}}>₹ {el.price}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}
