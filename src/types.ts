export type Note={
    id:number,
    value:string
}

export enum Actions{
    ADD_NOTE="ADD_NOTE",
    CHANGE_NOTE="CHANGE_NOTE",
    REMOVE_NOTE="REMOVE_NOTE"
}

type Add={
    type: Actions.ADD_NOTE,
    value:string
}
type Change={
    type:Actions.CHANGE_NOTE,
    payload:number,
    value:string
}
type Remove={
    type:Actions.REMOVE_NOTE,
    payload:number
}

export type ActionFunc=Add|Change|Remove