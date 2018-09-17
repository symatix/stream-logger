import { GET_STREAMS_FROM_STATION } from '../actions/types';

export default function (state = [], action) {

	switch (action.type) {
		case GET_STREAMS_FROM_STATION:
			return action.payload

		default: return state
	}
}