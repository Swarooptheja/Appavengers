import React from 'react'
import { useParams } from 'react-router-dom'
import "./Singlepage.css"
export const Singlepage = () => {
    let {id}=useParams()
    console.log(id)
  return (
    <div id='singlepagecontainer'>Singlepage</div>
  )
}
