import { allbooksget, bestget, computerget, geographyget, internationalget, lawget, lifestylebooksget, mathematicsget, medicineget, newarrival, singleget } from "./actiontype"


let initdata={
    bestdata:[],
    newarrivaldata:[],
    internationaldata:[],
    allbooksdata:[],
    lifestylebooksdata:[],
    lawbooksdata:[],
    mathematicsdata:[],
    medicinedata:[],
    computerdata:[],
    geographydata:[],
    singledata:[]
   

}

let reducer=(state=initdata,action)=>{
    if(action.type==singleget){
        return{
            ...state,
            singledata:action.payload
        }
    }
    if(action.type==geographyget){
        return{
            ...state,
            geographydata:action.payload

        }
    }
    if(action.type==computerget){
        return{
            ...state,
            computerdata:action.payload
        }
    }
    if(action.type==medicineget){
        return{
            ...state,
            medicinedata:action.payload

        }
    }
    if(action.type==mathematicsget){
        return{
            ...state,
            mathematicsdata:action.payload
            
        }
    }
    if(action.type==lawget){
        return{
            ...state,
            lawbooksdata:action.payload
        }
    }
    if(action.type==lifestylebooksget){
        return{
            ...state,
            lifestylebooksdata:action.payload
        }
    }
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