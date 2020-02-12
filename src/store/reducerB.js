const initialState = {
	b: 1,
};

const reducer = (state = initialState, action) => {
	// const newState = { ...state };
	if (action.type === 'UPDATE_B') {
		return {
			...state,
			b: action.a + state.b,
		};
	}

	return state;
};

export default reducer;
