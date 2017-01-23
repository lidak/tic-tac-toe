import { combineReducers } from 'redux';
import boardMap from './boardMap';

const gameReducer = combineReducers({boardMap})

export default gameReducer;