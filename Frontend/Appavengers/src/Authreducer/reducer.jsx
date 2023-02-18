

let init={
    isAuth:JSON.parse(localStorage.getItem('passwordtoken')) ||""
 }
 
 let reducer=(state=init,action)=>{
     
     return state
 }
 
 export {reducer}