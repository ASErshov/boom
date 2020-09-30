import { Message } from './../../../constants/types';
import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'

export type Player ={
    id: string
    name: string
}

export type MainState ={
    hostKey: string | null
    players: Array<Player>
    name: string | null
    message?: Message
    hostMessage?: Message
}

const initialState:MainState ={
    hostKey: null,
    players: [],
    name: null,
}
export const mainSlice = createSlice({
    name: 'repo',
    initialState,
    reducers:{
        setHost: (state: Draft<MainState>, action:PayloadAction<string>): void =>{
            state.hostKey = action.payload
        },
        setConnect: (state: Draft<MainState>, action:PayloadAction<Player>): void =>{
            state.players.push(action.payload)
        },
        setName: (state: Draft<MainState>, action:PayloadAction<string>): void =>{
            state.name = action.payload
        },
        setMessage: (state: Draft<MainState>, action:PayloadAction<Message>): void =>{
            state.message = action.payload
        },
        setHostMessage: (state: Draft<MainState>, action:PayloadAction<Message>): void =>{
            state.hostMessage = action.payload
        },
    }
})

export const { actions, reducer } = mainSlice

export default reducer