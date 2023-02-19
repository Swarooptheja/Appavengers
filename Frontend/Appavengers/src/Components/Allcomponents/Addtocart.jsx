import React, { useState } from 'react'
import "./Addtocart.css";
import { BsFillCartFill } from "react-icons/bs";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    textDecoration,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
export const Addtocart = () => {
    let [update,setupdate]=useState(0)
    let addtocart = JSON.parse(localStorage.getItem("addedtocart")) || []
    let handleremove=(index)=>{
        addtocart.splice(index,1)
        localStorage.setItem("addedtocart",JSON.stringify(addtocart))
        setupdate(()=>update+1)
        alert("Delete the product from Addtocart succssfully")
    }
    let Navi=useNavigate()
    let price=0;
    let initialprice=0
    addtocart.forEach((el)=>{
        let str=el.price;
        let str1=el.initialprice;
        let num=parseFloat(str.replace(/[^\d,]|(Rs\.)/g, '').replace(',',''))
        price+=num;
        let num1=parseFloat(str1.replace(/[^\d,]|(Rs\.)/g, '').replace(',',''))
        initialprice+=num1
    })
    let handleplaceorder=()=>{
        Navi("/placeorder")
    }
    return (
        <div id='addtocartcontainer'>
            <div id='addtocartheader'>
                <div>
                    <BsFillCartFill size={40} color="white" cursor={"pointer"} />
                </div>
                <div>
                    <h1 id="shopping">My Shopping Cart({addtocart.length} items)</h1>

                </div>
            </div>

            <div id='addtocarttable'>

                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>My Shopping Cart</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Sr.#</Th>
                                <Th>Item Discription</Th>
                                <Th isNumeric>Quantity</Th>
                                <Th>Item Price</Th>
                                <Th>Total Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {
                                addtocart.length>0 && addtocart.map((el,index)=>{

                                    return(

                                    <Tr key={el._id}>
                                        <Td>{index+1}</Td>
                                        <Td>
                                            <img src={el.image} alt="image" />
                                        </Td>
                                        <Td>{el.items}</Td>
                                        <Td >
                                            <div style={{fontSize:"20px",color:"red",textDecoration:"line-through"}}>{el.initialprice}</div>
                                            <div style={{fontSize:"20px",marginTop:"1rem"}}>{el.price}</div>
                                        </Td>
                                        <Td>
                                        <div style={{fontSize:"20px", color:"green",marginTop:"1rem"}}>{el.price}</div>
                                        </Td>
                                        <Td>
                                            <button id='removeaddtocart' onClick={()=>handleremove(index)}>Remove</button>
                                        </Td>
                                    </Tr>

                                    )
                                })
                            }
                          
                               
                        </Tbody>
                       
                    </Table>
                </TableContainer>

            </div>

            <div id='addtocartprice'>
                <div>
                    <p style={{fontSize:"18px"}}>Total grass :₹ {price}</p>
                    <p style={{fontSize:"18px"}}>Shipping (in india)  ₹ {39}</p>
                    <b style={{color:"green"}}>Amount payable ₹ {price+39}</b>
                </div>
                <div>
                    <button id='placeorder' onClick={handleplaceorder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}
