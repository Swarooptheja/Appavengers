import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Homepage/Home'
export const Allroutes = () => {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
   </Routes>
  )
}
