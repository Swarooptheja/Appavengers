import { bestget, newarrival } from "./actiontype"


let initdata={
    bestdata:[],
    newarrivaldata:[]
   

}

let reducer=(state=initdata,action)=>{
    if(action.type==bestget){
        
        return{
            ...state,
            bestdata:action.payload

        }
    }
    if(action.type==newarrival){
        return{
            ...state,
            newarrivaldata:action.payload
        }
    }
    return state
}

export {reducer}