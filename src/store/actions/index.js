
//********************
//**** ACTIONS *******
//********************


import {ADDITEM,DELETE} from './types';

//ACTION CREATOR HELPER FUNCTION
const action =(type,payload) =>{
    return{type,payload}
}
//ACTION CREATORS
export const AddItemAction =(item,date,resources,id)=>
    action(ADDITEM,
    {
    item,
    date,
    resources,
    id
}) 
export const deleteAction = id => action(DELETE,id)

