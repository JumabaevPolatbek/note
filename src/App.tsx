import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import './App.css'
import Notes from './Notes';
import {add} from './store/actionsFunc'


function App() {
  const dispatch = useDispatch();
  const [value,setValue]=useState('');
  const addNote=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    setValue(e.currentTarget.value)
    if(e.key==="Enter"){
      dispatch(add(e.currentTarget.value))
      e.currentTarget.value=""
    }
  }

  return (
      <div className="App">
        <h1>Добавить :</h1>
        <div className="todo-input">
            <input 
            type="text" 
            placeholder="Добавить" 
            defaultValue={value}
            onKeyUp={(event)=>addNote(event)}
            />
            <button 
            onClick={()=>{
              dispatch(add(value));
              setValue("");
              console.log(value);
            }}
            >Добавить</button>
        </div>
        <Notes/>
      </div>
  )
}

export default App;
