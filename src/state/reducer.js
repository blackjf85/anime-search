import { LOADING, ERROR, RESULTS, CHARACTERS } from './actions'

const initState = {
    error: '',
    loading: false,
    results: [],
    characters: ''
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case LOADING: 
            return {
                ...state,
                loading: true
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case RESULTS:
            return {
                ...state,
                loading: false,
                results: action.payload,
                characters: ''
            }
        case CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        default:
            return state;
    }
}