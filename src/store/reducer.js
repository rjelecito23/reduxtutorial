const initialState = {
    a:1,
    b:1
};

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'UPDATE_A'){
        return {
            ...state,
            a:state.a + state.b
        }
    }
    if(action.type === 'UPDATE_B'){
        return {
            ...state,   
            b:state.a + state.b
        }
    }
    
	return newState;
};

export default reducer;
