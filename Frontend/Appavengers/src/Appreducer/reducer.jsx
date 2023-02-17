import { allbooksget, bestget, internationalget, newarrival } from "./actiontype"


let initdata={
    bestdata:[],
    newarrivaldata:[],
    internationaldata:[],
    allbooksdata:[]
   

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

    if(action.type==internationalget){
        return{
            ...state,
            internationaldata:action.payload
        }
    }

    if(action.type==allbooksget){
        return{
            ...state,
            allbooksdata:action.payload
        }
    }

    
    return state
}

export {reducer}