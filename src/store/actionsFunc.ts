import { Actions } from "../types"

export const add= (value:string)=>{
    return {
        type: Actions.ADD_NOTE,
        value:value
    }
}

export const change=(id:number,value:string)=>{
    return {
        type: Actions.CHANGE_NOTE,
        payload:id,
        value:value
    }
}

export const remove = (id:number)=>{
    return {
        type:Actions.REMOVE_NOTE,
        payload:id
    }
}