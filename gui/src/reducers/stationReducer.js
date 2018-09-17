import { GET_STATIONS } from '../actions/types';

export default function (state = [], action) {

	switch (action.type) {
		case GET_STATIONS:
			return action.payload

		default: return state
	}
}