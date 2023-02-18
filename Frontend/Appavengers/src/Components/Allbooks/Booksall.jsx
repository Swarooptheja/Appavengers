import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Allbooksdata } from '../../Appreducer/actions'
import "./Booksall.css"
export const Booksall = () => {
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let [value,setvalue] =useState('')
    let [state,setstate]=useState(null)
    useEffect(()=>{
        // console.log(state)
        dispatch(Allbooksdata(+value,state))
    },[value,state])

    let allbooksdata=useSelector((state)=>{
        return state.Appreducer.allbooksdata
    })

    let handlesinglepage=(id)=>{
        navigate(`singleproduct/${id}`)
    }
  return (
    <>
    {/* <div id='allbooktop'>
        <div>
            <h3 style={{fontStyle:"italic",color:"red"}}>{allbooksdata.length} Results found</h3>
        </div>
    </div> */}
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

  
    <div id='booksallmaincontainer'>
        <div id='booksallsidebar'>
            <div className='language'>
                <h3>Language</h3>
            </div>
            <div>
                <div className='language'>
                <input type="radio" value="biography" onChange={(e)=>setstate(e.target.value)}  name="main" />
                <label htmlFor=""  >English</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="otherbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Others</label>
                </div>
                <div className='language'  >
                <input type="radio" name="main" value="hindibooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Hindi</label>
                </div>
                <div className='language'>
                <input type="radio"  name="main"value="maratibooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Marathi</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="hindibooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Tamil</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="telugubooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Telugu</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="mayayalambooks" onChange={(e)=>setstate(e.target.value)}/>
                <label htmlFor="">Malayalam</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="frenchbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">French</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="germanybooks"  onChange={(e)=>setstate(e.target.value)}  />
                <label htmlFor="">German</label>
                </div>
            </div>

            <div className='language'>
                <h3>Subject</h3>
            </div>
            <div>
                <div className='language'>
                <input type="radio" value="lifestylebooks" onChange={(e)=>setstate(e.target.value)}  name="main" />
                <label htmlFor=""  >Life Style Books</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="lawbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Law Books</label>
                </div>
                <div className='language'  >
                <input type="radio" name="main" value="mathematicsbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Science Books</label>
                </div>
                <div className='language'>
                <input type="radio"  name="main"value="computerbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Computer Science Books</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="medicinebooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Medicine Books</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="bestsellerbooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Best Seller Books</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="biography" onChange={(e)=>setstate(e.target.value)}/>
                <label htmlFor="">Biography</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="geographybooks" onChange={(e)=>setstate(e.target.value)} />
                <label htmlFor="">Geography</label>
                </div>
                <div className='language'>
                <input type="radio" name="main" value="recentbooks"  onChange={(e)=>setstate(e.target.value)}  />
                <label htmlFor="">Award Books</label>
                </div>
            </div>
           
        </div>
       
        <div id='homebestcontainer'>
            {
                allbooksdata.length>0 && allbooksdata.map((el)=>{
                    return (
                        <div key={el._id} onClick={()=>handlesinglepage(el._id)} >
                            <img src={el.image} alt=""  />
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
    </>
  )
}
