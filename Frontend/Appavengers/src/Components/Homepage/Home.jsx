import React, { useEffect } from 'react';
import SimpleSlider from './caurosel';
import SimpleSlider1 from './caurosel1';
import "./Home.css";
import Automaticsliding from "./Multiplesliding"
import Trendingsliding from "./Trending";
import Homebestcaurosel from "./Homebestseller"
import { useSelector,useDispatch } from 'react-redux'
import { GetBest, Internationaldata, Newarrivaldata } from '../../Appreducer/actions';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let bestdata=useSelector((state)=>{
        return state.Appreducer.bestdata
    })
    useEffect(()=>{
        dispatch(GetBest())
    },[dispatch,bestdata])


    let newarrival=useSelector((state)=>{
        return state.Appreducer.newarrivaldata
    })
    useEffect(()=>{
        dispatch(Newarrivaldata())
    },[dispatch,newarrival])

    let international=useSelector((state)=>{
        return state.Appreducer.internationaldata
    })
    useEffect(()=>{
        dispatch(Internationaldata())
    },[dispatch,newarrival])

    let handleclick=()=>{
        navigate("/allbooks")
    }
    
    let handlesinglepage=(id)=>{
        navigate(`/allbooks`)
    }
    
  return (
    <div id='homepagecontainer'>
        <div id='homepageheader'>
            
            <img src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6" alt="" />
        </div>
        <div id='sliderfirstautomatic' onClick={handleclick}>
            <SimpleSlider/>
        </div>
        <hr />
        <div id='slidersecondmultiple' onClick={handleclick}>
            <Automaticsliding/>
        </div>
        <hr />

        <div id="trending" onClick={handleclick}>
            <Trendingsliding/>
        </div>
        <div id='trendingbottom' onClick={handleclick}>
            <SimpleSlider1/>
        </div>

        <hr />

       <div id='homebestcontainerh1'>
        <h1>Best Sellers</h1>

       </div>
        <div id='homebestcontainer'>
            {
                bestdata.length>0 && bestdata.map((el)=>{
                    return (
                        <div key={el._id} onClick={()=>handlesinglepage(el._id)}  >
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

        <hr />
        <div id='homebestcontainerh1'>
        <h1>New Sellers</h1>

       </div>
       <div id='homebestcontainer'>
            {
                newarrival.length>0 && newarrival.map((el)=>{
                    return (
                        <div key={el._id} onClick={()=>handlesinglepage(el._id)} >
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

        <hr />

        <div id='middleimage'>
            <img width={"100%"} src="https://www.bookswagon.com/images/promotionimages/web/MedicalWeb.jpg?v=1.5" alt="" />
        </div>
        <div id='homebestcontainerh1'>
        <h1>International books</h1>

       </div>

       <div id='homebestcontainer'>
            {
                international.length>0 && international.map((el)=>{
                    return (
                        <div key={el._id}  onClick={()=>handlesinglepage(el._id)} >
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


        <div id='homeauthor' onClick={handleclick}>
            <Homebestcaurosel/>
        </div>




    </div>
  )
}
