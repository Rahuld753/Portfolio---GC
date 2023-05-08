import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Awards } from './awards'
import { Wines } from './wines'
import { Cocktails } from './cocktails'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            awards: Awards,
            wines: Wines,
            cocktails: Cocktails
        }),
        applyMiddleware(thunk, logger)
    )
    return store
}