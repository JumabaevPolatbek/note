import { ActionFunc, Actions, Note } from "../types"
let countNum=0
const count=()=>{
    return countNum++
}

export const reducer =(state:any[]|Note[]=[],action:ActionFunc)=>{
    switch(action.type){
        case Actions.ADD_NOTE:
            return [...state,{
                id:count(),
                value: action.value
            }];
        case Actions.CHANGE_NOTE:
            return state.map(item=>{
                if(item.id===action.payload){
                    return item.value=action.value
                }else {
                    return item
                }
            })
        case Actions.REMOVE_NOTE:
            return state.filter(note=>note.id!==action.payload)
        default:
            return state
    }
}