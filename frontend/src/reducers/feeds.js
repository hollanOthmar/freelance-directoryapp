import { GET_BLOGS, GET_PODCASTS, GET_FEEDS } from '../actions/types.js';

const initialState = {
    feeds: []
}

export default function(state = initialState,action) {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                feeds: action.payload
            };
        
        case GET_PODCASTS:
            return {
                ...state,
                feeds: action.payload
            };
        
        case GET_FEEDS:
            return {
                ...state,
                feeds: action.payload
            };
        
        default:
            return state;
    }
}