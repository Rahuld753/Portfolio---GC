import * as ActionTypes from './ActionTypes'
import { data } from '../constants'

export const fetchAwards = () => (dispatch) => {
    dispatch(data.awards)
}

export const fetchWines= () => (dispatch) => {
    dispatch(data.wines)
}

export const fetchCocktails = () => (dispatch) => {
    dispatch(data.cocktails)
}

export const addAwards = (awards) => ({
    type: ActionTypes.ADD_AWARDS,
    payload: awards
})

export const addWines  = (wines) => ({
    type: ActionTypes.ADD_WINES,
    payload: wines
})

export const addCocktails = (cocktails) => ({
    type: ActionTypes.ADD_COCKTAILS,
    payload: cocktails
})