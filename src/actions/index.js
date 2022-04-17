import { 
    FETCH_TRENDING, 
    FETCH_SEARCH, 
    TERM, 
    SELECT_GIF, 
    DESELECT_GIF,
    OPEN_MODAL 
} from './types'

import giphy from '../apis/giphy'
import getRandomNum from '../math/random'

const KEY = process.env.REACT_APP_GIPHY_KEY

export const fetchTrending = () => async dispatch => {
    const response = await giphy.get('/trending', {
        params: {
            api_key: KEY,
            limit: 50,
            offset: getRandomNum(1 , 50),
            rating: 'r'
        }
    })
    dispatch({
        type: FETCH_TRENDING,
        payload: response.data.data
    })
}

export const fetchSearch = (term) => async dispatch => {
    const response = await giphy.get('/search', {
        params: {
            api_key: KEY,
            limit: 100,
            rating: 'r',
            offset: getRandomNum(1, 420),
            q:term
        }
    })
    dispatch({
        type: FETCH_SEARCH,
        payload: response.data.data
    })
}

export const termSubmit = (term) => {
    return {
        type: TERM,
        payload: term
    }
}

export const selectGif = (gif) => {
    return {
        type: SELECT_GIF,
        payload: gif
    }
}

export const deselectGif = () => {
    return {
        type: DESELECT_GIF
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}