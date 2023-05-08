import * as ActionTypes from './ActionTypes'

export const Awards = (state = {
    isLoading: false,
    errmsg: null,
    awards: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_AWARDS:
            return { ...state, isLoading: false, errmsg: null, awards: action.payload }
        default: return state
    }
}