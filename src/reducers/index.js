import { combineReducers } from 'redux';
import boardMap from './boardMap';
import scoreBoard from './scoreBoard'

const gameReducer = combineReducers({boardMap, scoreBoard})

export default gameReducer;
