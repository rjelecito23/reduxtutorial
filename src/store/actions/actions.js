export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export  const ageUp = (val) => {
    return dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(ageAsync(val))
        }, 5000)
    }
}

export const ageAsync = (val) => {
    return {
        type: 'AGE_UP', value: val
    }
}


export const ageDown = (val) => {
    return { type: 'AGE_DOWN', value: val }
}