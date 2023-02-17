import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Booksall } from '../Allbooks/Booksall'

import { Home } from '../Homepage/Home'
export const Allroutes = () => {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allbooks' element={<Booksall/>}/>
   </Routes>
  )
}
