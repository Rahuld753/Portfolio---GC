import * as ActionTypes from './ActionTypes'

export const Wines = (state = {
    isLoading: false,
    errmsg: null,
    wines: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_WINES:
            return { ...state, wines: action.payload }
        default: return state
    }
}