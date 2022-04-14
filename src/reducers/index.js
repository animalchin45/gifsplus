import { combineReducers } from "redux"
import gifsReducer from './gifsReducer'
import selectedGifReducer from "./selectedGifReducer"
import openModalReducer from './openModalReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    gifs: gifsReducer,
    selectedGif: selectedGifReducer,
    isModalOpen: openModalReducer,
    form: formReducer
})