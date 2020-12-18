export const StateReducer = (state, action) => {
	switch (action.type) {
		case 'DARKMODE':
			return {
				...state,
				darkMode: action.payload ? '#24272c' : '#fff',
			};

		case 'SET_HEIGHT':
			return {
				...state,
				height: action.payload,
			};

		default:
			return state;
	}
};
