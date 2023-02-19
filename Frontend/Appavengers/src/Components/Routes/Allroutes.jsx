import React from 'react'
import {Routes,Route,} from "react-router-dom"
import { Booksall } from '../Allbooks/Booksall'
import { Addtocart } from '../Allcomponents/Addtocart'
import { Bestseller } from '../Allcomponents/Bestseller'
import { Computer } from '../Allcomponents/Computer'
import { Geography } from '../Allcomponents/Geography'
import { Law } from '../Allcomponents/Law'
import { LIfestyle } from '../Allcomponents/LIfestyle'
import { Mathematics } from '../Allcomponents/Mathematics'
import { Medicine } from '../Allcomponents/Medicine'
import { Placeorder } from '../Allcomponents/Placeorder'
import { Singlepage } from '../Allcomponents/Singlepage'
// import Wishlistpage from '../Allcomponents/Wishlistpage'
import { Wishlistpage } from '../Allcomponents/Wishlistpage'

import { Home } from '../Homepage/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
export const Allroutes = () => {
  return (
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/lifestylebooks' element={<LIfestyle/>}/>
      <Route path='/allbooks' element={<Booksall/>}/>
      <Route path='/bestsellersbooks' element={<Bestseller/>}/>
      <Route path="/Lawbooks" element={<Law/>}/>
      <Route path="/Mathematicsbooks"element={<Mathematics/>}/>
      <Route path='/Medicinebooks' element={<Medicine/>}/>
      <Route path='/computerbooks' element={<Computer/>}/>
      <Route path='/geographybooks' element={<Geography/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route exact path="/:component/singleproduct/:id" element={<Singlepage/>}/>
      <Route path='/wishlistpage' element={<Wishlistpage/>}/>
      <Route path='/addtocard' element={<Addtocart/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>
   </Routes>
  )
}
