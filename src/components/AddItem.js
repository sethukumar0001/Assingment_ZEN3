//******************************************
//****** ADDITEM.JS - Adding Data *****
//******************************************

import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {AddItemAction} from '../store/actions/index';
import styled from 'styled-components';



const InputStyle = styled.input`
  color:blue;
  width:300px;
`;

const ButtonStyle = styled.input`
border:none;
color:white;
background-color:#4f98ca;
padding :10px;
`;



let id=1;
const AddItem = props => {

const dispatch = useDispatch();

  const [item, setItem] = useState("");
  const [date,setDate] = useState('');
  const [resources,setResources] = useState("");


  const handleAddItem = (evt) => {

      evt.preventDefault();
      dispatch(AddItemAction(item,date,resources,id));
    
      setItem('');
      setDate('');
      setResources('');
      
   id++   
  }
  return(
    <div>
    <center>
    <div className="loginMain">
      <div className="loginLogo">
        <div className="loginContent">
    
        </div>
      </div>
      <div className="registerContent">
     
      </div>
      <br></br>
      <div className="col-6 inputFields">
          <center>
        <form onSubmit={handleAddItem}>
           <div className="">
              <label>
              <InputStyle className="form-control" type="text"
              value={item}
              onChange={e => setItem(e.target.value)}
              placeholder="Work Item" required/>
              </label>
            </div>
            <br></br>
            <div className="">
              <label>
              <InputStyle className="form-control" type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="Due Date" required/>
              </label>
            </div>
            <br></br>
            <div className="">
              <label>
              <InputStyle className="form-control" type="number"
              value={resources}
              onChange={e => setResources(e.target.value)}
              placeholder="resources" required/>
              </label>
            </div>
  
            <br></br>
            <div className="inputFields">
            <center>  <ButtonStyle className="btn-sm login" type="submit" value="Add New Item" /></center>
            </div>
        </form>
        </center>
      </div>
    </div>
    </center>
    
    </div>
  );
}
export default AddItem;