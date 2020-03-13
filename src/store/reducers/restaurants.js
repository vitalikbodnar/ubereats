import {FETCH_RESTAURANTS_START, FETCH_RESTAURANTS_ERROR, FETCH_RESTAURANTS_SUCCESS} from '../types'

const initialState = {
    list: [],
    loading: true,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RESTAURANTS_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };
        case FETCH_RESTAURANTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}