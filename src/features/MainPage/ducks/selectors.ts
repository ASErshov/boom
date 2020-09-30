import { Message } from './../../../constants/types';
import { Player } from './index';
import { AppState } from '../../../store/reducer'

export const getHostKey = (state: AppState): string|null =>  state.main.hostKey
export const getConnected = (state: AppState): Array<Player> =>  state.main.players
export const getMessage = (state: AppState): Message|undefined =>  state.main.message
export const getHostMessage = (state: AppState): Message|undefined =>  state.main.hostMessage