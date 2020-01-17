//*******************
//**** REDUCERS *****
//*******************
//IMPORT COMBINE FUNCTION FROM REDUX
import {combineReducers} from 'redux';

const AddItemReducer = (data=[],action)=>{
    switch(action.type){
        case 'ADDITEM':
            return [...data,action.payload];       
        case 'DELETE':  
            let newArray = [...data];
        return newArray.filter(
        newArray => newArray.id !== action.payload.id
      )           
        default:
                return data;
    }
}
//EXPORT ALL REDUCERS AS A SINGLE INSTANCE SO IT CAN BE PASSED TO STORE OBJECT
export default combineReducers({
    AddItemReducer
})