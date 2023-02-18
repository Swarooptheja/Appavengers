import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Geographydata, Medicinedata } from '../../Appreducer/actions'
// import { Lawdata, Mathematicsdata } from '../../Appreducer/actions'
// import { Lifestyledata } from '../../Appreducer/actions'

export const Geography = () => {
   let geographydata=useSelector((state)=>{
    return state.Appreducer.geographydata
   })
   let dispatch=useDispatch()
   let [value,setvalue] =useState('')
   useEffect(()=>{
    dispatch(Geographydata(+value))
   },[value])
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
                geographydata.length>0 && geographydata.map((el)=>{
                    return (
                        <div key={el._id}>
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
