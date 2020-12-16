export const StateReducer = (state, action) => {
	switch (action.type) {
		case 'DARKMODE':
			return {
				...state,
				darkMode: action.payload ? '#24272c' : '#fff',
			};

		default:
			return state;
	}
};
