import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Allbooksdata, Singledata } from '../../Appreducer/actions'
import "./Singlepage.css"
export const Singlepage = () => {
    let { id } = useParams()
    let {component }=useParams()

    console.log(id,component)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(Singledata(component,id))
    }, [id,component])

    let singledata=useSelector((state)=>{
        return state.Appreducer.singledata
    })
    console.log(singledata)
    return (
        <div id='singlepagecontainer'>Singlepage</div>
    )
}
