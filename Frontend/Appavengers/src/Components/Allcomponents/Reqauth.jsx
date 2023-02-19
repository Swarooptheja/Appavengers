import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export const Reqauth = ({children}) => {
    let location=useLocation()
    const local = JSON.parse(localStorage.getItem("passwordtoken")) || "";
    if(!local){
        return <Navigate to="/login" state={{from:location.pathname}} replace/>
    }
 return children
}
