import { ActionTypes } from "../contants/action-type";

const initialState={
    products:[
        // {id: 1,
        //     title:'gopi',
        //     category:'programmer'}
        
    ]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            
            return {...state,products:payload};
    
        default:
            return state;
    }
};

export const selectProductDetailReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            
            return{...state,...payload}
    
        default:
            return state;
    }
}
 export const sampleProductReducer=(state=initialState,{type,payload})=>{
     switch (type) {
         case ActionTypes.SAMPLE_PRODUCTS:
             
             return {state}
     
         default:
            return state;
     }
 }

