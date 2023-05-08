import * as ActionTypes from './ActionTypes'

export const Cocktails = (state={
    isLoading: false,
    errmsg: null,
    cocktails: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_COCKTAILS:
            return { ...state, isLoading: false, errmsg: null, cocktails: action.payload }
        default: return state
    }
}