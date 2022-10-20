import { useSelector } from "react-redux"
import List from "./List";
import { Note } from "./types";




export default function Notes(){

    const notes = useSelector<Note[],Note[]>(state=>state);
    
    if(notes.length>0){
        return (
            <>
                <div className="notes-item">
                    <h3>Добавить</h3>
                    <ul>
                        {notes.map(note=>{
                            return <List note={note} key={note.id}/>
                        })}
                    </ul>
                </div>
            </>
        )
    }
    else {
        return (
            <div>
                <h3>Пусто</h3>
            </div>
        )
    }
}