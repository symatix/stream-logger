import axios from 'axios'
import * as fn from './types'

/*** get stations ***/
export const getStations = () => async dispatch => {
    const res = await axios.get('/api/stations');
	dispatch({ type: fn.GET_STATIONS, payload: res.data });
};

/*** get streams ***/
export const getStreams = () => async dispatch => {
	const res = await axios.get('/api/streams');
	dispatch({ type: fn.GET_STREAMS, payload: res.data });
};