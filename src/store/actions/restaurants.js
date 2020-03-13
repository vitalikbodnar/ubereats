import {FETCH_RESTAURANTS_ERROR, FETCH_RESTAURANTS_START, FETCH_RESTAURANTS_SUCCESS} from '../types/restaurants';


export const getRestaurants = () => ({
   type: FETCH_RESTAURANTS_START,
});

export const getRestaurantsSuccess = (data) => ({
    type: FETCH_RESTAURANTS_SUCCESS,
    payload: data,
});

export const getRestaurantsError = (error) => ({
    type: FETCH_RESTAURANTS_ERROR,
    payload: error,
});