import { takeEvery, call, put, take, all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm'
/*Actions*/
import {getRestaurantsError, getRestaurantsSuccess} from '../actions/restaurants';
/*Types*/
import { FETCH_RESTAURANTS_START } from '../types'
/*Services*/
import {getRestaurantsService} from '../services/restaurantsServices';

export function* getAllRestaurants() {
    while (true) {
        try {
            yield take(FETCH_RESTAURANTS_START);

            const res = yield call(getRestaurantsService);
            yield put(getRestaurantsSuccess(res.data))
        } catch (e) {
            console.log(e);
            yield put(getRestaurantsError(e))
        }
    }
}

export default function* rootSaga() {
    yield all([
        getAllRestaurants()
    ])
}
