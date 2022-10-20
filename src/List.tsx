import { Note } from "./types"
import React,{useState} from 'react'
import { useDispatch } from "react-redux"
import {change,remove} from './store/actionsFunc'
type Props={
    note:Note
}

export default function List({note}:Props){
    const dispatch = useDispatch()
    const [value,setValue]=useState('');
    const addNote=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
        if(e.key==="Enter"){
            dispatch(change(note.id,e.currentTarget.value))
        }
    }
   
    return (
            <li>
                <input 
                type="text" 
                defaultValue={`${note.value}`}
                onKeyUp={(event)=>addNote(event)}
                className="notes-item"/>
                <div className="list-hovered">
                    <button 
                    className="btn-hover"
                    onClick={()=>dispatch(change(note.id,value))}
                    >Переименовать</button>
                    <button 
                    className="btn-hover"
                    onClick={()=>dispatch(remove(note.id))}>Удалить</button>
                </div>
            </li>
    )
}