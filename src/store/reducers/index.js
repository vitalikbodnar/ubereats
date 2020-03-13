import {combineReducers} from 'redux';
import RestaurantsReducers from './restaurants';

const allReducers = combineReducers({
    restaurants : RestaurantsReducers,
});

export default allReducers