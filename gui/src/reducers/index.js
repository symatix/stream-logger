import { combineReducers } from 'redux'
import authReducer from './authReducer'
import streamReducer from './streamReducer'
import stationReducer from './stationReducer'
import activeStationReducer from './activeStationReducer'

export default combineReducers({
	auth: authReducer,
	streams: streamReducer,
	stations: stationReducer,
	activeStation: activeStationReducer
});