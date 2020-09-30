import { CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit'

import main, { MainState } from '../features/MainPage/ducks'

export type AppState = {
    main: MainState
}

export default (): Reducer<CombinedState<AppState>> =>
  combineReducers<AppState>({
    main
})