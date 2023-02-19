import React from 'react'
import "./Otp.css"
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Otp = () => {
    let navigate=useNavigate()
    let otpsubmit=()=>{
        navigate("/success")
    }


    let init={
        one:'',
        two:'',
        three:'',
        four:''
    }

    let [states,setstates]=useState(init)

    let handlechange=(e)=>{
        // console.log(e.target.value)
        let {value,name}=e.target
        setstates({
            ...states,
            [name]:value
        })
    }
    // console.log(states)

    let errorone=states.one===""
    let errortwo=states.two===""
    let errorthree=states.three===""
    let errorfour=states.four===""

    console.log(errorone,errorthree,errortwo,errorfour)
  return (
    <>
    <div id='otpmaincontainerfirst'>

    <div id='otpproduct'>
        <h2>OTP Verification</h2>
        <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAaVBMVEUAAAD///84ODghISHy8vL4+Pj8/Pzi4uLl5eW+vr7d3d2EhIQODg6ioqLq6urBwcHW1tZ4eHjIyMhwcHCKioqRkZFiYmKzs7PPz89oaGhUVFQZGRkmJiZcXFxOTk4rKys/Pz+amppGRkb75LS4AAAErUlEQVRoge1Z2ZKqMBAlGkBAEFlERQH9/4+83WmCQRScgDNVt3IeRlHGk94XLMvAwMDAwMDAwMDA4K+wvZ/2gGv9i5zrNIw5k3AiLz//BmsQ2+wZDi8O36WtCj5gbbFpvkd795x3tIwVX6PdhiO07Ia3FKcv8J6jEVouTHz4hty3EVrnRvcUeITVsrzH97THoLsrRYffL0i7dvtUt/O6lhdb9cYykeZeBKueeZO7OIu8TOVdJ3GEED4KF+Ltyeu0muyIpXwr5osEli0nc6zyyuzYEUvxdvBljm8C+DB4/Us/g6fqufOcAfHZZ200Zcr5ZiBQeR9h2hE/hEPzJu0bPpu3VHntRxHsiJW4PaHH4xvwbW8usWpgNS9JYhKt5Bm+3G1i3EIpmVmu9iovU1KxJCYHLlol3yGdo4ed5ip724tgNR22xDZdoXld/BbSNUPH8ugA2sh6Am/KAbH08itvK3IOJ4BMcoFjrvV5y80E8SNHlZBlfKSKSf3hLJH7FmaRIsP6YWDC1iU712SSLUmuiaeaxJsesXvt3VyCttG3Q1KEN8Oxm+e2TvHqS5w+334FX7uArLYw72FGLGdPvGw3fn9IXCFJzll00SQeVH/7Pnp/CcFXizTiE7+mrsthKzshckbmjZkD7pVqF+bri64yG/2PCxyV+DPhfr4e8X7IO9VRXfcBxFC931dwke4H/vcZwlfE8zLhZ0heErP4y2OSZfmviSGDFcF1NQ1t4rfz2afYaebM2cRUo/+CmF2nWb5DrNfm/hlxPP3DU9Ab4HbzifVC/jb1s36vXju+70N5iuDFYTb8taeq2TukE7xpP8e0bQfEbkUXGxbpBXI13CupsLf9dA5dx8phriU+BeM2Do0VGhjbejB0WXWAza2utXSZXYqhS3dcnfAuZ6MEXGyJHg0b/AM1DJ5u/nhTkF8jKumgN2LEQuz0+vAfof44hWxwjATdRpaw7YZOrb978qYpBRL03jOj/tejBgnST6VNfP2IlosOp2EURMCPUbQis+vig6yZUGOF8ooG3iYLJ8o+SAOnSd62DGBAi953R1W40m4xW0yJ7NL5MJ6FK91A8zg/+PMEFicfBVSBOo070TP6CKdk3awlUYwbGIJIxFwsPBg3ROjRldNbyuhhLJbtxrLw1ae6K9eJmEnnL/fOI8QhaoQXlBkvx5YXPXpOKEnkb3kxXgOp0sCRhoYMwnWTZQ+dme2nOqk0NiluSyJR93GpqdcADCAzZ24V6gDZqbPJIybVLAafxYYcYnZFInzgbFnbukpDV5wmEX5dQ2g5Cz4SEdo+9ec4SBg556QCOyEHO0EM2LpV+CVuImbVLsxZy+UMj3Oy6RrPt/SDr4OzEqusDtDjhNyNvfwk/TpDS2uOS+NQA2uwI83Qr+1FVvPPuKjR1C8BVSG+8/R3eWNQ+xElM1WZRyfyFn7WJdHLneBNcbLbHX2ZynnxJdp+aS76vfzGSxfJkS+h9rocmsoo4oDIjYugmrGZnoZaHnFcWNe4YNHdVn6Om8I7r5v6GdaqoptfJFZCSXPo1cP9wTv7SdbP0BTiuYhbNL/La2HpXa3q76REAwMDAwMDAwOD/w3/AJDqMcP4NI1qAAAAAElFTkSuQmCC" alt="" />
        </div>
        <div>
        <HStack>
  <PinInput>
    <PinInputField name='one'  value={states.one} onChange={handlechange} />
    <PinInputField name='two' value={states.two} onChange={handlechange} />
    <PinInputField name='three' value={states.three} onChange={handlechange} />
    <PinInputField name='four'  value={states.four} onChange={handlechange}/>
  </PinInput>
</HStack>
        </div>
        <div>
            <h5>Successfully Sent OTP to your Mobile Number</h5>
        </div>
        <div>
            <button id='otpbtn' onClick={otpsubmit} disabled={errorfour==true || errorone==true || errorthree==true||errortwo==true} >Submit</button>
        </div>
    </div>
    </div>
    </>
  )
}