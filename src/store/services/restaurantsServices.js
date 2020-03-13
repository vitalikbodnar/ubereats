import axios from 'axios';

export function getRestaurantsService() {
    return axios.get('http://localhost:1337/restaurants')
};